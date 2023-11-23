import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Indeed-Logo-2004.png";
import { CiMenuFries } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";

const Nav = () => {
  const [open, setOpne] = useState(false);
  return (
    <nav className="relative">
      {/* for decstop */}
      <div
        className={`fixed w-full z-10 lg:flex justify-around items-center bg-[#ebe4e4] hidden text-slate-800`}
      >
        <img className="w-[100px]" src={logo} alt="" />
        <div className="flex gap-5 items-center">
          <NavLink>Home</NavLink>
          <NavLink>Find Job</NavLink>
          <NavLink>Employers</NavLink>
          <NavLink>Blog</NavLink>
        </div>
        <div className="flex gap-5 items-center">
          <NavLink>Upload your CV</NavLink>
          <Link to={'/login'} className="bg-blue-300 px-5 py-1 rounded-md text-white hover:bg-purple-950 duration-500">
            Login/Register
          </Link>
          <NavLink className="bg-blue-600 px-5 py-1 rounded-md text-white">
            Job Post
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
          <span onClick={() => setOpne(!open)}>
            {open ? (
              <IoCloseCircleOutline></IoCloseCircleOutline>
            ) : (
              <CiMenuFries></CiMenuFries>
            )}
          </span>
        </div>
      </div>

      {/* for mobile */}
      {open && (
        <div className="lg:hidden fixed top-0 gap-5 text-center bg-slate-900 z-20 h-full w-[50%]">
          <div className="flex gap-14 flex-col text-white justify-between h-full overflow-y-scroll">
            <NavLink>Home</NavLink>
            <NavLink>Find Job</NavLink>
            <NavLink>Employers</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Find Job</NavLink>
            <NavLink>Employers</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Find Job</NavLink>
            <NavLink>Employers</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Find Job</NavLink>
            <NavLink>Employers</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Find Job</NavLink>
            <NavLink>Employers</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Find Job</NavLink>
            <NavLink>Employers</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Find Job</NavLink>
            <NavLink>Employers</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Find Job</NavLink>
            <NavLink>Employers</NavLink>
            <NavLink>Blog</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
