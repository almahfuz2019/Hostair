import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function FunFacts() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="max-w-[1120px] mx-auto px-4 overflow-hidden">
      <div className="bg-[#131316] border border-[#f5f5f547] lg:pl-14 lg:p-0 rounded-lg group">
        {" "}
        {/* Add group class here */}
        <div className="flex flex-col-reverse lg:flex-row justify-between">
          <div
            className="lg:w-1/2 text-[#EEEEEE] py-10 lg:py-24 p-4"
            data-aos="fade-right"
          >
            <h1 className="text-[40px] rubik_font leading-tight font-medium mb-6">
              We help you, any-time you want any-where you want
            </h1>
            <div className="flex flex-col gap-2 mb-10 text-secondary">
              {[...Array(4)].map((_, index) => (
                <div className="flex items-center gap-4" key={index}>
                  <LazyLoadImage
                    src="https://i.ibb.co/HqP6jSb/icon.png"
                    alt="icon"
                  />
                  <p className="text-[18px]">Lorem ipsum dolor sit amet</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between gap-10 md:gap-16 mt-10">
              {[
                { value: "10+", label: "Templates" },
                { value: "15+", label: "Professionals" },
                { value: "25+", label: "Clients" },
              ].map((item, index) => (
                <div key={index}>
                  <h6 className="text-[40px] rubik_font leading-tight md:text-[70px] font-medium text-primary">
                    {item.value}
                  </h6>
                  <p className="md:text-xl text-sm text-secondary">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="lg:w-1/2 ml-auto overflow-hidden"
            data-aos="fade-down"
          >
            <LazyLoadImage
              src="https://i.ibb.co/GTZn2FD/globe.png"
              alt="globe"
              className="transition-transform duration-1000 ease-in-out group-hover:scale-105" // Fancy animation effect using Tailwind CSS group-hover
            />
          </div>
        </div>
      </div>
    </div>
  );
}
