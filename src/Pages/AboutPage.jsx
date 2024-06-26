import Hero_about from "../Components/About/Hero_about";
import OurTeam from "../Components/About/OurTeam";
import WhatWeDo from "../Components/About/WhatWeDo";
import FAQ from "../Components/Shared/FAQ";

export default function AboutPage() {
  return (
    <div>
      <Hero_about />
      <WhatWeDo />
      <FAQ />
      <OurTeam />
    </div>
  );
}
