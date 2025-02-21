import express from "express";
import * as productController from "../controllers/product.controller";

const router = express.Router();

router
    .route("/")
    .get(productController.getAllProducts)
    .post(productController.createProduct);

router
    .route("/:id")
    .get(productController.getProductById)
    .put(productController.updateProduct)
    .delete(productController.deleteProduct);

export default router;
