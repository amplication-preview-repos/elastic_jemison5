import { Order } from "../order/Order";
import { Role } from "../role/Role";
import { Store } from "../store/Store";

export type Employee = {
  createdAt: Date;
  email: string | null;
  fullname: string | null;
  id: string;
  orders?: Array<Order>;
  passcode: string | null;
  phone: string | null;
  role?: Role | null;
  store?: Store | null;
  updatedAt: Date;
};
