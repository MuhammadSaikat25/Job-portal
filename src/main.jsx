import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout/HomeLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import LogIn from "./components/LogIn.jsx";
import Register from "./components/Register.jsx";

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
    path:"/login",
    element:<LogIn></LogIn>
  },
  {
    path:"/register",
    element:<Register></Register>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
