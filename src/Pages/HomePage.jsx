import { Helmet } from "react-helmet-async";
import Advertisement_Services from "../Components/Home/Advertisement_Services";
import Advertisement_Templates from "../Components/Home/Advertisement_Templates";
import FunFacts from "../Components/Home/FunFacts";
import Hero from "../Components/Home/Hero";
import Notice from "../Components/Home/Notice";
import Templates_Home from "../Components/Home/Templates_Home";
import UsersReview from "../Components/Home/UsersReview";
import AdvertisementAndFunFacts from "../Components/Shared/AdvertisementAndFunFacts"; 
import FAQ from "../Components/Home/FAQ";

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <Notice />
      <Templates_Home />
      <AdvertisementAndFunFacts />
      <FAQ />
      <UsersReview />
    </div>
  );
}
