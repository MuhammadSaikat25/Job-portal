import { AuthContext } from "../../../../Firebase/AuthProvider";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa6";
import { MdOutlineAddLink } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import { BsBackpack4 } from "react-icons/bs";
import { FiBookmark } from "react-icons/fi";
import { CiLogin } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
const CandidateNavSm = () => {
  const { dashboardModal, setDashboardModal } = useContext(AuthContext);
  return (
    <div className="flex flex-col bg-slate-950 text-white h-screen justify-between p-3 w-[50%] fixed top-0 z-50">
      <button onClick={() => setDashboardModal(false)}>
        <span className="flex justify-end">
          <IoIosCloseCircle size={25}></IoIosCloseCircle>
        </span>
        <hr />
      </button>
      <NavLink to={"/dashboard/overview"}>OverView</NavLink>
      <NavLink to={`/dashboard/myProfile`}>
        <span className="flex items-center gap-1">
          <AiOutlineUser></AiOutlineUser>
          <h1>My Profile</h1>
        </span>
      </NavLink>
      <NavLink>
        <span>
          <h1>Applied Jobs</h1>
        </span>
      </NavLink>
      <NavLink to={`/dashboard/ShortlistedJobs`}>
        <span>
          <h1>Shortlisted Jobs</h1>
        </span>
      </NavLink>
      <Link>Logout</Link>
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default CandidateNavSm;
