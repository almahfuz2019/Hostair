import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { testimonials } from "../../../public/Testimonials";

export default function UsersReview() {
  // slider
  const sliderRef = useRef(null);
  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full pt-24  mx-auto relative">
      {/* Users Review Header section  */}
      <div className="max-w-[1120px] mx-auto">
        <div className="flex mx-4   gap-20 justify-end md:justify-between  relative z-20">
          <div className="md:block hidden">
            <p className="text-primary text-xl">Testimonial</p>
            <h1 className="text-[40px] rubik_font leading-tight primary-text font-medium mb-4 mt-1">
              Our Client’s Feedback
            </h1>
          </div>
          {/* slider buttons  */}
          <div className=" space-x-2">
            <button
              onClick={previous}
              className="bg-primary text-white p-2 rounded shadow-lg"
            >
              <LazyLoadImage
                src="https://i.ibb.co/kQ5P80Q/Group-45.png"
                alt="Prev"
              />
            </button>
            <button
              onClick={next}
              className="bg-primary text-white p-2 rounded shadow-lg"
            >
              <LazyLoadImage
                src="https://i.ibb.co/j5HqswQ/Group-45-1.png"
                alt="Next"
              />
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* slider  */}
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="mx-auto" key={index}>
            <div
              className="user-review-bg-color text-white rounded-lg p-6 max-w-[94%] shadow-lg"
              style={{ padding: "20px", margin: "0 15px" }} // Added margin
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 space-x-1">
                  <LazyLoadImage
                    src="https://i.ibb.co/grCpcBY/Star.png"
                    alt="Star"
                  />
                  <LazyLoadImage
                    src="https://i.ibb.co/grCpcBY/Star.png"
                    alt="Star"
                  />
                  <LazyLoadImage
                    src="https://i.ibb.co/grCpcBY/Star.png"
                    alt="Star"
                  />
                  <LazyLoadImage
                    src="https://i.ibb.co/grCpcBY/Star.png"
                    alt="Star"
                  />
                  <LazyLoadImage
                    src="https://i.ibb.co/grCpcBY/Star.png"
                    alt="Star"
                  />
                </div>
              </div>
              <blockquote className="mb-8">
                <p className="text-lg text-left text-[#9CA0AB]">
                  {testimonial.text}
                </p>
              </blockquote>
              <div className="flex items-center">
                <LazyLoadImage
                  className="w-10 h-10 rounded-full mr-5"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <p className="font-medium text-lg text-secondary">
                    {testimonial.name}
                  </p>
                  <p className="text-base -ml-2 text-[#9CA0AB]">
                    {testimonial.title}
                  </p>
                </div>
                <div className="ml-auto text-red-500 text-2xl ">
                  <LazyLoadImage
                    src="https://i.ibb.co/SyQT2fV/Quotes.png"
                    alt="Quotes"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <LazyLoadImage
        className="absolute bg-cover sm:w-20 sm:h-2/3  lg:w-auto  z-10 right-0 top-1/2 transform -translate-y-1/2 hidden md:block"
        src="https://i.ibb.co/DkLzL2g/Rectangle-167.png"
        alt="Right Shadow"
      />
    </div>
  );
}
