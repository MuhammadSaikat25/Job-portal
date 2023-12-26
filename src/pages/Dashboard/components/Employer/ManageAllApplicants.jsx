import { CiLocationOn } from "react-icons/ci";
import salary from "../../../../assets/salary.png";
import { FaRegEye } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { FcCheckmark } from "react-icons/fc";
import useAxiosInterceptor from "../../../../hooks/useAxiosInterceptor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageAllApplicants = ({ applicant, setId }) => {
  const axiosInterceptor = useAxiosInterceptor();
  const Approved = async (id) => {
    setId(id);
    const data = {
      status: "Approved",
    };
    const res = await axiosInterceptor.patch(`/approvedApplicant/${id}`, data);
    if (res.status === 200) {
      return toast("Applicant Approved");
    }
  };
  const reject = async (id) => {
    setId(id);
    const data = {
      status: "Reject",
    };
    const res = await axiosInterceptor.patch(`/approvedApplicant/${id}`, data);
    if (res.status === 200) {
      return toast("Applicant Reject");
    }
  };

  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="flex items-start gap-5 border w-full p-5 rounded">
        <h1
          className={`${
            applicant.status === "Reject" &&
            "bg-red-200 text-red-600 p-1 rounded"
          } ${
            applicant.status === "Approved" &&
            "bg-green-200 text-green-600 p-1 rounded"
          }`}
        >
          {applicant.status}
        </h1>
        <img
          className="w-[80px] rounded-full h-[80px] object-cover"
          src={applicant.candidateImg}
          alt=""
        />
        <div className="">
          <h1 className="text-gray-700 text-3xl">{applicant.candidateName}</h1>
          <div className="flex items-center gap-1">
            <h1 className="text-blue-500 ">{applicant.candidateJob}</h1>
            <span className="flex items-center gap-1">
              <CiLocationOn></CiLocationOn>
              <h1>{applicant.country}</h1>
            </span>
            <span className="flex items-center gap-1">
              <img className="w-[30px]" src={salary} alt="" />
              <h1>{applicant.offeredSalary}k</h1>
            </span>
          </div>
          <div className="flex items-center gap-5">
            {/* <FaRegEye></FaRegEye> */}
            <button>
              <FcCheckmark
                onClick={() => Approved(applicant._id)}
              ></FcCheckmark>
            </button>
            <button>
              <IoCloseCircle
                onClick={() => reject(applicant._id)}
              ></IoCloseCircle>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAllApplicants;
