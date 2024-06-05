import { JsonValue } from "type-fest";

export type Profile = {
  createdAt: Date;
  email: string | null;
  id: string;
  lat: number | null;
  long: number | null;
  name: string | null;
  phone: string | null;
  photo: JsonValue;
  updatedAt: Date;
  username: string | null;
};
