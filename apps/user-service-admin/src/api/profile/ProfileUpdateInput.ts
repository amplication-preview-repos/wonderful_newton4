import { InputJsonValue } from "../../types";

export type ProfileUpdateInput = {
  email?: string | null;
  lat?: number | null;
  long?: number | null;
  name?: string | null;
  phone?: string | null;
  photo?: InputJsonValue;
  username?: string | null;
};
