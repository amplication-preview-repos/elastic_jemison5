import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  barcode?: SortOrder;
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  isPublished?: SortOrder;
  lowQuantityStock?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  storeId?: SortOrder;
  trackStock?: SortOrder;
  unit?: SortOrder;
  updatedAt?: SortOrder;
  variants?: SortOrder;
};
