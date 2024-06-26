export default function TemplateDetails() {
  return (
    <div className="max-w-[1120px] mx-auto ">
      {" "}
      <div className=" text-secondary">
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
        <div className="pt-14">
          <img
            className="h-[500px] w-auto rounded-2xl"
            src="https://s3-alpha-sig.figma.com/img/27f1/8ca2/64c8bf95e35909d890e46e4aba313673?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qtgj8eLQtumtLhXqT6JYAadsfxmndC2epcXdo5XITfM4NBmW1pKxYXOi51nZ4G57V67KSjWR0JjDYAoZs4nvtWbf5FY4jmuswJ071n9b0cr6Zr47ggC8xOhSZgLdE8NMY-VLPTtNtXbeKLfHQuzJ9qzYRT3rPeX05ZzcJZ8gR6oCS429248xbGAVBPsoAzsGW6TmTQM0Gn1fXfg-G4i3i8-Nyy9vWfTpZ7BY5h8c9yxCuqpa7fMv1E6-N4q7Ybc61m8WZQl~5s1TndhEXwTWhL6zxGathqXIJYL3jWKbDjLsOIIiC4uD4QnqWOU9Xyy5xEKlaiSBrq~-lSaGwPNkog__"
            alt=""
          />
        </div>
        {/* Main Content Section */}
        <main className=" mx-auto p-4 flex justify-center py-24 gap-20">
          {/* Image Section */}
          <div className="bg-[#212327] p-7 rounded-2xl border-[0.5px] border-[#F5F5F5]">
            <img
              src="https://s3-alpha-sig.figma.com/img/e3fe/f449/bf1b3eb4faf5b803af3ac2103ff35ae8?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EttajUnBbBIER8f6FUlvaC5EwzVqfiy4z~22ZNE27Fkol81FaeOq3PPQeXW~gwQr44LQ~ZRfCRzNJMkxXDISE-TMpP4psOYcmevKUakAlRorUW1OGM4GyKD5PBV~rwxYRXyJDsyIMMuE5x45WjKBbnQouW3CpwjssvqKLwE~q4ndo1sE0Q-MXP8aiIXiN1Ae9mvVsKSiugkgZOCibYr3QlLp5kUbwrd4bJFiV0tgW2JVWCZChr7Cyv7vrRU20acg-KktW4IuUVOSBuSf31LBzXgHtXvLCdPF04JtikI8xvFDqjKnuLyQDAA4d7~KNE~6B-ytHlJEdP7cAYAhN-ZIbQ__"
              alt="Template Image"
              className="w-full max-w-screen-lg rounded-lg shadow-lg"
            />
          </div>

          <div>
            {/* Overview Section */}
            <section className="mb-12">
              <h2 className="text-[40px] font-medium text-primary mb-4">
                Overview
              </h2>
              <p className=" mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p className=" mb-4">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </section>

            {/* Include Pages Section */}
            <section className="mb-12">
              <h2 className="text-[40px] font-medium text-primary mb-4">
                Include pages
              </h2>
              <ul className="list-disc list-inside ">
                <li>Home</li>
                <li>About</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>FAQ</li>
                <li>Login</li>
                <li>Register</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>404</li>
              </ul>
            </section>

            {/* Feature List Section */}
            <section>
              <h2 className=" text-[40px] font-medium text-primary  leading-none">
                Feature List
              </h2>
              <p className=" my-5">
                Our templates are 100% customizable - we had give you the
                ultimate flexibility to customize, update, and change easily as
                per your requirements. You can clone the elements, page, and
                section very easily with clear, reusable code and tons of style
                changes in the template.
              </p>
              <ul className="list-disc list-inside ">
                <li>W3C Clean And Detected</li>
                <li>Every Customizable</li>
                <li>Working PHP/Ajax Contact Form</li>
                <li>Google Fonts</li>
                <li>Fully Responsive Bootstrap 4 Components</li>
                <li>FontAwesome Icons</li>
                <li>Fast & Friendly Support</li>
                <li>Well Commented Code</li>
                <li>W3C Validated Markup</li>
                <li>Detailed Documentation</li>
                <li>Bootstrap 4+</li>
                <li>SEO Optimized</li>
                <li>Modern Design: HTML Structure, Naming, Speed!</li>
                <li>Lifetime Updates</li>
                <li>Support Support</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
