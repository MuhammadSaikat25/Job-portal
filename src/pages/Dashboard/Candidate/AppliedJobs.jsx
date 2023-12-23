import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Firebase/AuthProvider";
import { CiMenuBurger } from "react-icons/ci";
import CandidateNavSm from "../components/Candidate/CandidateNavSm";
import useAxiosInterceptor from "../../../hooks/useAxiosInterceptor";

const AppliedJobs = () => {
  const { dashboardModal, setDashboardModal, user } = useContext(AuthContext);
  const axiosInterceptor = useAxiosInterceptor();
  const [myApply, setMyApply] = useState([]);
  
  useEffect(() => {
    axiosInterceptor
      .get(`/userAppliedJob/${user?.email}`)
      .then((res) => setMyApply(res.data));
  }, [user?.email]);

  return (
    <div className="lg:px-[200px] py-4">
      <h1 className="text-3xl font-semibold text-gray-700 px-3 lg:px-0">
        Applied jobs!
      </h1>
      <h1 className="px-3 text-gray-700 mt-2 lg:px-0">
        Ready to jump back in?
      </h1>
      <div
        onClick={() => setDashboardModal(true)}
        className="flex items-center gap-2 bg-blue-200 p-1 rounded-md mt-3 ml-3  w-fit text-blue-700 lg:hidden cursor-pointer"
      >
        <CiMenuBurger className="text-2xl" />
        <h1>Menu</h1>
      </div>
      {dashboardModal && <CandidateNavSm />}
      {/* --------------------------- */}
      {
        myApply?.length>0?<div className="mt-5 bg-white p-4 rounded ">
        <table className="w-full border-collapse">
          <thead className="bg-slate-200 rounded-3xl text-blue-600">
            <tr className="">
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Job Title
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Post date
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Status
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Apply Date
              </th>
            </tr>
          </thead>
          {/* ------------------- Table Body------------------ */}
          <tbody className="w-full font-semibold">
            {myApply?.map((job) => (
              <tr key={job._id} className="">
                <td className="py-4 align-middle hover:shadow-xl duration-1000 shadow-gray-200 p-4">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={job.companyImg}
                      alt=""
                    />
                    <div>
                      <h1 className="text-base font-bold text-gray-600">
                        {job.jobsTitle}
                      </h1>
                      <div className="flex items-center gap-1">
                        <span>{job.position}</span>
                        <span>{job.offeredSalary}k</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-gray-500">{job.postDate}</td>
                <td className="py-4 align-middle text-green-600">
                  {job.status}
                </td>
                <td className="py-4 align-middle text-gray-700">
                  {job.applyDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>:<h1 className="mt-[20px] text-gray-800 text-3xl">Applied not Found</h1>
      }
    </div>
  );
};

export default AppliedJobs;
