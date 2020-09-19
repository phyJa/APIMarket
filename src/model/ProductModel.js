const mongoose = require('../database/index');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    qtde: { type: Number, required: true },
    validity: { type: Date, required: true },
    price: { type: Number, required: true },
    mark: { type: String, required: true },
    category: { type: String, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);