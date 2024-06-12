import { SortOrder } from "../../util/SortOrder";

export type StoreOrderByInput = {
  businessDescription?: SortOrder;
  businessName?: SortOrder;
  businessPhoneNumber?: SortOrder;
  businessSector?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  logoUrl?: SortOrder;
  primaryAddress?: SortOrder;
  state?: SortOrder;
  updatedAt?: SortOrder;
};
