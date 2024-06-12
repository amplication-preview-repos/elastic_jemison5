import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
} from "react-admin";

import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="barcode" source="barcode" />
        <ReferenceField
          label="category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="images" source="images" />
        <BooleanField label="isPublished" source="isPublished" />
        <TextField label="lowQuantityStock" source="lowQuantityStock" />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <TextField label="quantity" source="quantity" />
        <ReferenceField label="store" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="trackStock" source="trackStock" />
        <TextField label="unit" source="unit" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="variants" source="variants" />
      </SimpleShowLayout>
    </Show>
  );
};
