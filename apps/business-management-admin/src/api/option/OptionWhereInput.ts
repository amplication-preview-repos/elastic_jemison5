import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OptionWhereInput = {
  color?: StringNullableFilter;
  id?: StringFilter;
  size?: StringNullableFilter;
  weight?: StringNullableFilter;
};
