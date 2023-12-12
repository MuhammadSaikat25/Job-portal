import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate } from "react-router-dom";
import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";

const CandidatePrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(true);
  const axiosInterceptor = useAxiosInterceptor();

  useEffect(() => {
    async function userRole() {
      const res = await axiosInterceptor.get(`/getUser/${user?.email}`);
      const resRole = await res.data.role;
      setRole(resRole);
      setDataLoaded(false);
    }
    userRole();
  }, [user?.email]);

  if (loading || dataLoaded) {
    return <h1 className="lg:px-[300px]">Loading..........</h1>;
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/"}></Navigate>;
};

export default CandidatePrivateRoute;
