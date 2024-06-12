import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: DiscountWhereUniqueInput | null;
  employee?: EmployeeWhereUniqueInput | null;
  note?: string | null;
  paymentStatus?: "Option1" | null;
  paymentType?: string | null;
  products?: InputJsonValue;
  salesChannel?: string | null;
  store?: StoreWhereUniqueInput | null;
  tax?: number | null;
};
