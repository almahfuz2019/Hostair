import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { contactData } from "../../../public/ContactData"; // Adjust the import path as needed
import { useDarkModeObserver } from "../Hooks/UseDarkModeObserver";

AOS.init();

export default function Contact_Pricing() {
  const [visibleContacts, setVisibleContacts] = useState([]);
  const isDarkMode = useDarkModeObserver();

  useEffect(() => {
    if (isDarkMode) {
      setVisibleContacts(contactData.slice(0, 3)); // First 3 items
    } else {
      setVisibleContacts(contactData.slice(3, 6)); // Second 3 items
    }
  }, [isDarkMode]);

  return (
    <div className="max-w-[1120px] mx-auto">
      <div className="mx-4 rounded-lg py-20" data-aos="fade-up">
        <div className="text-center text-accent mb-14">
          <p className="dark:text-white text-[#5F727F] mb-4 text-[18px] font-normal">
            Our pricing plans can be customized based on the size of your
            project
            <br className="lg:block hidden" />
            To get your flexible customization plan,{" "}
            <Link
              to="/contact"
              className="block md:inline text-primary underline underline-offset-4"
            >
              contact us
            </Link>
          </p>
        </div>
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleContacts.map((contact, index) => (
            <div
              key={index}
              className={`dark:bg-[#212327] shadow bg-white gap-4 p-6 rounded-2xl text-white flex items-center dark:border-0 border border-[#C4C4C4]`}
              data-aos="fade-up"
              data-aos-delay={index * 100} // Delay for animation effect
            >
              <div>
                <LazyLoadImage src={contact.imgSrc} alt={contact.alt} />
              </div>
              <div>
                <p className="dark:text-[#9CA0AB] text-[#3C3950] text-[18px] font-normal mb-3">
                  {contact.title}
                </p>
                <p className="dark:text-secondary text-[#5F727F] text-xl font-normal">
                  {contact.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
