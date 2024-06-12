import { CreditLogWhereInput } from "./CreditLogWhereInput";
import { CreditLogOrderByInput } from "./CreditLogOrderByInput";

export type CreditLogFindManyArgs = {
  where?: CreditLogWhereInput;
  orderBy?: Array<CreditLogOrderByInput>;
  skip?: number;
  take?: number;
};
