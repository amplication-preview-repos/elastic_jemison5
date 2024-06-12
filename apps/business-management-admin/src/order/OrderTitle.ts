import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "paymentType";

export const OrderTitle = (record: TOrder): string => {
  return record.paymentType?.toString() || String(record.id);
};
