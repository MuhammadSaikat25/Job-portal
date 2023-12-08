import { useContext } from "react";
import EmployerForm from "../components/EmployerForm";
import EmployerNav from "../components/EmployerNav";
import { AuthContext } from "../../../Firebase/AuthProvider";
import { CiMenuFries } from "react-icons/ci"
const EmployerMyProfile = () => {
  const { dashboardModal, setDashboardModal } = useContext(AuthContext);

  return (
    <div className="">
      <div className="px-3">
        <button
          onClick={() => setDashboardModal(true)}
          className=" flex items-center gap-2 bg-slate-200 text-blue-400 p-2 rounded lg:hidden"
        >
          <CiMenuFries></CiMenuFries> <span>Menu</span>
        </button>
      </div>
      <div className="lg:hidden">{dashboardModal && <EmployerNav></EmployerNav>}</div>
      {/* --------------------------------------- */}
      <div className=" lg:px-[250px] w-full">
        <div className="px-3">
          <h1>My Profile!</h1>
          <h1>Ready to jump back in?</h1>
        </div>
        <div className="mt-14">
          <EmployerForm></EmployerForm>
        </div>
      </div>
    </div>
  );
};

export default EmployerMyProfile;
