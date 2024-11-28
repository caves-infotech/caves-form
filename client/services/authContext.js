// context/AuthContext.js
"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { getToken } from "@/services/auth";
import api from "@/services/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = getToken();
  const { data: session } = useSession();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleGetUser = async () => {
      try {
        const u = await api.post(
          "/user",
          { session },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setUser(u.data.user[0]);
      } catch (error) {
        setUser(null);
        console.log("Error at getting user: ", error);
      }
    };
    if (token || session) {
      setIsSignedIn(true);
      handleGetUser();
      console.log("Signed in");
    } else {
      setIsSignedIn(false);
      console.log("Signed out");
    }
  }, [token, session]);

  return (
    <AuthContext.Provider value={{ isSignedIn, setIsSignedIn, user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
