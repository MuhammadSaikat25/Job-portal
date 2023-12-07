import { useContext, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import EmployerNav from "./components/EmployerNav";
import { AuthContext } from "../../Firebase/AuthProvider";
import { RxBackpack } from "react-icons/rx";
import { FiBookmark } from "react-icons/fi";

const DashboardProfile = () => {
  const { dashboardModal, setDashboardModal } = useContext(AuthContext);

  return (
    <div className=" lg:px-[250px] bg-[#ececec] h-screen">
      <div className="px-3">
        <button
          onClick={() => setDashboardModal(true)}
          className=" flex items-center gap-2 bg-slate-200 text-blue-400 p-2 rounded lg:hidden"
        >
          <CiMenuFries></CiMenuFries> <span>Menu</span>
        </button>
      </div>

      {dashboardModal && <EmployerNav></EmployerNav>}
      {/* -------------------------------------- */}
      <div className="px-3">
        <h1 className="text-2xl font-semibold">Dashboard Home!</h1>
        <h1 className="text-gray-400">Ready to jump back in?</h1>
        {/* -------------------------- */}
        <div className="mt-10 flex flex-col lg:flex-row gap-20">
          {/* ---------------------- */}
          <div className="bg-white lg:w-fit p-4 rounded-md flex items-center justify-between gap-10 shadow-md shadow-blue-300">
            <span className="bg-slate-200 p-6 rounded-md">
              <RxBackpack color="blue"></RxBackpack>
            </span>
            <div className="text-right">
              <h1 className="text-blue-600 lg:text-2xl font-semibold">22</h1>
              <h1 className="text-gray-700 font-semibold">Applied Jobs</h1>
            </div>
          </div>
          {/* ---------------------- */}
          <div className="bg-white lg:w-fit p-4 rounded-md flex items-center justify-between gap-10 shadow-md shadow-blue-300">
            <span className="bg-slate-200 p-6 rounded-md">
             <FiBookmark color="red"></FiBookmark>
            </span>
            <div className="text-right">
              <h1 className="text-red-600 lg:text-2xl font-semibold">44</h1>
              <h1 className="text-gray-700 font-semibold">Shortlist</h1>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center absolute bottom-0 px-11">© 2023 Indded by ib-themes. All Right Reserved.</h1>
    </div>
  );
};

export default DashboardProfile;
