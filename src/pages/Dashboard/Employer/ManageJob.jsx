import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Firebase/AuthProvider";
import useAxiosInterceptor from "../../../hooks/useAxiosInterceptor";

const ManageJob = () => {
  const axiosInterceptor = useAxiosInterceptor();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (user?.email) {
      axiosInterceptor
        .get(`/Employers/${user?.email}`)
        .then((res) => console.log(res.data));
    }
  }, [user?.email]);
  return (
    <div className="px-[200px]">
      <h1>Hello</h1>
    </div>
  );
};

export default ManageJob;
