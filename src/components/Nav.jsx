import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/Indeed-Logo-2004.png";
import { CiMenuFries } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const location=useLocation()

  return (
    <nav className="relative">
      {/* ----------------------for desktop----------------- */}
      <div
        className={`fixed w-full z-10 lg:flex justify-around items-center ${location.pathname==='/dashboard/profile'?'bg-gray-600':"bg-[#ebe4e4]"} hidden text-slate-800`}
      >
        <img className="w-[100px]" src={logo} alt="" />
        <div className="flex gap-5 items-center">
          <NavLink>Home</NavLink>
          <NavLink>Find Job</NavLink>
          <NavLink>Employers</NavLink>
          <NavLink>Blog</NavLink>
        </div>
        <div className="flex gap-5 items-center">
          <NavLink to={'/dashboard/myProfile'} className={`text-violet-600`}>Upload your CV</NavLink>
          <Link
            to={"/login"}
            className="bg-blue-300 px-5 py-1 rounded-md text-white hover:bg-purple-950 duration-500"
          >
            Login/Register
          </Link>
          <NavLink className="bg-blue-600 px-5 py-1 rounded-md text-white">
            Job Post
          </NavLink>
          <NavLink
            to={"/dashboard/candidateOverview"}
            className="bg-blue-600 px-5 py-1 rounded-md text-white"
          >
            Dashboard
          </NavLink>
        </div>
      </div>

      {/* -------------------- */}
      <div className="flex fixed top-0 w-full z-20 bg-fuchsia-200 items-center justify-between lg:hidden">
        <Link to={"/"}>
          <img className="w-[50px]" src={logo} alt="" />
        </Link>
        <div className="flex items-center gap-3">
          <Link>
            <CiUser></CiUser>
          </Link>
          <span onClick={() => setOpen(!open)}>
            {open ? (
              <IoCloseCircleOutline></IoCloseCircleOutline>
            ) : (
              <CiMenuFries></CiMenuFries>
            )}
          </span>
        </div>
      </div>

      {/* --------------------------for mobile------------------------- */}
      {open && (
        <div className="lg:hidden fixed top-0  text-center bg-slate-900 z-20 h-full w-[50%]">
          <div className="flex gap-14 flex-col text-white justify-around h-full ">
            <NavLink>Home</NavLink>
            <NavLink>Find Job</NavLink>
            <NavLink>Employers</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink to={'/dashboard/myProfile'}>Upload your CV</NavLink>
            <Link
              to={"/login"}
              className="lg:bg-blue-300 px-5 py-1 rounded-md text-white hover:bg-purple-950 duration-500"
            >
              Login/Register
            </Link>
            <NavLink className="lg:bg-blue-600 px-5 py-1 rounded-md text-white">
              Job Post
            </NavLink>
            <NavLink onClick={() => setOpen(!open)}
              to={"/dashboard/overview"}
              className="lg:bg-blue-600 px-5 py-1 rounded-md text-white"
            >
              Dashboard
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
