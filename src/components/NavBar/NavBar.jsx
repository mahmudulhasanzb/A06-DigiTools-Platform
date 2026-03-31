import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const NavBar = ({ cards, setActiveCard }) => {
  return (
    <>
      <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
        <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
              >
                <li><a href="#home">Home</a></li>
                <li><a href="#product">Products</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#steps">FAQ</a></li>
                <hr className="my-2 border-gray-200" />
                <li><a>Login</a></li>
                <li><a className="text-primary">Get Started</a></li>
              </ul>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
              DigiTools
            </h1>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-6 font-semibold">
              <li className='hover:text-primary'>
                <a href="#product">Products</a>
              </li>
              <li className='hover:text-primary'>
                <a href="#">Features</a>
              </li>
              <li className='hover:text-primary'>
                <a href="#pricing">Pricing</a>
              </li>
              <li className='hover:text-primary'>
                <a href="#">Testimonials</a>
              </li>
              <li className='hover:text-primary'>
                <a href="#steps">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-2">
            <button
              onClick={() => setActiveCard('cart')}
              className="btn btn-ghost btn-circle relative mr-1 sm:mr-2"
            >
              <a href="#cart" className="flex items-center justify-center">
                <FaCartPlus className="h-5 w-5 sm:h-6 sm:w-6" />
                {cards.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center">
                    {cards.length}
                  </span>
                )}
              </a>
            </button>
            <div className="hidden sm:flex gap-2">
              <a href="#" className="btn btn-ghost btn-sm sm:btn-md">
                Login
              </a>
              <a
                href="#"
                className="btn btn-primary btn-sm sm:btn-md rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white border-none"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
