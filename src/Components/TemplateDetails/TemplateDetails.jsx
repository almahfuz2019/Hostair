import { Link, useParams } from "react-router-dom";
import { AllTemplatesData } from "../../../public/Template"; // Importing your template data
import { Helmet } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";
import line from "/assets/Dark/Line.png";
import { useState } from "react";

export default function TemplateDetails() {
  const { name } = useParams(); // Get the template name from the URL params
  const template = AllTemplatesData.find(
    (t) => t.templateName.toLowerCase() === name.toLowerCase(),
  ); // Find the template object based on name

  const [modalState, setModalState] = useState({
    pc: false,
    phone: false,
  });

  const openModal = (deviceType) => {
    setModalState({ ...modalState, [deviceType]: true });
  };

  const closeModal = (deviceType) => {
    setModalState({ ...modalState, [deviceType]: false });
  };

  if (!template) {
    return <div>Template not found</div>; // Handle case where template is not found
  }

  return (
    <div className="max-w-[1120px] mx-auto">
      <Helmet>
        <title>{template.templateName}</title>
      </Helmet>

      <div className="text-secondary mx-4">
        <header className="pt-16" data-aos="fade-down">
          <div className="flex justify-between md:items-center items-end">
            <h1 className="text-4xl md:text-[56px] rubik_font font-medium primary-text">
              {template.templateName}
            </h1>
            <p className="text-[#9CA0AB] hidden md:flex text-base md:text-[26px] font-normal">
              Home / <span className="lg:block hidden">All templates / </span>
              <span className="light:text-primary text-primary ml-2">
                Template
              </span>
            </p>
          </div>
          <LazyLoadImage className="mt-4 mx-auto" src={line} alt="Line" />
        </header>
        <LazyLoadImage
          className="mt-12 lg:mt-16"
          src={template.images[1]}
          alt="Template"
        />

        <main className="mx-auto grid md:grid-cols-2 grid-cols-1 justify-center pt-12 pb-16 gap-16">
          <div className="bg-[#FFF5F6] dark:bg-[#212327] p-4 rounded-2xl border-[0.5px] border-[#EB304D] dark:border-[#F5F5F5]">
            <LazyLoadImage
              src={template.images[2]} // Assuming the third image as template image
              alt="Template Image"
              className="w-full max-w-screen-lg rounded-lg shadow-lg"
            />
          </div>

          <div>
            <section>
              <h2 className="text-[40px] leading-tight font-medium text-primary mb-4">
                Overview
              </h2>
              <p className="mb-4 dark:text-[#CECECE] text-[#5F727F]">
                {template.overview.content_Part1}
              </p>
              <p className="mb-4 dark:text-[#CECECE] text-[#5F727F]">
                {template.overview.content_Part2}
              </p>
            </section>

            <section className="flex flex-wrap gap-3 my-8">
              <button
                onClick={() => openModal("pc")}
                className="text-[18px] primary-btn-style font-medium"
              >
                View PC Mode
              </button>
              <button
                onClick={() => openModal("phone")}
                className="text-[18px] primary-btn-style font-medium"
              >
                View Phone Mode
              </button>
              <Link
                to="/contact"
                className="text-[18px] primary-btn-style font-medium"
              >
                Request A Demo
              </Link>
            </section>
            <section className="mb-10">
              <h2 className="text-[40px] leading-tight font-medium text-primary mb-4">
                Include pages
              </h2>
              <ul className="list-disc list-inside dark:text-[#CECECE] text-[#5F727F]">
                {template.includePages.map((page, index) => (
                  <li key={index}>{page}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-[40px] leading-tight font-medium text-primary">
                Feature List
              </h2>
              <p className="my-5 dark:text-[#CECECE] text-[#5F727F]">
                Our templates are 100% customizable - we provide you with the
                ultimate flexibility to customize, update, and change easily as
                per your requirements. You can clone elements, pages, and
                sections very easily with clear, reusable code and make tons of
                style changes in the template.
              </p>
              <ul className="list-disc list-inside dark:text-[#CECECE] text-[#5F727F]">
                {template.featuresList.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      </div>

      {/* Modal for PC Mode */}
      {modalState.pc && (
        <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center z-50 w-[100vw]">
          <div className="mockup-browser bg-base-300 border w-[100vw]">
            <div className="mockup-browser-toolbar pt-2">
              <div className="input lowercase">
                {`https://${template.templateName}.com`}
              </div>
              <button
                className="text-white  border  rounded-full p-1 flex justify-center items-center text-2xl h-8 w-8 "
                onClick={() => closeModal("pc")}
              >
                &times;
              </button>
            </div>
            <div className="p-4 modal-content">
              <iframe
                src={template.liveLink}
                title="PC Mode Demo"
                className="w-full h-[90vh] border-none"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Phone Mode */}
      {modalState.phone && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-base-300  rounded-lg overflow-hidden w-full max-w-[430px] max-h-[1000px]">
            <div className="flex justify-between items-center px-4 py-2">
              <h3 className="text-lg font-medium text-gray-200">
                <div className="input font-normal lowercase h-7">
                  {`https://${template.templateName}.com`}
                </div>
              </h3>
              <button
                className="text-white bg-base-300   border  rounded-full p-1 flex justify-center items-center text-2xl h-8 w-8 "
                onClick={() => closeModal("phone")}
              >
                &times;
              </button>
            </div>
            <div className="modal-content flex justify-center items-center">
              <div className="relative flex justify-center h-[90vh] w-[430px] border-4 border-black rounded-2xl">
                {/* iframe inside the phone */}
                <div className="flex items-center justify-center w-full h-full">
                  <iframe
                    src={template.liveLink}
                    title="Phone Mode Demo"
                    className="w-full h-full rounded-xl"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
