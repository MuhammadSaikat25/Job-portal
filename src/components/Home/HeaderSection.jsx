import img from "../../assets/banner-img-1.png";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import img1 from "../../assets/man1.png";
import img2 from "../../assets/man2.png";
import img3 from "../../assets/man3.png";
import { IoMdAdd } from "react-icons/io";

const HeaderSection = () => {
  return (
    <div className="lg:flex items-center justify-around py-28 bg-[#ebe4e4]">
      <div className="">
        <p className=" lg:text-5xl text-slate-900 text-center lg:text-left">
          {" "}
          There Are <span className="text-blue-500">93,178</span> Postings Here{" "}
          <br />
          For you!
        </p>
        <p className="mt-6 lg:text-xl text-gray-400 text-center lg:text-left">
          Find Jobs, Employment & Career Opportunities
        </p>
        {/* ===================== input for search */}
        <form className="relative lg:flex lg:justify-center items-center lg:bg-slate-50 p-5 lg:w-fit rounded- md mt-10 ">
          <input
            className=" bg-slate-50 p-6 w-full mb-10 lg:mb-0 lg:p-1"
            type="text"
            name=""
            id=""
            placeholder="Job Title"
          />
          <span className="absolute left-6 top-12 lg:top-12 lg:left-2">
            <CiSearch></CiSearch>
          </span>
          <div className="hidden lg:block w-[1px] bg-slate-400 h-[30px]"></div>

          <div className=" flex relative flex-col lg:flex-row justify-center w-full">
            <input
              className="bg-slate-50  p-6 lg:p-1 lg:ml-10  w-full mb-10 lg:mb-0 "
              type="text"
              name=""
              id=""
              placeholder="city"
            />
            <span className="absolute top-7 lg:top-7 lg:right-[250px]">
              <CiLocationOn></CiLocationOn>
            </span>
            <button className="bg-blue-700 text-white py-3 px-10 rounded-md ">
              Find jobs
            </button>
          </div>
        </form>
        {/* =================== popular serach */}
        <div className="lg:flex mt-5 text-gray-500">
          <h1 className="text-gray-600 font-semibold">Popular Searches :</h1>
          <p className="lg:pl-4">
            Designer, Developer, Web, IOS, PHP, Senior, Engineer,
          </p>
        </div>
      </div>
      {/* ====================== image for lg: device */}
      <div className="relative hidden lg:block ">
        <img className=" lg:w-[500px]" src={img} alt="" />
        <div data-aos="zoom-in" className="bg-slate-100 absolute top-7 -left-12 p-2 rounded-md flex items-center gap-4 w-fit">
          <span className="border bg-orange-300 p-2 rounded">
            <CgMail size={25} color="black" className=""></CgMail>
          </span>
          <h1>
            Work Inquiry From <br /> Ali Tufan
          </h1>
        </div>
        {/* ==================== */}
        <div data-aos="zoom-in" className="bg-slate-50 absolute top-28  -right-10 px-7 py-4 rounded-md flex flex-col gap-3 w-fit">
          <h1>10k+ Candidates</h1>
          <div className="relative">
            <img
              className="w-[40px]  rounded-full h-[40px] object-cover"
              src={img1}
              alt=""
            />
            <img
              className="w-[40px] absolute top-0 left-7 rounded-full h-[40px] object-cover"
              src={img2}
              alt=""
            />
            <img
              className="w-[40px] absolute right-6 top-0 rounded-full h-[40px] object-cover"
              src={img3}
              alt=""
            />
            <span className="absolute bg-slate-400 p-1 rounded-full top-1 right-1"><IoMdAdd color="black" size={25}></IoMdAdd></span>
          </div>
        </div>
        <div data-aos="zoom-in" className="bg-slate-50 absolute bottom-10 p-3 rounded-md w-fit">
            <div className="text-center  p-3">
                <h1 className="text-slate-950 font-semibold">Upload your CV</h1>
                <h1>It only takes a few seconds</h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
