import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import { CiMenuBurger } from "react-icons/ci";
import EmployerNavSm from "./components/Employer/EmployerNavSm";
import CandidateNavSm from "./components/Candidate/CandidateNavSm";
import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";
const DashboardOverview = () => {
  const { setDashboardModal, dashboardModal, user } = useContext(AuthContext);
  const axiosInterceptor = useAxiosInterceptor();
  const [role, setRole] = useState();
  useEffect(() => {
    axiosInterceptor
      .get(`/getUser/${user?.email}`)
      .then((res) => setRole(res.data.role));
  }, [user?.email]);
 
  return (
    <div className="lg:px-48 py-12 ">
      <div className="lg:hidden">
        <h1
          className="bg-blue-200 w-fit px-5 text-blue-700 rounded-md py-2 "
          onClick={() => setDashboardModal(true)}
        >
          <CiMenuBurger></CiMenuBurger>
        </h1>

        <div className="">
          {role === "Employer" && (
            <div className="">
              {dashboardModal && <EmployerNavSm></EmployerNavSm>}
            </div>
          )}
        </div>
        <div className="">
          {role === "Candidate" && (
            <div className="">
              {dashboardModal && <CandidateNavSm></CandidateNavSm>}
            </div>
          )}
        </div>
      </div>
     
    </div>
  );
};

export default DashboardOverview;
