const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');
const Product = require('../models/Product');

const MOCK_USER = 'mock-user-1';

// GET /api/cart -> returns cart items + total
router.get('/', async (req, res) => {
  try {
    const items = await CartItem.find({ userId: MOCK_USER });
    const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);
    res.json({ items, total });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error fetching cart' });
  }
});

// POST /api/cart -> add { productId, qty }
router.post('/', async (req, res) => {
  try {
    const { productId, qty = 1 } = req.body;
    if (!productId) return res.status(400).json({ message: 'productId required' });

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    // If exists, increment qty
    let item = await CartItem.findOne({ userId: MOCK_USER, productId: product._id });
    if (item) {
      item.qty += qty;
      await item.save();
    } else {
      item = new CartItem({
        userId: MOCK_USER,
        productId: product._id,
        name: product.name,
        price: product.price,
        qty
      });
      await item.save();
    }

    const items = await CartItem.find({ userId: MOCK_USER });
    const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);
    res.status(201).json({ items, total });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error adding to cart' });
  }
});

// DELETE /api/cart/:id -> remove cart item
// router.delete('/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     await CartItem.deleteOne({ _id: id, userId: MOCK_USER });
//     const items = await CartItem.find({ userId: MOCK_USER });
//     const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);
//     res.json({items, total, message: "item removed successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error removing cart item' });
//   }
// });


router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await CartItem.findByIdAndDelete(id);

    if (!deleted) return res.status(404).json({ message: 'Item not found' });

    // Return updated cart
    const items = await CartItem.find({ userId: MOCK_USER });
    const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);

    res.json({
      message: `${deleted.name} removed from cart`,
      items,
      total
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error removing item' });
  }
});


// PATCH /api/cart/:id -> update qty
router.patch('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { qty } = req.body;
    if (qty == null) return res.status(400).json({ message: 'qty required' });
    const item = await CartItem.findOne({ _id: id, userId: MOCK_USER });
    if (!item) return res.status(404).json({ message: 'Cart item not found' });
    item.qty = qty;
    await item.save();
    const items = await CartItem.find({ userId: MOCK_USER });
    const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);
    res.json({ items, total });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error updating cart item' });
  }
});

module.exports = router;
