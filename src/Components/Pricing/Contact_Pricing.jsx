import React from "react";
import { Link } from "react-router-dom";

export default function Contact_Pricing() {
  return (
    <div className="max-w-[1120px] mx-auto pb-24">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg py-20">
        <div className="text-center text-accent mb-14">
          <p className="text-white   mb-4 text-[18px] font-normal">
            Our pricing plans can be customized based on the size of your
            project <br /> To get your flexible customization plan,{" "}
            <Link className="text-primary underline underline-offset-4">
              contact us
            </Link>
          </p>
          <p className="text-gray-300 mb-4"></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#212327] gap-4 p-6 rounded-2xl text-white flex items-center">
            <div>
              <img src="https://i.ibb.co/RS1BD6w/Group-36-1.png" alt="" />
            </div>
            <div>
              <p className="text-[#9CA0AB] text-[18px] font-normal mb-3">
                Call Us
              </p>
              <p className="text-secondary text-xl font-normal">0123 456 789</p>
            </div>
          </div>
          <div className="bg-[#212327] gap-4 p-6 rounded-2xl text-white flex items-center">
            <div>
              <img src="https://i.ibb.co/2t7Z8qZ/Group-36-2.png" alt="" />
            </div>
            <div>
              <p className="text-[#9CA0AB] text-[18px] font-normal mb-3">
                Call Us
              </p>
              <p className="text-secondary text-xl font-normal">0123 456 789</p>
            </div>
          </div>
          <div className="bg-[#212327] gap-4 p-6 rounded-2xl text-white flex items-center">
            <div>
              <img src="https://i.ibb.co/d0xB1Zy/Group-36.png" alt="" />
            </div>
            <div>
              <p className="text-[#9CA0AB] text-[18px] font-normal mb-3">
                Call Us
              </p>
              <p className="text-secondary text-xl font-normal">0123 456 789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
