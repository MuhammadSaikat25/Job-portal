import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Indeed-Logo-2004.png";
import { CiMenuFries } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Firebase/AuthProvider";

const Nav = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const isUser = localStorage.getItem("user");
  const [role, setRole] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER}/getUser/${user?.email}`)
      .then((res) => setRole(res.data.role));
  }, [user?.email]);

  return (
    <nav className="relative">
      {/* ----------------------for desktop----------------- */}
      <div
        className={`fixed w-full z-10 top-0 lg:flex justify-around items-center ${
          location.pathname === "/dashboard/profile"
            ? "bg-gray-600"
            : "bg-[#ebe4e4]"
        } hidden text-slate-800`}
      >
        <Link to={"/"}>
          {" "}
          <img className="w-[100px]" src={logo} alt="" />
        </Link>
        <div className="flex gap-5 items-center">
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-blue-200 text-blue-600 p-1 rounded" : ""
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-blue-200 text-blue-600 p-1 rounded" : ""
            }
            to={"jobs"}
          >
            Find Job
          </NavLink>
          <NavLink>Blog</NavLink>
        </div>
        <div className="flex gap-5 items-center">
          {isUser === "true" && (
            <div className="">
              {role === "Candidate" && (
                <NavLink
                  to={"/dashboard/myProfile"}
                  className={`text-violet-600`}
                >
                  Upload your Resume
                </NavLink>
              )}
            </div>
          )}
          <Link
            to={"/login"}
            className="bg-blue-200 px-5 py-1 rounded-md text-blue-600 duration-500"
          >
            Login/Register
          </Link>
          {isUser === "true" && (
            <div className="">
              {role === "Employer" && (
                <NavLink
                  to={"/dashboard/postJob"}
                  className="bg-blue-600 px-5 py-1 rounded-md text-white"
                >
                  Job Post
                </NavLink>
              )}
            </div>
          )}
          {isUser === "true" && (
            <div className="">
              {role === "Employer" ? (
                <NavLink
                  to={"/dashboard/allApplicants"}
                  className="bg-blue-600 px-5 py-1 rounded-md text-white"
                >
                  Dashboard
                </NavLink>
              ) : (
                <NavLink
                  to={"/dashboard/appliedJob"}
                  className="bg-blue-600 px-5 py-1 rounded-md text-white"
                >
                  Dashboard
                </NavLink>
              )}
            </div>
          )}
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
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-blue-200 text-blue-600 p-1 rounded" : ""
              }
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-blue-200 text-blue-600 p-1 rounded" : ""
              }
              to={"jobs"}
            >
              Find Job
            </NavLink>
            <NavLink>Blog</NavLink>
            <Link to={"/login"} className="text-white">
              Login/Register
            </Link>
            {isUser === "true" && (
              <div className="">
                {role === "Candidate" && (
                  <NavLink
                    to={"/dashboard/myProfile"}
                    className={`text-violet-600`}
                  >
                    Upload your Resume
                  </NavLink>
                )}
              </div>
            )}
            <div className="">
              {isUser === "true" && (
                <div className="">
                  {role === "Employer" && (
                    <NavLink to={"/dashboard/postJob"} className=" text-white">
                      Job Post
                    </NavLink>
                  )}
                </div>
              )}
            </div>
            {isUser === "true" && (
              <div className="">
                {role === "Employer" ? (
                  <NavLink
                    to={"/dashboard/allApplicants"}
                    className="text-white"
                  >
                    Dashboard
                  </NavLink>
                ) : (
                  <NavLink to={"/dashboard/appliedJob"} className=" text-white">
                    Dashboard
                  </NavLink>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
