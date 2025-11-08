const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');

const MOCK_USER = 'mock-user-1';

// POST /api/checkout { name, email } -> returns mock receipt
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    // fetch current cart from DB
    const items = await CartItem.find({ userId: MOCK_USER });
    if (!items || items.length === 0) return res.status(400).json({ message: 'Cart empty' });

    const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);
    const receipt = {
      id: `rcpt_${Date.now()}`,
      name: name || 'Guest',
      email: email || null,
      items: items.map(it => ({ name: it.name, qty: it.qty, price: it.price })),
      total,
      timestamp: new Date().toISOString()
    };

    // Clear cart 
    await CartItem.deleteMany({ userId: MOCK_USER });

    res.json({ receipt });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error during checkout' });
  }
});

module.exports = router;
