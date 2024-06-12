import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Store } from "../store/Store";

export type Product = {
  barcode: string | null;
  category?: Category | null;
  createdAt: Date;
  id: string;
  images: JsonValue;
  isPublished: boolean | null;
  lowQuantityStock: number | null;
  name: string | null;
  price: number | null;
  quantity: number | null;
  store?: Store | null;
  trackStock: boolean | null;
  unit: string | null;
  updatedAt: Date;
  variants: JsonValue;
};
