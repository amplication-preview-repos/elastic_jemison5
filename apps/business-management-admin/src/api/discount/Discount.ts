import { Order } from "../order/Order";
import { Store } from "../store/Store";

export type Discount = {
  createdAt: Date;
  id: string;
  maxDiscountAmount: number | null;
  name: string | null;
  orders?: Array<Order>;
  store?: Store | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  validFrom: Date | null;
  validTo: Date | null;
  value: number | null;
};
