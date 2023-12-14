import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Firebase/AuthProvider";
import { CiMenuBurger } from "react-icons/ci";
import CandidateNavSm from "../components/Candidate/CandidateNavSm";
import useAxiosInterceptor from "../../../hooks/useAxiosInterceptor";
import CandidateMarkJob from "../components/Candidate/CandidateMarkJob";

const ShortlistedJobs = () => {
  const { user } = useContext(AuthContext);
  const { setDashboardModal, dashboardModal } = useContext(AuthContext);
  const [markJobs, setMarkJobs] = useState([]);
  const axiosInterceptor = useAxiosInterceptor();

  useEffect(() => {
    axiosInterceptor
      .get(`${import.meta.env.VITE_SERVER}/markJob/${user?.email}`)
      .then((res) => setMarkJobs(res.data));
  }, [user?.email]);

  return (
    <div className="py-4 lg:px-10 xl:px-20 2xl:px-40">
      <div
        onClick={() => setDashboardModal(true)}
        className="flex items-center gap-2 lg:hidden cursor-pointer"
      >
        <CiMenuBurger className="text-2xl" />
        <h1>Menu</h1>
      </div>
      {dashboardModal && <CandidateNavSm />}
      <div className="mt-4">
        <h1 className="text-2xl font-bold mb-2">Shortlisted jobs!</h1>
        <p>Ready to jump back in?</p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">My Favorite Jobs</h2>
        {/* ------------------- Table data----------------- */}
        <table className="w-[50%] border-collapse bg-white">
          <thead className="w-full">
            <tr className="bg-slate-200 p-4">
              <th className=" align-middle">Job Title</th>
              <th className=" align-middle">Post date</th>
              <th className="align-middle">Status</th>
              <th className="py-2 align-middle">Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {markJobs?.map((job) => (
              <tr key={job._id} className="border-t">
                <td className="py-4 align-middle">
                  <div className="flex items-center gap-2">
                    <img className="w-10 h-10 rounded-full" src={job.companyImg} alt="" />
                    <div>
                      <h1 className="text-base font-bold">{job.jobsTitle}</h1>
                      <div className="flex items-center gap-1">
                        <span>{job.position}</span>
                        <span>{job.offeredSalary}k</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 align-middle">{job.postDate}</td>
                <td className="py-4 align-middle">Active</td>
                <td className="py-4 align-middle">
                  <div className="flex gap-2">
                    <span className="cursor-pointer">See</span>
                    <span className="cursor-pointer">Delete</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShortlistedJobs;
