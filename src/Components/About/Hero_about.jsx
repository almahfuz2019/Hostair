import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Hero_about() {
  return (
    <div className="max-w-[1120px] mx-auto px-4">
      {/* breadcrumb section  */}
      <header className="pt-24" data-aos="fade-down">
        <div className="flex justify-between md:items-center items-end">
          <h1 className="text-4xl md:text-[56px] rubik_font font-medium primary-text">
            About
          </h1>
          <p className="text-[#9CA0AB] text-base md:text-[26px] font-normal">
            Home /{" "}
            <span className="light:text-primary dark:text-primary">About</span>
          </p>
        </div>
        <LazyLoadImage
          className="mt-6 mx-auto"
          src="https://i.ibb.co/qr880bH/Line-1.png"
          alt="Line"
        />
      </header>

      {/* Main Content Section */}
      <main>
        <div className="flex justify-start pt-24">
          <LazyLoadImage
            className="max-h-[526px] w-auto rounded-2xl"
            src="https://i.ibb.co/68BmvLX/ab9ae2c4d3adb4a13d574252caa7f0ff.jpg"
            alt=""
            data-aos="fade-up"
          />
        </div>
        <header className="mt-24" data-aos="fade-up">
          <div className="flex items-end gap-4 mb-14">
            <span className="text-primary rubik_font font-medium text-4xl leading-none">
              Who we are
            </span>
            <div className="flex-grow border-t border-primary"></div>
          </div>
        </header>
        <p className="text-secondary font-normal" data-aos="fade-up">
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
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
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
