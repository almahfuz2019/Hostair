import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Link, NavLink } from "react-router-dom";

const NavbarForPhone = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Function to toggle the mobile menu
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Style for navigation items

  return (
    <div>
      <div className="mx-auto pb-10">
        {/* Navbar for Tablet and Phone */}
        <nav className="bg-[#212327] pb-2  block shadow lg:hidden absolute left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center ">
                  <LazyLoadImage
                    src="https://i.ibb.co/tQDm8Dd/logo-1.png"
                    className=""
                    alt=" Logo"
                  />
                </Link>
              </div>

              {/* Mobile menu toggle button */}
              <div className="-mr-2 flex lg:hidden ">
                <button
                  onClick={toggleNavbar}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md hover:bg-primary text-white focus:outline-none focus:bg-primary"
                  aria-controls="mobile-menu"
                  aria-expanded={isOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Hamburger menu icon */}
                  <svg
                    className={`${
                      isOpen ? "hidden" : "block"
                    } sm:h-8 h-6 w-6 sm:w-8`}
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
                    className={`${
                      isOpen ? "block" : "hidden"
                    } sm:h-8 h-6 w-6 sm:w-8`}
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
            className={`transform transition-all bg-opacity-60   duration-300 ease-in-out ${
              isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden lg:hidden`}
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border border-x-0 border-b-0">
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
                to="/about"
                className="block px-3 py-2 text-base font-medium"
                activeClassName="text-orange-500"
              >
                About
              </NavLink>
              <NavLink
                to="/templates"
                className="block px-3 py-2 text-base font-medium"
                activeClassName="text-orange-500"
              >
                Templates
              </NavLink>
              <NavLink
                to="/contact"
                className="block px-3 py-2 text-base font-medium"
                activeClassName="text-orange-500"
              >
                Contact
              </NavLink>
              <NavLink
                to="/pricing"
                className="block px-3 py-2 text-base font-medium"
                activeClassName="text-orange-500"
              >
                Pricing
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavbarForPhone;
