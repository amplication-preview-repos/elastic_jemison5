import { Employee } from "../employee/Employee";
import { JsonValue } from "type-fest";

export type Role = {
  createdAt: Date;
  employees?: Array<Employee>;
  id: string;
  name: string | null;
  permissions: JsonValue;
  updatedAt: Date;
};
