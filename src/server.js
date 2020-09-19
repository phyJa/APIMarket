const express = require('express');
const cors = require('cors');

const Product = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(Product);

app.listen(3000, () => {console.log('server running port 3000')})