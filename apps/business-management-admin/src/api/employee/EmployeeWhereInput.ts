import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type EmployeeWhereInput = {
  email?: StringNullableFilter;
  fullname?: StringNullableFilter;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  passcode?: StringNullableFilter;
  phone?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
  store?: StoreWhereUniqueInput;
};
