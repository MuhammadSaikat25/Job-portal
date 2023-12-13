import { useEffect, useState } from "react";
import axios from "axios";
import SingleJobs from "./singleJobs";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
const AllJobs = () => {
  const [jobType, setJobType] = useState();
  const [experience, setExperience] = useState();
  const [salary, setSalary] = useState();
  const [jobs, setJobs] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_SERVER
        }/allJobs?jobType=${jobType}&experience=${experience}&salary=${salary}`
      )
      .then((res) => setJobs(res.data));
  }, [jobType, experience, salary]);
  return (
    <div className="py-10 lg:py-20 max-w-7xl mx-auto w-full relative h-screen">
      <button
        onClick={() => setOpen(true)}
        className="ml-5 lg:ml-24 mb-7 mt-4 bg-sky-200 p-1 flex items-center gap-3 w-fit rounded-md"
      >
        <span className="text-blue-700">
          <CiMenuBurger size={30}></CiMenuBurger>
        </span>
        <h1 className="text-blue-700">Filter</h1>
      </button>
      {/* ------------ Filter Nav-------------- */}

      {/* -------------------- */}
      <div className="grid grid-cols-1 p-4 lg:p-0 lg:grid-cols-2 gap-3 flex-1">
        {jobs?.map((jobs) => (
          <SingleJobs key={jobs._id} jobs={jobs}></SingleJobs>
        ))}
      </div>
      {open && (
        <div className="w-fit fixed p-4 top-[55px] h-full bg-cyan-500 z-50 lg:left-[0px]">
          <h1 onClick={() => setOpen(false)} className="flex justify-end">
            <IoCloseSharp></IoCloseSharp>
          </h1>
          <div className=" flex flex-col justify-evenly">
            {/* ------------- JOB TYPE----------------- */}
            <div className="">
              <h1>Job type</h1>
              <div className="flex flex-col mb-3">
                <label>
                  <input
                    type="radio"
                    name="full-time"
                    value="full-time"
                    checked={jobType === "full-time"}
                    onChange={(e) => setJobType(e.target.value)}
                  />
                  Full Time
                </label>
                <label>
                  <input
                    type="radio"
                    name="part-time"
                    value="part-time"
                    checked={jobType === "part-time"}
                    onChange={(e) => setJobType(e.target.value)}
                  />
                  Part Time
                </label>
                <label>
                  <input
                    type="radio"
                    name="Internship"
                    value="Internship"
                    checked={jobType === "Internship"}
                    onChange={(e) => setJobType(e.target.value)}
                  />
                  Internship
                </label>
              </div>
            </div>
            {/* -----------------Experience-------------- */}
            <div className="">
              <h1>Experience</h1>
              <div className="flex flex-col mb-3">
                <label>
                  <input
                    type="radio"
                    name="1-3"
                    value="1-3"
                    checked={experience === "1-3"}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                  1-3 Years
                </label>
                <label>
                  <input
                    type="radio"
                    name="4-7"
                    value="4-7"
                    checked={experience === "4-7"}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                  4-7 Years
                </label>
                <label>
                  <input
                    type="radio"
                    name="8-10"
                    value="8-10"
                    checked={experience === "8-10"}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                  8-10 Years
                </label>
                <label>
                  <input
                    type="radio"
                    name="10+"
                    value="10+"
                    checked={experience === "10+"}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                  10+ Years
                </label>
              </div>
            </div>
            {/* ------------------ Salary --------------- */}
            <div className="">
              <h1>Salary</h1>
              <div className="flex flex-col">
                <label>
                  <input
                    type="radio"
                    value="30-50"
                    checked={salary === "30-50"}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                  30-50K
                </label>
                <label>
                  <input
                    type="radio"
                    value="60-80"
                    checked={salary === "60-80"}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                  60-80K
                </label>
                <label>
                  <input
                    type="radio"
                    value="100-130"
                    checked={salary === "100-130"}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                  100-130K
                </label>
                <label>
                  <input
                    type="radio"
                    value="80-100"
                    checked={salary === "80-100"}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                  80-100K
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllJobs;
