import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const AuthConfig ={
        a:10
    }
  return <AuthContext.Provider value={AuthConfig}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
