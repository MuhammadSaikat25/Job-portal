import img from "../../assets/young-woman.png";
import upwork from "../../assets/upwork.png";
import google from "../../assets/google.png";
import fiverr from "../../assets/fiverr.png";
import { AiOutlineCheck } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import CountUp from "react-countup";

const ImageNumber = () => {
  return (
    <div className="max-w-7xl mx-auto relative w-full mt-20 mb-32 ">
      <div className="flex flex-col lg:flex-row items-start lg:gap-20 justify-between">
        <img
          data-aos="fade-right"
          className="rounded-lg mx-auto lg:mx-0 w-[90%] lg:w-[500px] lg:h-[600px] object-cover"
          src={img}
          alt=""
        />
        <div className="p-3 mb-2 mt-20 lg:mt-0">
          <h1 className=" lg:text-4xl font-semibold">
            Millions of Jobs. Find the one <br /> that suits you.
          </h1>

          <p className=" text-teal-600 ">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 600,000 companies worldwide.
          </p>

          <div className="">
            <div className="flex items-center mt-3 text-teal-700">
              <span>
                <AiOutlineCheck></AiOutlineCheck>
              </span>
              <h1>Bring to the table win-win survival</h1>
            </div>
            <div className="flex items-center mt-3 text-teal-700">
              <span>
                <AiOutlineCheck></AiOutlineCheck>
              </span>
              <h1>Capitalize on low hanging fruit to identify</h1>
            </div>
            <div className="flex gap-3 items-center mt-3 text-teal-700">
              <span>
                <AiOutlineCheck></AiOutlineCheck>
              </span>
              <h1>But I must explain to you how all this</h1>
            </div>
          </div>
          {/* ------------------------- */}
          <button className="text-white bg-blue-600 px-8 mt-5 py-3 rounded-md">
            Get Start
          </button>
        </div>
      </div>
      {/* ------------------------------- */}
      <div
        data-aos="flip-right"
        className="bg-white border absolute top-44 left-20 w-[60%] lg:top-[490px] lg:left-[450px] rounded-md lg:w-[20%] shadow p-1 lg:p-9"
      >
        <h1 className="text-center mb-4 lg:mb-6 text-slate-800">
          300k+ Employers
        </h1>
        <div className="relative ml-14 lg:ml-8">
          <span className=" absolute -top-[70px] -left-20 lg:-top-[120px] lg:-left-[90px] bg-blue-600 rounded-full p-2">
            <AiOutlineCheck color="white" size={40}></AiOutlineCheck>
          </span>
          <img
            className="w-[40px]  rounded-full h-[40px] object-cover"
            src={upwork}
            alt=""
          />
          <img
            className="w-[40px] absolute top-0 left-7 rounded-full h-[40px] object-cover"
            src={google}
            alt=""
          />
          <img
            className="w-[40px] absolute left-14 top-0 rounded-full h-[40px] object-cover"
            src={fiverr}
            alt=""
          />
          <span className="absolute bg-slate-900 p-1 rounded-full top-0 left-[82px]">
            <IoMdAdd color="white" size={30}></IoMdAdd>
          </span>
        </div>
      </div>
      {/* ------------------------- */}
      <div className="mt-12 flex flex-col lg:flex-row gap-12 lg:gap-0 lg:justify-around">
        <div className="">
          <div className="flex items-center justify-center text-3xl font-semibold">
            <CountUp end={4} />
            <h1>M</h1>
          </div>
          <h1 className="text-teal-700 text-center lg:text-left mt-3">
            4 million daily active users
          </h1>
        </div>
        <div className="">
          <div className="flex items-center justify-center text-3xl font-semibold">
            <CountUp end={12} />
            <h1>k</h1>
          </div>
          <h1 className="text-teal-700 text-center lg:text-left mt-3">
            Over 12k open job positions
          </h1>
        </div>
        <div className="">
          <div className="flex items-center justify-center text-3xl font-semibold">
            <CountUp end={20} />
            <h1>M</h1>
          </div>
          <h1 className="text-teal-700 text-center lg:text-left mt-3">
            Over 20 million stories shared
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageNumber;
