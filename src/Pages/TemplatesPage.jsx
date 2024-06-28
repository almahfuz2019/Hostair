import { Helmet } from "react-helmet-async";
import Templates from "../Components/Templates/Templates";

export default function TemplatesPage() {
  return (
    <div>
      <Helmet>
        <title>Templates</title>
      </Helmet>
      <Templates />
    </div>
  );
}
