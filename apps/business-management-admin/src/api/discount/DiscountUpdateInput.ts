import { OrderUpdateManyWithoutDiscountsInput } from "./OrderUpdateManyWithoutDiscountsInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type DiscountUpdateInput = {
  maxDiscountAmount?: number | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutDiscountsInput;
  store?: StoreWhereUniqueInput | null;
  typeField?: "Option1" | null;
  validFrom?: Date | null;
  validTo?: Date | null;
  value?: number | null;
};
