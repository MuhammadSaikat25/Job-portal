import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Firebase/AuthProvider";
import { CiMenuBurger } from "react-icons/ci";
import CandidateNavSm from "../components/Candidate/CandidateNavSm";
import useAxiosInterceptor from "../../../hooks/useAxiosInterceptor";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import ShortlistedJobView from "../components/Candidate/ShortlistedJobView";

const ShortlistedJobs = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const { setDashboardModal, dashboardModal } = useContext(AuthContext);
  const [markJobs, setMarkJobs] = useState([]);
  const axiosInterceptor = useAxiosInterceptor();
  const [id, setId] = useState("");
  const [detailId, setDetailId] = useState();
  const showDetailMarkJob = (id) => {
    setOpen(!open);
    setDetailId(id);
  };
  // !---------------------- Delete Bookmark Job function---------------
  const deleteMarkJob = async (id) => {
    setOpen(false);
    setId(id);
    const res = await axiosInterceptor.delete(`deletedSortListJob/${id}`);
  };
  // ! ------------------ useEffect for get All get Bookmark jobs------------------
  useEffect(() => {
    axiosInterceptor
      .get(`${import.meta.env.VITE_SERVER}/markJob/${user?.email}`)
      .then((res) => {
        const data = res.data;
        const restJobs = data?.filter((data) => data._id !== id);
        setMarkJobs(restJobs);
      });
  }, [user?.email, id]);

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
      <div className="mt-6 bg-white p-10 relative rounded-md" >
        <h2 className="text-xl font-bold mb-2">My Favorite Jobs</h2>
        {/* ------------------- Table data----------------- */}
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
                Action
              </th>
            </tr>
          </thead>
          {/* ------------------- Table Body------------------ */}
          <tbody className="w-full">
            {markJobs?.map((job) => (
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
                <td className="py-4 align-middle text-green-600">Active</td>
                <td className="py-4 align-middle">
                  <div className="flex items-center gap-2">
                    <span
                      onClick={() => showDetailMarkJob(job._id)}
                      className={`cursor-pointer bg-blue-200 p-1 rounded-md hover:${() =>
                        setDeleteHover(true)}`}
                    >
                      <FaRegEye color="blue "></FaRegEye>
                    </span>
                    <span
                      onClick={() => deleteMarkJob(job._id)}
                      className="cursor-pointer bg-blue-200 p-1 rounded-md"
                    >
                      <RiDeleteBin5Line color="blue"></RiDeleteBin5Line>
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="absolute top-[50%] left-[150px] lg:left-[40%]">
        <div className=" bg-slate-600">
          {open && <ShortlistedJobView id={detailId}></ShortlistedJobView>}
        </div>
      </div>
      
    </div>
  );
};

export default ShortlistedJobs;
