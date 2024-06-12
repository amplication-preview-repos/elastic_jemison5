import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  discount?: DiscountWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  note?: StringNullableFilter;
  paymentStatus?: "Option1";
  paymentType?: StringNullableFilter;
  products?: JsonFilter;
  salesChannel?: StringNullableFilter;
  store?: StoreWhereUniqueInput;
  tax?: FloatNullableFilter;
};
