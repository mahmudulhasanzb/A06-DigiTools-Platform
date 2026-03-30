import React from 'react';

const Cart = () => {
  return (
    // <div className="max-w-7xl mx-auto mt-20 mb-20">
      <div className="max-w-5xl mx-auto border border-gray-200 p-5 space-y-4 rounded-xl mt-10 mb-20">
        {/* Cart Title */}
        <h2 className="text-2xl font-bold text-start">
          Your Cart
        </h2>

        {/* Product Card Container */}
        <div className="space-y-2">
          <div className="flex flex-row justify-between bg-gray-100 rounded-xl items-center p-2">
            <div className="flex flex-row gap-2 items-center">
              <img className="p-2 bg-white rounded-full" src="" alt="img" />
              <div>
                <p className="text-xl">Your cart is empty</p>
                <p className="text-gray-500">Price: $0.00</p>
              </div>
            </div>
            <button className="btn btn-ghost text-red-500 rounded-full bg-transparent hover:bg-red-500 hover:text-white">
              Remove
            </button>
          </div>
          <div className="flex flex-row justify-between bg-gray-100 rounded-xl items-center p-2">
            <div className="flex flex-row gap-2 items-center">
              <img className="p-2 bg-white rounded-full" src="" alt="img" />
              <div>
                <p className="text-xl">Your cart is empty</p>
                <p className="text-gray-500">Price: $0.00</p>
              </div>
            </div>
            <button className="btn btn-ghost text-red-500 rounded-full bg-transparent hover:bg-red-500 hover:text-white">
              Remove
            </button>
          </div>
        </div>

        {/* Total */}
        <div className="flex flex-row justify-between items-center p-2">
          <p className="text-xl font-semibold text-gray-500">Total:</p>
          <p className="text-xl font-bold">$20.00</p>
        </div>

        {/* Checkout Button */}
        <button className="btn btn-primary btn-block rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold">
          Proceed to Checkout
        </button>
      </div>
    // </div>
  );
};

export default Cart;
