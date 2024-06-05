import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LocationUpdateInput = {
  lat?: number | null;
  long?: number | null;
  user?: UserWhereUniqueInput | null;
};
