import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase";
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
  const auth=getAuth(app)
  const [dashboardModal,setDashboardModal]=useState(false)
  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
    const AuthConfig ={
       dashboardModal,setDashboardModal,createUser,login,auth
    }
  return <AuthContext.Provider value={AuthConfig}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
