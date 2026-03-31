import React from 'react';

const OptionalSection = () => {
  return (
    <div className="py-20 w-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white">
      <div className="text-center max-w-5xl mx-auto space-y-8">
        <div className="space-y-2">
          <h5 className="text-3xl font-bold">
            Ready To Transform Your Workflow?
          </h5>
          <p className="text-sm max-w-md mx-auto text-gray-200">
            Join thousands of professionals who are already using Digitools to
            work smarter. Start your free trial today.
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex flex-row gap-2 justify-center">
            <button className="btn font-semibold text-[#4f39f6] rounded-full">
              Explore Products
            </button>
            <button className="btn btn-ghost btn-outline border border-white font-semibold text-white rounded-full hover:bg-white hover:text-[#4f39f6]">
              View Pricing
            </button>
          </div>
          <p className="text-sm text-gray-200">
            14-day free trial * No credit card required * Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default OptionalSection;
