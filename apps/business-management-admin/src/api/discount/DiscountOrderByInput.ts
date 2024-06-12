import { SortOrder } from "../../util/SortOrder";

export type DiscountOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  maxDiscountAmount?: SortOrder;
  name?: SortOrder;
  storeId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  validFrom?: SortOrder;
  validTo?: SortOrder;
  value?: SortOrder;
};
