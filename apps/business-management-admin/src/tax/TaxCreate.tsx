import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const TaxCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="isCompoundTax" source="isCompoundTax" />
        <TextInput label="name" source="name" />
        <NumberInput label="taxPercentage" source="taxPercentage" />
      </SimpleForm>
    </Create>
  );
};
