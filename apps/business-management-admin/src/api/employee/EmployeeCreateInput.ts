import { OrderCreateNestedManyWithoutEmployeesInput } from "./OrderCreateNestedManyWithoutEmployeesInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type EmployeeCreateInput = {
  email?: string | null;
  fullname?: string | null;
  orders?: OrderCreateNestedManyWithoutEmployeesInput;
  passcode?: string | null;
  phone?: string | null;
  role?: RoleWhereUniqueInput | null;
  store?: StoreWhereUniqueInput | null;
};
