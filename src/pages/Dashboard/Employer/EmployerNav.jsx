import { Link, NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import { BsBackpack4 } from "react-icons/bs";
import { FiBookmark } from "react-icons/fi";
import { CiLogin } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../../Firebase/AuthProvider";
import EmployerNavSm from "../components/EmployerNavSm";

const EmployerNav = () => {
  return (
    <div className="">
      <div className="hidden lg:flex flex-col h-screen justify-around">
        <NavLink to={"/dashboard/overview"}>OverView</NavLink>
        <NavLink to={"/dashboard/companyProfile"}>
          <span className="flex items-center gap-1">
            <AiOutlineUser></AiOutlineUser>
            <h1>Company Profile</h1>
          </span>
        </NavLink>
        <NavLink to={`/dashboard/postJob`}>
          <span>
            <h1>Post A JOb</h1>
          </span>
        </NavLink>
        <NavLink to={`/dashboard/manageJob`}>
          <span>
            <h1>Manage Job</h1>
          </span>
        </NavLink>
        <NavLink to={`/dashboard/allApplicants`}>
          <span>
            <h1>All Applicants</h1>
          </span>
        </NavLink>
        <Link>Logout</Link>
        <Link to={"/"}>Home</Link>
      </div>
    </div>
  );
};

export default EmployerNav;
