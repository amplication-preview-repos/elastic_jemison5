import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "fullname";

export const CustomerTitle = (record: TCustomer): string => {
  return record.fullname?.toString() || String(record.id);
};
