import React, { useEffect, useState } from "react";
import EmployerDashboard from "./Employer/EmployerDashboard";
import CandidateNavbar from "./Candidate/CandidateNavbar";
import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";

const DashboardNav = () => {
  const [role,setRole]=useState()
  const { user } = useContext(AuthContext);
  const axiosInterceptor = useAxiosInterceptor();
  useEffect(() => {
    axiosInterceptor.get(`/getUser/${user?.email}`).then((res) => {
      if(res.data.role==='Candidate'){
        localStorage.setItem("role", 'Candidate');
      }else{
        localStorage.setItem("role", 'Employer');
      }
      
      const a = localStorage.getItem('role')
      setRole(a)
    });
  }, [user?.email]);
  // console.log(role)
  return (
    <div className="bg-[#ffffff] fixed top-0 h-full lg:p-3">
      {role === "Candidate" ? (
        <CandidateNavbar></CandidateNavbar>
      ) : (
        <EmployerDashboard></EmployerDashboard>
      )}
    </div>
  );
};

export default DashboardNav;
