import React from 'react';

const NavBar = () => {
  return (
    <>
      <div className=" sticky top-0 z-100 bg-base-100 shadow-sm">
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
            <h1 className="text-4xl font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
              DigiTools
            </h1>
        </div>
        <div className="navbar-center">
          <ul className="hidden lg:flex gap-10 font-semibold">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />{' '}
            </svg>
          </button>
          <button className="btn btn-ghost">Login</button>
          <button className="btn btn-primary rounded-full bg bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white">
            Get Started
          </button>
        </div>
        </div>
        </div>
    </>
  );
};

export default NavBar;
