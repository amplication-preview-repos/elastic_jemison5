import { EmployeeUpdateManyWithoutRolesInput } from "./EmployeeUpdateManyWithoutRolesInput";
import { InputJsonValue } from "../../types";

export type RoleUpdateInput = {
  employees?: EmployeeUpdateManyWithoutRolesInput;
  name?: string | null;
  permissions?: InputJsonValue;
};
