import {
  Get,
  Req,
  Res,
  UseGuards,
  Controller,
  UnauthorizedException,
  HttpCode,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request, Response } from "express";
import { CheckGoogleTokenExpiryGuard, GoogleGuard } from "./guard";
import { GoogleDTO } from "./dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get("google")
  @UseGuards(GoogleGuard)
  googleLogin() {}

  @HttpCode(201)
  @Get("google/callback")
  @UseGuards(GoogleGuard)
  googleLoginCallback(@Req() req: GoogleDTO, @Res() res: Response): void {
    const googleAccessToken = req.user.accessToken;
    const googleRefreshToken = req.user.refreshToken;

    res.cookie("google_access_token", googleAccessToken, { httpOnly: true });
    res.cookie("google_refresh_token", googleRefreshToken, { httpOnly: true });

    res.redirect("http://localhost:3000/auth/profile");
  }

  @HttpCode(202)
  @Get("profile")
  @UseGuards(CheckGoogleTokenExpiryGuard)
  async getProfile(@Req() req: Request, @Res() res: Response): Promise<any> {
    const googleAccessToken = req.cookies["google_access_token"];
    if (!googleAccessToken)
      throw new UnauthorizedException("No access token found");

    res.send(await this.authService.getProfile(googleAccessToken));
  }

  @HttpCode(202)
  @Get("logout")
  logout(@Req() req: Request, @Res() res: Response): void {
    const googleRefreshToken = req.cookies["google_refresh_token"];
    res.clearCookie("google_access_token");
    res.clearCookie("google_refresh_token");
    this.authService.revokeGoogleToken(googleRefreshToken);
    res.redirect("http://localhost:3000");
  }
}
