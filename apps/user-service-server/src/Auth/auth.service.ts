import { Injectable } from "@nestjs/common";
import { UserCreateInput } from "../user/base/UserCreateInput";

@Injectable()
export class AuthService {
  constructor() {}
  async OtpVerification(args: UserCreateInput): Promise<boolean> {
    throw new Error("Not implemented");
  }
  async RegisterUser(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UserRegistration(args: UserCreateInput): Promise<UserCreateInput> {
    throw new Error("Not implemented");
  }
  async VerifyOtp(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
