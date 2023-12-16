import { useEffect, useState } from "react";
import useAxiosInterceptor from "../../../../hooks/useAxiosInterceptor";
import { CiLocationOn } from "react-icons/ci";
import salary from "../../../../assets/salary.png";

const ShortlistedJobView = ({ id }) => {
  const axiosInterceptor = useAxiosInterceptor();
  const [job, setJob] = useState({});
  useEffect(() => {
    if (id) {
      axiosInterceptor
        .get(`/getSingleMarkJob/${id}`)
        .then((res) => setJob(res.data));
    }
  }, [id]);
 
  return (
    <div className="bg-purple-100  p-6 lg:p-16 border-gray-600 sh shadow-xl stroke-gray-700 border relative">
      <h1 className="absolute top-2 left-0 bg-red-200 uppercase rounded-tr-xl px-5 rounded-br-xl text-red-500">{job.jobType}</h1>
      <div className="">
        <img className="w-[100px] mb-4 rounded-full mx-auto" src={job?.companyImg} alt="" />
        <h1 className="text-center text-green-600">{job?.company}</h1>
        <h1 className="text-center text-gray-800 font-semibold">{job?.jobsTitle}</h1>
        <section className="flex items-center gap-1 justify-center text-gray-700">
          <span><CiLocationOn></CiLocationOn></span>
          <h1>{job.country}</h1>
        </section>
        <section className="flex items-center gap-1 justify-center text-gray-700">
          <img className="w-[20px]" src={salary} alt="" />
          <h1>{job.offeredSalary}k</h1>
        </section>
      </div>
    </div>
  );
};

export default ShortlistedJobView;
