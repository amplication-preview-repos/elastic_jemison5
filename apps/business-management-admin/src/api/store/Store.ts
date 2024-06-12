import { Customer } from "../customer/Customer";
import { Discount } from "../discount/Discount";
import { Employee } from "../employee/Employee";
import { Order } from "../order/Order";
import { PaymentType } from "../paymentType/PaymentType";
import { Product } from "../product/Product";

export type Store = {
  businessDescription: string | null;
  businessName: string | null;
  businessPhoneNumber: string | null;
  businessSector: string | null;
  country: string | null;
  createdAt: Date;
  currency: string | null;
  customers?: Array<Customer>;
  discounts?: Array<Discount>;
  employees?: Array<Employee>;
  id: string;
  logoUrl: string | null;
  orders?: Array<Order>;
  paymentTypes?: Array<PaymentType>;
  primaryAddress: string | null;
  products?: Array<Product>;
  state: string | null;
  updatedAt: Date;
};
