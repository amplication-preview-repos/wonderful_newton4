import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LocationWhereInput = {
  id?: StringFilter;
  lat?: FloatNullableFilter;
  long?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
