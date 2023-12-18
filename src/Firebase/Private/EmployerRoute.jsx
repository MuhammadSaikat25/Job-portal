import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";


const EmployerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const axiosInterceptor = useAxiosInterceptor();
  const navigate = useNavigate();
  const [role, setRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userInfo = user?.email;
  useEffect(() => {
    if (userInfo) {
      axiosInterceptor
        .get(`${import.meta.env.VITE_SERVER}/getEmployer/${userInfo}`)
        .then((res) => {
          setRole(res.data.role);
          setIsLoading(false);
        })
        .catch((error) => console.error(error));
    }
  }, [userInfo]);
  if (loading || isLoading) {
    return <h1 className="px-[200px]">Loading...</h1>;
  }
  if (user && role==='Employer') {
    return children;
  }
  navigate("/");
};

export default EmployerRoute;

