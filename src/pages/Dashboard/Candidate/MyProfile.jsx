import { useContext } from "react";
import CandidateProfileForm from "../components/Candidate/CandidateProfileForm";
import { CiMenuBurger } from "react-icons/ci";
import { AuthContext } from "../../../Firebase/AuthProvider";
import CandidateNavSm from "../components/Candidate/CandidateNavSm";

const MyProfile = () => {
  const { setDashboardModal, dashboardModal } = useContext(AuthContext);
  return (
    <div className="lg:px-44 mt-4 lg:mt-0">
      <div
        onClick={() => setDashboardModal(true)}
        className="flex items-center gap-2 lg:hidden cursor-pointer"
      >
        <CiMenuBurger className="text-2xl" />
        <h1>Menu</h1>
      </div>
      {dashboardModal && <CandidateNavSm />}
      <CandidateProfileForm></CandidateProfileForm>
    </div>
  );
};

export default MyProfile;
