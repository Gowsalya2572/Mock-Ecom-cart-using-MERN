// Simple script to create mock products
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Product = require('../models/Product');
require('dotenv').config();

(async () => {
  await connectDB();
  const items = [
    {
      name: 'Vibe Sneaker',
      price: 79.99,
      description: 'Comfortable everyday sneaker',
      image: 'https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1176',
    },
    {
      name: 'Vibe Hoodie',
      price: 49.99,
      description: 'Soft cotton hoodie',
      image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1072',
    },
      { name: 'Vibe Earbuds', 
        price: 89.99, 
        description: 'Wireless earbuds with noise cancellation', 
        image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1289' },
    {
      name: 'Vibe Cap',
      price: 19.99,
      description: 'Classic adjustable cap',
      image: 'https://images.unsplash.com/photo-1645266729222-17cd32e06fd0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    },
    {
      name: 'Vibe Backpack',
      price: 89.5,
      description: 'Durable backpack for everyday use',
      image: 'https://images.unsplash.com/photo-1551974222-1d49f576a2a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070',
    },
    {
      name: 'Vibe Sunglasses',
      price: 39.99,
      description: 'Stylish UV-protection sunglasses',
      image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    },
    {
      name: 'Vibe Shirts',
      price: 24.99,
      description: 'Lightweight cotton shirts for daily comfort',
      image: 'https://images.unsplash.com/photo-1759572095317-3a96f9a98e2b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171',
    },
     { name: 'Vibe Watch', 
      price: 99.99, 
      description: 'Trendy wristwatch for everyday style', 
      image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170' },
  ];

  await Product.deleteMany({});
  await Product.insertMany(items);
  console.log('Seeded products');
  process.exit(0);
})();
