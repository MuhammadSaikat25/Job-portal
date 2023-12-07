import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import { BsBackpack4 } from "react-icons/bs";
import { FiBookmark } from "react-icons/fi";
import { CiLogin } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../../Firebase/AuthProvider";

const EmployerNav = () => {
    const {setDashboardModal}=useContext(AuthContext)
  return (
    <div className="flex flex-col bg-slate-950 text-white h-screen justify-between p-3 w-[50%] fixed top-0 z-50">
        <div onClick={()=>setDashboardModal(false)} className="">
          <span className="flex justify-end"> <IoIosCloseCircle size={25}></IoIosCloseCircle></span>
           <div className="w-full h-[1px] mt-2 bg-slate-400"></div>
        </div>
      <NavLink
        className={({ isActive }) =>
          isActive && "  bg-slate-200  p-1 text-blue-500 rounded"
        }
        to={"/dashboard/profile"}
      >
        <div className="flex items-center gap-2">
          <IoHome></IoHome>
          <span>Dashboard</span>
        </div>
      </NavLink>
      <NavLink>
        <div className="flex items-center gap-2">
          <AiOutlineUser></AiOutlineUser>
          <h1>My Profile</h1>
        </div>
      </NavLink>
      <NavLink>
        <div className="flex items-center gap-2">
          <IoIosPaper></IoIosPaper>
          <h1>My Resume</h1>
        </div>
      </NavLink>
      <NavLink>
        <div className="flex items-center gap-2">
          <BsBackpack4></BsBackpack4>
          <h1>Applied Job</h1>
        </div>
      </NavLink>
      <NavLink>
        <div className="flex items-center gap-2">
          <FiBookmark></FiBookmark>
          <h1>Shortlisted Jobs</h1>
        </div>
      </NavLink>
      <NavLink>
        <div className="flex items-center gap-2">
          <CiLogin></CiLogin>
          <h1>Logout</h1>
        </div>
      </NavLink>
      <NavLink to={"/"}>
        <div className="flex items-center gap-2">
          <IoHome></IoHome>
          <h1>Home</h1>
        </div>
      </NavLink>
    </div>
  );
};

export default EmployerNav;