import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    id: 1,
    name: "Olivia Rhye",
    role: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BW8-uuGhboYxQYnHJRwNRN1-QAepAbhMX1CzpeGi3E4Jqf9WKawwx0kAK47aFcVVtApnkUUoHbSPX-89xZISis4975xInP9faFeUErex4rCSbxwkalTB~IeJW1Emf8TWhE8KiSE7Ggs97~zygi~XzsTjMKfda4Kg0lfD3TbY9ECCxruuIyVl67LjPUIsSJCLfgTl3irSaW0giytUE-oilg5iZA0yw5-YkVRCnJxPFXuwvcWBp1VSC2-A1iS-0PhNwyJkEzy0VFszcmEKLhiDE4BU4AoguY5Do-gM1wRB~v~h95sWrgEIJa75c3IjNxqzsB-LJt1NEzrL7u~h0v7KXQ__",
    social: [
      {
        id: 1,
        iconUrl: "https://i.ibb.co/MgzyVbK/Social-icon-2.png",
      },
      {
        id: 2,
        iconUrl: "https://i.ibb.co/GcPJpwN/Social-icon-1.png",
      },
      {
        id: 3,
        iconUrl: "https://i.ibb.co/gTRjHNn/Social-icon.png",
      },
    ],
  },
  {
    id: 1,
    name: "Olivia Rhye",
    role: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BW8-uuGhboYxQYnHJRwNRN1-QAepAbhMX1CzpeGi3E4Jqf9WKawwx0kAK47aFcVVtApnkUUoHbSPX-89xZISis4975xInP9faFeUErex4rCSbxwkalTB~IeJW1Emf8TWhE8KiSE7Ggs97~zygi~XzsTjMKfda4Kg0lfD3TbY9ECCxruuIyVl67LjPUIsSJCLfgTl3irSaW0giytUE-oilg5iZA0yw5-YkVRCnJxPFXuwvcWBp1VSC2-A1iS-0PhNwyJkEzy0VFszcmEKLhiDE4BU4AoguY5Do-gM1wRB~v~h95sWrgEIJa75c3IjNxqzsB-LJt1NEzrL7u~h0v7KXQ__",
    social: [
      {
        id: 1,
        iconUrl: "https://i.ibb.co/MgzyVbK/Social-icon-2.png",
      },
      {
        id: 2,
        iconUrl: "https://i.ibb.co/GcPJpwN/Social-icon-1.png",
      },
      {
        id: 3,
        iconUrl: "https://i.ibb.co/gTRjHNn/Social-icon.png",
      },
    ],
  },
  {
    id: 1,
    name: "Olivia Rhye",
    role: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BW8-uuGhboYxQYnHJRwNRN1-QAepAbhMX1CzpeGi3E4Jqf9WKawwx0kAK47aFcVVtApnkUUoHbSPX-89xZISis4975xInP9faFeUErex4rCSbxwkalTB~IeJW1Emf8TWhE8KiSE7Ggs97~zygi~XzsTjMKfda4Kg0lfD3TbY9ECCxruuIyVl67LjPUIsSJCLfgTl3irSaW0giytUE-oilg5iZA0yw5-YkVRCnJxPFXuwvcWBp1VSC2-A1iS-0PhNwyJkEzy0VFszcmEKLhiDE4BU4AoguY5Do-gM1wRB~v~h95sWrgEIJa75c3IjNxqzsB-LJt1NEzrL7u~h0v7KXQ__",
    social: [
      {
        id: 1,
        iconUrl: "https://i.ibb.co/MgzyVbK/Social-icon-2.png",
      },
      {
        id: 2,
        iconUrl: "https://i.ibb.co/GcPJpwN/Social-icon-1.png",
      },
      {
        id: 3,
        iconUrl: "https://i.ibb.co/gTRjHNn/Social-icon.png",
      },
    ],
  },
  {
    id: 1,
    name: "Olivia Rhye",
    role: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BW8-uuGhboYxQYnHJRwNRN1-QAepAbhMX1CzpeGi3E4Jqf9WKawwx0kAK47aFcVVtApnkUUoHbSPX-89xZISis4975xInP9faFeUErex4rCSbxwkalTB~IeJW1Emf8TWhE8KiSE7Ggs97~zygi~XzsTjMKfda4Kg0lfD3TbY9ECCxruuIyVl67LjPUIsSJCLfgTl3irSaW0giytUE-oilg5iZA0yw5-YkVRCnJxPFXuwvcWBp1VSC2-A1iS-0PhNwyJkEzy0VFszcmEKLhiDE4BU4AoguY5Do-gM1wRB~v~h95sWrgEIJa75c3IjNxqzsB-LJt1NEzrL7u~h0v7KXQ__",
    social: [
      {
        id: 1,
        iconUrl: "https://i.ibb.co/MgzyVbK/Social-icon-2.png",
      },
      {
        id: 2,
        iconUrl: "https://i.ibb.co/GcPJpwN/Social-icon-1.png",
      },
      {
        id: 3,
        iconUrl: "https://i.ibb.co/gTRjHNn/Social-icon.png",
      },
    ],
  },
  {
    id: 1,
    name: "Olivia Rhye",
    role: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BW8-uuGhboYxQYnHJRwNRN1-QAepAbhMX1CzpeGi3E4Jqf9WKawwx0kAK47aFcVVtApnkUUoHbSPX-89xZISis4975xInP9faFeUErex4rCSbxwkalTB~IeJW1Emf8TWhE8KiSE7Ggs97~zygi~XzsTjMKfda4Kg0lfD3TbY9ECCxruuIyVl67LjPUIsSJCLfgTl3irSaW0giytUE-oilg5iZA0yw5-YkVRCnJxPFXuwvcWBp1VSC2-A1iS-0PhNwyJkEzy0VFszcmEKLhiDE4BU4AoguY5Do-gM1wRB~v~h95sWrgEIJa75c3IjNxqzsB-LJt1NEzrL7u~h0v7KXQ__",
    social: [
      {
        id: 1,
        iconUrl: "https://i.ibb.co/MgzyVbK/Social-icon-2.png",
      },
      {
        id: 2,
        iconUrl: "https://i.ibb.co/GcPJpwN/Social-icon-1.png",
      },
      {
        id: 3,
        iconUrl: "https://i.ibb.co/gTRjHNn/Social-icon.png",
      },
    ],
  },
  {
    id: 1,
    name: "Olivia Rhye",
    role: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BW8-uuGhboYxQYnHJRwNRN1-QAepAbhMX1CzpeGi3E4Jqf9WKawwx0kAK47aFcVVtApnkUUoHbSPX-89xZISis4975xInP9faFeUErex4rCSbxwkalTB~IeJW1Emf8TWhE8KiSE7Ggs97~zygi~XzsTjMKfda4Kg0lfD3TbY9ECCxruuIyVl67LjPUIsSJCLfgTl3irSaW0giytUE-oilg5iZA0yw5-YkVRCnJxPFXuwvcWBp1VSC2-A1iS-0PhNwyJkEzy0VFszcmEKLhiDE4BU4AoguY5Do-gM1wRB~v~h95sWrgEIJa75c3IjNxqzsB-LJt1NEzrL7u~h0v7KXQ__",
    social: [
      {
        id: 1,
        iconUrl: "https://i.ibb.co/MgzyVbK/Social-icon-2.png",
      },
      {
        id: 2,
        iconUrl: "https://i.ibb.co/GcPJpwN/Social-icon-1.png",
      },
      {
        id: 3,
        iconUrl: "https://i.ibb.co/gTRjHNn/Social-icon.png",
      },
    ],
  },
  {
    id: 1,
    name: "Olivia Rhye",
    role: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BW8-uuGhboYxQYnHJRwNRN1-QAepAbhMX1CzpeGi3E4Jqf9WKawwx0kAK47aFcVVtApnkUUoHbSPX-89xZISis4975xInP9faFeUErex4rCSbxwkalTB~IeJW1Emf8TWhE8KiSE7Ggs97~zygi~XzsTjMKfda4Kg0lfD3TbY9ECCxruuIyVl67LjPUIsSJCLfgTl3irSaW0giytUE-oilg5iZA0yw5-YkVRCnJxPFXuwvcWBp1VSC2-A1iS-0PhNwyJkEzy0VFszcmEKLhiDE4BU4AoguY5Do-gM1wRB~v~h95sWrgEIJa75c3IjNxqzsB-LJt1NEzrL7u~h0v7KXQ__",
    social: [
      {
        id: 1,
        iconUrl: "https://i.ibb.co/MgzyVbK/Social-icon-2.png",
      },
      {
        id: 2,
        iconUrl: "https://i.ibb.co/GcPJpwN/Social-icon-1.png",
      },
      {
        id: 3,
        iconUrl: "https://i.ibb.co/gTRjHNn/Social-icon.png",
      },
    ],
  },
  {
    id: 1,
    name: "Olivia Rhye",
    role: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BW8-uuGhboYxQYnHJRwNRN1-QAepAbhMX1CzpeGi3E4Jqf9WKawwx0kAK47aFcVVtApnkUUoHbSPX-89xZISis4975xInP9faFeUErex4rCSbxwkalTB~IeJW1Emf8TWhE8KiSE7Ggs97~zygi~XzsTjMKfda4Kg0lfD3TbY9ECCxruuIyVl67LjPUIsSJCLfgTl3irSaW0giytUE-oilg5iZA0yw5-YkVRCnJxPFXuwvcWBp1VSC2-A1iS-0PhNwyJkEzy0VFszcmEKLhiDE4BU4AoguY5Do-gM1wRB~v~h95sWrgEIJa75c3IjNxqzsB-LJt1NEzrL7u~h0v7KXQ__",
    social: [
      {
        id: 1,
        iconUrl: "https://i.ibb.co/MgzyVbK/Social-icon-2.png",
      },
      {
        id: 2,
        iconUrl: "https://i.ibb.co/GcPJpwN/Social-icon-1.png",
      },
      {
        id: 3,
        iconUrl: "https://i.ibb.co/gTRjHNn/Social-icon.png",
      },
    ],
  },
  {
    id: 1,
    name: "Olivia Rhye",
    role: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BW8-uuGhboYxQYnHJRwNRN1-QAepAbhMX1CzpeGi3E4Jqf9WKawwx0kAK47aFcVVtApnkUUoHbSPX-89xZISis4975xInP9faFeUErex4rCSbxwkalTB~IeJW1Emf8TWhE8KiSE7Ggs97~zygi~XzsTjMKfda4Kg0lfD3TbY9ECCxruuIyVl67LjPUIsSJCLfgTl3irSaW0giytUE-oilg5iZA0yw5-YkVRCnJxPFXuwvcWBp1VSC2-A1iS-0PhNwyJkEzy0VFszcmEKLhiDE4BU4AoguY5Do-gM1wRB~v~h95sWrgEIJa75c3IjNxqzsB-LJt1NEzrL7u~h0v7KXQ__",
    social: [
      {
        id: 1,
        iconUrl: "https://i.ibb.co/MgzyVbK/Social-icon-2.png",
      },
      {
        id: 2,
        iconUrl: "https://i.ibb.co/GcPJpwN/Social-icon-1.png",
      },
      {
        id: 3,
        iconUrl: "https://i.ibb.co/gTRjHNn/Social-icon.png",
      },
    ],
  },
  {
    id: 1,
    name: "Olivia Rhye",
    role: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BW8-uuGhboYxQYnHJRwNRN1-QAepAbhMX1CzpeGi3E4Jqf9WKawwx0kAK47aFcVVtApnkUUoHbSPX-89xZISis4975xInP9faFeUErex4rCSbxwkalTB~IeJW1Emf8TWhE8KiSE7Ggs97~zygi~XzsTjMKfda4Kg0lfD3TbY9ECCxruuIyVl67LjPUIsSJCLfgTl3irSaW0giytUE-oilg5iZA0yw5-YkVRCnJxPFXuwvcWBp1VSC2-A1iS-0PhNwyJkEzy0VFszcmEKLhiDE4BU4AoguY5Do-gM1wRB~v~h95sWrgEIJa75c3IjNxqzsB-LJt1NEzrL7u~h0v7KXQ__",
    social: [
      {
        id: 1,
        iconUrl: "https://i.ibb.co/MgzyVbK/Social-icon-2.png",
      },
      {
        id: 2,
        iconUrl: "https://i.ibb.co/GcPJpwN/Social-icon-1.png",
      },
      {
        id: 3,
        iconUrl: "https://i.ibb.co/gTRjHNn/Social-icon.png",
      },
    ],
  },
  // Add more team members as needed
];

export default function OurTeam() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-[1120px] mx-auto py-16">
      <div>
        <div className="flex justify-start items-end w-full mb-14">
          <div className="border-primary w-full border border-1 border-t-0" />
          <h1 className="text-primary rubik_font font-medium text-[40px] w-[40%] leading-none rubik_font">
            Our amazing team
          </h1>
        </div>

        <div className="flex flex-wrap -m-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="p-4 lg:w-1/2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                <img
                  alt={member.name}
                  className="flex-shrink-0 w-48 h-48 object-cover object-center sm:mb-0 mb-4 "
                  src={member.imageUrl}
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="font-medium text-xl text-secondary">
                    {member.name}
                  </h2>
                  <h3 className="mb-3 mt-1 text-accent text-[18px]">
                    {member.role}
                  </h3>
                  <p className="mb-4 text-secondary font-normal ">
                    {member.bio}
                  </p>

                  <div className="inline-flex">
                    {member.social.map((social) => (
                      <a
                        key={social.id}
                        className="text-gray-500 hover:text-gray-700 mr-4"
                        href="#"
                      >
                        <img
                          src={social.iconUrl}
                          alt="Social Icon"
                          className="w-6 h-6"
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
