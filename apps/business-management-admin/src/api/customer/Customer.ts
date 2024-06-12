import { Order } from "../order/Order";
import { Store } from "../store/Store";

export type Customer = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  fullname: string | null;
  id: string;
  orders?: Array<Order>;
  phone: string | null;
  store?: Store | null;
  updatedAt: Date;
};
