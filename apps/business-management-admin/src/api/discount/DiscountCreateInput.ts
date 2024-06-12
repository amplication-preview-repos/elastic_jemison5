import { OrderCreateNestedManyWithoutDiscountsInput } from "./OrderCreateNestedManyWithoutDiscountsInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type DiscountCreateInput = {
  maxDiscountAmount?: number | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutDiscountsInput;
  store?: StoreWhereUniqueInput | null;
  typeField?: "Option1" | null;
  validFrom?: Date | null;
  validTo?: Date | null;
  value?: number | null;
};
