import logo from "../assets/Indeed-Logo-2004.png";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import { updateProfile } from "firebase/auth";
import axios from 'axios'
const Register = () => {
  const navigate = useNavigate();
  const { createUser, auth } = useContext(AuthContext);
  const [userLoading, setUserLoading] = useState(false);
  const [userType, setUserType] = useState("");
  const [error, seTError] = useState("");
  const [hidden, setHidden] = useState(false);
  const role =userType || 'Employer'
  
  const toggle = (type) => {
    setUserType(type);
  };
  //! ----------------- SingUp function ---------------
  const handelLogin = async (e) => {
    setUserLoading(true);
    e.preventDefault();
    const enteredEmail  = e.target.email.value;
    const email=enteredEmail.toLowerCase()
    const name = e.target.name.value;
    const password = e.target.password.value;
    try {
      const userData={
        email,name,role
      }
      const singing = await createUser(email, password);
      const updateUser = await updateProfile(auth.currentUser, {
        displayName: name,
      });
    // !------------------- post user into Db --------------
    const {data}=await axios.post(`${import.meta.env.VITE_SERVER}/postUser`,userData)

      seTError("");
      setUserLoading(false);
      navigate("/");
    } catch (error) {
      setUserLoading(false);
      if (error.code === "auth/email-already-in-use") {
        seTError("Email is already in use.");
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-screen w-full flex items-center justify-center">
      <div className="bg-white w-full lg:w-[40%] rounded-md p-10">
        <div className="flex justify-between items-center p-2 ">
          <img className="w-[70px]" src={logo} alt="" />
          <div className="flex items-center gap-1">
            <h1 className="text-slate-500">Already have an account?</h1>
            <Link to={"/login"} className="text-blue-500">
              sing In
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <div className="">
            <h1 className="text-2xl font-semibold text-center">
              Register to Indeed
            </h1>
            <h1 className="text-stone-500 mt-3">
              Now you can apply for your dream job here i Indeed
            </h1>
          </div>
        </div>
        {/* --------------------------- */}
        <form
          onSubmit={handelLogin}
          className=" flex flex-col relative justify-center mt-10"
        >
          <div className="mx-auto flex items-center gap-4 mb-10">
            <h1
              onClick={() => toggle("Candidate")}
              className={`${
                userType === "Candidate" &&
                "bg-orange-600 rounded duration-500 p-1 text-white"
              }`}
            >
              Candidate
            </h1>
            <h1
              onClick={() => toggle("Employer")}
              className={`${
                userType === "Employer" &&
                "bg-orange-600 rounded duration-500 p-1 text-white"
              } `}
            >
              Employer
            </h1>
          </div>
          {/* ----------------------------- */}
          <div className="w-[70%] flex flex-col gap-3 mx-auto">
            <input
              className="border bg-white border-stone-300 rounded p-1 w-full"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
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
              className="absolute top-[167px] right-16 lg:right-28 cursor-pointer"
            >
              {hidden ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>}
            </div>
            {userLoading ? (
              <h1 className="text-center text-orange-500">Loading..</h1>
            ) : (
              <button
                type="submit"
                className="bg-blue-600 p-2 rounded text-white"
              >
                Register
              </button>
            )}
            <h1 className="text-red-600 text-center">{error}</h1>
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

export default Register;
