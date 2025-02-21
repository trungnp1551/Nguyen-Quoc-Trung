import prisma from "../config/db";
import { Product } from "../types/product.type";

// 1. Get all products
export const getAllProducts = async () => {
    return await prisma.product.findMany();
  };
// 2. Get product details
export const getProductById = async (id: string): Promise<Product | null> => {
  return await prisma.product.findUnique({ where: { id } });
};

// 3. Create a new product
export const createProduct = async (data: Omit<Product, "id" | "createdAt" | "updatedAt">): Promise<Product> => {
  return await prisma.product.create({ data });
};

// 4. Update product information
export const updateProduct = async (id: string, data: Partial<Product>): Promise<Product | null> => {
  return await prisma.product.update({ where: { id }, data });
};

// 5. Delete product
export const deleteProduct = async (id: string): Promise<Product | null> => {
  return await prisma.product.delete({ where: { id } });
};
