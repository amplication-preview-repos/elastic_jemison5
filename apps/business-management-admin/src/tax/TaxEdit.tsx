import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const TaxEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="isCompoundTax" source="isCompoundTax" />
        <TextInput label="name" source="name" />
        <NumberInput label="taxPercentage" source="taxPercentage" />
      </SimpleForm>
    </Edit>
  );
};
