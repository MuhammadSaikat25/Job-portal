import React from "react";
import EmployerForm from "../components/EmployerForm";


const EmployerMyProfile = () => {
  return (
    <div className=" lg:px-[250px] w-full">
      <div className="px-3">
        <h1>My Profile!</h1>
        <h1>Ready to jump back in?</h1>
      </div>
      <div className="mt-14">
        <EmployerForm></EmployerForm>
      </div>
    </div>
  );
};

export default EmployerMyProfile;
