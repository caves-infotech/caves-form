// context/AuthContext.js
"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { getToken, removeToken } from "@/services/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = getToken();
  const { data: session } = useSession();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if(token || session){
      setIsSignedIn(true);
      console.log("Signed in");
       
    } else {
      setIsSignedIn(false); 
      console.log("Signed out");
      removeToken()
    }
  }, [token, session]);

  return (
    <AuthContext.Provider value={{ isSignedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
