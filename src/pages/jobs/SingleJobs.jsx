import bag from "../../assets/bag.png";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import salary from "../../assets/salary.png";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";

const SingleJobs = ({ jobs }) => {
  const {
    _id,
    careerLevel,
    company,
    companyEmail,
    companyImg,
    country,
    deadline,
    jobDescription,
    jobType,
    jobsTitle,
    offeredSalary,
    position,
    postDate,
  } = jobs;

  return (
    <div className="border flex items-center  justify-between p-3 gap-4 w-fit rounded-md mx-auto border-gray-200 cursor-pointer">
      <img className="w-[30px]" src={companyImg} alt="" />
      {/* ---------------------- */}
      <div className="w-full py-6">
        <h1>{jobsTitle}</h1>
        <div className="flex items-center justify-between gap-3 mt-1 w-full">
          <section className="flex items-center gap-1">
            <img className="w-[20px]" src={bag} alt="" />
            <h1>{company}</h1>
          </section>
          <section className="flex items-center gap-1">
            <CiLocationOn></CiLocationOn>
            <h1>{country}</h1>
          </section>
          <section className="flex items-center gap-1">
            <IoMdTime></IoMdTime>
            <h1>{postDate}</h1>
          </section>
        </div>
        <h1 className="mt-1 bg-sky-100 px-5 rounded-xl w-fit text-blue-500">{jobType}</h1>
      </div>
      {/* ------------------------ */}
      <div className="">
        <CiBookmark></CiBookmark>
      </div>
    </div>
  );
};

export default SingleJobs;
