import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  fullname?: SortOrder;
  id?: SortOrder;
  passcode?: SortOrder;
  phone?: SortOrder;
  roleId?: SortOrder;
  storeId?: SortOrder;
  updatedAt?: SortOrder;
};
