import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosInterceptor from "../../../../hooks/useAxiosInterceptor";
import bag from "../../../../assets/bag.png";
import salary from "../../../../assets/salary.png";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { FaHourglassEnd } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const EmployerJobDetails = () => {
  const axiosInterceptor = useAxiosInterceptor();
  const [job, setJob] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axiosInterceptor
      .get(`${import.meta.env.VITE_SERVER}/getSingleJob/${id}`)
      .then((res) => setJob(res.data));
  }, [id]);

  return (
    <div className="lg:px-[230px]  w-full">
      <div className="">
        <div className="bg-slate-100 p-10 py-20 relative rounded-md">
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
          <div className="flex items-center gap-1 mt-2 px-[40px] lg:px-[55px]">
            <section className="flex items-center gap-1">
              <img className="w-[30px]" src={salary} alt="" />
              <h1>{job.offeredSalary}k</h1>
            </section>
            <h1 className="bg-blue-300 text-blue-700 w-fit rounded-xl px-4">
              {job.jobType}
            </h1>
          </div>
        </div>
      </div>
      {/* ------------------------------- */}
      <div className="flex flex-col lg:flex-row lg:justify-between w-full mt-10">
        <div className="p-4">
          <section>
            <h1 className="mt-3 text-3xl text-gray-700 mb-5">
              Job Description
            </h1>
            <p>
              As a Product Designer, you will work within a Product Delivery
              Team fused with UX, engineering, product and data talent. You will
              help the team design beautiful interfaces that solve business
              challenges for our clients. We work with a number of Tier 1 banks
              on building web-based applications for AML, KYC and Sanctions List
              management workflows. This role is ideal if you are looking to
              segue your career into the FinTech or Big Data arenas.
            </p>
          </section>
          <section className="mt-5">
            <h1 className="text-3xl text-gray-800 mb-3">
              Key Responsibilities
            </h1>
            <section>
              <span className="flex items-center gap-3">
                <h1 className="w-[6px] h-[6px] bg-black rounded-full"></h1>
                <p>
                  Be involved in every step of the product design cycle from
                  discovery to developer handoff and user acceptance testing.
                </p>
              </span>
            </section>
            <section className="mb-3 mt-3">
              <span className="flex items-center gap-3">
                <h1 className="w-[6px] h-[6px] bg-black rounded-full"></h1>
                <p>
                  Work with BAs, product managers and tech teams to lead the
                  Product Design
                </p>
              </span>
            </section>
            <section>
              <span className="flex items-center gap-3">
                <h1 className="w-[6px] h-[6px] bg-black rounded-full"></h1>
                <p>
                  Maintain quality of the design process and ensure that when
                  designs are translated into code they accurately reflect the
                  design specifications.
                </p>
              </span>
            </section>
          </section>
        </div>
        <div className="">
          <div className="bg-white p-5 lg:p-10 rounded w-fit mt-4 lg:mt-0">
            <h1 className="text-2xl font-semibold text-gray-800">
              Job OverView
            </h1>
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
                <CiLocationOn
                  color="blue"
                  size={25}
                  className=""
                ></CiLocationOn>
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
    </div>
  );
};

export default EmployerJobDetails;
