import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { DiscountListRelationFilter } from "../discount/DiscountListRelationFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { PaymentTypeListRelationFilter } from "../paymentType/PaymentTypeListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type StoreWhereInput = {
  businessDescription?: StringNullableFilter;
  businessName?: StringNullableFilter;
  businessPhoneNumber?: StringNullableFilter;
  businessSector?: StringNullableFilter;
  country?: StringNullableFilter;
  currency?: StringNullableFilter;
  customers?: CustomerListRelationFilter;
  discounts?: DiscountListRelationFilter;
  employees?: EmployeeListRelationFilter;
  id?: StringFilter;
  logoUrl?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  paymentTypes?: PaymentTypeListRelationFilter;
  primaryAddress?: StringNullableFilter;
  products?: ProductListRelationFilter;
  state?: StringNullableFilter;
};
