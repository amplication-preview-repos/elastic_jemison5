import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type CustomerUpdateInput = {
  address?: string | null;
  email?: string | null;
  fullname?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  phone?: string | null;
  store?: StoreWhereUniqueInput | null;
};
