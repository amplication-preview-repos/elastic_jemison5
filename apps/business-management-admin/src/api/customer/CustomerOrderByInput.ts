import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  fullname?: SortOrder;
  id?: SortOrder;
  phone?: SortOrder;
  storeId?: SortOrder;
  updatedAt?: SortOrder;
};
