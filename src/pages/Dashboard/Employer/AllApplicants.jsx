import { useContext, useEffect, useState } from "react";
import useAxiosInterceptor from "../../../hooks/useAxiosInterceptor";
import { AuthContext } from "../../../Firebase/AuthProvider";
import { CiMenuBurger } from "react-icons/ci";
import EmployerNavSm from "../components/Employer/EmployerNavSm";
import ManageAllApplicants from "../components/Employer/ManageAllApplicants";

const AllApplicants = () => {
  const { user, setDashboardModal, dashboardModal } = useContext(AuthContext);
  const axiosInterceptor = useAxiosInterceptor();
  const [applicant, setApplicant] = useState([]);
  const [id, setId] = useState("");
  const [reject, setReject] = useState([]);
  const [approved, setApproved] = useState([]);
  useEffect(() => {
    axiosInterceptor
      .get(`/getAllApplicant/${user?.email}`)
      .then((res) => {
        setReject(res.data.RejectResult);
        setApproved(res.data.ApproveResult);
        setApplicant(res.data.AllData);
      });
  }, [user?.email, id]);
  
  return (
    <div className="lg:px-[200px]">
      <div className="p-4 lg:hidden">
        <h1
          className="bg-blue-200 w-fit px-5 text-blue-700 rounded-md py-2 "
          onClick={() => setDashboardModal(true)}
        >
          <CiMenuBurger></CiMenuBurger>
        </h1>
      </div>
      {/* --------------------- */}
      {dashboardModal && <EmployerNavSm></EmployerNavSm>}
      <div className="">
        <h1 className="text-gray-700 font-semibold text-3xl">All Applicants!</h1>
        <h1 className="mt-3">Ready to jump back in?</h1>
        <div className="bg-white p-3 rounded-lg mt-4">
          <div className="flex items-center gap-4 mb-5">
            <h1 className="text-gray-700 font-semibold ">Total: {applicant?.length}</h1>
            <h1 className="text-green-600 font-semibold"> Approved: {approved?.length}</h1>
            <h1 className="text-red-600 font-semibold">Rejected:{reject?.length}</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {applicant?.map((applicant) => (
              <ManageAllApplicants
                key={applicant._id}
                applicant={applicant}
                setId={setId}
              ></ManageAllApplicants>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllApplicants;
