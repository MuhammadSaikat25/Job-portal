import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";
import bag from "../../assets/bag.png";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import salary from "../../assets/salary.png";
import { CiBookmark } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { FaHourglassEnd } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../Firebase/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

const JobDetails = () => {
  const { user } = useContext(AuthContext);
  const axiosInterceptor = useAxiosInterceptor();
  const { id } = useParams();
  const [job, setJob] = useState({});
  const currentDate = moment();
  const applyDate = currentDate.format("MM/DD/YYYY");
  const [candidate, setCandidate] = useState({});
  // ! --------------- get the job data------------------
  useEffect(() => {
    axiosInterceptor.get(`/getSingleJob/${id}`).then((res) => setJob(res.data));
    axiosInterceptor
      .get(`/loginUser/${user?.email}`)
      .then((res) => setCandidate(res.data));
  }, [id, user?.email]);
  
  // ! -------------------- Apply to the job---------------
  const jobApply = async (e) => {
    e.preventDefault();
    const companyEmail = job.companyEmail;
    const jobId = job._id;
    const companyImg = job.companyImg;
    const jobDescription = job.jobDescription;
    const jobsTitle = job.jobsTitle;
    const deadline = job.deadline;
    const country = job.country;
    const offeredSalary = job.offeredSalary;
    const careerLevel = job.careerLevel;
    const position = job.position;
    const jobType = job.jobType;
    const postDate = job.postDate;
    const expareanice = job.expareanice;
    const company = job.company;

    const applyData = {
      applyDate,
      jobId,
      companyEmail,
      careerLevel,
      company,
      candidateName: candidate.name,
      companyImg,
      jobDescription,
      expareanice,
      postDate,
      position,
      offeredSalary,
      deadline,
      country,
      jobType,
      jobsTitle,
      candidateEmail: candidate.email,
      candidateImg: candidate.img,
    };
    const applyInAJOb = await axiosInterceptor.post(`/applyJob`, applyData);
    if (applyInAJOb.status === 200) {
      toast("Applied SuccessFull");
    }
    const incrementAppliedNum = await axiosInterceptor.patch(
      `/addApplied/${jobId}`
    );
  };

  return (
    <div className="lg:mt-[56px]">
      <ToastContainer></ToastContainer>
      <div className="bg-slate-100 p-10 py-20 relative">
        <div className=" max-w-7xl mx-auto w-ful flex flex-col px-10 lg:px-0 lg:flex-row gap-3">
          <img
            className="rounded-full w-[50px] object-fill"
            src={job.companyImg}
            alt=""
          />
          <div className="">
            <h1 className="lg:text-2xl px-2 lg:px-0 text-gray-800 font-semibold">
              {job.jobsTitle}
            </h1>
            <div className="flex items-center gap-5  w-full">
              <section className="flex items-center gap-2 w-full px-2 lg:px-0">
                <img className="w-[20px]" src={bag} alt="" />
                <h1>{job.company}</h1>
              </section>
              <section className="flex items-center gap-1">
                <CiLocationOn></CiLocationOn>
                <h1>{job.country}</h1>
              </section>
              <section className="flex items-center gap-1">
                <IoMdTime></IoMdTime>
                <h1>{job.postDate}</h1>
              </section>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 mt-2 px-[40px] lg:px-[140px]">
          <section className="flex items-center gap-1">
            <img className="w-[30px]" src={salary} alt="" />
            <h1>{job.offeredSalary}k</h1>
          </section>
          <h1 className="bg-blue-300 text-blue-700 w-fit rounded-xl px-4">
            {job.jobType}
          </h1>
        </div>
      </div>
      {/* -------------------- */}
      <div className="flex items-center top-[250px] right-[157px] gap-2 absolute lg:top-32 lg:right-40">
        <button
          onClick={jobApply}
          className="px-5 py-2 rounded bg-blue-600 text-emerald-50"
        >
          Apply For Job
        </button>
        <span className="bg-blue-200 py-3 px-4 rounded-md cursor-pointer">
          <CiBookmark color="blue"></CiBookmark>
        </span>
      </div>
      {/* ------------------------- */}
      <div className="max-w-7xl mx-auto w-full mt-10 flex flex-col gap-3 lg:flex-row justify-between p-5">
        <div className="lg:w-[60%]">
          <h1 className="text-gray-800 text-2xl font-semibold mb-5">
            Job Description
          </h1>
          <p className="text-gray-600">
            As a Product Designer, you will work within a Product Delivery Team
            fused with UX, engineering, product and data talent. You will help
            the team design beautiful interfaces that solve business challenges
            for our clients. We work with a number of Tier 1 banks on building
            web-based applications for AML, KYC and Sanctions List management
            workflows. This role is ideal if you are looking to segue your
            career into the FinTech or Big Data arenas.
          </p>
        </div>
        <div className="bg-gray-200 p-5 lg:p-10 rounded mt-4 lg:mt-0">
          <h1 className="text-2xl font-semibold text-gray-800">Job OverView</h1>
          <div className="mt-4 flex flex-col gap-4">
            <section className="flex gap-2">
              <CiCalendarDate
                color="blue"
                size={30}
                className=""
              ></CiCalendarDate>
              <section>
                <h1 className="text-gray-950 font-semibold">Date Posted:</h1>
                <h1 className="text-gray-600">{job.postDate}</h1>
              </section>
            </section>
            <section className="flex gap-2">
              <FaHourglassEnd
                color="blue"
                size={25}
                className=""
              ></FaHourglassEnd>
              <section>
                <h1 className="text-gray-950 font-semibold">
                  Expiration date:
                </h1>
                <h1 className="text-gray-600">{job.deadline}</h1>
              </section>
            </section>
            <section className="flex gap-2">
              <CiLocationOn color="blue" size={25} className=""></CiLocationOn>
              <section>
                <h1 className="text-gray-950 font-semibold">Location:</h1>
                <h1 className="text-gray-600">{job.country}</h1>
              </section>
            </section>
            <section className="flex gap-2">
              <FaUser color="blue" size={25} className=""></FaUser>
              <section>
                <h1 className="text-gray-950 font-semibold">Job Title:</h1>
                <h1 className="text-gray-600">{job.jobsTitle}</h1>
              </section>
            </section>
            <section className="flex gap-2">
              <img className="w-[20px] object-fill" src={salary} alt="" />
              <section>
                <h1 className="text-gray-950 font-semibold">Salary:</h1>
                <h1 className="text-gray-600">{job.offeredSalary}k</h1>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

