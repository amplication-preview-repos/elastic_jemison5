import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type PaymentTypeUpdateInput = {
  name?: string | null;
  store?: StoreWhereUniqueInput | null;
};
