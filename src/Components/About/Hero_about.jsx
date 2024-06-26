import React from "react";

export default function Hero_about() {
  return (
    <div className="max-w-[1120px] mx-auto">
      {/* Header Section */}
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

      {/* Main Content Section */}
      <main>
        <div className="flex justify-center pt-24">
          <img
            className="h-[526px] w-auto rounded-2xl"
            src="https://i.ibb.co/68BmvLX/ab9ae2c4d3adb4a13d574252caa7f0ff.jpg"
            alt=""
            data-aos="fade-up"
          />
        </div>
        <div className="flex justify-start items-end mb-8 w-full pt-24">
          <h1 className="text-primary rubik_font font-medium text-[40px] w-80 leading-none">
            Who we are
          </h1>
          <div className="border-primary w-full border border-1 border-t-0" />
        </div>
        <p className="text-secondary font-normal inter_font">
          {/* Long description */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est
        </p>
      </main>
    </div>
  );
}
