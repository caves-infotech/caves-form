// context/AuthContext.js
"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { getToken } from "@/services/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = getToken();
  const { data: session } = useSession();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if(token || session){
      setIsSignedIn(true); 
    } else {
      setIsSignedIn(false); 

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
