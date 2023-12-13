import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import EmployerNavSm from "./components/EmployerNavSm";
import { CiMenuBurger } from "react-icons/ci";
const DashboardOverview = () => {
  const { setDashboardModal, dashboardModal } = useContext(AuthContext);
  return (
    <div className="lg:px-48 py-12 ">
      <div className="lg:hidden">
        <h1
          className="bg-blue-200 w-fit px-5 text-blue-700 rounded-md py-2 "
          onClick={() => setDashboardModal(true)}
        >
          <CiMenuBurger ></CiMenuBurger>
        </h1>
        {dashboardModal && <EmployerNavSm></EmployerNavSm>}
      </div>
      <h1>Overview</h1>
    </div>
  );
};

export default DashboardOverview;
