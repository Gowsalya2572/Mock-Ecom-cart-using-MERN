import React, { useState, useEffect } from 'react';

export default function Checkout({ open, onClose, onCheckout, receipt }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // reset fields when modal opens/closes
  useEffect(() => {
    if (!open) {
      setName('');
      setEmail('');
    }
  }, [open]);

  const submit = (e) => {
    e.preventDefault();
    onCheckout(name, email);
  };

  return (
    <div className={`modal ${open ? 'modal-open' : ''}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg text-white">Checkout</h3>

        {receipt ? (
          <div className="space-y-2">
            <p>Receipt: <strong>{receipt.id}</strong></p>
            <p>Total: ${receipt.total.toFixed(2)}</p>
            <p>Time: {new Date(receipt.timestamp).toLocaleString()}</p>
            <div className="modal-action">
              <button className="btn" onClick={onClose}>Close</button>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-3">
            <div>
              <label className="label"><span className="label-text text-white">Name</span></label>
              <input type="text" required value={name} onChange={e=>setName(e.target.value)} className="input input-bordered w-full text-white" />
            </div>
            <div>
              <label className="label"><span className="label-text text-white">Email</span></label>
              <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} className="input input-bordered w-full text-white" />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={onClose}>Cancel</button>
              <button type="submit" className="btn btn-primary">Place order</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
