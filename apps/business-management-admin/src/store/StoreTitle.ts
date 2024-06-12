import { Store as TStore } from "../api/store/Store";

export const STORE_TITLE_FIELD = "businessName";

export const StoreTitle = (record: TStore): string => {
  return record.businessName?.toString() || String(record.id);
};
