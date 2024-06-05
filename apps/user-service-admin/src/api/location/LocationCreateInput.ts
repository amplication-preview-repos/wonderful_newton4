import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LocationCreateInput = {
  lat?: number | null;
  long?: number | null;
  user?: UserWhereUniqueInput | null;
};
