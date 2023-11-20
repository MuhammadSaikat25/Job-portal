import img from "../../assets/mobile-app.png";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";

const DownloadSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:justify-around gap-10 items-center p-10 mt-20">
      <div>
        <img data-aos="zoom-in" className="" src={img} alt="" />
      </div>
      <div data-aos="zoom-in" className="text-center lg:text-left">
        <h1 className="text-blue-600 lg:text-2xl font-semibold">
          DOWNLOAD & ENJOY
        </h1>
        <p className="mt-2 mb-1 lg:text-4xl font-semibold">
          Get the Superio Job
        </p>
        <h1 className="mt-2 mb-3 lg:text-4xl font-semibold"> Search App</h1>
        <p className=" text-slate-600">
          Search through millions of jobs and find the right fit. Simply <br />{" "}
          swipe right to apply.
        </p>
        <div className="flex flex-col lg:flex-row gap-2 items-center mt-4">
          <div className="flex items-center gap-3 bg-black text-white p-3 rounded-md">
            <span>
              <BsApple></BsApple>
            </span>
            <p>Download on the apple store.</p>
          </div>
          <div className="flex items-center gap-3 bg-black text-white p-3 rounded-md">
            <span>
              <BsApple></BsApple>
            </span>
            <p>Download on the apple store.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
