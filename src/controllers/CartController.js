const CartModel = require('../model/ItemModel');
const ItemModel = require('../model/ProductModel');
const { response } = require('../routes');

class CartController {
    async create(req, res) {
        let { qtdeItem, total, products, name, price, mark } = req.body;
        const id = products

        let storage = []

        const product = await ProductModel.findById({_id: id})
        .then(response => {
            const names = response.name;
            const prices = response.mark[0].price;
            const marks = response.mark[0].name;
            
            let sum = prices * qtdeItem;

            storage.push({
                names,
                prices,
                marks,
                sum
            })
        })

        let nameProduct = storage[0].names;
        let priceProduct = storage[0].prices;
        let markProduct = storage[0].marks;
        let sum = storage[0].sum;

        total = sum;
        name = nameProduct;
        price = priceProduct;
        mark = markProduct;


        const item = new ItemModel({
            qtdeItem,
            total,
            product,
            name,
            price,
            mark
        });
        
        console.log(item)
        
        await item.save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(400).json(error);
        });
    }
    
    async delete(req, res) {
        await ItemModel.deleteOne({ '_id': id })
        .then(response => {
            return res.status(200).json(response)
        })
        .catch(error => {
            return res.status(400).json(error);
        });
    }
}

module.exports = new CartController();