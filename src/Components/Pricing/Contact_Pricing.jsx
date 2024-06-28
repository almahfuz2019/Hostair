import React from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { contactData } from "../../../public/ContactData";
AOS.init();

export default function Contact_Pricing() {
  return (
    <div className="max-w-[1120px] mx-auto ">
      <div className="mx-4 rounded-lg shadow-lg py-20" data-aos="fade-up">
        <div className="text-center text-accent mb-14">
          <p className="text-white mb-4 text-[18px] font-normal">
            Our pricing plans can be customized based on the size of your
            project <br className="lg:block hidden" /> To get your flexible
            customization plan,{" "}
            <Link
              to="/contact"
              className="text-primary block md:inline underline underline-offset-4"
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
              className="bg-[#212327] gap-4 p-6 rounded-2xl text-white flex items-center"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Delay for animation effect
            >
              <div>
                <LazyLoadImage src={contact.imgSrc} alt={contact.alt} />
              </div>
              <div>
                <p className="text-[#9CA0AB] text-[18px] font-normal mb-3">
                  {contact.title}
                </p>
                <p className="text-secondary text-xl font-normal">
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
