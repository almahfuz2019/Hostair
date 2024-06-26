import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Templates() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Array of template objects
  const templates = [
    {
      id: 1,
      imgSrc: "https://i.ibb.co/Yykssf7/Group-25-1.png",
      title: "Lorem ipsum dolor sit amet",
      description: "Light mode . 8 pages",
    },
    {
      id: 2,
      imgSrc: "https://i.ibb.co/Yykssf7/Group-25-1.png",
      title: "Lorem ipsum dolor sit amet",
      description: "Light mode . 8 pages",
    },
    {
      id: 3,
      imgSrc: "https://i.ibb.co/Yykssf7/Group-25-1.png",
      title: "Lorem ipsum dolor sit amet",
      description: "Light mode . 8 pages",
    },
    {
      id: 4,
      imgSrc: "https://i.ibb.co/Yykssf7/Group-25-1.png",
      title: "Lorem ipsum dolor sit amet",
      description: "Light mode . 8 pages",
    },
    {
      id: 5,
      imgSrc: "https://i.ibb.co/Yykssf7/Group-25-1.png",
      title: "Lorem ipsum dolor sit amet",
      description: "Light mode . 8 pages",
    },
    {
      id: 6,
      imgSrc: "https://i.ibb.co/Yykssf7/Group-25-1.png",
      title: "Lorem ipsum dolor sit amet",
      description: "Light mode . 8 pages",
    },
    {
      id: 7,
      imgSrc: "https://i.ibb.co/Yykssf7/Group-25-1.png",
      title: "Lorem ipsum dolor sit amet",
      description: "Light mode . 8 pages",
    },
    {
      id: 8,
      imgSrc: "https://i.ibb.co/Yykssf7/Group-25-1.png",
      title: "Lorem ipsum dolor sit amet",
      description: "Light mode . 8 pages",
    },
    {
      id: 9,
      imgSrc: "https://i.ibb.co/Yykssf7/Group-25-1.png",
      title: "Lorem ipsum dolor sit amet",
      description: "Light mode . 8 pages",
    },
  ];

  return (
    <div className="max-w-[1120px] mx-auto ">
      {/* Header Section */}
      <header className="pt-24">
        <div className="flex justify-between items-center">
          <h1 className="text-[56px] rubik_font font-medium primary-text">
            Our Templates
          </h1>
          <p className="text-[#9CA0AB] text-[26px] inter_font font-normal">
            Home / <span className="text-primary">All templates</span>
          </p>
        </div>
        <img
          className="mt-6 mx-auto w-full"
          src="https://i.ibb.co/qr880bH/Line-1.png"
          alt=""
        />
      </header>

      {/* Templates Grid */}
      <div className="py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {templates.map((template) => (
            <Link to={`/template/details/${template.id}`} key={template.id}>
              <div
                className="mx-auto items-center text-center flex flex-col card-container"
                data-aos="fade-up"
              >
                <div className="card-border ">
                  <img
                    src={template.imgSrc}
                    className="rounded-2xl border-[2px] border-transparent bg-back"
                    alt="Template"
                  />
                </div>
                <div className="text-left mt-3">
                  <p className="text-secondary text-[24px] font-normal">
                    {template.title}
                  </p>
                  <p className="text-[#9CA0AB] text-[20px] font-normal">
                    {template.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
