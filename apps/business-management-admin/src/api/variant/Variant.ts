import { JsonValue } from "type-fest";

export type Variant = {
  barcode: string | null;
  cost: number | null;
  createdAt: Date;
  id: string;
  lowQuantityStock: number | null;
  options: JsonValue;
  price: number | null;
  quantity: number | null;
  updatedAt: Date;
};
