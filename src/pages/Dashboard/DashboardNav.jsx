import React from 'react';
import EmployerDashboard from './Employer/EmployerDashboard';

const DashboardNav = () => {
    return (
        <div className='bg-[#ffffff] fixed top-0 h-full lg:p-3'>
            <EmployerDashboard></EmployerDashboard>
        </div>
    );
};

export default DashboardNav;