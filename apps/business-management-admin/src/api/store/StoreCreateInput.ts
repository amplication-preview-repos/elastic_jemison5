import { CustomerCreateNestedManyWithoutStoresInput } from "./CustomerCreateNestedManyWithoutStoresInput";
import { DiscountCreateNestedManyWithoutStoresInput } from "./DiscountCreateNestedManyWithoutStoresInput";
import { EmployeeCreateNestedManyWithoutStoresInput } from "./EmployeeCreateNestedManyWithoutStoresInput";
import { OrderCreateNestedManyWithoutStoresInput } from "./OrderCreateNestedManyWithoutStoresInput";
import { PaymentTypeCreateNestedManyWithoutStoresInput } from "./PaymentTypeCreateNestedManyWithoutStoresInput";
import { ProductCreateNestedManyWithoutStoresInput } from "./ProductCreateNestedManyWithoutStoresInput";

export type StoreCreateInput = {
  businessDescription?: string | null;
  businessName?: string | null;
  businessPhoneNumber?: string | null;
  businessSector?: string | null;
  country?: string | null;
  currency?: string | null;
  customers?: CustomerCreateNestedManyWithoutStoresInput;
  discounts?: DiscountCreateNestedManyWithoutStoresInput;
  employees?: EmployeeCreateNestedManyWithoutStoresInput;
  logoUrl?: string | null;
  orders?: OrderCreateNestedManyWithoutStoresInput;
  paymentTypes?: PaymentTypeCreateNestedManyWithoutStoresInput;
  primaryAddress?: string | null;
  products?: ProductCreateNestedManyWithoutStoresInput;
  state?: string | null;
};
