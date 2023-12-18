import React, { useContext } from "react";
import JobPostForm from "../components/Employer/JobPostForm";
import { CiMenuBurger } from "react-icons/ci";
import { AuthContext } from "../../../Firebase/AuthProvider";
import EmployerNavSm from "../components/Employer/EmployerNavSm";

const PostJob = () => {
  const { setDashboardModal, dashboardModal } = useContext(AuthContext);
  return (
    <div className="lg:px-48 mt-7 lg:mt-0">
      <h1 className="text-3xl ml-4 lg:ml-0 font-semibold text-gray-700">Post a New Job!</h1>
      <h1 className=" ml-4 lg:ml-0 text-gray-700">Ready to jump back in?</h1>
      <div className="p-4 lg:hidden">
        <h1
          className="bg-blue-200 w-fit px-5 text-blue-700 rounded-md py-2 "
          onClick={() => setDashboardModal(true)}
        >
          <CiMenuBurger></CiMenuBurger>
        </h1>
      </div>
      {dashboardModal && <EmployerNavSm></EmployerNavSm>}
      <JobPostForm></JobPostForm>
    </div>
  );
};

export default PostJob;
