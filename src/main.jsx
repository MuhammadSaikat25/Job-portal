import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout/HomeLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import LogIn from "./components/LogIn.jsx";
import Register from "./components/Register.jsx";
import AuthProvider from "./Firebase/AuthProvider.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
// import EmployerMyProfile from "./pages/Dashboard/Employer/EmployerMyProfile.jsx";
// import EmployerDashboardProfile from "./pages/Dashboard/Employer/EmployerDashboardProfile.jsx";

import AllJobs from "./pages/jobs/AllJobs.jsx";
// import EmployerPrivateRoute from "./Firebase/Private/EmployerPrivateRoute.jsx"
import DashboardOverview from "./pages/Dashboard/DashboardOverview.jsx";
import CompanyProfile from "./pages/Dashboard/Employer/CompanyProfile.jsx";
import PostJob from "./pages/Dashboard/Employer/PostJob.jsx";
import ManageJob from "./pages/Dashboard/Employer/ManageJob.jsx";
import AllApplicants from "./pages/Dashboard/Employer/AllApplicants.jsx";
import MyProfile from "./pages/Dashboard/Candidate/MyProfile.jsx";
import ShortlistedJobs from "./pages/Dashboard/Candidate/ShortlistedJobs.jsx";
import JobDetails from "./pages/jobs/JobDetails.jsx";
import AppliedJobs from "./pages/Dashboard/Candidate/AppliedJobs.jsx";
import EmployerRoute from "./Firebase/Private/EmployerRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path:`jobDetails/:id`,
        element:<JobDetails></JobDetails>
      }
    ],
  },
  {
    path: "/login",
    element: <LogIn></LogIn>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "overview",
        element: <DashboardOverview></DashboardOverview>,
      },
      {
        path: "companyProfile",
        element: <EmployerRoute><CompanyProfile></CompanyProfile>,</EmployerRoute>
      },
      {
        path:'postJob',
        element:<EmployerRoute><PostJob></PostJob></EmployerRoute>
      },
      {
        path:'manageJob',
        element:<EmployerRoute><ManageJob></ManageJob></EmployerRoute>
      },
      {
        path:'allApplicants',
        element:<EmployerRoute><AllApplicants></AllApplicants></EmployerRoute>
      },
      {
        path:'myProfile',
        element:<MyProfile></MyProfile>
      },
      {
        path:'ShortlistedJobs',
        element:<ShortlistedJobs></ShortlistedJobs>
      },{
        path:'appliedJob',
        element:<AppliedJobs></AppliedJobs>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
