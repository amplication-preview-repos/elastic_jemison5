import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type PaymentTypeWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  store?: StoreWhereUniqueInput;
};
