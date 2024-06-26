import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function WhatWeDo() {
  // Initialize AOS library
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with a duration and once flag
  }, []);

  return (
    <section className="max-w-[1120px] mx-auto pt-24">
      {/* Section heading */}
      <header data-aos="fade-up">
        <div className="flex justify-start items-end w-full mb-14">
          <div className="border-primary w-full border border-1 border-t-0" />
          <h1 className="text-primary rubik_font font-medium text-4xl w-80 leading-none">
            What we do
          </h1>
        </div>
      </header>

      {/* Main content area */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-32">
        {/* Image gallery */}
        <div className="flex flex-col gap-4 w-full" data-aos="fade-right">
          <img src="https://i.ibb.co/5WJ8zjh/Group-6.png" alt="Group 6" />
          <img src="https://i.ibb.co/pWJ0Tk6/Group-5.png" alt="Group 5" />
          <img src="https://i.ibb.co/sbv32wP/Group-4.png" alt="Group 4" />
          <img src="https://i.ibb.co/yd2k8QJ/Group-3.png" alt="Group 3" />
        </div>

        {/* Text content */}
        <article
          className="inter_font text-lg text-secondary mt-4 md:ml-8"
          data-aos="fade-left"
        >
          <p className="-ml-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laborin
          </p>
          <ul className="mt-8 list-disc">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
