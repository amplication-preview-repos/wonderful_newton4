import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lat?: SortOrder;
  long?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
