import { Option as TOption } from "../api/option/Option";

export const OPTION_TITLE_FIELD = "color";

export const OptionTitle = (record: TOption): string => {
  return record.color?.toString() || String(record.id);
};
