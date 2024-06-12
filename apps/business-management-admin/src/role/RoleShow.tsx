import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ROLE_TITLE_FIELD } from "./RoleTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const RoleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="permissions" source="permissions" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Employee"
          target="roleId"
          label="Employees"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="email" source="email" />
            <TextField label="fullname" source="fullname" />
            <TextField label="ID" source="id" />
            <TextField label="passcode" source="passcode" />
            <TextField label="phone" source="phone" />
            <ReferenceField label="role" source="role.id" reference="Role">
              <TextField source={ROLE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="store" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
