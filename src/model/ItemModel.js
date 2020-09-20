const mongoose = require('../database/index');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    qtdeItem: {
        type: Number, required: true 
    },
    total: {
        type: Number, required: true
    },
    products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductModel',
    },
    name: {
        type: String, required: false
    },
    price: {
        type: Number, required: false
    },
    mark: {
        type: String, required: false
    }
});

module.exports = mongoose.model('Item', ItemSchema);