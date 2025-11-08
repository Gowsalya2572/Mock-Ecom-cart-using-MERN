const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const products =require("./routes/productRoutes");
const cart =require("./routes/cart");
const checkout =require("./routes/checkout");
require('dotenv').config();


connectDB();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: 'http://localhost:5173' })); // frontend dev URL

app.use('/api/products', products);
app.use('/api/cart', cart);
app.use('/api/checkout',checkout );

const PORT = process.env.PORT || 4004 ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
