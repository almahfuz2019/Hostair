import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FAQ_About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Define an array of FAQ items
  const faqs = [
    {
      id: 1,
      question: "Integer tristique nisi sit amet consequat pharetra.",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi iure asperiores sed dolorem fugit nihil voluptas fuga, neque delectus provident laudantium, aperiam incidunt nisi natus atque sunt quos esse modi!",
    },
    {
      id: 2,
      question: "Vestibulum dictum ex sit amet pulvinar laoreet.",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi iure asperiores sed dolorem fugit nihil voluptas fuga, neque delectus provident laudantium, aperiam incidunt nisi natus atque sunt quos esse modi!",
    },
    {
      id: 3,
      question: "Curabitur in risus eu libero commodo feugiat.",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi iure asperiores sed dolorem fugit nihil voluptas fuga, neque delectus provident laudantium, aperiam incidunt nisi natus atque sunt quos esse modi!",
    },
    {
      id: 4,
      question: "Fusce ac libero sit amet tortor varius ultrices.",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi iure asperiores sed dolorem fugit nihil voluptas fuga, neque delectus provident laudantium, aperiam incidunt nisi natus atque sunt quos esse modi!",
    },
    {
      id: 5,
      question: "Sed dictum felis eget neque tristique, vitae suscipit felis.",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi iure asperiores sed dolorem fugit nihil voluptas fuga, neque delectus provident laudantium, aperiam incidunt nisi natus atque sunt quos esse modi!",
    },
  ];

  return (
    <div className="max-w-[1120px] mx-auto pt-24 px-4">
      <header data-aos="fade-up">
        <div className="flex items-end gap-4 mb-14 text-primary">
          <span className=" rubik_font font-medium text-4xl leading-none">
            <span className="hidden md:block">Frequently asked questions</span>
            <span className="md:hidden block">FAQ</span>
          </span>
          <div className="flex-grow border-t border-primary"></div>
        </div>
      </header>
      <div className="sm:w-[70%] ml-auto">
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
  );
}
