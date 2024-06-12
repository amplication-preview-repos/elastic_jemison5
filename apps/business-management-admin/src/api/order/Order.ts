import { Customer } from "../customer/Customer";
import { Discount } from "../discount/Discount";
import { Employee } from "../employee/Employee";
import { JsonValue } from "type-fest";
import { Store } from "../store/Store";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  discount?: Discount | null;
  employee?: Employee | null;
  id: string;
  note: string | null;
  paymentStatus?: "Option1" | null;
  paymentType: string | null;
  products: JsonValue;
  salesChannel: string | null;
  store?: Store | null;
  tax: number | null;
  updatedAt: Date;
};
