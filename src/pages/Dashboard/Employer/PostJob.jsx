import React, { useContext } from "react";
import JobPostForm from "../components/Employer/JobPostForm";
import { CiMenuBurger } from "react-icons/ci";
import { AuthContext } from "../../../Firebase/AuthProvider";
import EmployerNavSm from "../components/Employer/EmployerNavSm";

const PostJob = () => {
  const { setDashboardModal, dashboardModal } = useContext(AuthContext);
  return (
    <div className="lg:px-48">
      <div className="p-4 lg:hidden">
        <h1
          className="bg-blue-200 w-fit px-5 text-blue-700 rounded-md py-2 "
          onClick={() => setDashboardModal(true)}
        >
          <CiMenuBurger></CiMenuBurger>
        </h1>
      </div>
      {dashboardModal && <EmployerNavSm></EmployerNavSm>}
      <h1>JOb</h1>
      <JobPostForm></JobPostForm>
    </div>
  );
};

export default PostJob;
