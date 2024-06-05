import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ProfileWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  lat?: FloatNullableFilter;
  long?: FloatNullableFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  photo?: JsonFilter;
  username?: StringNullableFilter;
};
