const productController = require('../controllers/productControl.js')
const router = require('express').Router()




router.post('/addProduct',productController.addProduct)

router.get('/allProduct',productController.AllProducts)

router.get('/published',productController.PublishedProducts)



router.get('product/:id',productController.OneProducts)

router.put('product/:id',productController.updateProducts)

router.delete('product/:id',productController.deleteProducts)


module.exports = router;