const mongoose = require('../database/index');

const Schema = mongoose.Schema;

const MarkSchema = new Schema({
    mark: [
        { 
            _id: {type: String, required: true },
            name: { type: String, required: true },
            price: { type: Number, required: true },
            validity: { type: Date, required: true },
            qtde: { type: Number, required: true },
            weight: { type: Number, required: true }
        }
    ]
});

module.exports = mongoose.model('Mark', MarkSchema);