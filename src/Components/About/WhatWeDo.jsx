import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDarkModeObserver } from "../Hooks/UseDarkModeObserver";
import { images } from "../../../public/WhatWeDo";

export default function WhatWeDo() {
  const isDarkMode = useDarkModeObserver();
  const [visibleContacts, setVisibleContacts] = useState([]);

  // Initialize AOS library
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with a duration and once flag
  }, []);
 
  useEffect(() => {
    if (isDarkMode) {
      setVisibleContacts(images.slice(0, 4)); // First 3 items
    } else {
      setVisibleContacts(images.slice(4, 8)); // Second 3 items
    }
  }, [isDarkMode]);
  return (
    <div className="pattern5">
      <section className="max-w-[1120px] mx-auto pt-24 px-4 ">
        {/* Section heading */}
        <header data-aos="fade-up">
          <div className="flex items-end gap-4 mb-14">
            <div className="flex-grow border-t border-primary"></div>
            <span className=" rubik_font font-medium text-4xl leading-none text-primary">
              What we do
            </span>
          </div>
        </header>

        {/* Main content area */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-16 lg:gap-28">
          <div
            className="justify-center grid grid-cols-2 md:grid-cols-4 lg:flex flex-col gap-4 w-full"
            data-aos="zoom-in-right"
          >
            {visibleContacts.map((image, index) => (
              <LazyLoadImage
                key={index}
                className=" hover:scale-105 transition-transform duration-300 rounded-md dark:hover:border-primary hover:border-[#D8D8D8] hover:border"
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>

          {/* Text content */}
          <article
            className="text-base sm:text-lg dark:text-secondary text-[#5F727F] mt-4 md:mt-0 md:ml-0 "
            data-aos="fade-left"
          >
            <p className="dark:text-secondary text-[#5F727F] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laborin
            </p>
            <ul className="mt-8 list-disc ml-4">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
