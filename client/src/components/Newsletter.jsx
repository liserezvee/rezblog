import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 my-32">
      <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Blog!</h1>
      <p className="md:text-lg text-gray-500/70 pb-8">
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>
      <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
        <input
          className="w-full border border-gray-300 rounded-md h-full border-r-0 outline-none rounded-r-none px-3 text-gray-500"
          type="text"
          placeholder="Enter your email id"
          required
        />
        <button
          className="bg-primary/80 text-white md:px-12 h-full px-8 py-2 m-1.5 rounded-md rounded-l-none hover:scale-105 transition-all cursor-pointer"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
