export type Tax = {
  createdAt: Date;
  id: string;
  isCompoundTax: boolean | null;
  name: string | null;
  taxPercentage: number | null;
  updatedAt: Date;
};
