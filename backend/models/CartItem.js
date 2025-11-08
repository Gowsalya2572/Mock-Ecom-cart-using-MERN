const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // mock user
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, default: 1 }
}, { timestamps: true });

module.exports = mongoose.model('CartItem', CartItemSchema);
