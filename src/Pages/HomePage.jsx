import Advertisement from "../Components/Home/Advertisement";
import FunFacts from "../Components/Home/FunFacts";
import Hero from "../Components/Home/Hero";
import Notice from "../Components/Home/Notice";
import Templates_Home from "../Components/Home/Templates_Home";
import UsersReview from "../Components/Home/UsersReview";
import FAQ from "../Components/Shared/FAQ";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Notice />
      <Templates_Home />
      <Advertisement />
      <FunFacts />
      <FAQ />
      <UsersReview />
    </div>
  );
}
