import bag from "../../assets/bag.png";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import salary from "../../assets/salary.png";
import { Link, useNavigate } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";

const SingleJobs = ({ jobs }) => {
  const axiosInterceptor=useAxiosInterceptor()
  const { user } = useContext(AuthContext);
  const navigate=useNavigate()
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
  const markJob = async(id, companyEmail) => {
    if(!user){
       toast('Login')
      setTimeout(()=>{
        navigate('/login')
      },1000)
      return
    }
    const data={
      jobId:id,
      companyEmail
    }
   const res=await axiosInterceptor.post(`/markJob`,data)
   console.log(res.data)
  };
  return (
    <div className="border items-center border-black flex gap-2 justify-between  w-full lg:w-[70%] p-2  rounded-md mx-auto cursor-pointer">
      <ToastContainer></ToastContainer>
      <img className="w-[30px] " src={companyImg} alt="" />
      {/* ---------------------- */}
      <div className="w-full py-6">
        <h1 className="text-gray-700 font-semibold">{jobsTitle}</h1>
        <div className="flex items-center justify-between w-fit">
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
        <div className="flex items-center gap-2 mt-2">
          <h1 className="mt-1 bg-sky-100 px-5 rounded-xl w-fit text-blue-500">
            {jobType}
          </h1>
          <span className="flex items-center gap-2">
            <img className="w-[32px]" src={salary} alt="" />
            <h1>{offeredSalary}K</h1>
          </span>
        </div>
      </div>
      {/* ------------------------ */}
      <div onClick={() => markJob(_id, companyEmail)} className="">
        <CiBookmark></CiBookmark>
      </div>
    </div>
  );
};

export default SingleJobs;
