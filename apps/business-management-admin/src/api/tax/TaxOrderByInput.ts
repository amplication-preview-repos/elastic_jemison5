import { SortOrder } from "../../util/SortOrder";

export type TaxOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isCompoundTax?: SortOrder;
  name?: SortOrder;
  taxPercentage?: SortOrder;
  updatedAt?: SortOrder;
};
