import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FAQ() {
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
    <div className="max-w-[1120px] mx-auto pt-24 px-4 sm:px-0">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="mb-8 lg:mb-0">
          <p className="font-normal text-xl text-primary">FAQ</p>
          <h1 className="font-medium text-[40px] primary-text mb-5">
            Frequently asked <br /> questions
          </h1>
          <p className="text-[18px] font-normal text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="flex flex-col gap-3 inter_font w-full">
          {/* Map through faqs array to render each FAQ item */}
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="collapse collapse-plus bg-[#212327] primary-border rounded-[12px]"
              data-aos="fade-up"
            >
              <input
                type="radio"
                className=""
                name="faq-accordion"
                defaultChecked={index === 0}
              />
              <div className="collapse-title text-xl font-medium text-[18px] py-5">
                {faq.question}
              </div>
              <div className="collapse-content bg-white">
                <p className="mt-3 text-gray-500">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
