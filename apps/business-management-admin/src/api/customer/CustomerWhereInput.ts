import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type CustomerWhereInput = {
  address?: StringNullableFilter;
  email?: StringNullableFilter;
  fullname?: StringNullableFilter;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  phone?: StringNullableFilter;
  store?: StoreWhereUniqueInput;
};
