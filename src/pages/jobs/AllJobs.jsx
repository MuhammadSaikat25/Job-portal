import { useEffect, useState } from "react";
import axios from "axios";
import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";
import SingleJobs from "./singleJobs";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const axiosInterceptor = useAxiosInterceptor();
  useEffect(() => {
    axiosInterceptor.get(`/allJobs`).then((res) => setJobs(res.data));
  }, []);
  return (
    <div className="py-10 lg:py-20">
        <div className="grid grid-cols-1 mx-auto lg:grid-cols-4 gap-4">
            {
                jobs?.map(jobs=><SingleJobs key={jobs._id} jobs={jobs}></SingleJobs>)
            }
        </div>
    </div>
  )
};

export default AllJobs;
