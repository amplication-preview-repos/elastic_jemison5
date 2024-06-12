import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type VariantWhereInput = {
  barcode?: StringNullableFilter;
  cost?: FloatNullableFilter;
  id?: StringFilter;
  lowQuantityStock?: IntNullableFilter;
  options?: JsonFilter;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
};
