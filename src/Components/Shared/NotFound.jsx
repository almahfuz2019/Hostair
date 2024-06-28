import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS
import Footer from "./Footer";
import Navbar from "./Navbar";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
            src="https://i.ibb.co/ZR9hHZv/Group-41.png"
            alt="Page not found"
            className="px-10 "
            data-aos="zoom-in"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
