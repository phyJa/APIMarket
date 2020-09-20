const ItemModel = require('../model/ItemModel');
const ProductModel = require('../model/ProductModel');
const { response } = require('../routes');

class ItemController {
    async create(req, res) {
        const { qtdeItem, total, products } = req.body;

        const item = new ItemModel({ qtdeItem, total, products });

        console.log(item)
        
        await item.save()
        .then(response => {
            console.log(response)
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
    
    async delete(req, res) {
        await ItemModel.deleteOne({ '_id': req.params.id })
        .then(response => {
            value -= test;
            return res.status(200).json(response)
        })
        .catch(error => {
            return res.status(400).json(error);
        });
    }
}

module.exports = new ItemController();