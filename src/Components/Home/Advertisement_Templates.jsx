import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export default function Advertisement_Templates() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="pattern_glob">
      <div className="pb-24  rounded-lg max-w-[1120px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* image  */}
          <div className="relative mx-auto" data-aos="fade-right">
            <LazyLoadImage
              src="https://i.ibb.co/ZV3LnxC/Frame-26.png"
              className="rounded-2xl  transition-transform duration-1000 ease-in-out transform dark:block hidden" // Fancy animation effect
              alt="Templates"
            />
            <LazyLoadImage
              src="https://i.ibb.co/pZYdQxC/Frame-27.png"
              className="rounded-2xl  transition-transform duration-1000 ease-in-out transform block dark:hidden sm:max-w-[445px]" // Fancy animation effect
              alt="Templates"
            />
          </div>
          {/* header section  */}
          <div className="text-white " data-aos="fade-left">
            <p className=" text-xl text-primary">Templates</p>
            <h1 className="text-[40px] rubik_font leading-tight  primary-text font-medium mb-4 mt-1">
              Fully editable pre-made website templates
            </h1>
            <p className="mb-8 dark:text-[#9CA0AB] text-[#5F727F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link
              to="/templates"
              className="primary-btn-style inline-flex  items-center gap-2 text-white py-2 px-6 rounded-lg text-base"
            >
              More
              <span>
                <LazyLoadImage
                  className="h-[14px] w-auto"
                  src="https://i.ibb.co/883cSb7/Group-24.png"
                  alt="More"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
