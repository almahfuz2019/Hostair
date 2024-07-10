import "aos/dist/aos.css";
import AOS from "aos";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { pricingPlans } from "../../../public/PricingPlans";
AOS.init();
export default function Pricing() {
  return (
    <div>
      <section className="max-w-[1120px]  mx-auto text-white text-center ">
        <div className="mx-4">
          <div className="mx-auto">
            {/* breadcrumb section  */}
            <header className="pt-24 " data-aos="fade-down">
              <div className="flex justify-between md:items-center items-end ">
                <h1 className="text-4xl rubik_font md:text-[56px] rubik_font font-medium primary-text pb-4">
                  Pricing
                </h1>
                <p className="dark:text-[#9CA0AB] text-[#5F727F] text-base md:text-[26px] font-normal">
                  Home / <span className="text-primary">Pricing</span>
                </p>
              </div>
              {/* line Image  */}
              <LazyLoadImage
                className="mt-6 mx-auto "
                src="https://i.ibb.co/qr880bH/Line-1.png"
                alt="Line"
              />
            </header>
            {/*Pricing Content  */}
            <div className="flex flex-wrap items-stretch pt-24">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className="relative  flex w-full mb-16 md:mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 px-2 "
                  data-aos="fade-up"
                  data-aos-delay={index * 40} // Delay for animation effect
                >
                  {index === 1 && (
                    <div className="absolute inset-x-0 top-0 flex justify-center -mt-3 ">
                      <div className="inline-block primary-btn-style">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="flex flex-grow flex-col p-2 space-y-6 rounded-2xl  shadow sm:p-8 dark:dark:bg-[#212327] bg-[#FFF5F6]  dark:border-0 border border-[#C4C4C4]">
                    <div className="space-y-2 mt-6">
                      <h4 className="text-base font-medium dark:dark:text-secondary  text-[#5F727F]  mb-6">
                        {plan.title}
                      </h4>
                      <span className="text-6xl font-medium dark:text-white text-[#3C3950]">
                        {plan.price}
                      </span>
                      <span className="text-lg dark:text-white text-[#3C3950]">
                        {plan.period}
                      </span>
                    </div>
                    <p className="dark:dark:text-secondary text-[#5F727F] ">
                      {plan.description}
                    </p>
                    <div className="dark:bg-[#292C33] bg-[#FFF5F6] rounded-2xl">
                      <ul className="flex flex-col mx-auto   dark:dark:text-secondary text-[#5F727F] gap-y-2  p-6 ">
                        <h1 className="mb-4 text-[18px] font-medium  dark:dark:text-secondary text-[#5F727F]">
                          Available Features
                        </h1>
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex mb-2 space-x-2">
                            {feature.included ? (
                              <>
                                <LazyLoadImage
                                  src="https://i.ibb.co/7bHfxtb/Icon-1.png"
                                  alt="Included"
                                  className="dark:block hidden"
                                />
                                <LazyLoadImage
                                  src="https://i.ibb.co/RYrwy4F/Icon-3.png"
                                  alt="Included"
                                  className="dark:hidden block"
                                />
                                <span className="text-[14px]">
                                  {feature.name}
                                </span>
                              </>
                            ) : (
                              <>
                                <LazyLoadImage
                                  src="https://i.ibb.co/4tj5SLF/Icon-2.png"
                                  alt="Not Included"
                                  className="dark:block hidden"
                                />
                                <LazyLoadImage
                                  src="https://i.ibb.co/tmMhJnn/Icon-4.png"
                                  alt="Not Included"
                                  className="dark:hidden block"
                                />
                                <span className="text-[14px] line-through">
                                  {feature.name}
                                </span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        type="button"
                        className="inline-block w-full px-5 py-3 tracking-wider text-center rounded-b-lg bg-[#EB304D] dark:bg-primary hover:bg-red-600 text-base font-medium text-white"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
