const express = require('express'); 
const ItemController = require('./controllers/ItemController');
const router = express.Router();

const ProductController = require('./controllers/ProductController');
const ProductValidation = require('./middlewares/ProductValidation');
const CartModel = require('./model/CartModel');


router.get('/products', ProductController.list);
router.get('/products/item', ProductController.filterName);
router.get('/products/item/:id', ProductController.show);

router.post('/products', ProductValidation, ProductController.create);
router.put('/products/item/:id', ProductValidation, ProductController.update);
router.delete('/products/item/:id', ProductController.delete);

router.post('/cart/item', ItemController.create);
router.delete('/cart/item/:id', ItemController.delete);

module.exports = router;