const ProductModel = require('../model/ProductModel');
const { response } = require('../routes');

class ProductController {
    async create(req, res) {
        const product = new ProductModel(req.body);

        await product.save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(400).json(error);
        });
    }

    async list(req, res) {
        await ProductModel.find()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(400).json(error);
        })
    }

    async update(req, res) {
        await ProductModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(400).json(error);
        });
    }

    async show(req, res) {
        await ProductModel.findById(req.params.id)
        .then(response => {
            if(response) {
                return res.status(200).json(response);
            } else {
                return res.status(404).json({ error: 'Product not found'});
            }
        })
        .catch(error => {
            return res.status(400).json(error);
        });
    }

    async filterName(req, res) {
        await ProductModel.find({'name': {'$eq': req.query.name}})
        .sort('name')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(400).json(error);
        });
    }

    async delete(req, res) {
        await ProductModel.deleteOne({ '_id': req.params.id })
        .then(response => {
            return res.status(200).json(response)
        })
        .catch(error => {
            return res.status(400).json(error);
        });
    }
}

module.exports = new ProductController();