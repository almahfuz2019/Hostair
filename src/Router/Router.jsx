import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Components/Shared/NotFound";
import Root from "../Layout/Root";
import HomePage from "../Pages/HomePage";
import ContactPage from "../Pages/ContactPage";
import AboutPage from "../Pages/AboutPage";
import PricingPage from "../Pages/PricingPage";
import TemplateDetails from "../Components/TemplateDetails/TemplateDetails";
import TemplatesPage from "../Pages/TemplatesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/templates",
        element: <TemplatesPage />,
      },

        {
          path: "/template/details/:name",
          element: <TemplateDetails />,
        },
    ],
  },
]);

export default router;
