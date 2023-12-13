import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "./firebase";
import axios from "axios";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading,setLoading]=useState(true)
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const [dashboardModal, setDashboardModal] = useState(false);
  console.log(user)
  // !  ------------------- cerate function for login,sing up and logout ----------------------
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userOut = () => {
    return signOut(auth);
  };
  // ! --------------track user-------------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const email={email:currentUser?.email}
        axios.post(`${import.meta.env.VITE_SERVER}/jwt`,email)
          .then(res=>{
            localStorage.setItem('token',res.data.token)
          })
        setUser(currentUser);
        setLoading(false)
        localStorage.setItem('user',true)
      }else{
        localStorage.removeItem('token')
        localStorage.setItem('user',false)
        localStorage.removeItem('role')
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const AuthConfig = {
    dashboardModal,
    setDashboardModal,
    createUser,
    login,
    auth,
    userOut,
    user,
    loading
  };

  return (
    <AuthContext.Provider value={AuthConfig}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

