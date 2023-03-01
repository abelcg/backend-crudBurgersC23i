import Product from "../models/product";

const showProducts = async (req, res) => {
  try {
    //crear un arreglo con los productos de la BD
    const productsList = await Product.find();
    res.status(200).json(productsList);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error searching for requested products" });
  }
};

const getOne = async (req, res) => {
  try {
    console.log(req.params.id);
    //buscar el producto en mi BD por su id
    const productFound = await Product.findById(req.params.id);
    res.status(200).json(productFound);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error searching for requested product" });
  }
};

const createProduct = async (req, res) => {
  const { productName, price, urlImg, category } = req.body;

  try {
    console.log(req.body);
    //crear un objeto para guardar en la BD
    const newProduct = new Product({
      /* productName: req.body.productName,
        price: req.body.price,
        urlImg: req.body.urlImg,
        category: req.body.category */

      productName,
      price,
      urlImg,
      category,
    });
    //guardar en BD
    await newProduct.save();
    res.status(201).json({ message: "Product created successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error creating product" });
  }
};

const updateProduct = async (req, res) => {
  try {
    //busque el producto por su id en la BD y lo modifique
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error searching for requested product" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    //busque el producto por su id en la BD y lo borre
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error searching for requested product" });
  }
};

export { showProducts, createProduct, getOne, updateProduct, deleteProduct };
