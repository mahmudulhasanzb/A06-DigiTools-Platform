import React from 'react';

const Products = () => {
  return (
    // Product Card
    <div className="max-w-7xl mx-auto">
      <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-end ">
            <span className="badge badge-xs badge-center badge-warning">
              Most Popular
            </span>
          </div>
          <img className="max-w-50 w-full" src="" alt="image" />
          <h2 className="text-2xl font-bold">AI Writing</h2>
          <p className="text-xs text-zinc-500 max-w-lg leading-relaxed">
            Transform your ideas into compelling copy with AI Writing. Generate
            blog posts, marketing content, scripts, and more—instantly.
          </p>
          <p className="text-2xl font-bold">
            $29<span className="text-lg font-normal">/Month</span>
          </p>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
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
              <span>High-resolution image generation</span>
            </li>
            <li>
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
              <span>Customizable style templates</span>
            </li>
            <li>
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
              <span>Batch processing capabilities</span>
            </li>
          </ul>
          <div className="mt-6">
            <button className="btn btn-primary btn-block rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
