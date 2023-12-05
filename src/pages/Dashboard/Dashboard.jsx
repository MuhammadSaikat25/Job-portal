import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import Nav from "../../components/Nav";

const Dashboard = () => {
  return (
    <div className="flex ">
      <div className="h-screen">
        <DashboardNav></DashboardNav>
      </div>
      <div className="bg-[#ececec] flex-1 p-4 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
