import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export default function Advertisement_Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="pt-24 rounded-lg max-w-[1120px] mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* header section   */}
        <div className="text-white order-2 lg:order-none " data-aos="fade-left">
          <p className="text-primary text-xl">Services</p>
          <h1 className="text-[40px] rubik_font leading-tight primary-text font-medium mb-4 mt-1">
            AI & IDX integration
          </h1>
          <p className="mb-8 text-[#9CA0AB]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link
            to="/about"
            className="primary-btn-style inline-flex items-center gap-2 text-white py-2 px-6 rounded-lg text-base"
          >
            More
            <span>
              <LazyLoadImage
                className="h-[14px] w-auto "
                src="https://i.ibb.co/883cSb7/Group-24.png"
                alt="More"
              />
            </span>
          </Link>
        </div>
        {/* image  */}
        <div
          className="relative order-1 md:order-none mx-auto"
          data-aos="fade-left"
        >
          <LazyLoadImage
            src="https://i.ibb.co/m9Hcj2X/Group-48.png"
            className="rounded-2xl pt-8  "
            alt="Templates"
          />
        </div>
      </div>
    </div>
  );
}
