const mongoose = require('mongoose'); 
mongoose.set('useCreateIndex', true); mongoose.set('useFindAndModify', false);

const url = 'mongodb://localhost:27017/APIMarket';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;