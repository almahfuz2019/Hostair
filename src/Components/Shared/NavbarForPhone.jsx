import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Link, NavLink } from "react-router-dom";

const NavbarForPhone = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Function to toggle the mobile menu
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

useEffect(() => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);
}, [theme]);

const toggleTheme = () => {
  setTheme(theme === "dark" ? "light" : "dark");
};
  // Style for navigation items

  return (
    <div>
      <div className="mx-auto pb-10 ">
        {/* Navbar for Tablet and Phone */}
        <nav className="dark:bg-[#212327] bg-primary  dark:pb-2  block  lg:hidden absolute left-0 right-0 z-50 shadow-xl">
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
              <div className="flex items-center gap-2">
                <label className="swap swap-rotate ">
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                  />
                  {/* sun icon */}
                  <svg
                    className="swap-on h-7 w-7 fill-current "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-off h-7 w-7 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
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
          </div>

          {/* Mobile menu */}
          <div
            className={`transform transition-all bg-opacity-60   duration-300 ease-in-out ${
              isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden lg:hidden`}
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border border-x-0 border-b-0 text-[#3C3950] dark:text-white bg-[#FFF5F6] dark:bg-[#212327] ">
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
