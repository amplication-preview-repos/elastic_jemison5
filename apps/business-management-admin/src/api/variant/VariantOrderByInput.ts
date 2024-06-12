import { SortOrder } from "../../util/SortOrder";

export type VariantOrderByInput = {
  barcode?: SortOrder;
  cost?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lowQuantityStock?: SortOrder;
  options?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
