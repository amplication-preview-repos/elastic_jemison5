import { CustomerUpdateManyWithoutStoresInput } from "./CustomerUpdateManyWithoutStoresInput";
import { DiscountUpdateManyWithoutStoresInput } from "./DiscountUpdateManyWithoutStoresInput";
import { EmployeeUpdateManyWithoutStoresInput } from "./EmployeeUpdateManyWithoutStoresInput";
import { OrderUpdateManyWithoutStoresInput } from "./OrderUpdateManyWithoutStoresInput";
import { PaymentTypeUpdateManyWithoutStoresInput } from "./PaymentTypeUpdateManyWithoutStoresInput";
import { ProductUpdateManyWithoutStoresInput } from "./ProductUpdateManyWithoutStoresInput";

export type StoreUpdateInput = {
  businessDescription?: string | null;
  businessName?: string | null;
  businessPhoneNumber?: string | null;
  businessSector?: string | null;
  country?: string | null;
  currency?: string | null;
  customers?: CustomerUpdateManyWithoutStoresInput;
  discounts?: DiscountUpdateManyWithoutStoresInput;
  employees?: EmployeeUpdateManyWithoutStoresInput;
  logoUrl?: string | null;
  orders?: OrderUpdateManyWithoutStoresInput;
  paymentTypes?: PaymentTypeUpdateManyWithoutStoresInput;
  primaryAddress?: string | null;
  products?: ProductUpdateManyWithoutStoresInput;
  state?: string | null;
};
