import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa6";
import { MdOutlineAddLink } from "react-icons/md";

import { IoIosPaper } from "react-icons/io";
import { BsBackpack4 } from "react-icons/bs";
import { FiBookmark } from "react-icons/fi";
import { CiLogin } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
const CandidateNavbar = () => {
  return (
    <div className="flex flex-col justify-between h-full p-2">
      <NavLink
        className={({ isActive }) =>
          isActive && "  bg-slate-200  p-1 text-blue-500 rounded"
        }
        to={"/dashboard/candidateOverview"}
      >
        <div className="flex items-center gap-2">
          <IoHome></IoHome>
          <span>Dashboard</span>
        </div>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive && "  bg-slate-200  p-1 text-blue-500 rounded"
        }
      >
        <div className="flex items-center gap-2">
          <FaUserTie></FaUserTie>
          <h1>Company Profile</h1>
        </div>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive && "  bg-slate-200  p-1 text-blue-500 rounded"
        }
      >
        <div className="flex items-center gap-2">
          <BsBackpack4></BsBackpack4>
          <h1>Manage Jobs</h1>
        </div>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive && "  bg-slate-200  p-1 text-blue-500 rounded"
        }
      >
        <div className="flex items-center gap-2">
          <MdOutlineAddLink></MdOutlineAddLink>
          <h1>Post A New Job</h1>
        </div>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive && "  bg-slate-200  p-1 text-blue-500 rounded"
        }
      >
        <div className="flex items-center gap-2">
          <IoIosPaper></IoIosPaper>
          <h1>All Applicants</h1>
        </div>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive && "  bg-slate-200  p-1 text-blue-500 rounded"
        }
      >
        <div className="flex items-center gap-2">
          <FiBookmark></FiBookmark>
          <h1>Shortlisted Resumes</h1>
        </div>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive && "  bg-slate-200  p-1 text-blue-500 rounded"
        }
      >
        <div className="flex items-center gap-2">
          <CiLogin></CiLogin>
          <h1>Logout</h1>
        </div>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive && "  bg-slate-200  p-1 text-blue-500 rounded"
        }
        to={"/"}
      >
        <div className="flex items-center gap-2">
          <IoHome></IoHome>
          <h1>Home</h1>
        </div>
      </NavLink>
    </div>
  );
};

export default CandidateNavbar;
