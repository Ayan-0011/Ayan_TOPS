import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = ({ location, getlocation, opendropdown, setOpendropdown }) => {
  return (
    <>
      <Navbar location={location} getlocation={getlocation} opendropdown={opendropdown} setOpendropdown={setOpendropdown} />
      
      <Outlet />

      <Footer />
    </>
  );
};

export default MainLayout;
