import { CreditLog as TCreditLog } from "../api/creditLog/CreditLog";

export const CREDITLOG_TITLE_FIELD = "id";

export const CreditLogTitle = (record: TCreditLog): string => {
  return record.id?.toString() || String(record.id);
};
