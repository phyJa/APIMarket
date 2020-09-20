const mongoose = require('../database/index');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    qtdeItem: {
        type: Number, required: true 
    },
    total: {
        type: Number, required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductModel',
    }]
});

module.exports = mongoose.model('Item', ItemSchema);