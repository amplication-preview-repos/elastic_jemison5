import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { StoreTitle } from "../store/StoreTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="barcode" source="barcode" />
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <div />
        <BooleanInput label="isPublished" source="isPublished" />
        <NumberInput
          step={1}
          label="lowQuantityStock"
          source="lowQuantityStock"
        />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <ReferenceInput source="store.id" reference="Store" label="store">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <BooleanInput label="trackStock" source="trackStock" />
        <TextInput label="unit" source="unit" />
        <div />
      </SimpleForm>
    </Create>
  );
};
