import React from 'react';
import userImg from '../../assets/user.png';
import packageImg from '../../assets/package.png';
import rocketImg from '../../assets/rocket.png';

const Steps = () => {
  return (
    <>
      <div className="bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto mt-10 mb-10 py-20">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">Get Started in 3 Stepts</h1>
            <p className="text-sm text-gray-500">
              Start using premium digital tools in minute not hours.
            </p>
          </div>

          <div className="flex md:flex-row flex-col gap-4 mt-10 justify-center items-center">
            <div className="card max-w-75 bg-base-100 shadow-lg">
              <div className="flex justify-end w-full p-2">
                <h1 className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full text-center px-2 py-1 font-semibold">
                  01
                </h1>
              </div>
              <div className="flex flex-col bg-base-100 items-center text-center p-10 pt-0 space-y-2">
                <img
                  src={userImg}
                  alt="img"
                  className="w-20 bg-[#4f39f6]/10 rounded-full p-2"
                />
                <h2 className="card-title text-2xl font-bold">
                  Create Account
                </h2>
                <p className="text-sm text-gray-500">
                  Signup for free in seconds. No credit card requerd to get
                  started.
                </p>
              </div>
            </div>
            <div className="card max-w-75 bg-base-100 shadow-lg">
              <div className="flex justify-end w-full p-2">
                <h1 className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full text-center px-2 py-1 font-semibold">
                  02
                </h1>
              </div>
              <div className="flex flex-col bg-base-100 items-center text-center p-10 pt-0 space-y-2">
                <img
                  src={packageImg}
                  alt="img"
                  className="w-20 bg-[#4f39f6]/10 rounded-full p-2"
                />
                <h2 className="card-title text-2xl font-bold">
                  Choose Products
                </h2>
                <p className="text-sm text-gray-500">
                  Browse our catalog and select the tools that fit your needs.
                </p>
              </div>
            </div>
            <div className="card max-w-75 bg-base-100 shadow-lg">
              <div className="flex justify-end w-full p-2">
                <h1 className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full text-center px-2 py-1 font-semibold">
                  03
                </h1>
              </div>
              <div className="flex flex-col bg-base-100 items-center text-center p-10 pt-0 space-y-2">
                <img
                  src={rocketImg}
                  alt="img"
                  className="w-20 bg-[#4f39f6]/10 rounded-full p-2"
                />
                <h2 className="card-title text-2xl font-bold">
                  Start Creating
                </h2>
                <p className="text-sm text-gray-500">
                  Download and start using your premium tools in immidiately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
