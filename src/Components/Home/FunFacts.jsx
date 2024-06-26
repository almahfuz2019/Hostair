import React from "react";

export default function FunFacts() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="bg-[#1c1c1e] pl-14 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="w-1/2 text-white">
            <h1 className="text-4xl font-bold mb-6">
              We help you, <br /> any-time you want <br /> any-where you want
            </h1>
            <div className="flex flex-col gap-2 mb-10">
              <div className="flex items-center gap-4">
                <img src="https://i.ibb.co/HqP6jSb/icon.png" alt="" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="https://i.ibb.co/HqP6jSb/icon.png" alt="" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="https://i.ibb.co/HqP6jSb/icon.png" alt="" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="https://i.ibb.co/HqP6jSb/icon.png" alt="" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <div className="text-center">
                <h6 className="text-4xl font-bold text-red-500">10+</h6>
                <p className="text-xl">Templates</p>
              </div>
              <div className="text-center">
                <h6 className="text-4xl font-bold text-red-500">15+</h6>
                <p className="text-xl">Professionals</p>
              </div>
              <div className="text-center">
                <h6 className="text-4xl font-bold text-red-500">25+</h6>
                <p className="text-xl">Clients</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 ">
            <img src="https://i.ibb.co/GTZn2FD/globe.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
