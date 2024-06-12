import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SubscriptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="currency" source="currency" />
        <NumberInput step={1} label="maxEmployees" source="maxEmployees" />
        <NumberInput step={1} label="maxSales" source="maxSales" />
        <NumberInput step={1} label="maxStores" source="maxStores" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Create>
  );
};
