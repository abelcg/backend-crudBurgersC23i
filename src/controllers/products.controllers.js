const showProducts = (req, res) => {
    res.send('listar los productos')
};

const getOne = (req, res) => {
    res.send('el producto buscado')
}

const createProduct = (req, res) => {
    res.send('se creó el producto')
}

const updateProduct = (req, res) => {
    res.send('el producto fue actualizado')
}

const deleteProduct = (req, res) => {
    res.send('se borró el producto')
}

export { showProducts, createProduct, getOne, updateProduct, deleteProduct}
