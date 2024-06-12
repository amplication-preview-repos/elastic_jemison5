import { JsonValue } from "type-fest";

export type User = {
  country: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  fullname: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
