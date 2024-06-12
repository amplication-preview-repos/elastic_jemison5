import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
