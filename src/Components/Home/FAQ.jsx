import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { faqs } from "../../../public/FAQ";
export default function FAQ() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="pattern4 pt-24 mt-24  w-full pb-24 bg-[#FFF5F6] dark:bg-[#131316]">
      <div className="max-w-[1120px] mx-auto    px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* FAQ Header  */}
          <div className="mb-8 lg:mb-0">
            <p className="font-normal text-xl text-primary">FAQ</p>
            <h1 className="font-medium rubik_font text-[40px] leading-tight primary-text mb-5">
              Frequently asked questions
            </h1>
            <p className="text-[18px] font-normal dark:text-secondary text-[#5F727F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          <div className="flex flex-col gap-3  w-full">
            {/* Map through faqs array to render each FAQ item */}
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="collapse collapse-plus dark:bg-[#212327] bg-[#EB304D]  dark:border-[#f5f5f547] border-[#EB304D] border rounded-[12px]"
                data-aos="fade-up"
              >
                <input
                  type="radio"
                  className=""
                  name="faq-accordion"
                  defaultChecked={index === 0}
                />
                <div className="collapse-title text-xl font-medium text-[18px] text-[#EEEEEE]">
                  {faq.question}
                </div>
                <div className="collapse-content bg-white">
                  <p className="mt-3 text-[#5F727F] dark:text-gray-500">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
