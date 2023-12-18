import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../../../Firebase/AuthProvider";
import { IoSendOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";

const EmployerNav = () => {
  const {userOut}=useContext(AuthContext)
  const navigate=useNavigate()
  const singOut=async()=>{
   await userOut()
   navigate('/')
  }
  return (
    <div className="">
      <div className="hidden lg:flex flex-col h-screen justify-around">
        <NavLink className={({isActive})=>isActive? "bg-blue-200 text-blue-600 p-1 rounded":'' } to={"/dashboard/overview"}>
        <span className="flex items-center gap-1">
          <IoHome></IoHome>
            <h1>OverView</h1>
          </span>
        </NavLink>
        <NavLink className={({isActive})=>isActive? "bg-blue-200 text-blue-600 p-1 rounded":'' } to={"/dashboard/companyProfile"}>
          <span className="flex items-center gap-1">
            <AiOutlineUser></AiOutlineUser>
            <h1>Company Profile</h1>
          </span>
        </NavLink>
        <NavLink className={({isActive})=>isActive? "bg-blue-200 text-blue-600 p-1 rounded":'' } to={`/dashboard/postJob`}>
          <span className="flex items-center gap-2">
            <IoSendOutline></IoSendOutline>
            <h1>Post A JOb</h1>
          </span>
        </NavLink>
        <NavLink className={({isActive})=>isActive? "bg-blue-200 text-blue-600 p-1 rounded":'' } to={`/dashboard/manageJob`}>
          <span className="flex items-center gap-2">
            <MdOutlineManageAccounts></MdOutlineManageAccounts>
            <h1>Manage Job</h1>
          </span>
        </NavLink>
        <NavLink className={({isActive})=>isActive? "bg-blue-200 text-blue-600 p-1 rounded":'' } to={`/dashboard/allApplicants`}>
          <span className="flex items-center gap-2">
            <IoIosPaper></IoIosPaper>
            <h1>All Applicants</h1>
          </span>
        </NavLink>
        <Link onClick={singOut}>
          <span className="flex items-center gap-2">
            <CiLogin></CiLogin>
            <h1>Logout</h1>
          </span>
        </Link>
        <Link to={"/"}>Home</Link>
      </div>
    </div>
  );
};

export default EmployerNav;
