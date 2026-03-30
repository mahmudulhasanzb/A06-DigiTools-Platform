import React from 'react';

const Stats = () => {
  return (
    <div className="mt-10 mb-20 py-15 w-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white">
      <div className=" flex md:flex-row lg:flex-row flex-col gap-10 justify-between items-center text-center max-w-5xl mx-auto">
        <div>
          <p className="text-3xl font-bold">50K+</p>
          <p>Active Users</p>
        </div>
        <div>
          <p className="text-3xl font-bold">200+</p>
          <p>Premium Tools</p>
        </div>
        <div>
          <p className="text-3xl font-bold">4.9</p>
          <p>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;