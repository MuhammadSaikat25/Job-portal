import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import { CiMenuBurger } from "react-icons/ci";
import EmployerNavSm from "./components/Employer/EmployerNavSm";
import CandidateNavSm from "./components/Candidate/CandidateNavSm";
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
        {dashboardModal && <CandidateNavSm></CandidateNavSm>}
      </div>
      <h1>Overview</h1>
    </div>
  );
};

export default DashboardOverview;
