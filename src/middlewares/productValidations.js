import { check } from "express-validator";
import validationsResult from "../helpers/validationResults";

const productValidate = [
  check("productName", )
  .notEmpty()
  .withMessage("El nombre del producto es obligatorio")
  .isLength({ min: 2, max: 100 })
  .withMessage("El nombre del producto debe tener entre 2 y 100 caracteres"),
  check("price")
  .notEmpty()
  .withMessage("El precio es obligatorio")
  .custom((value) => {
    if (value >= 0 && value <= 10000) {
      return true;
    } else {
      throw new Error("El precio debe estar entre 0 y 10000");
    }
  }),

  (req, res, next) => {
    validationsResult(req, res, next);
  },
];


export default productValidate;
