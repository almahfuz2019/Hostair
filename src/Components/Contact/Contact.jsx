import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);

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
    <div className="max-w-[1120px] mx-auto  ">
      <header className="pt-24">
        <div className="flex justify-between items-center">
          <h1 className="text-[56px] rubik_font font-medium primary-text">
            About Us
          </h1>
          <p className="text-[#9CA0AB] text-[26px] inter_font font-normal">
            Home / <span className="text-primary">About</span>
          </p>
        </div>
        <img
          className="mt-6 mx-auto w-full"
          src="https://i.ibb.co/qr880bH/Line-1.png"
          alt=""
        />
      </header>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 py-24">
        <div className="flex flex-col gap-6 lg:gap-14 w-full lg:w-[40%] mb-8 lg:mb-0">
          {/* Contact Cards */}
          <div
            className="bg-[#212327] gap-4 p-6 rounded-2xl text-white flex items-center"
            data-aos="fade-right"
          >
            <div>
              <img src="https://i.ibb.co/RS1BD6w/Group-36-1.png" alt="" />
            </div>
            <div>
              <p className="text-[#9CA0AB] text-[18px] font-normal mb-3">
                Call Us
              </p>
              <p className="text-secondary text-xl font-normal">0123 456 789</p>
            </div>
          </div>
          <div
            className="bg-[#212327] gap-4 p-6 rounded-2xl text-white flex items-center"
            data-aos="fade-right"
          >
            <div>
              <img src="https://i.ibb.co/2t7Z8qZ/Group-36-2.png" alt="" />
            </div>
            <div>
              <p className="text-[#9CA0AB] text-[18px] font-normal mb-3">
                Call Us
              </p>
              <p className="text-secondary text-xl font-normal">0123 456 789</p>
            </div>
          </div>
          <div
            className="bg-[#212327] gap-4 p-6 rounded-2xl text-white flex items-center"
            data-aos="fade-right"
          >
            <div>
              <img src="https://i.ibb.co/d0xB1Zy/Group-36.png" alt="" />
            </div>
            <div>
              <p className="text-[#9CA0AB] text-[18px] font-normal mb-3">
                Call Us
              </p>
              <p className="text-secondary text-xl font-normal">0123 456 789</p>
            </div>
          </div>
        </div>
        <div
          className="bg-[#212327] p-8 lg:p-14 rounded-2xl w-full lg:w-[60%]"
          data-aos="fade-left"
        >
          {submitSuccess ? (
            <div className="bg-[#212327] text-center">
              <img
                className="mx-auto animate-pulse"
                src="https://i.ibb.co/FXHcjr8/Group-39.png"
                alt=""
              />
              <h1 className="font-medium text-[32px] lg:text-[40px] text-secondary">
                Thank You!
              </h1>
              <p className="text-lg lg:text-xl text-accent mb-6 mt-2 font-normal text-center">
                Your submission has been received, <br /> We will contact you as
                soon as possible
              </p>
              <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
                <button className="rounded-md btn btn-primary text-neutral font-medium text-base">
                  Back to home
                </button>
                <button className="rounded-md btn btn-primary text-neutral font-medium text-base">
                  Pricing plans
                </button>
              </div>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                  <div className="mb-4 w-full">
                    <label className="block text-accent mb-2 text-base font-medium">
                      First Name
                    </label>
                    <input
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      className="w-full p-3 bg-[#131316] text-white rounded-[5px] border-[0.25px] border-[#F5F5F5] mb-1"
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
                      className="w-full p-3 bg-[#131316] text-white rounded-[5px] border-[0.25px] border-[#F5F5F5] mb-1"
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
                      })}
                      className="w-full p-3 bg-[#131316] text-white rounded-[5px] border-[0.25px] border-[#F5F5F5] mb-1"
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
                      className="w-full p-3 bg-[#131316] text-white rounded-[5px] border-[0.25px] border-[#F5F5F5] mb-1"
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
                    className="w-full p-3 bg-[#131316] text-white rounded-[5px] border-[0.25px] border-[#F5F5F5] mb-1"
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
                  type="submit"
                  className="px-6 py-2 rounded-md bg-primary primary-btn-style text-base font-medium"
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
