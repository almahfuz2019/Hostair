import { Helmet } from "react-helmet-async";
import Contact_Pricing from "../Components/Pricing/Contact_Pricing";
import Pricing from "../Components/Pricing/Pricing";

export default function PricingPage() {
  return (
    <div>
      <Helmet>
        <title>Pricing</title>
      </Helmet>
      <Pricing />
      <Contact_Pricing />
    </div>
  );
}
