import { InputJsonValue } from "../../types";

export type VariantUpdateInput = {
  barcode?: string | null;
  cost?: number | null;
  lowQuantityStock?: number | null;
  options?: InputJsonValue;
  price?: number | null;
  quantity?: number | null;
};
