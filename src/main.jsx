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
// import DashboardProfile from "./pages/Dashboard/DashboardProfile.jsx";
import EmployerMyProfile from "./pages/Dashboard/Employer/EmployerMyProfile.jsx";
import EmployerDashboardProfile from "./pages/Dashboard/Employer/EmployerDashboardProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
    path:"dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'overview',
        element:<EmployerDashboardProfile></EmployerDashboardProfile>
      },
      {
        path:'myProfile',
        element:<EmployerMyProfile></EmployerMyProfile>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
