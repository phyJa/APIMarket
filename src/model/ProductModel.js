const mongoose = require('../database/index');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    mark: {
        type: mongoose.Schema.Types.Array,
        ref: 'MarkModel',
        required: true
    },
    category: { type: String, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);