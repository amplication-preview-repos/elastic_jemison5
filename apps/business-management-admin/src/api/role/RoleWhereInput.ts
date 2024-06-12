import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type RoleWhereInput = {
  employees?: EmployeeListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  permissions?: JsonFilter;
};
