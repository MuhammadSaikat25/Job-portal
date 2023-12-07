import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import Nav from "../../components/Nav";

const Dashboard = () => {
  return (
    <div className="">
      <div className="hidden lg:flex">
        <div className="h-screen">
          <div className="">
            <DashboardNav></DashboardNav>
          </div>
          <div className=""></div>
        </div>
        <div className="bg-[#ececec] flex-1 p-4 ">
          <Outlet></Outlet>
        </div>
      </div>
      {/*  ------------------------- Small Device---------------------- */}
      <div className="block lg:hidden">
        <Nav></Nav>
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
