import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  discountId?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  paymentStatus?: SortOrder;
  paymentType?: SortOrder;
  products?: SortOrder;
  salesChannel?: SortOrder;
  storeId?: SortOrder;
  tax?: SortOrder;
  updatedAt?: SortOrder;
};
