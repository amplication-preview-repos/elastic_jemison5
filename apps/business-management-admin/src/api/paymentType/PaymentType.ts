import { Store } from "../store/Store";

export type PaymentType = {
  createdAt: Date;
  id: string;
  name: string | null;
  store?: Store | null;
  updatedAt: Date;
};
