import { useEffect, useState } from "react";
import axios from "axios";
import SingleJobs from "./singleJobs";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState(0);
  const perPage = 6;
  const [currentPage, SetCurrentPage] = useState(1);
  const totalPage = Math.ceil(allJobs / perPage);
  const page = [...Array(totalPage).keys()];
  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_SERVER
        }/allJobs?page=${currentPage}&limit=${perPage}`
      )
      .then((res) => {
        setJobs(res.data);
      });
    axios
      .get(`${import.meta.env.VITE_SERVER}/getJobNumber`)
      .then((res) => setAllJobs(res.data.job));
  }, [perPage, currentPage]);
  return (
    <div className="py-10 lg:py-20 max-w-7xl lg:flex flex-col justify-between mx-auto w-full relative h-screen">
      {/* -------------------- */}
      <div className="grid grid-cols-1 p-4 lg:p-0 lg:grid-cols-2 lg:flex-1 gap-3 ">
        {jobs?.map((jobs) => (
          <SingleJobs key={jobs._id} jobs={jobs}></SingleJobs>
        ))}
      </div>
      {/* ------------------------- */}
      <div className="">
        {AllJobs?.length < 6 && (
          <div className="mt-10 flex items-center mb-10 lg:mb-0 justify-center">
            {page?.map((page, i) => (
              <button
                onClick={() => SetCurrentPage(page + 1)}
                className="ml-3 bg-rose-400 px-5 rounded text-white text-2xl"
                key={i}
              >
                {page + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllJobs;
