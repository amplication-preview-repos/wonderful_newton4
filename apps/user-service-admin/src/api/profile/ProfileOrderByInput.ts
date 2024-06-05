import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  lat?: SortOrder;
  long?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  photo?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
