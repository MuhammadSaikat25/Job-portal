import React from 'react';
import EmployerDashboard from './Employer/EmployerDashboard';
import CandidateNavbar from './Candidate/CandidateNavbar';

const DashboardNav = () => {
    const role='candidate'
    return (
        <div className='bg-[#ffffff] fixed top-0 h-full lg:p-3'>
          {
            role ==='candidate' ? <CandidateNavbar></CandidateNavbar>:<EmployerDashboard></EmployerDashboard>
          }
        </div>
    );
};

export default DashboardNav;