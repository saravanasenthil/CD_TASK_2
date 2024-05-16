const db = require('../models')

const Product = db.db.products;



const addProduct = async (req, res) => {
    const { title, price, description, published } = req.body;
    try {
        const product = await Product.create({ title, price, description, published });
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};



const AllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};



const OneProducts = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findOne({ where: { id } });
        if (product) {
            res.status(200).send(product);
        } else {
            res.status(404).send({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};




const updateProducts = async (req, res) => {
    const id = req.params.id;
    try {
        const [updated] = await Product.update(req.body, { where: { id } });
        if (updated) {
            const updatedProduct = await Product.findOne({ where: { id } });
            res.status(200).send(updatedProduct);
        } else {
            res.status(404).send({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};




const deleteProducts = async (req, res) => {
    const id = req.params.id;
    try {
        const deleted = await Product.destroy({ where: { id } });
        if (deleted) {
            res.status(200).send({ message: 'Product deleted' });
        } else {
            res.status(404).send({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};



const PublishedProducts = async (req, res) => {
    try {
        const products = await Product.findAll({ where: { published: true } });
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};




module.exports={
    addProduct,
    AllProducts,
    OneProducts,
    updateProducts,
    deleteProducts,
    PublishedProducts
    
}











