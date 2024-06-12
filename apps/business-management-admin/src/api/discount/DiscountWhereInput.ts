import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type DiscountWhereInput = {
  id?: StringFilter;
  maxDiscountAmount?: FloatNullableFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  store?: StoreWhereUniqueInput;
  typeField?: "Option1";
  validFrom?: DateTimeNullableFilter;
  validTo?: DateTimeNullableFilter;
  value?: FloatNullableFilter;
};
