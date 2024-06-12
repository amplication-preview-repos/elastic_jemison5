import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type ProductUpdateInput = {
  barcode?: string | null;
  category?: CategoryWhereUniqueInput | null;
  images?: InputJsonValue;
  isPublished?: boolean | null;
  lowQuantityStock?: number | null;
  name?: string | null;
  price?: number | null;
  quantity?: number | null;
  store?: StoreWhereUniqueInput | null;
  trackStock?: boolean | null;
  unit?: string | null;
  variants?: InputJsonValue;
};
