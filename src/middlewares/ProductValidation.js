const ProductModel = require('../model/ProductModel');
const { exists } = require('../model/ProductModel');

const ProductValidation = async (req, res, next) => {
    const { name, category, _id } = req.body;

    if(!name) return res.status(400).json({error: 'Name is required'});
    else if (!category) return res.status(400).json({error: 'Category is required'});

    else {
        const exists = await ProductModel.findOne({'_id': {'$in': _id}})

        if(exists) {
            return res.status(400).json({ error: 'There is already a registered product'})
        }
        next();
    }
};

module.exports = ProductValidation;