import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const OptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <TextInput label="size" source="size" />
        <TextInput label="weight" source="weight" />
      </SimpleForm>
    </Create>
  );
};
