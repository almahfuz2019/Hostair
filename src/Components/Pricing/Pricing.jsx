import React from "react";

const pricingPlans = [
  {
    title: "Basic Plan",
    price: "$10",
    period: "/month",
    description: "Great Fit For Startups",
    features: [
      { name: "2 Factor Authentication", included: true },
      { name: "3rd Party Integration", included: true },
      { name: "Access to Community", included: false },
      { name: "Access to Pro Content", included: false },
    ],
  },
  {
    title: "Business Plan",
    price: "$19",
    period: "/month",
    description: "Great Fit For Small Business",
    features: [
      { name: "2 Factor Authentication", included: true },
      { name: "3rd Party Integration", included: true },
      { name: "Access to Community", included: true },
      { name: "Access to Pro Content", included: false },
    ],
  },
  {
    title: "Enterprise Plan",
    price: "$40",
    period: "/month",
    description: "Great Fit For Organizations",
    features: [
      { name: "2 Factor Authentication", included: true },
      { name: "3rd Party Integration", included: true },
      { name: "Access to Community", included: true },
      { name: "Access to Pro Content", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <div>
      <section className=" max-w-[1120px] mx-auto text-white text-center">
        <div className=" px-4 mx-auto">
          <header className="pt-24">
            <div className="flex justify-between items-center">
              <h1 className="text-[56px] rubik_font font-medium primary-text">
                Pricing
              </h1>
              <p className="text-[#9CA0AB] text-[26px] inter_font font-normal">
                Home / <span className="text-primary">Pricing</span>
              </p>
            </div>
            <img
              className="mt-6 mx-auto w-full"
              src="https://i.ibb.co/qr880bH/Line-1.png"
              alt=""
            />
          </header>
          <div className="flex flex-wrap items-stretch -mx-4 py-24">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="relative flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0"
              >
                <div className="absolute inset-x-0 top-0  flex justify-center -mt-3  ">
                  <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider bg-primary text-white uppercase rounded bg-deep-purple-accent-400">
                    Most Popular
                  </div>
                </div>
                <div className="flex flex-grow flex-col p-2 space-y-6 rounded-2xl shadow sm:p-8 bg-[#212327]">
                  <div className="space-y-2">
                    <h4 className="text-base font-medium text-white mb-6">
                      {plan.title}
                    </h4>
                    <span className="text-6xl font-bold text-white ">
                      {plan.price}
                    </span>
                    <span className="text-lg text-white">{plan.period}</span>
                  </div>
                  <p className="mt-3 leading-relaxed text-secondary">
                    {plan.description}
                  </p>
                  <ul className="flex flex-col  mx-auto mb-6 text-secondary gap-y-2 bg-[#292C33] p-6 rounded-2xl">
                    <h1 className="mb-4 text-[18px] font-medium">
                      Available Features
                    </h1>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex mb-2 space-x-2">
                        {feature.included ? (
                          <>
                            <img
                              src="https://i.ibb.co/7bHfxtb/Icon-1.png"
                              alt=""
                            />
                            <span className="text-[14px]">{feature.name}</span>
                          </>
                        ) : (
                          <>
                            <img
                              src="https://i.ibb.co/4tj5SLF/Icon-2.png"
                              alt=""
                            />
                            <span className="text-[14px] line-through">
                              {feature.name}
                            </span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="inline-block px-5 py-3  tracking-wider text-center   rounded-b-lg  bg-primary text-base font-medium text-white"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
