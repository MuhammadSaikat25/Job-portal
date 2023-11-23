import { useState } from "react";
import logo from "../assets/Indeed-Logo-2004.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

const LogIn = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-screen w-full flex items-center justify-center">
      <div className="bg-white w-full lg:w-[40%] rounded-md p-10">
        <div className="flex justify-between items-center p-2 ">
          <img className="w-[70px]" src={logo} alt="" />
          <div className="flex items-center gap-1">
            <h1 className="text-slate-500">Don't have an account?</h1>
            <Link className="text-blue-500">sing Up</Link>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <div className="">
            <h1 className="text-2xl font-semibold text-center">
              Lonin to Indeed
            </h1>
            <h1 className="text-stone-500 mt-3">
              Now you can apply for your deram job here i Indeed
            </h1>
          </div>
        </div>
        {/* --------------------------- */}
        <form className=" flex flex-col relative justify-center mt-10">
          {/* ----------------------------- */}
          <div className="w-[70%] flex flex-col gap-3 mx-auto">
            <input
              className="border bg-white border-stone-300 rounded p-1 w-full"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="border border-stone-300 bg-white rounded p-1 w-full"
              type={`${hidden ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              required
            />
            <div
              onClick={() => setHidden(!hidden)}
              className="absolute top-[55px] right-28 cursor-pointer"
            >
              {hidden ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>}
            </div>
            <button
              type="submit"
              className="bg-blue-600 p-2 rounded text-white"
            >
              Login
            </button>
          </div>
        </form>
        {/* --------------------------- */}
        <div className="mt-4">
          <div className="flex items-center gap-2 justify-center">
            <div className="w-[166px] h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <h1>OR</h1>
            <div className="w-[166px] h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          </div>
        </div>
        {/* --------------------------- */}

        <div className="bg-sky-600 p-2 rounded-md flex items-center justify-center gap-1 w-[380px] mt-2 mx-auto">
          <span className="">
            <FcGoogle size={20}></FcGoogle>
          </span>
          <button className="text-white">Google</button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
