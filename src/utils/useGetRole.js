import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../Firebase/AuthProvider';
const useGetRole = async() => {
    const [roleLoading,setRoleLoading]=useState(false)
    const {user}=useContext(AuthContext)
    setRoleLoading(true)
  const res=await axios.get(`${import.meta.env.VITE_SERVER}/getEmployer/${user?.email}`)
  const employer=res.data.role
  setRoleLoading(false)
  return{employer,roleLoading}
};

export default useGetRole;