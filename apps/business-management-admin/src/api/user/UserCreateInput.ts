import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  country?: string | null;
  email?: string | null;
  firstName?: string | null;
  fullname?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
