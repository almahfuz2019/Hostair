import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export default function Hero() {
  const [centerImage, setCenterImage] = useState(
    "https://i.ibb.co/RSy7tj9/Group-20.png",
  );
  const [lastHoveredImage, setLastHoveredImage] = useState(
    "https://i.ibb.co/gwHnXJ6/Group-20-1-1.png",
  );
  const images = [
    {
      src: "https://i.ibb.co/wzn5B0V/Group-3.png",
      srcForLightMode: "https://i.ibb.co/fMtn4FP/Group-3-2.png",
      alt: "Website Templates",
      centerImage: "https://i.ibb.co/dBgN8yW/Group-50.png",
    },
    {
      src: "https://i.ibb.co/cCKgRLT/Group-4.png",
      srcForLightMode: "https://i.ibb.co/YPdFC2V/Group-4-3.png",
      alt: "Workflow Automation",
      centerImage: "https://i.ibb.co/tCpsKXh/Group-51.png",
    },
    {
      src: "https://i.ibb.co/Gc24mVM/Group-5.png",
      srcForLightMode: "https://i.ibb.co/xFB7KVk/Group-5-2.png",
      alt: "Contact Management",
      centerImage: "https://i.ibb.co/Wyb84jX/Group-52.png",
    },
    {
      src: "https://i.ibb.co/YkDYLrg/Group-6.png",
      srcForLightMode: "https://i.ibb.co/0m5yRn4/Group-6-2.png",
      alt: "E-mail Marketing",
      centerImage: "https://i.ibb.co/99dSVhT/Group-53.png",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleMouseEnter = (image) => {
    setCenterImage(image.centerImage);
    setLastHoveredImage(image.centerImage);
  };

  const handleMouseLeave = () => {
    setCenterImage(lastHoveredImage);
  };

  return (
    <div className="relative">
      <div className="lighting hidden lg:block"></div>{" "}
      {/* This will ensure the lighting background is behind the content */}
      <div className="max-w-[1120px] mx-auto px-4 lg:px-0 lg:pb-24 -mt-36 pt-48 lg:pt-36">
        <section className="flex flex-col items-center py-12 lg:py-0">
          <div className="text-center">
            <h1
              className="text-3xl rubik_font sm:text-6xl primary-text font-medium pb-6 text-white"
              data-aos="fade-up"
            >
              We provide professional <br className="hidden lg:block" /> real
              estate agent services
            </h1>
            <p
              className="dark:text-[#9CA0AB] text-[#5F727F] text-[16px] sm:text-[18px] mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus{" "}
              <br className="hidden lg:block" />
              sodales leo id commodo ornare. Vestibulum lobortis ligula
              vehicula.
            </p>
            <div className="space-x-4" data-aos="fade-up" data-aos-delay="400">
              <Link to="/contact" className="text-white primary-btn-style">
                Contact Us
              </Link>
              <Link to="/about" className="secondary-btn-style text-white">
                About Us
              </Link>
            </div>
          </div>
          <div className="mt-16 lg:hidden block">
            <div className="relative" data-aos="zoom-in" data-aos-delay="400">
              <LazyLoadImage
                src={centerImage}
                alt="Center"
                className="object-cover transition-transform duration-300 max-w-full"
              />
            </div>
            {/* for tab and phone  */}
            <div className=" grid-cols-4 md:grid-cols-4 items-center gap-4 dark:grid hidden">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(image)}
                  onMouseLeave={handleMouseLeave}
                  data-aos="zoom-in"
                  data-aos-delay={index * 200}
                >
                  <LazyLoadImage
                    src={image.src}
                    alt={image.alt}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            {/* light mode  */}
            <div className="grid grid-cols-4 md:grid-cols-4 items-center gap-4 dark:hidden ">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(image)}
                  onMouseLeave={handleMouseLeave}
                  data-aos="zoom-in"
                  data-aos-delay={index * 200}
                >
                  <LazyLoadImage
                    src={image.srcForLightMode}
                    alt={image.alt}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 lg:grid grid-cols-1 lg:grid-cols-3 items-start justify-between hidden">
            <div className="lg:grid grid-cols-1 mx-auto gap-4 hidden">
              {images.slice(0, 2).map((image, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(image)}
                  onMouseLeave={handleMouseLeave}
                  data-aos="zoom-in"
                  data-aos-delay={index * 200}
                >
                  <LazyLoadImage
                    src={image.src}
                    alt={image.alt}
                    className="hover:scale-105 hover:border-primary hover:border rounded-lg transition-transform duration-300 dark:block hidden"
                  />
                  <LazyLoadImage
                    src={image.srcForLightMode}
                    alt={image.alt}
                    className="hover:scale-105 hover:border-primary hover:border rounded-lg transition-transform duration-300 block dark:hidden"
                  />
                </div>
              ))}
            </div>
            <div
              className="relative flex mx-auto justify-center items-center"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <LazyLoadImage
                src={centerImage}
                alt="Center"
                className="object-cover scale-125 mt-10 transition-transform duration-300"
              />
            </div>
            <div className="lg:grid grid-cols-1 mx-auto gap-4 hidden">
              {images.slice(2).map((image, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(image)}
                  onMouseLeave={handleMouseLeave}
                  data-aos="zoom-in"
                  data-aos-delay={(index + 2) * 200}
                >
                  <LazyLoadImage
                    src={image.src}
                    alt={image.alt}
                    className="hover:scale-105 hover:border-primary hover:border rounded-lg transition-transform duration-300 dark:block hidden"
                  />
                  <LazyLoadImage
                    src={image.srcForLightMode}
                    alt={image.alt}
                    className="hover:scale-105 hover:border-primary hover:border rounded-lg transition-transform duration-300 dark:hidden block"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
