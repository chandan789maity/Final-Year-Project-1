import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <span className="text-xs uppercase font-semibold text-pink-400 tracking-wider mb-2">Light weight for your Machine </span>
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-yellow-500">
        TextZen is new way of <br /> learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-500">Language Model</span>
      </h1>
      <p className="text-gray-300 text-lg mt-4">
        The delightfully smart collaboration platform.
      </p>
      <div className="flex mt-8 space-x-4">
        <input
          type="email"
          placeholder="Email address..."
          className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-pink-500"
        />
        <button className="px-6 py-2 rounded-lg text-white bg-gradient-to-r from-pink-500 to-orange-500">
          Join waitlist
        </button>
      </div>
    </section>
  );
};

export default Hero;
