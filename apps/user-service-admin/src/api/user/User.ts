import { Location } from "../location/Location";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  locations?: Array<Location>;
  otp: number | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
