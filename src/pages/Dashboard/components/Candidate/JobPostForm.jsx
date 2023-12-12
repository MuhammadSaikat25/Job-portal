import { FaBriefcase } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import useAxiosInterceptor from "../../../../hooks/useAxiosInterceptor";
import { AuthContext } from "../../../../Firebase/AuthProvider";

const JobPostForm = () => {
  const { user } = useContext(AuthContext);
  const [cols, setCols] = useState(getInitialCols());
  const [company, setCompany] = useState({});
  const axiosInterceptor = useAxiosInterceptor();
  // console.log(company)
  // ! ---------------------------------all function--------------------------
  function getInitialCols() {
    return window.innerWidth >= 1024 ? 150 : 50;
  }

  useEffect(() => {
    axiosInterceptor
      .get(`/getCompany/${user?.email}`)
      .then((res) => setCompany(res.data));
    function handleResize() {
      setCols(getInitialCols());
    }
    function handleResize() {
      setCols(getInitialCols());
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [user?.email]);
  return (
    <div className="bg-white p-10 lg:mt-10 rounded-md ">
      <div className="">
        <h1 className="text-gray-600 mb-10 font-semibold">Job Post</h1>
        <div className="flex flex-col lg:flex-row gap-10">
          <section className="flex gap-3 items-center">
            <div className="bg-blue-400 p-3 rounded-full">
              <FaBriefcase size={40} color="white"></FaBriefcase>
            </div>
            <h1>Job Details</h1>
          </section>
          {/* --------------------------- */}
          <section className="flex gap-3 items-center">
            <div className="bg-blue-400 rounded-full p-3">
              <MdPayments size={40} color="white"></MdPayments>
            </div>
            <h1>Package & Payments</h1>
          </section>
          {/* ----------------------------- */}
          <section className="flex items-center gap-3">
            <div className="bg-blue-400 p-3 rounded-full">
              <FaCheckDouble size={40} color="white"></FaCheckDouble>
            </div>
            <h1>Confirmation</h1>
          </section>
        </div>
      </div>
      <div className="">
        <form className="mt-10">
          {/* --------------------- Job Title------------------- */}
          <div className="">
            <label className="text-gray-600" htmlFor="JobTitle">
              Job Title
            </label>
            <br />
            <input
              className="bg-slate-300 p-2 rounded-md w-full mt-3"
              type="text"
              id="JobTitle"
              placeholder="Web developer"
              required
            />
          </div>
          {/* ----------------------Job Description-------------------- */}
          <div className="">
            <textarea
              className="border-none rounded-md bg-slate-300 mt-6 p-2 resize-none w-full text-black"
              name=""
              id=""
              cols={cols}
              rows="7"
              placeholder="Job Description"
            ></textarea>
          </div>
          {/* -----------------------------Email and Job type-------------- */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
            <section className="w-full lg:w-[50%]">
              <label htmlFor="email">Email</label>
              <br />
              <input
                className="bg-slate-300 p-2 rounded-md mt-1 w-full"
                type="email"
                id="email"
                placeholder="example@gmail.com"
              />
            </section>
            <section className="w-full lg:w-[50%]">
              <label htmlFor=""></label>
              <br />
              <select
                className="bg-slate-300 p-2 rounded-md w-full"
                name=""
                id=""
              >
                <option value="Remote">Remote</option>
                <option value="On side">On Side</option>
              </select>
            </section>
          </div>
          {/* -------------------- Offered Salary and Career Level---------------------------- */}
          <div className="mt-4 flex flex-col lg:flex-row gap-3">
            <section className="w-full lg:w-[50%]">
              <label htmlFor="offeredSalary">Offered Salary</label>
              <br />
              <select
                className="w-full mt-2 bg-slate-300 p-2 rounded-md"
                name=""
                id="offeredSalary"
              >
                <option value="30-50">30-50K years</option>
                <option value="60-80">60-80K years</option>
                <option value="80-100">80-100K years</option>
                <option value="100-130">100-130K years</option>
              </select>
            </section>
            <section className="w-full lg:w-[50%]">
              <label htmlFor="Career Level">Career Level</label>
              <br />
              <select
                className="w-full mt-2 bg-slate-300 p-2 rounded-md"
                name=""
                id="Career Level"
              >
                <option value="Bigener">Bigener</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advance">Advance</option>
              </select>
            </section>
          </div>
          {/* -------------------------Deadline Date and country----------------- */}
          <div className="mt-4 flex flex-col lg:flex-row gap-3">
            <section className="w-full lg:w-[50%]">
              <label htmlFor="Deadline">Deadline Date</label>
              <br />
              <input
                className="w-full mt-2 bg-slate-300 p-2 rounded-md"
                type="date"
                name=""
                id="Deadline"
              />
            </section>
            <section className="w-full lg:w-[50%]">
              <label htmlFor="Country">Country</label>
              <br />
              <input
                className="w-full mt-2 bg-slate-300 p-2 rounded-md"
                type="text"
                name=""
                id="Country"
                placeholder="Bangladesh"
              />
            </section>
          </div>
          {/* ---------------------- Job category-------------------- */}
          <div className="w-full mt-3">
            <section className="w-full">
              <label htmlFor="Job category">Job category</label>
              <br />
              <select
                className="w-full mt-2 bg-slate-300 p-2 rounded-md"
                name=""
                id="Job category"
              >
                <option value="part-time">Part Time</option>
                <option value="full-time">Full Time</option>
                <option value="Internship">Internship</option>
              </select>
            </section>
          </div>
          {/* <JobPostForm setSpecialisms={setSpecialisms}></JobPostForm> */}
          <button className="w-full bg-blue-600 p-1 text-white rounded-md mt-5">
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobPostForm;
