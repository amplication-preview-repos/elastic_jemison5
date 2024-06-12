import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  maxEmployees?: SortOrder;
  maxSales?: SortOrder;
  maxStores?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
