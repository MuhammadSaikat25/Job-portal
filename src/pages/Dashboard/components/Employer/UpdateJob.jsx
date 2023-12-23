import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Firebase/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosInterceptor from "../../../../hooks/useAxiosInterceptor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [cols, setCols] = useState(getInitialCols());
  const [company, setCompany] = useState({});
  const [position, setPosition] = useState();
  const [jobType, setJobType] = useState();
  const [offeredSalary, setOfferedSalary] = useState();
  const [careerLevel, setCareerLevel] = useState();
  const axiosInterceptor = useAxiosInterceptor();
  const [expareanice, setExpareanice] = useState();
  const [job, setJob] = useState({});
  function getInitialCols() {
    return window.innerWidth >= 1024 ? 150 : 50;
  }
  
  useEffect(() => {
    axiosInterceptor
      .get(`/getCompany/${user?.email}`)
      .then((res) => setCompany(res.data));
    axiosInterceptor
      .get(`${import.meta.env.VITE_SERVER}/getSingleJob/${id}`)
      .then((res) => setJob(res.data));
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
  // ! ----------------set all default value------------
  useEffect(() => {
    if (job) {
      setJobType(job.jobType);
      setPosition(job.position);
      setOfferedSalary(job.offeredSalary);
      setCareerLevel(job.careerLevel);
      setExpareanice(job.expareanice);
      setJobType(job.jobType);
    }
  }, [job]);
  const update = async (e) => {
    e.preventDefault();
    setLoading(true)
    const jobsTitle = e.target.jobsTitle.value;
    const jobDescription = e.target.JobDescription.value;
    const deadline = e.target.Deadline.value;
    const country = e.target.Country.value;

    const jobData = {
      companyImg: company.img,
      jobDescription,
      postDate: job.postDate,
      jobsTitle,
      deadline,
      country,
      offeredSalary,
      careerLevel,
      company: company?.name,
      position,
      jobType,
      companyEmail: company?.email,
      expareanice,
      applied: job.applied,
    };

    try {
      const res = await axiosInterceptor.put(
        `${import.meta.env.VITE_SERVER}/updateJob/${id}`,
        jobData
      );
      if(res.status===200){
        toast('Job Update successful')
        setLoading(false)
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
   
  };
  return (
    <div className="lg:px-[200px]">
     <ToastContainer></ToastContainer>
      <form onSubmit={update} className="mt-10">
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
            name="jobsTitle"
            placeholder="Web developer"
            required
            defaultValue={job.jobsTitle}
          />
        </div>
        {/* ----------------------Job Description-------------------- */}
        <div className="">
          <textarea
            className="border-none rounded-md bg-slate-300 mt-6 p-2 resize-none w-full text-black"
            name="JobDescription"
            cols={cols}
            rows="7"
            placeholder="Job Description"
            defaultValue={job.jobDescription}
          ></textarea>
        </div>
        {/* -----------------------------Email and Job position-------------- */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
          <section className="w-full lg:w-[50%]">
            <label htmlFor="email">Email</label>
            <br />
            <input
              className="bg-slate-300 p-2 rounded-md mt-1 w-full"
              type="email"
              id="email"
              placeholder="example@gmail.com"
              value={company.email || ""}
              readOnly
            />
          </section>
          <section className="w-full lg:w-[50%]">
            <label htmlFor=""></label>
            <br />
            <select
              className="bg-slate-300 p-2 rounded-md w-full"
              name=""
              id=""
              value={position}
              onChange={(e) => setPosition(e.target.value)}
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
              defaultValue={offeredSalary}
              className="w-full mt-2 bg-slate-300 p-2 rounded-md"
              name=""
              id="offeredSalary"
              onChange={(e) => setOfferedSalary(e.target.value)}
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
              defaultValue={careerLevel}
              className="w-full mt-2 bg-slate-300 p-2 rounded-md"
              name=""
              value={careerLevel}
              onCanPlay={(e) => setCareerLevel(e.target.value)}
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
              name="Deadline"
              id="Deadline"
              defaultValue={job.deadline}
            />
          </section>
          <section className="w-full lg:w-[50%]">
            <label htmlFor="Country">Country</label>
            <br />
            <input
              className="w-full mt-2 bg-slate-300 p-2 rounded-md"
              type="text"
              name="Country"
              id="Country"
              placeholder="Bangladesh"
              required
              defaultValue={job.country}
            />
          </section>
        </div>
        {/* ---------------------- Job category and Expareanice-------------------- */}
        <div className="mt-4 flex flex-col lg:flex-row gap-3">
          <section className="w-full">
            <label htmlFor="Job category">Expareanice</label>
            <br />
            <select
              defaultValue={expareanice}
              className="w-full mt-2 bg-slate-300 p-2 rounded-md"
              name=""
              value={expareanice}
              onChange={(e) => setExpareanice(e.target.value)}
              id="Job category"
            >
              <option value="1-3">1-3 Years</option>
              <option value="4-7">4-7 Years</option>
              <option value="8-10">8-10 Years</option>
              <option value="10+">10+ Years</option>
            </select>
          </section>
          <section className="w-full">
            <label htmlFor="Job category">Job category</label>
            <br />
            <select
              className="w-full mt-2 bg-slate-300 p-2 rounded-md"
              name=""
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              id="Job category"
              defaultValue={jobType}
            >
              <option value="part-time">Part Time</option>
              <option value="full-time">Full Time</option>
              <option value="Internship">Internship</option>
            </select>
          </section>
        </div>

        {loading ? (
          <h1 className="text-center font-semibold text-orange-400">
            Loading...
          </h1>
        ) : (
          <button className="w-full bg-blue-700 p-1 text-white rounded-md mt-5">
            Post Job
          </button>
        )}
      </form>
    </div>
  );
};

export default UpdateJob;
