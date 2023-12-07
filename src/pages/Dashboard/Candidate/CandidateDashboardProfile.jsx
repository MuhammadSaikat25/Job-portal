import { RxBackpack } from "react-icons/rx";
import { FiBookmark } from "react-icons/fi";
import { IoIosPaper } from "react-icons/io";

const CandidateDashboardProfile = () => {
  return (
    <div className="lg:px-[250px] bg-[#ececec] h-screen p-10 lg:p-3">
      <div className="">
        <h1 className="text-2xl font-semibold">Dashboard Home!</h1>
        <h1 className="text-gray-400">Ready to jump back in?</h1>
        {/* -------------------------- */}
        <div className="mt-10 flex flex-col lg:flex-row gap-20">
          <div className="bg-white w-[70%] lg:w-fit p-4 rounded-md flex items-center justify-between gap-10 shadow-md shadow-blue-300">
            <span className="bg-slate-200 p-6 rounded-md">
              <IoIosPaper size={30} color="blue"></IoIosPaper>
            </span>
            <div className="text-right">
              <h1 className="text-blue-600 lg:text-2xl font-semibold">22</h1>
              <h1 className="text-gray-700 font-semibold"> Jobs Post</h1>
            </div>
          </div>
          {/* ---------------------- */}
          <div className="bg-white w-[70%] lg:w-fit p-4 rounded-md flex items-center justify-between gap-10 shadow-md shadow-blue-300">
            <span className="bg-slate-200 p-6 rounded-md">
              <RxBackpack size={30} color="green"></RxBackpack>
            </span>
            <div className="text-right">
              <h1 className="text-green-600 lg:text-2xl font-semibold">97</h1>
              <h1 className="text-gray-700 font-semibold">Application</h1>
            </div>
          </div>

          {/* ---------------------- */}
          <div className="bg-white w-[70%] lg:w-fit p-4 rounded-md flex items-center justify-between gap-10 shadow-md shadow-blue-300">
            <span className="bg-slate-200 p-6 rounded-md">
              <FiBookmark size={30} color="red"></FiBookmark>
            </span>
            <div className="text-right">
              <h1 className="text-red-600 lg:text-2xl font-semibold">44</h1>
              <h1 className="text-gray-700 font-semibold">Shortlist</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboardProfile;
