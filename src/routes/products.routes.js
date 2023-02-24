import { Router } from "express";
import { showProducts, createProduct, getOne, deleteProduct, updateProduct } from '../controllers/products.controllers'

//creamos la instancia del router
const router = Router();

//crear mis rutas

router
.route('/')
.get(showProducts)
.post(createProduct)


router
.route('/:id')
.get(getOne)
.put(updateProduct)
.delete(deleteProduct)

export default router;
