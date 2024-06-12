import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type CustomerCreateInput = {
  address?: string | null;
  email?: string | null;
  fullname?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  phone?: string | null;
  store?: StoreWhereUniqueInput | null;
};
