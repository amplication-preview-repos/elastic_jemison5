import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type ProductWhereInput = {
  barcode?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
  id?: StringFilter;
  images?: JsonFilter;
  isPublished?: BooleanNullableFilter;
  lowQuantityStock?: IntNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
  store?: StoreWhereUniqueInput;
  trackStock?: BooleanNullableFilter;
  unit?: StringNullableFilter;
  variants?: JsonFilter;
};
