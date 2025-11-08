import axios from 'axios';
const API = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4004/api' });

export const fetchProducts = () => API.get('/products').then(r => r.data);
export const fetchCart = () => API.get('/cart').then(r => r.data);
export const addToCart = (productId, qty = 1) => API.post('/cart', { productId, qty }).then(r => r.data);
export const removeCartItem = (id) => API.delete(`/cart/${id}`).then(r => r.data);
export const updateCartItem = (id, qty) => API.patch(`/cart/${id}`, { qty }).then(r => r.data);
export const checkout = (name, email) => API.post('/checkout', { name, email }).then(r => r.data);
