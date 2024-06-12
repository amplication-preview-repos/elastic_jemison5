import { Variant as TVariant } from "../api/variant/Variant";

export const VARIANT_TITLE_FIELD = "barcode";

export const VariantTitle = (record: TVariant): string => {
  return record.barcode?.toString() || String(record.id);
};
