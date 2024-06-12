import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { DISCOUNT_TITLE_FIELD } from "./DiscountTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const DiscountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="maxDiscountAmount" source="maxDiscountAmount" />
        <TextField label="name" source="name" />
        <ReferenceField label="store" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="validFrom" source="validFrom" />
        <TextField label="validTo" source="validTo" />
        <TextField label="value" source="value" />
        <ReferenceManyField
          reference="Order"
          target="discountId"
          label="Orders"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
