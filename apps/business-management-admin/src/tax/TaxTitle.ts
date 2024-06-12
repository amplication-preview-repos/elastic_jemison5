import { Tax as TTax } from "../api/tax/Tax";

export const TAX_TITLE_FIELD = "name";

export const TaxTitle = (record: TTax): string => {
  return record.name?.toString() || String(record.id);
};
