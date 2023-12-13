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
        element: <CompanyProfile></CompanyProfile>,
      },
      {
        path:'postJob',
        element:<PostJob></PostJob>
      },
      {
        path:'manageJob',
        element:<ManageJob></ManageJob>
      },
      {
        path:'allApplicants',
        element:<AllApplicants></AllApplicants>
      },
      {
        path:'myProfile',
        element:<MyProfile></MyProfile>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
