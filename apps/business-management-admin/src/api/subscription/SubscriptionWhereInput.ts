import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type SubscriptionWhereInput = {
  currency?: StringNullableFilter;
  id?: StringFilter;
  maxEmployees?: IntNullableFilter;
  maxSales?: IntNullableFilter;
  maxStores?: IntNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
