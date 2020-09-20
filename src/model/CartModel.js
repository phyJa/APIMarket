const mongoose = require('../database/index');

const Schema = mongoose.Schema;

const CartSchema = new Schema({
    item: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ItemModel'
        }]
    },
    typePayment: [
        {
            card: {
                debit: {
                    type: String,
                    required: false
                },
                credit: {
                    type: String,
                    required: false
                }
            },
            money: {
                type: String,
                required: false
            }
        }
    ]
});

module.exports = mongoose.model('Cart', CartSchema);