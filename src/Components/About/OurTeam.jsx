import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { teamMembers } from "../../../public/TeamMembers";

export default function OurTeam() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-[1120px]  mx-auto py-16 px-4">
      <div>
        {/* Section header */}
        <div className="flex items-end gap-4 mb-14 text-primary">
          <div className="flex-grow border-t border-primary"></div>
          <span className=" rubik_font font-medium text-4xl leading-none">
            <span className="hidden md:block"> Our amazing team</span>{" "}
            <span className="md:hidden block"> Our team</span>
          </span>
        </div>

        {/* Team members grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex flex-wrap  -m-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="p-4 lg:w-1/2 lg:hover:dark:bg-[#212327] lg:hover:bg-[#98a2b31b] "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="h-full flex  lg:flex-row flex-col items-center lg:justify-start justify-center text-center lg:text-left  transition duration-300 ease-in-out transform  hover:-translate-y-1">
                <LazyLoadImage
                  alt={member.name}
                  className="flex-shrink-0 w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={member.imageUrl}
                />
                <div className="flex-grow sm:pl-8 mt-6 lg:mt-0">
                  <h2 className="font-medium text-xl dark:text-secondary text-[#5F727F] ">
                    {member.name}
                  </h2>
                  <h3 className="mb-3 mt-1 dark:text-secondary text-[#5F727F] text-sm md:text-[18px] font-normal">
                    {member.role}
                  </h3>
                  <p className="mb-4 dark:text-secondary text-[#5F727F] font-normal">
                    {member.bio}
                  </p>
                  {/* Social icons */}
                  <div className="inline-flex">
                    {member.social.map((social) => (
                      <a
                        key={social.id}
                        className=" text-gray-500 hover:text-gray-700 mr-4"
                        href="#"
                      >
                        <LazyLoadImage
                          src={social.iconUrl}
                          alt="Social Icon"
                          className="w-6 h-6 dark:block hidden"
                        />
                        <LazyLoadImage
                          src={social.lightModeIconUrl}
                          alt="Social Icon"
                          className="w-6 h-6 dark:hidden block"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
