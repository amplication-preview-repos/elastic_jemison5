import { OrderUpdateManyWithoutEmployeesInput } from "./OrderUpdateManyWithoutEmployeesInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type EmployeeUpdateInput = {
  email?: string | null;
  fullname?: string | null;
  orders?: OrderUpdateManyWithoutEmployeesInput;
  passcode?: string | null;
  phone?: string | null;
  role?: RoleWhereUniqueInput | null;
  store?: StoreWhereUniqueInput | null;
};
