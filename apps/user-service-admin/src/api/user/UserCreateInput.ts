import { LocationCreateNestedManyWithoutUsersInput } from "./LocationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  locations?: LocationCreateNestedManyWithoutUsersInput;
  otp?: number | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
