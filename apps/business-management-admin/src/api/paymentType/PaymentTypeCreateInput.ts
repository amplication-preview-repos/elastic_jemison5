import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type PaymentTypeCreateInput = {
  name?: string | null;
  store?: StoreWhereUniqueInput | null;
};
