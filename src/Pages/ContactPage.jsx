import { Helmet } from "react-helmet-async";
import Contact from "../Components/Contact/Contact";

export default function ContactPage() {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Contact />
    </div>
  );
}
