"use client";

import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StateProvider } from "@/services/formStateContext";
import { AuthProvider } from "@/services/authContext";

export default function ClientLayout({ children }) {
  return (
    <StateProvider>
      <SessionProvider>
        <AuthProvider>
          {children}
          <ToastContainer
            theme="dark"
            position="bottom-left"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            draggable
          />
        </AuthProvider>
      </SessionProvider>
    </StateProvider>
  );
}
