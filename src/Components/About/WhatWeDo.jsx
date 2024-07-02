import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function WhatWeDo() {
  // Initialize AOS library
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with a duration and once flag
  }, []);
  // images
  const images = [
    {
      src: "https://i.ibb.co/YkDYLrg/Group-6.png",
      alt: "Group 6",
    },
    {
      src: "https://i.ibb.co/cCKgRLT/Group-4.png",
      alt: "Group 5",
    },
    {
      src: "https://i.ibb.co/wzn5B0V/Group-3.png",
      alt: "Group 4",
    },
    {
      src: "https://i.ibb.co/Gc24mVM/Group-5.png",
      alt: "Group 3",
    },
  ];
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
            {images.map((image, index) => (
              <LazyLoadImage
                key={index}
                className=" hover:scale-105 transition-transform duration-300 rounded-md hover:border-primary hover:border"
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
