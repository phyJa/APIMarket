const express = require('express'); 
const ItemController = require('./controllers/ItemController');
const router = express.Router();

const ProductController = require('./controllers/ProductController');
const ProductValidation = require('./middlewares/ProductValidation');


router.get('/products', ProductController.list);
router.get('/products/item', ProductController.filterName);
router.get('/products/item/:id', ProductController.show);

router.post('/products', ProductValidation, ProductController.create);
router.put('/products/item/:id', ProductValidation, ProductController.update);
router.delete('/products/item/:id', ProductController.delete);

router.post('/cart', ItemController.create);

module.exports = router;