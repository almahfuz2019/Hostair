import React from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { contactData } from "../../../public/ContactData";
AOS.init();

export default function Contact_Pricing() {
  return (
    <div className="max-w-[1120px] bg-white mx-auto ">
      <div className="mx-4 rounded-lg shadow-lg py-20" data-aos="fade-up">
        <div className="text-center text-accent mb-14">
          <p className="dark:text-white text-[#5F727F] mb-4 text-[18px] font-normal">
            Our pricing plans can be customized based on the size of your
            project <br className="lg:block hidden" /> To get your flexible
            customization plan,{" "}
            <Link
              to="/contact"
              className=" block md:inline underline underline-offset-4"
            >
              contact us
            </Link>
          </p>
        </div>
        {/* Contact Info  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactData.map((contact, index) => (
            <div
              key={index}
              className="dark:dark:bg-[#212327] bg-[#FFF5F6] bg-white gap-4 p-6 rounded-2xl text-white flex items-center dark:border-0 border border-[#C4C4C4]"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Delay for animation effect
            >
              <div>
                <LazyLoadImage src={contact.imgSrc} alt={contact.alt} />
              </div>
              <div>
                <p className="dark:dark:text-[#9CA0AB] text-[#5F727F] text-[#3C3950] text-[18px] font-normal mb-3">
                  {contact.title}
                </p>
                <p className="dark:dark:text-secondary text-[#5F727F] text-xl font-normal text-[#5F727F] ">
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
