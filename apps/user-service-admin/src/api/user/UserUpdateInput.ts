import { LocationUpdateManyWithoutUsersInput } from "./LocationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  locations?: LocationUpdateManyWithoutUsersInput;
  otp?: number | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
