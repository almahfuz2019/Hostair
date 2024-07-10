import React from "react";
import { Link } from "react-router-dom";
import { AllTemplatesData } from "../../../public/Template";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Templates_Home() {
  return (
    <div className="pattern bg-contain">
      <div className="max-w-[1120px]  mx-auto py-24">
        {/* section header  */}
        <div>
          <div className="text-center">
            <h1 className="text-xl font-normal text-primary   mb-2">
              Our Special
            </h1>
            <p className="primary-text rubik_font  text-[40px] leading-tight font-medium ">
              Realtor website templates
            </p>
          </div>
          {/* Templates Grid */}
          <div className="py-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-y-10">
              {AllTemplatesData.slice(0, 6).map((template) => (
                <Link
                  to={`/template/details/${template.templateName}`}
                  key={template.id}
                >
                  <div
                    className="mx-auto   text-center flex flex-col card-container"
                    data-aos="fade-up"
                  >
                    <div className="dark:bg-[#212327] bg-[#FFF5F6] px-6 border dark:hover:border-primary hover:border-primary dark:border-[#f5f5f547] border-[#eb304c56] rounded-2xl ">
                      <LazyLoadImage
                        src={template.images[0]} // Assuming first image as template image
                        className="rounded-2xl border-[2px] border-transparent bg-back"
                        alt="Template"
                      />
                    </div>
                    <div className="text-left mt-3 ">
                      <p className="dark:text-secondary text-[#5F727F] text-[24px] font-normal">
                        {template.templateName}
                      </p>
                      <p className="dark:text-[#9CA0AB] text-[#5F727F] text-[20px] font-normal">
                        {template.mode} . {template.includePages.length} pages
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {/* button for more templates  */}
            <div className="mt-10 text-center ">
              <Link
                to="/templates"
                className=" text-[18px] primary-btn-style font-medium"
              >
                All Templates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
