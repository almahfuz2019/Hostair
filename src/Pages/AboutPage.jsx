import { Helmet } from "react-helmet-async";
import FAQ_About from "../Components/About/FAQ_About";
import Hero_about from "../Components/About/Hero_about";
import OurTeam from "../Components/About/OurTeam";
import WhatWeDo from "../Components/About/WhatWeDo";

export default function AboutPage() {
  return (
    <div className="dark:bg-black bg-white">
      <Helmet>
        <title>About</title>
      </Helmet>
      <Hero_about />
      <WhatWeDo />
      <FAQ_About />
      <OurTeam />
    </div>
  );
}
