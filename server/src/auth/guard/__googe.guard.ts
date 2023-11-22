import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "../auth.service";

@Injectable({})
export class __googleGuard extends AuthGuard("google") {
  constructor() {
    super();
  }
}

@Injectable({})
export class __checkGoogleTokenExpiryGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const googleAccessToken = request.cookies["google_access_token"];

    const isTokenExpired =
      await this.authService.isTokenExpired(googleAccessToken);

    if (isTokenExpired) {
      const refreshToken = request.cookies["google_refresh_token"];

      if (!refreshToken)
        throw new ForbiddenException("No google refresh token found");

      try {
        const newGoogleAccessToken =
          await this.authService.getNewGoogleAccessToken(refreshToken);

        request.res.cookie("google_access_token", newGoogleAccessToken, {
          httpOnly: true,
        });

        request.cookies["google_access_token"] = newGoogleAccessToken;
      } catch (error) {
        throw new ForbiddenException(`Failed to refresh token ${error}`);
      }
    }

    return true;
  }
}
