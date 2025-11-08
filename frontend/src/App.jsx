import React, { useEffect, useState } from 'react';
import ProductGrid from './components/ProductGrid';
import { ToastContainer, toast } from 'react-toastify';
import * as api from './api/axios';
import Checkout from './components/Checkout';
import Cart from './components/Cart';

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [openCart, setOpenCart] = useState(false);
  const [openCheckout, setOpenCheckout] = useState(false);
  const [receipt, setReceipt] = useState(null);

  useEffect(() => { loadProducts(); loadCart(); }, []);

  async function loadProducts() {
    try {
      const data = await api.fetchProducts();
      setProducts(data);
    } catch (err) { console.error(err); toast.error('Failed to load products'); }
  }

  async function loadCart() {
    try {
      const data = await api.fetchCart();
      setCart(data);
    } catch (err) { console.error(err); /* ignore empty cart */ }
  }

  const handleAdd = async (productId) => {
    try {
      const data = await api.addToCart(productId, 1);
      setCart(data);
      toast.success('Added to cart');
    } catch (err) { console.error(err); toast.error('Add to cart failed'); }
  };

  // const handleRemove = async (id) => {
  //   try {
  //     const data = await api.removeCartItem(id);
  //     setCart(data);
  //     toast.info('Removed item');
  //   } catch (err) { console.error(err); toast.error('Remove failed'); }
  // };


  const handleRemove = async (id) => {
  try {
    const data = await api.removeCartItem(id);

    // If items array is empty, show "Cart empty"
    setCart({
      items: data.items || [],
      total: data.total || 0
    });

    toast.info(data.message || 'Item removed');
  } catch (err) {
    console.error(err);
    toast.error('Remove failed');
  }
};


  const handleUpdateQty = async (id, qty) => {
    try {
      const data = await api.updateCartItem(id, qty);
      setCart(data);
    } catch (err) { console.error(err); toast.error('Update failed'); }
  };

  const handleCheckout = async (name, email) => {
    try {
      const res = await api.checkout(name, email);
      setReceipt(res.receipt);
      setOpenCheckout(false);
      setOpenCart(false);
      toast.success('Checkout success');
    } catch (err) { console.error(err); toast.error(err?.response?.data?.message || 'Checkout failed'); }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <ToastContainer position="top-right" />
      <header className="navbar bg-base-100 shadow p-4">
        <div className="flex-1 px-2 mx-2"><span className="text-xl font-bold text-white">Vibe Commerce</span></div>
        <div className="flex-none">
          <button className="btn text-white" onClick={() => setOpenCart(true)}>
            Cart ({cart.items.length}) — ${cart.total?.toFixed(2) || 0}
          </button>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <ProductGrid products={products} onAdd={handleAdd} />
      </main>

      <Cart open={openCart} onClose={() => setOpenCart(false)} cart={cart} onRemove={handleRemove} onUpdateQty={handleUpdateQty} onProceed={() => setOpenCheckout(true)} />

      <Checkout open={openCheckout} onClose={() => setOpenCheckout(false)} onCheckout={handleCheckout} receipt={receipt} />
    </div>
  );
}
