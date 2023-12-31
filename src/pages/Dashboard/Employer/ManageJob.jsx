import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Firebase/AuthProvider";
import useAxiosInterceptor from "../../../hooks/useAxiosInterceptor";
import { FaRegEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiMenuBurger } from "react-icons/ci";
import EmployerNavSm from "../components/Employer/EmployerNavSm";

const ManageJob = () => {
  const axiosInterceptor = useAxiosInterceptor();
  const {setDashboardModal, dashboardModal, user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [id, setId] = useState("");
  useEffect(() => {
    if (user?.email) {
      axiosInterceptor
        .get(`/Employers/${user?.email}`)
        .then((res) => {
          const data = res.data;
          const restJobs = data?.filter((data) => data._id !== id);
          setJobs(restJobs);
        });
    }
  }, [user?.email,id]);

  const deleteJob=async(id)=>{
    setId(id)
      try {
        const res=await axiosInterceptor.delete(`${import.meta.env.VITE_SERVER}/deleteJob/${id}`)
       if(res.status===200){
        toast("Job Delete Successful")
       }
      } catch (error) {
        
      }
  }
  return (
    <div className="lg:px-[200px] mt-5 ">
      <ToastContainer></ToastContainer>
      <div
        onClick={() => setDashboardModal(true)}
        className="flex items-center gap-2 lg:hidden cursor-pointer"
      >
        <CiMenuBurger className="text-2xl" />
        <h1>Menu</h1>
      </div>
      {dashboardModal && <EmployerNavSm />}
      <h1 className="text-3xl text-gray-800 font-semibold">Manage jobs!</h1>
      <h1>Ready to jump back in?</h1>
      <div className="bg-white p-4 rounded-md mt-5 shadow-md shadow-gray-400">
        <table className="w-full border-collapse">
          <thead className="bg-slate-200 rounded-3xl text-blue-600">
            <tr className="">
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Job Title
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Applications
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Post date
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Expired date
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Action
              </th>
            </tr>
          </thead>
          {/* ------------------- Table Body------------------ */}
          <tbody className="w-full">
            {jobs?.map((job) => (
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
                <td className="p-4 text-gray-700 font-semibold">
                  {job.applied}Applied
                </td>
                <td className="p-4 text-gray-700 font-semibold">
                  {job.postDate}
                </td>
                <td className="p-4 text-gray-700 font-semibold">
                  {job.deadline}
                </td>
                <td className="py-4 align-middle">
                  <div className="flex items-center gap-2">
                    <span
                      className={`cursor-pointer bg-blue-200 p-1 rounded-md hover:${() =>
                        setDeleteHover(true)}`}
                    >
                      <Link to={`/dashboard/employerJobDetail/${job._id}`}>
                        <FaRegEye color="blue "></FaRegEye>
                      </Link>
                    </span>
                    <span className="cursor-pointer bg-blue-200 p-1 rounded-md">
                      <Link to={`/dashboard/updateJob/${job._id}`}>
                        <FaPencil color="blue"></FaPencil>
                      </Link>
                    </span>
                    <span onClick={()=>deleteJob(job._id)} className="cursor-pointer bg-blue-200 p-1 rounded-md">
                      <MdDeleteForever color="blue"></MdDeleteForever>
                    </span>
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

export default ManageJob;
