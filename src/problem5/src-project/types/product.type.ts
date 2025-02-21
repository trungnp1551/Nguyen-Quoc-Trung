import { Decimal } from "@prisma/client/runtime/library";

export type Product = {
  id: string;
  name: string;
  description?: string | null;
  price: Decimal;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
};
