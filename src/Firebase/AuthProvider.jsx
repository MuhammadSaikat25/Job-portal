import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "./firebase";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const [dashboardModal, setDashboardModal] = useState(false);
  // !  ------------------- cerate function for login,sing up and logout ----------------------
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userOut = () => {
    return signOut(auth);
  };
  // ! --------------track user-------------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        localStorage.setItem('user',true)
      }else{
        localStorage.setItem('user',false)
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
  };

  return (
    <AuthContext.Provider value={AuthConfig}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
