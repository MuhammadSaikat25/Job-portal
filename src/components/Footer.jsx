import logo from "../assets/Indeed-Logo-2004.png";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mb-10 max-w-7xl mx-auto w-full">
      <div className=" mt-32 flex flex-col lg:flex-row lg:justify-between p-5 gap-12 lg:gap-0">
        {/* -------------------------- */}
        <div className="">
          <div className="">
            <img className="w-[100px]" src={logo} alt="" />
          </div>
          <div className="mt-3">
            <h1 className="text-2xl font-semibold">Call Us</h1>
            <h1 className="text-blue-500 text-2xl font-semibold">
              123 456 7890
            </h1>
          </div>
          <div className="space-y-1 mt-4 text-teal-700">
            <h1>329 Queensberry Street, North Melbourne VIC</h1>
            <h1>3051, Australia.</h1>
            <h1>support@superio.com</h1>
          </div>
        </div>
        {/* --------------------------- */}
        <div className="">
          <h1 className="text-2xl mb-3">For Candidates</h1>
          <div className="text-teal-700 space-y-1">
            <h1>Browse Jobs</h1>
            <h1>Candidate Dashboard</h1>
            <h1>My Bookmarks</h1>
          </div>
        </div>
        {/* ----------------------------- */}
        <div className="">
          <h1 className="text-2xl mb-3">For Employers</h1>
          <div className="space-y-2 text-stone-600">
            <h1>Browse Candidates</h1>
            <h1>Employer Dashboard</h1>
            <h1>Add Job</h1>
          </div>
        </div>
        {/* ----------------------------- */}
        <div className="">
          <h1 className="text-2xl mb-3">About Us</h1>
          <div className="space-y-2 text-teal-600">
            <h1>Contact</h1>
            <h1>Blog</h1>
            <h1>Terms Page</h1>
          </div>
        </div>
      </div>
      {/* ------------------------------------ */}
      <div className="w-full h-[1px] bg-slate-200 mt-12"></div>
      {/* --------------------------------------------- */}
      <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between mt-10">
        <h1 className="mt-10 lg:mt- text-center lg:text-left">© 2023 Superio by ib-themes. All Right Reserved.</h1>
        <div className="flex gap-10 lg:gap-0 justify-center lg:justify-between lg:w-[30%]">
          <span>
            <FaFacebookF></FaFacebookF>
          </span>
          <>
            <FaInstagram></FaInstagram>
          </>
          <>
            <FaTwitter></FaTwitter>
          </>
          <>
            <FaLinkedinIn></FaLinkedinIn>
          </>
        </div>
      </div>
    </div>
  );
};

export default Footer;
