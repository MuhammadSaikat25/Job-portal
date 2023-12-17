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

  const ShowPdf = (pdf) => {
    window.open(`${import.meta.env.VITE_SERVER}/uploads/${pdf}`,"_blank")
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="flex items-start gap-5 border w-full p-5 rounded">
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
            <FaRegEye onClick={() => ShowPdf(applicant.pdf)}></FaRegEye>
            <button
              disabled={
                applicant.status === "Reject" || applicant.status === "Approved"
              }
            >
              <FcCheckmark
                onClick={() => Approved(applicant._id)}
              ></FcCheckmark>
            </button>
            <button
              disabled={
                applicant.status === "Reject" || applicant.status === "Approved"
              }
            >
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
