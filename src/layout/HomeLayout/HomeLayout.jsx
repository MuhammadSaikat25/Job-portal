import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const HomeLayout = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="">
        <Nav></Nav>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
