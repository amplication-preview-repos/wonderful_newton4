import * as graphql from "@nestjs/graphql";
import { UserCreateInput } from "../user/base/UserCreateInput";
import { AuthService } from "./auth.service";

export class AuthResolver {
  constructor(protected readonly service: AuthService) {}

  @graphql.Mutation(() => Boolean)
  async OtpVerification(
    @graphql.Args()
    args: UserCreateInput
  ): Promise<boolean> {
    return this.service.OtpVerification(args);
  }

  @graphql.Query(() => String)
  async RegisterUser(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RegisterUser(args);
  }

  @graphql.Mutation(() => UserCreateInput)
  async UserRegistration(
    @graphql.Args()
    args: UserCreateInput
  ): Promise<UserCreateInput> {
    return this.service.UserRegistration(args);
  }

  @graphql.Query(() => String)
  async VerifyOtp(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.VerifyOtp(args);
  }
}
