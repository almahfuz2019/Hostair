import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS
import Footer from "./Footer";
import Navbar from "./Navbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true, // Ensure animation happens only once
    });
  }, []);

  return (
    <div>
      {/* Main container with responsive padding */}
      <div className="max-w-[1120px]  mx-auto px-4 sm:px-4 lg:px-4">
        <Navbar />
        <div className="flex flex-col  h-screen justify-center items-center py-16 md:py-32">
          <h1
            className="font-medium text-[40px] rubik_font leading-tight  text-center mb-14 md:mb-20  primary-text rubik_font"
            data-aos="fade-up"
          >
            Opppsss, <br /> page not found
          </h1>
          <LazyLoadImage
            src="/assets/Dark/Not_Found_Page/Dark/image.png"
            alt="Page not found"
            className="px-10 dark:block hidden"
            data-aos="zoom-in"
          />
          <LazyLoadImage
            src="../../../public/assets/Dark/Not_Found_Page/Image.png"
            alt="Page not found"
            className="px-10 block dark:hidden"
            data-aos="zoom-in"
          />
          <Link
            to="/"
            className="text-base text-white bg-primary text-center px-[20px] py-[10px] md:px-[24px] md:py-[14px] rounded-md mt-10"
          >
            Back to home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
