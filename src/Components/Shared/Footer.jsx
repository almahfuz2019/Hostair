import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
    reset(); // Reset the form fields
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [isSubmitted]);
  return (
    <footer className="w-full pt-24 lato_font">
      {/* Subscription Form */}
      <div className=" px-4 -mb-20 max-w-xl   relative z-20 mx-auto ">
        <div
          className="text-center bg-[#EB304D] dark:bg-[#1c1c1e] px-8 py-12 rounded-md shadow-lg"
          data-aos="fade-up"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center h-10 md:h-14">
              <input
                type="email"
                placeholder="Enter your email here . . ."
                className="p-4 w-full max-w-[400px] bg-[#FFFFFF] dark:bg-[#2b2b2e] text-black dark:text-white placeholder-gray-500 rounded-l-md focus:outline-none "
                {...register("email", { required: true })}
              />
              <button
                type="submit"
                className=" bg-[#3C3950] dark:bg-primary text-white px-4 rounded-r-md"
              >
                Subscribe
              </button>
            </div>
          </form>
          {isSubmitted && (
            <p className="dark:text-green-500 text-white mt-6 text-xl md:text-2xl font-light">
              Subscription successful!
            </p>
          )}
          <p className="text-white  mt-6 text-xl  font-light">
            Subscribe Our Newsletter
          </p>
        </div>
      </div>

      {/* Footer Content */}
      <div className="dark:bg-[#131316] bg-[#3C3950] px-4">
        <div className="py-8 md:pb-16  pt-36 text-white max-w-[1120px] mx-auto items-end grid grid-cols-1 md:grid-cols-3 lg:flex gap-x-20 gap-y-8 lg:gap-y-16">
          {/* Company Info Section */}
          <aside className="lg:w-[20%] mb-8 lg:mb-0" data-aos="fade-up">
            <LazyLoadImage
              src="https://i.ibb.co/tQDm8Dd/logo-1.png"
              alt="logo"
            />
            <p className="text-base my-8 text-[#F8F8F8]">
              70 Washington Square South, New York, NY 10012, United States
            </p>
            <div className="flex justify-start gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoadImage
                  src="https://i.ibb.co/gt8rjhc/instagram.png"
                  alt="Instagram"
                  className="hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoadImage
                  src="https://i.ibb.co/W26RzLK/youtube.png"
                  alt="YouTube"
                  className="hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoadImage
                  src="https://i.ibb.co/9ZX79gS/linkedin.png"
                  alt="LinkedIn"
                  className="hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoadImage
                  src="https://i.ibb.co/b3hCqf6/facebook.png"
                  alt="Facebook"
                  className="hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
          </aside>

          {/* Navigation Links */}
          {[
            {
              links: [
                { name: "Customer Care", to: "#" },
                { name: "Clients Reviews", to: "#" },
                { name: "Warranty Policy", to: "#" },
                { name: "Return and Exchange", to: "#" },
              ],
            },
            {
              links: [
                { name: "About Us", to: "/about" },
                { name: "Pricing", to: "/pricing" },
                { name: "Careers", to: "#" },
                { name: "Terms of Services", to: "#" },
              ],
            },
            {
              links: [
                { name: "FAQs", to: "/about" },
                { name: "Privacy Policy", to: "#" },
                { name: "Our Locations", to: "#" },
                { name: "Shopping Guide", to: "#" },
              ],
            },
            {
              links: [
                { name: "Reports", to: "#" },
                { name: "Company Profile", to: "#" },
                { name: "Payment", to: "#" },
                { name: "News and Events", to: "#" },
              ],
            },
          ].map((section, index) => (
            <nav className="w-auto" key={index} data-aos="fade-up">
              {section.links.map((link, linkIndex) => (
                <Link
                  to={link.to}
                  key={linkIndex}
                  className="link link-hover text-base block mb-3 hover:text-red-600 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          ))}
        </div>
      </div>
    </footer>
  );
}
