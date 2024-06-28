import { useState } from "react";
import { IoCall } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Function to toggle the mobile menu
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Style for navigation items
  const navItemStyle =
    "text-xl tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 dm-sans-font";

  return (
    <div>
      {/* Navbar Top */}
      <div className="bg-black py-3">
        <div className="flex justify-between mx-4 md:px-20">
          {/* Left section */}
          <div className="hidden md:block md:w-1/3"></div>

          {/* Middle section */}
          <div className="md:flex justify-center w-full md:w-1/3">
            <Link
              to="/contact"
              className="inline-black rounded-full px-5 py-1 border-2 border-white text-[12px] md:text-md text-white focus:ring dm-sans-font"
            >
              Free Home Evaluation
            </Link>
          </div>

          {/* Right section */}
          <div className="flex justify-end w-full md:w-1/3">
            <a
              href="tel:416-742-8000"
              className="text-md dm-sans-font text-white font-medium flex items-center gap-2"
            >
              <IoCall /> 416-742-8000
            </a>
          </div>
        </div>
      </div>

      {/* Navbar for Desktop */}
      <div className="mx-auto">
        <div className="px-4 mx-auto py-3 md:block hidden">
          <div className="flex items-center justify-between lg:justify-center lg:space-x-16">
            {/* Left navigation items */}
            <ul className="items-center hidden space-x-8 md:flex">
              <li>
                <NavLink
                  to="/buy"
                  aria-label="Buy"
                  title="Buy"
                  className={navItemStyle}
                >
                  Buy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pre-construction"
                  aria-label="Pre Construction"
                  title="Pre Construction"
                  className={navItemStyle}
                >
                  Pre Construction
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sell"
                  aria-label="Sell"
                  title="Sell"
                  className={navItemStyle}
                >
                  Sell
                </NavLink>
              </li>
            </ul>

            {/* Logo */}
            <Link
              to="/"
              aria-label="Logo"
              title="Logo"
              className="inline-flex h-16 items-center"
            >
              <LazyLoadImage src="" alt="Enamul Haque Website Logo" />
            </Link>

            {/* Right navigation items */}
            <ul className="items-center hidden space-x-8 md:flex">
              <li>
                <NavLink
                  to="/about"
                  aria-label="About"
                  title="About"
                  className={navItemStyle}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  aria-label="Blogs"
                  title="Blogs"
                  className={navItemStyle}
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  aria-label="Contact Us"
                  title="Contact Us"
                  className={navItemStyle}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Navbar for Tablet and Phone */}
        <nav className="bg-white block shadow md:hidden absolute left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto shadow px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center ">
                  <LazyLoadImage
                    src=""
                    className="h-16"
                    alt="Enamul Haque Website Logo"
                  />
                </Link>
              </div>

              {/* Mobile menu toggle button */}
              <div className="-mr-2 flex lg:hidden">
                <button
                  onClick={toggleNavbar}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  aria-controls="mobile-menu"
                  aria-expanded={isOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Hamburger menu icon */}
                  <svg
                    className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/* Close menu icon */}
                  <svg
                    className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`transform transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden md:hidden`}
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Mobile menu items */}
              <NavLink
                exact
                to="/"
                className="block px-3 py-2 text-base font-medium"
                activeClassName="text-orange-500"
              >
                Home
              </NavLink>
              <NavLink
                to="/sell"
                className="block px-3 py-2 text-base font-medium"
                activeClassName="text-orange-500"
              >
                Sell
              </NavLink>
              <NavLink
                to="/buy"
                className="block px-3 py-2 text-base font-medium"
                activeClassName="text-orange-500"
              >
                Buy
              </NavLink>
              <NavLink
                to="/pre-construction"
                className="block px-3 py-2 text-base font-medium"
                activeClassName="text-orange-500"
              >
                Pre Construction
              </NavLink>
              <NavLink
                to="/about"
                className="block px-3 py-2 text-base font-medium"
                activeClassName="text-orange-500"
              >
                About Us
              </NavLink>
              <NavLink
                to="/blogs"
                className="block px-3 py-2 text-base font-medium"
                activeClassName="text-orange-500"
              >
                Blogs
              </NavLink>
              <NavLink
                to="/contact"
                className="block px-3 py-2 text-base font-medium"
                activeClassName="text-orange-500"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
