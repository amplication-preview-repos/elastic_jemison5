import { EmployeeCreateNestedManyWithoutRolesInput } from "./EmployeeCreateNestedManyWithoutRolesInput";
import { InputJsonValue } from "../../types";

export type RoleCreateInput = {
  employees?: EmployeeCreateNestedManyWithoutRolesInput;
  name?: string | null;
  permissions?: InputJsonValue;
};
