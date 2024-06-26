import React, { useState } from "react";

export default function Hero() {
  const [centerImage, setCenterImage] = useState(
    "https://i.ibb.co/px0rRxz/Group-20.png",
  );

  const images = [
    {
      src: "https://i.ibb.co/yd2k8QJ/Group-3.png",
      alt: "Website Templates",
      centerImage: "https://i.ibb.co/HF0VgNy/Group-20-4.png",
    },
    {
      src: "https://i.ibb.co/sbv32wP/Group-4.png",
      alt: "Workflow Automation",
      centerImage: "https://i.ibb.co/3yvGXHM/Group-20-3.png",
    },
    {
      src: "https://i.ibb.co/pWJ0Tk6/Group-5.png",
      alt: "Contact Management",
      centerImage: "https://i.ibb.co/gWb9CMP/Group-20-2.png",
    },
    {
      src: "https://i.ibb.co/5WJ8zjh/Group-6.png",
      alt: "E-mail Marketing",
      centerImage: "https://i.ibb.co/8NQ4r5s/Group-20-1.png",
    },
  ];

  return (
    <div className="max-w-[1120px] mx-auto">
      <section className="flex flex-col items-center py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">
            We provide professional real estate agent services
          </h1>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sodales leo id commodo ornare. Vestibulum lobortis ligula vehicula.
          </p>
          <div className="space-x-4 mb-8">
            <button className="text-white py-2 px-4 rounded">Contact Us</button>
            <button className="bg-gray-700 text-white py-2 px-4 rounded">
              About Us
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-center space-y-8">
            {images.slice(0, 2).map((image, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setCenterImage(image.centerImage)}
                onMouseLeave={() =>
                  setCenterImage("https://i.ibb.co/px0rRxz/Group-20.png")
                }
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="max-w-[200px] hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="relative">
            <img
              src={centerImage}
              alt="Center"
              className=" object-cover transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col items-center space-y-8">
            {images.slice(2, 4).map((image, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setCenterImage(image.centerImage)}
                onMouseLeave={() =>
                  setCenterImage("https://i.ibb.co/px0rRxz/Group-20.png")
                }
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="max-w-[200px] hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
