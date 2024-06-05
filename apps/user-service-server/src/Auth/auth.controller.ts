import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthService } from "./auth.service";
import { UserCreateInput } from "../user/base/UserCreateInput";

@swagger.ApiTags("auths")
@common.Controller("auths")
export class AuthController {
  constructor(protected readonly service: AuthService) {}

  @common.Post("/user/verify-otp")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async OtpVerification(
    @common.Body()
    body: string
  ): Promise<boolean> {
        return this.service.OtpVerification(body);
      }

  @common.Get("/:id/register-user")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RegisterUser(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.RegisterUser(body);
      }

  @common.Post("/user/register")
  @swagger.ApiOkResponse({
    type: UserCreateInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UserRegistration(
    @common.Body()
    body: string
  ): Promise<UserCreateInput> {
        return this.service.UserRegistration(body);
      }

  @common.Get("/:id/verify-otp")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async VerifyOtp(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.VerifyOtp(body);
      }
}
