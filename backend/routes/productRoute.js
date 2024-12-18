const express = require("express");
const { getAllProducts,createProduct, updateProduct, deleteProduct,getProduct } = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getProduct);

router.route("/product/new").post(createProduct);

router.route("/product/:id").put(updateProduct)
router.route("/product/:id").put(updateProduct).delete(deleteProduct)

module.exports =router