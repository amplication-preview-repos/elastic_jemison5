import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const OptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <TextInput label="size" source="size" />
        <TextInput label="weight" source="weight" />
      </SimpleForm>
    </Edit>
  );
};
