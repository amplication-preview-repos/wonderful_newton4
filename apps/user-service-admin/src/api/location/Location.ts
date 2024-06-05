import { User } from "../user/User";

export type Location = {
  createdAt: Date;
  id: string;
  lat: number | null;
  long: number | null;
  updatedAt: Date;
  user?: User | null;
};
