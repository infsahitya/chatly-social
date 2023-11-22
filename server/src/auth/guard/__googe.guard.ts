import { AuthGuard } from "@nestjs/passport";

export class __googleGuard extends AuthGuard("google") {
  constructor() {
    super();
  }
}
