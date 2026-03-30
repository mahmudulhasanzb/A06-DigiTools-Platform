import React from 'react';
import bannerImg from '../../assets/banner.png';
import { CiPlay1 } from 'react-icons/ci';
import toolTip from '../../assets/tooltip.png';

const Banner = () => {
  return (
    <>
      <div
        id="home"
        className="relative min-w-full flex justify-center items-center overflow-hidden py-10 px-4"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10 w-full">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-full bg-[#a8a8ff]/30 text-[#7b39f6]">
              <img src={toolTip} /> New: AI-Powered Design Tools
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tighter">
              Supercharge Your
              <br/>
              Digital Workflow
            </h1>

            <p className="text-xl text-zinc-500 max-w-lg leading-relaxed">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="btn btn-primary rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white">
                Explore Products
              </button>
              <button className="btn btn-outline btn-ghost rounded-full border-[#4f39f6] text-[#9514fa] hover:bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:text-white">
                <CiPlay1 className="text-2xl" /> Watch Demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end items-center h-full">
            <img className="" src={bannerImg} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
