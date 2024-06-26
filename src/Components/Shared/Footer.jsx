import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <footer className="bg-[#131316] w-full">
      <div className="py-8 md:py-16 text-white max-w-[1120px] mx-auto items-end grid grid-cols-1 md:grid-cols-5 gap-20">
        <aside data-aos="fade-up">
          <h1 className="text-xl font-medium">Company Name</h1>
          <p className="text-base my-8 text-[#F8F8F8]">
            70 Washington Square South, New York, NY 10012, United States
          </p>
          <div className="flex justify-start  gap-4">
            <img
              src="https://i.ibb.co/gt8rjhc/instagram.png"
              alt="Instagram"
              className=""
            />
            <img
              src="https://i.ibb.co/W26RzLK/youtube.png"
              alt="YouTube"
              className=""
            />
            <img
              src="https://i.ibb.co/9ZX79gS/linkedin.png"
              alt="LinkedIn"
              className=""
            />
            <img
              src="https://i.ibb.co/b3hCqf6/facebook.png"
              alt="Facebook"
              className=""
            />
          </div>
        </aside>
        <nav data-aos="fade-up">
          <Link to="" className="link link-hover text-base block mb-3">
            Customer Care
          </Link>
          <Link to="" className="link link-hover text-base block mb-3">
            Clients Reviews
          </Link>
          <Link to="" className="link link-hover text-base block mb-3">
            Warranty Policy
          </Link>
          <Link to="" className="link link-hover text-base block mb-3">
            Return and Exchange
          </Link>
        </nav>
        <nav data-aos="fade-up">
          <Link to="" className="link link-hover text-base block mb-3">
            About Us
          </Link>
          <Link to="" className="link link-hover text-base block mb-3">
            Pricing
          </Link>
          <Link to="" className="link link-hover text-base block mb-3">
            Careers
          </Link>
          <Link to="" className="link link-hover text-base block mb-3">
            Terms of Services
          </Link>
        </nav>
        <nav data-aos="fade-up">
          <Link to="" className="link link-hover text-base block mb-3">
            FAQs
          </Link>
          <Link to="" className="link link-hover text-base block mb-3">
            Privacy Policy
          </Link>
          <Link to="" className="link link-hover text-base block mb-3">
            Our Locations
          </Link>
          <Link to="" className="link link-hover text-base block mb-3">
            Shopping Guide
          </Link>
        </nav>
        <nav data-aos="fade-up">
          <Link to="" className="link link-hover text-base block mb-3">
            Reports
          </Link>
          <Link to="" className="link link-hover text-base block mb-3">
            Company Profile
          </Link>
          <Link to="" className="link link-hover text-base block mb-3">
            Payment
          </Link>
          <Link to="" className="link link-hover text-base block mb-3">
            News and Events
          </Link>
        </nav>
      </div>
    </footer>
  );
}
