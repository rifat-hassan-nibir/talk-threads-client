import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";

const MainLayout = () => {
  return (
    <div>
      <ScrollRestoration />
      <Navbar></Navbar>
      <div className=" min-h-[calc(100vh-136px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
