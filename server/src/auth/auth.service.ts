import { ForbiddenException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import HTTP from "src/http";

@Injectable({})
export class AuthService {
  constructor(private readonly config: ConfigService) {}

  async getNewGoogleAccessToken(refreshToken: string): Promise<string> {
    try {
      const response = await HTTP.POST<any>(
        "https://accounts.google.com/o/oauth2/token",
        {
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            client_id: this.config.get("GOOGLE_CLIENT_ID"),
            client_secret: this.config.get("GOOGLE_CLIENT_SECRET"),
            refresh_token: refreshToken,
            grant_type: "refresh_token",
          }),
        },
      );

      return response.access_token;
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }

  async getProfile(token: string): Promise<any> {
    try {
      return await HTTP.GET(
        `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`,
      );
    } catch (error) {
      console.error("Failed to revoke the token", error);
    }
  }

  async isTokenExpired(token: string): Promise<boolean> {
    try {
      const response = await HTTP.GET<any>(
        `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`,
      );

      const expiresIn = response.data.expires_in;

      if (!expiresIn || expiresIn <= 0) return true;
    } catch (error) {
      return true;
    }
  }

  async revokeGoogleToken(token: string) {
    try {
      await HTTP.GET(
        `https://accounts.google.com/o/oauth2/revoke?token=${token}`,
      );
    } catch (error) {
      console.error("Failed to revoke token: ", error);
    }
  }
}
