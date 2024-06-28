import { Outlet } from "react-router-dom";
import ScrollToTop from "../Components/Shared/ScrollToTop";
import "react-lazy-load-image-component/src/effects/blur.css";
import Navbar from "../Components/Shared/Navbar";
import NavbarForPhone from "../Components/Shared/NavbarForPhone"
import Footer from "../Components/Shared/Footer";
const Root = () => {
  return (
    <div className="overflow-hidden">
      <ScrollToTop />
      <Navbar />
      <NavbarForPhone />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
