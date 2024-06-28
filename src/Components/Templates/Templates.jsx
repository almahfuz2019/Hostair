import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { AllTemplatesData } from "../../../public/Template";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Templates() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Array of template objects

  return (
    <div className="max-w-[1120px] mx-auto ">
      <div className="px-4">
        {/* breadcrumb section  */}
        <header className="pt-24" data-aos="fade-down">
          <div className="flex justify-between md:items-center items-end md:-mb-3">
            <h1 className="text-4xl rubik_font md:text-[56px] rubik_font font-medium primary-text flex md:pb-4">
              <span className="md:block hidden mr-4 ">Our </span> Templates
            </h1>
            <p className="text-[#9CA0AB] text-base md:text-[26px] font-normal">
              Home /
              <span className="light:text-primary dark:text-primary ml-1">
                All Templates
              </span>
            </p>
          </div>
          <LazyLoadImage
            className="mt-6 mx-auto "
            src="https://i.ibb.co/qr880bH/Line-1.png"
            alt="Line"
          />
        </header>

        {/* Templates */}
        <div className="py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-y-10">
            {AllTemplatesData.map((template) => (
              <Link
                to={`/template/details/${template.templateName}`}
                key={template.id}
              >
                <div
                  className="mx-auto  text-center flex flex-col card-container"
                  data-aos="fade-up"
                >
                  <div className="bg-[#212327] px-6 border border-[#f5f5f547] rounded-2xl hover:border-primary">
                    <LazyLoadImage
                      src={template.images[0]} // Assuming first image as template image
                      className="rounded-2xl border-[2px] border-transparent bg-back"
                      alt="Template"
                    />
                  </div>
                  <div className="text-left mt-3">
                    <p className="text-secondary text-[24px] font-normal">
                      {template.templateName}
                    </p>
                    <p className="text-[#9CA0AB] text-[20px] font-normal">
                      {template.mode} . {template.includePages.length} pages
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
