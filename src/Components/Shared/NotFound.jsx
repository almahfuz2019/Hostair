import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function NotFound() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true, // Ensure animation happens only once
    });
  }, []);

  return (
    <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="flex flex-col justify-center items-center py-16 md:py-32">
        <h1
          style={{ lineHeight: "56px" }}
          className="font-medium text-[32px] md:text-[40px] text-center mb-8 md:mb-16 primary-text"
          data-aos="fade-up"
        >
          Opppsss, <br /> page not found
        </h1>
        <img
          src="https://i.ibb.co/ZR9hHZv/Group-41.png"
          alt="Page not found"
          className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px]"
          data-aos="zoom-in"
        />
      </div>
      <Footer />
    </div>
  );
}
