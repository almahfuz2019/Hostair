import React from "react";

export default function Advertisement() {
  return (
    <div className="bg-[#1c1c1e] py-24 my-24 px-20 rounded-lg max-w-screen-xl mx-auto">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="image-container">
            <img
              src="https://i.ibb.co/nbXnjYG/Frame-12.png"
              className=" rounded-2xl border-[0.25px] hover:border-primary px-8 pt-8 "
              alt="Templates"
            />
          </div>
        </div>
        <div className="text-white">
          <p className="text-red-500 font-semibold">Templates</p>
          <h1 className="text-4xl font-bold mb-4">
            Fully editable pre-made website templates
          </h1>
          <p className="mb-6 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600">
            More →
          </button>
        </div>
      </div>
    </div>
  );
}
