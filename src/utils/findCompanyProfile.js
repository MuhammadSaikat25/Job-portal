
import useAxiosInterceptor from "../hooks/useAxiosInterceptor";

const findCompanyProfile = async (email) => {
  const axiosInterceptor = useAxiosInterceptor();
  const res = await axiosInterceptor.get(`/getCompany/${email}`);
  console.log(res.data);
  return res.data;
};

export default findCompanyProfile;
