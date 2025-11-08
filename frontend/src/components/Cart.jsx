import React from 'react';

export default function Cart({ open, onClose, cart = { items: [], total: 0 }, onRemove, onUpdateQty, onProceed }) {
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'hidden'}`}>
      {/* Background overlay */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`absolute right-0 top-0 h-full w-96 bg-base-100 shadow-xl transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 h-full flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-white">Your Cart</h3>
            <button className="btn btn-sm btn-ghost" onClick={onClose}>✕</button>
          </div>

          {cart.items && cart.items.length === 0 ? (
  <p className="text-sm text-white">Cart empty</p>
) : (
  <div className="flex-1 overflow-y-auto space-y-3">
    {cart.items?.map(item => (
      <div key={item._id} className="flex items-center justify-between p-2 border rounded">
        <div>
          <div className="font-semibold text-white">{item.name}</div>
          <div className="text-sm text-white">${item.price?.toFixed(2)} × {item.qty}</div>
        </div>
        <div className="flex flex-col items-end">
          <div className="btn-group">
            <button className="btn btn-xs" onClick={() => onUpdateQty(item._id, Math.max(1, item.qty - 1))}>-</button>
            <button className="btn btn-xs text-white">{item.qty}</button>
            <button className="btn btn-xs" onClick={() => onUpdateQty(item._id, item.qty + 1)}>+</button>
          </div>
          <button className="link text-error text-sm mt-2" onClick={() => onRemove(item._id)}>Remove</button>
        </div>
      </div>
    ))}
  </div>
)}


          {/* Footer */}
          <div className="mt-4 border-t pt-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-white">Total</span>
              <span className="font-bold text-white">${(cart.total || 0).toFixed(2)}</span>
            </div>
            <button
              className="btn btn-primary w-full mt-3"
              onClick={onProceed}
              disabled={cart.items.length === 0}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
