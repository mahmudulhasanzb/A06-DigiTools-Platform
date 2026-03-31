import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Cart = ({ cards, setCards }) => {
  const totalPrice = cards.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCards([]);
    toast.success('Payment successful');
  };

  const handleRemove = index => {
    const remainingCards = cards.filter((_, i) => i !== index);
    setCards(remainingCards);
    toast.success('Item removed successfully');
  };

  return (
    <div className="max-w-7xl mx-auto mt-20 mb-20">
      <div className="max-w-5xl mx-auto border border-gray-200 p-5 space-y-4 rounded-xl mt-10 mb-20">
        {/* Cart Title */}
        <h2 className="text-2xl font-bold text-start">Your Cart</h2>

        {/* Empty Cart Message */}
        {cards.length === 0 ? (
          <div className="text-center mt-10 mb-10">
            <FaShoppingCart className="text-6xl text-gray-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-red-300">
              Your Cart Is empty
            </h1>
          </div>
        ) : (
          /* Product Card Container */
          cards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="flex flex-row justify-between bg-gray-100 rounded-xl items-center p-2"
            >
              <div className="flex flex-row gap-2 items-center">
                <img
                  className="w-10 h-10 p-2 bg-white rounded-full"
                  src={card.icon}
                  alt="img"
                />
                <div>
                  <p className="text-xl font-semibold">{card.name}</p>
                  <p className="text-gray-500">${card.price}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  handleRemove(index);
                }}
                className="btn btn-ghost text-red-500 rounded-full bg-transparent hover:bg-red-500 hover:text-white"
              >
                Remove
              </button>
            </div>
          ))
        )}

        {/* Total */}
        {cards.length > 0 && (
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-xl font-semibold text-gray-500">Total:</p>
            <p className="text-xl font-bold">${totalPrice}</p>
          </div>
        )}

        {/* Checkout Button */}
        {cards.length > 0 && (
          <button
            onClick={handlePayment}
            className="btn btn-primary btn-block rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold"
          >
            Proceed to Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
