import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  
  const [dashboardModal,setDashboardModal]=useState(false)
    const AuthConfig ={
       dashboardModal,setDashboardModal
    }
  return <AuthContext.Provider value={AuthConfig}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
