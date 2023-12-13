import { useContext } from "react";
import CompanyForm from "../components/Employer/CompanyForm";
import { AuthContext } from "../../../Firebase/AuthProvider";
import { CiMenuBurger } from "react-icons/ci";
import EmployerNavSm from "../components/Employer/EmployerNavSm";

const CompanyProfile = () => {
  const { setDashboardModal, dashboardModal } = useContext(AuthContext);
  return (
    <div className="lg:px-48 py-4">
      <div className="p-4">
        <h1 className="text-2xl text-gray-700 font-bold">Company Profile!</h1>
        <h1>Ready to jump back in?</h1>
        <div className="p-4 lg:hidden">
          <h1
            className="bg-blue-200 w-fit px-5 text-blue-700 rounded-md py-2 "
            onClick={() => setDashboardModal(true)}
          >
            <CiMenuBurger></CiMenuBurger>
          </h1>
        </div>
      </div>
      {dashboardModal && <EmployerNavSm></EmployerNavSm>}
      <CompanyForm></CompanyForm>
    </div>
  );
};

export default CompanyProfile;
