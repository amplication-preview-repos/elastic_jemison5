import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";
import { StoreTitle } from "../store/StoreTitle";

export const DiscountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="maxDiscountAmount" source="maxDiscountAmount" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="store.id" reference="Store" label="store">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="validFrom" source="validFrom" />
        <DateTimeInput label="validTo" source="validTo" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
