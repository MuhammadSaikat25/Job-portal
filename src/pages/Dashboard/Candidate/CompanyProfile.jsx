import React, { useContext } from "react";
import CompanyForm from "../components/Candidate/CompanyForm";
import { CiMenuFries } from "react-icons/ci";
import { AuthContext } from "../../../Firebase/AuthProvider";
import CandidateNavbar from "./CandidateNavbar";
import CandidateNabSM from "../components/Candidate/CandidateNabSM";

const CompanyProfile = () => {
  const { dashboardModal, setDashboardModal } = useContext(AuthContext);
  return (
    <div className="lg:px-[250px]  mt-20 lg:mt-0">
      <div className="px-5 lg:px-5">
        <h1 className="text-2xl font-semibold mb-3">Company Profile!</h1>
        <h1>Ready to jump back in?</h1>
        <button
          onClick={() => setDashboardModal(true)}
          className="bg-blue-400 flex items-center gap-2 p-1 rounded mt-5 text-white lg:hidden"
        >
          <span>
            <CiMenuFries></CiMenuFries>
          </span>
          <span>Menu</span>
        </button>
      </div>
      <div className="lg:hidden">
        {dashboardModal && <CandidateNabSM></CandidateNabSM>}
      </div>
      <CompanyForm></CompanyForm>
    </div>
  );
};

export default CompanyProfile;
