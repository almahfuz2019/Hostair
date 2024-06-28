import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { contactData } from "../../../public/ContactData";
AOS.init();
export default function Contact() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  // form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (data.terms) {
      // Simulate form submission success
      setSubmitSuccess(true);
      reset();
    } else {
      // Simulate form submission error
      setSubmitSuccess(false);
    }
  };

  return (
    <div className="max-w-[1120px] mx-auto px-4">
      {/* breadcrumb section  */}
      <header className="pt-24" data-aos="fade-down">
        <div className="flex justify-between md:items-center items-end">
          <h1 className="text-4xl md:text-[56px] rubik_font font-medium primary-text">
            Contact Us
          </h1>
          <p className="text-[#9CA0AB] text-base md:text-[26px] font-normal">
            Home /{" "}
            <span className="light:text-primary dark:text-primary">
              Contact
            </span>
          </p>
        </div>
        <LazyLoadImage
          className="mt-6 mx-auto "
          src="https://i.ibb.co/qr880bH/Line-1.png"
          alt="Line"
        />
      </header>
      {/* Contact Cards */}
      <div className="flex flex-col-reverse lg:flex-row items-start justify-center gap-16 pt-24">
        <div
          className="lg:flex grid grid-cols-1 md:grid-cols-2 lg:flex-col gap-6  w-full  lg:w-[40%] mb-8 lg:mb-0"
          data-aos="fade-right"
        >
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
        <div
          className="bg-[#212327] p-8 lg:p-14 rounded-2xl w-full lg:w-[60%]"
          data-aos="fade-left"
        >
          {/* success Message  */}
          {submitSuccess ? (
            <div className="bg-[#212327] text-center">
              <LazyLoadImage
                className="mx-auto animate-pulse"
                src="https://i.ibb.co/FXHcjr8/Group-39.png"
                alt="icon"
              />
              <h1 className="font-medium rubik_font text-[20px] lg:text-[30px] text-secondary">
                Thank You!
              </h1>
              <p className="text-lg lg:text-xl text-accent mb-6 mt-2 font-normal text-center">
                Your submission has been received, <br /> We will contact you as
                soon as possible
              </p>
              <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
                <Link
                  to="/"
                  className="primary-btn-style font-medium text-base"
                >
                  Back to home
                </Link>
                <Link
                  to="/pricing"
                  className="primary-btn-style font-medium text-base"
                >
                  Pricing plans
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* contact Form  */}
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                  <div className="mb-4 w-full">
                    <label className="block text-accent mb-2 text-base font-medium">
                      First Name
                    </label>
                    <input
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      className="w-full p-3 bg-[#131316] text-white rounded-[5px] border-[0.25px] border-[#f5f5f579] mb-1"
                      placeholder="Enter your name"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-4 w-full">
                    <label className="block text-accent mb-2 text-base font-medium">
                      Last Name
                    </label>
                    <input
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                      className="w-full p-3 bg-[#131316] text-white rounded-[5px] border-[0.25px] border-[#f5f5f579] mb-1"
                      placeholder="Enter your name"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-4 mt-4">
                  <div className="mb-4 w-full">
                    <label className="block text-accent mb-2 text-base font-medium">
                      E-mail
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full p-3 bg-[#131316] text-white rounded-[5px] border-[0.25px] border-[#f5f5f579] mb-1"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-4 w-full">
                    <label className="block text-accent mb-2 text-base font-medium">
                      Phone number
                    </label>
                    <input
                      {...register("phoneNumber", {
                        required: "Phone number is required",
                      })}
                      className="w-full p-3 bg-[#131316] text-white rounded-[5px] border-[0.25px] border-[#f5f5f579] mb-1"
                      placeholder="Enter your phone number"
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-4 mt-4">
                  <label className="block text-accent mb-2 text-base font-medium">
                    Message
                  </label>
                  <textarea
                    rows="6"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="w-full p-3 bg-[#131316] text-white rounded-[5px] border-[0.25px] border-[#f5f5f579] mb-1"
                    placeholder="What can we help with you?"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <div className="mb-4 flex items-center">
                  <input
                    {...register("terms", {
                      required: "You must accept the terms and privacy policy",
                    })}
                    type="checkbox"
                    className="mr-2"
                    onChange={() => setTermsAccepted(!termsAccepted)}
                  />
                  <label
                    className={`font-medium text-${
                      termsAccepted ? "white" : "[#F5F5F5]"
                    }`}
                  >
                    Accept our Terms & Privacy
                  </label>
                </div>
                {errors.terms && (
                  <p className="text-red-500 text-sm mb-4">
                    {errors.terms.message}
                  </p>
                )}
                {submitSuccess === false && (
                  <p className="text-red-500 text-sm mb-4">
                    Form submission failed. Please try again.
                  </p>
                )}
                <button
                  style={{ paddingTop: "14px", paddingBottom: "14px" }}
                  type="submit"
                  className="px-6  rounded-md bg-primary primary-btn-style text-base font-medium"
                >
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
