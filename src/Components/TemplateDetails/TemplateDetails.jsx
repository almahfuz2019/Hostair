import { useParams } from "react-router-dom";
import { AllTemplatesData } from "../../../public/Template"; // Importing your template data
import { Helmet } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function TemplateDetails() {
  const { name } = useParams(); // Get the template name from the URL params
  const template = AllTemplatesData.find(
    (t) => t.templateName.toLowerCase() === name.toLowerCase(),
  ); // Find the template object based on name

  if (!template) {
    return <div>Template not found</div>; // Handle case where template is not found
  }

  return (
    <div className="max-w-[1120px] mx-auto">
      <Helmet>
        <title>{template.templateName}</title>
      </Helmet>
      <div className="text-secondary mx-4">
        {/* breadcrumb section with logic  */}
        <header className=" " data-aos="fade-down">
          {/* breadcrumb section  */}
          <header className="pt-24" data-aos="fade-down">
            <div className="flex justify-between md:items-center items-end">
              <h1 className="text-4xl md:text-[56px] rubik_font font-medium primary-text flex">
                <span className="lg:hidden block">{template.templateName}</span>
                <span className="hidden lg:block">{template.templateName}</span>
              </h1>
              <p className="text-[#9CA0AB]  hidden text-base md:text-[26px] font-normal md:flex">
                Home / <span className="lg:block hidden">All templates / </span>
                <span className="light:text-primary dark:text-primary ml-2">
                  Template
                </span>
              </p>
            </div>
            <LazyLoadImage
              className="mt-6 mx-auto"
              src="https://i.ibb.co/qr880bH/Line-1.png"
              alt="Line"
            />
          </header>
        </header>
        <LazyLoadImage
          className="mt-16 lg:mt-24"
          src={template.images[1]}
          alt="Line"
        />

        {/* Main Content Section */}
        <main className="mx-auto grid md:grid-cols-2 grid-cols-1 justify-center pt-16 pb-24 md:pt-24 md:pb-24 gap-20 md:gap-12 lg:gap-20">
          <div className="bg-[#212327] p-4 lg:p-7 rounded-2xl border-[0.5px] border-[#F5F5F5] order-2 md:order-1">
            <LazyLoadImage
              src={template.images[2]} // Assuming the third image as template image
              alt="Template Image"
              className="w-full max-w-screen-lg rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="order-1 md:order-2">
            {/* Overview Section */}
            <section className="md:mb-12">
              <h2 className="text-[40px] leading-tight font-medium text-primary mb-4">
                Overview
              </h2>
              <p className="mb-4">{template.overview.content_Part1}</p>
              <p className="mb-4">{template.overview.content_Part2}</p>
            </section>

            {/* Include Pages Section */}
            <section className="mb-12">
              <h2 className="text-[40px] leading-tight font-medium text-primary mb-4">
                Include pages
              </h2>
              <ul className="list-disc list-inside">
                {template.includePages.map((page, index) => (
                  <li key={index}>{page}</li>
                ))}
              </ul>
            </section>

            {/* Feature List Section */}
            <section>
              <h2 className="text-[40px] leading-tight font-medium text-primary ">
                Feature List
              </h2>
              <p className="my-5">
                Our templates are 100% customizable - we provide you with the
                ultimate flexibility to customize, update, and change easily as
                per your requirements. You can clone elements, pages, and
                sections very easily with clear, reusable code and make tons of
                style changes in the template.
              </p>
              <ul className="list-disc list-inside">
                {template.featuresList.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
