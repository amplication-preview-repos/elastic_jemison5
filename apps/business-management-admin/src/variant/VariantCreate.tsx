import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const VariantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="barcode" source="barcode" />
        <NumberInput label="cost" source="cost" />
        <NumberInput
          step={1}
          label="lowQuantityStock"
          source="lowQuantityStock"
        />
        <div />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="quantity" source="quantity" />
      </SimpleForm>
    </Create>
  );
};
