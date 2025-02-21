import { Request, Response } from "express";
import * as productService from "../services/product.service";

const response = (res: Response, status: number, success: boolean, message: string, data: any = null)=>{
    res.status(status).json({
        success,
        message,
        ...(data !== null && { data }) 
    });
}

// 1. Get product list
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    return response(res, 200, true, "Get all products", products);
  } catch (error) {
    return response(res, 500, false, "Error retrieving product list");
  }
};

// 2. Get product details
export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    if (!product) 
        return response(res, 404, false, "Product not found");
    return response(res, 200, true, "Get product by ID", product);
  } catch (error) {
    return response(res, 500, false, "Error retrieving product details");
  }
};

// 3. Create a new product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, stock } = req.body;
    if (!name || price == null || stock == null) {
        return response(res, 400, false, "Missing product information");
    }

    const newProduct = await productService.createProduct({ name, description, price, stock });
    return response(res, 201, true, "Product added successfully", newProduct);
  } catch (error) {
    return response(res, 500, false, "Error adding product");
  }
};

// 4. Update product
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedProduct = await productService.updateProduct(id, req.body);
    if (!updatedProduct) 
        return response(res, 404, false, "Product not found");
    return response(res, 200, true, "Product updated successfully", updatedProduct);
  } catch (error) {
    return response(res, 500, false, "Error updating product");
  }
};

// 5. Delete product
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedProduct = await productService.deleteProduct(id);
    if (!deletedProduct) 
        return response(res, 404, false, "Product not found");
    return response(res, 200, true, "Product deleted successfully", deletedProduct);
  } catch (error) {
    return response(res, 500, false, "Error deleting product");
  }
};
