import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import { BsBackpack4 } from "react-icons/bs";
import { FiBookmark } from "react-icons/fi";
import { CiLogin } from "react-icons/ci";

const EmployerDashboard = () => {
  return (
    <div className="">
      <div className="hidden lg:flex gap-14 flex-col justify-between h-full overflow-y-scroll p-7 text-slate-700 ">
        <NavLink
          className={({ isActive }) =>
            isActive && "  bg-slate-200  p-1 text-blue-500 rounded"
          }
          to={"/dashboard/overview"}
        >
          <div className="flex items-center gap-2">
            <IoHome></IoHome>
            <span>Dashboard</span>
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard/myProfile"}
          className={({ isActive }) =>
            isActive && "  bg-slate-200  p-1 text-blue-500 rounded"
          }
        >
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
      {/* ------------------ */}
    </div>
  );
};

export default EmployerDashboard;
