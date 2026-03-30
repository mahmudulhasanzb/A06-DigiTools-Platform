import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProductCards = ({ data, cards, setCards}) => {
  const [isBought, setIsBought] = useState(false);
  const handleBoughtBtn = () => {
    setIsBought(true);
    setCards([...cards, data])
    // {isBought ? toast.error('item already added') : toast.success('added to cart')}
  };

  const name = data.name;
  const description = data.description;
  const price = data.price;
  const period = data.period;
  const icon = data.icon;
  const tag = data.tag;
  const tagType = data.tagType;
  const features = data.features;

  return (
    <div className="card max-w-96 bg-base-200 shadow-md">
      <div className="card-body p-4">
        <div className="flex justify-end ">
          <span
            className={`badge badge-lg badge-soft rounded-full font-semibold ${tagType === 'popular' ? 'bg-primary/20 text-blue-900' : tagType === 'best seller' ? 'bg-warning/50 text-yellow-900' : 'bg-secondary/30 text-secondary'}`}
          >
            {tag}
          </span>
        </div>
        <img
          className="max-w-10 w-full p-2 bg-white rounded-full border border-gray-200"
          src={icon}
          alt="image"
        />
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-sm text-zinc-600 max-w-lg leading-relaxed">
          {description}
        </p>
        <p className="text-2xl font-bold">
          ${price}
          <span className="text-lg font-normal">/{period}</span>
        </p>
        <ul className="mt-1 flex flex-col gap-2 text-xs">
          {features.map(feature => {
            return (
              <li key={feature} className="text-sm line-clamp-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
        <div className="mt-6">
          <button
            onClick={handleBoughtBtn}
            className={`btn btn-primary btn-block rounded-full ${isBought ? 'bg-green-500 border-none' : 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white'}`}
          >
            {isBought ? 'Bought' : 'Buy Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
