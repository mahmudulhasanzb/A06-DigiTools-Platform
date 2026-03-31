import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const NavBar = ({ cards, setActiveCard }) => {
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
                <a href="#product">Products</a>
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
            <button
              onClick={() => setActiveCard('cart')}
              className="btn btn-ghost btn-circle relative"
            >
              <FaCartPlus className="h-5 w-5" />
              {cards.length > 0 ? (
                <span className="absolute top-0 -right-1 bg-red-400 w-5 h-5 rounded-full text-white flex items-center justify-center">
                  {cards.length}
                </span>
              ) : (
                ''
              )}
              {/* dyanamically added */}
            </button>
            <a href="#" className="btn btn-ghost">
              Login
            </a>
            <a
              href="#"
              className="btn btn-primary rounded-full bg bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
