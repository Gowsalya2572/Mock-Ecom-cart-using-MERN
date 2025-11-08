import React from "react";

export default function ProductGrid({ products = [], onAdd }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((p) => (
        <div
          key={p._id}
          className="card bg-base-100 shadow-md hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden"
        >
          <figure className="relative">
            <div className="h-48 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transform transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <span className="text-sm text-gray-500">No Image</span>
              )}
            </div>
          </figure>

          <div className="card-body text-white bg-neutral">
            <h2 className="card-title text-lg font-bold truncate">{p.name}</h2>
            <p className="text-sm text-gray-300 line-clamp-2">{p.description}</p>

            <div className="card-actions justify-between items-center mt-3">
              <span className="font-semibold text-lg text-primary">
                ${p.price.toFixed(2)}
              </span>
              <button
                className="btn btn-primary btn-sm hover:scale-105 transition-transform duration-200"
                onClick={() => onAdd(p._id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

