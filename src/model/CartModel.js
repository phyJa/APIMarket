const mongoose = require('../database/index');

const Schema = mongoose.Schema;

const CartSchema = new Schema({
    Cart: [
        { 
            type: {
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'ItemModel',
                required: true 
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
        }
    ]
});

module.exports = mongoose.model('Cart', CartSchema);