import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { DISCOUNT_TITLE_FIELD } from "../discount/DiscountTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="discount"
          source="discount.id"
          reference="Discount"
        >
          <TextField source={DISCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="note" source="note" />
        <TextField label="paymentStatus" source="paymentStatus" />
        <TextField label="paymentType" source="paymentType" />
        <TextField label="products" source="products" />
        <TextField label="salesChannel" source="salesChannel" />
        <ReferenceField label="store" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="tax" source="tax" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
