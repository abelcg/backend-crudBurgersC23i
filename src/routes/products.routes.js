import { Router } from "express";
import {
  showProducts,
  createProduct,
  getOne,
  deleteProduct,
  updateProduct,
} from "../controllers/products.controllers";
import productValidate from "../middlewares/productValidations";

//creamos la instancia del router
const router = Router();

//crear mis rutas

router
  .route("/")
  .get(showProducts)
  .post(productValidate, createProduct)
  /* .post(
    [
      check("productName", "El nombre del producto es obligatorio").notEmpty(),
      check(
        "productName",
        "El nombre del producto debe tener entre 2 y 100 caracteres"
      ).isLength({ min: 2, max: 10 }),
      check('price', "El precio es obligatorio").notEmpty(),
      check('price').custom((value)=>{
        if(value >= 0 && value <= 10000){
            return true
        }else {
            throw new Error("El precio debe estar entre 0 y 10000")
        }
      })
    ],
    createProduct
  ) */;

router.route("/:id")
.get(getOne)
.put(updateProduct)
.delete(deleteProduct);

export default router;
