import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type TaxWhereInput = {
  id?: StringFilter;
  isCompoundTax?: BooleanNullableFilter;
  name?: StringNullableFilter;
  taxPercentage?: FloatNullableFilter;
};
