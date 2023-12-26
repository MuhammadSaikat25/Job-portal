import { useContext, useEffect, useState } from "react";
import EmployerNav from "./Employer/EmployerNav";
import { AuthContext } from "../../Firebase/AuthProvider";
import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";
import CandidateNav from "./Candidate/CandidateNav";
const DashboardNav = () => {
  const [role, setRole] = useState();
 
  const { user } = useContext(AuthContext);
  const axiosInterceptor = useAxiosInterceptor();
  useEffect(() => {
    axiosInterceptor.get(`/getUser/${user?.email}`).then((res) => {
      setRole(res.data.role);
    });
  }, [user?.email]);
  return (
    <div className="bg-[#ffffff] fixed top-0 h-full lg:p-3">
      {role? (
        <div className="">
          {role === "Employer" && <EmployerNav></EmployerNav>}
          {role === "Candidate" && <CandidateNav></CandidateNav>}
        </div>
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
};

export default DashboardNav;
