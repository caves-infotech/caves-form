"use client";

import "./globals.css";

import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast CSS
import { StateProvider } from "@/services/formStateContext";
import {Nunito} from "next/font/google";
import { AuthProvider } from "@/services/authContext";



const fredoka = Nunito({
  subsets: ['latin'],
  weights: ['400', '700'], 
});

export default function RootLayout({ children, session }) {

  return (
    <html lang="en">
      <body className={fredoka.className}>
        <StateProvider>
          <SessionProvider session={session}>
          <AuthProvider>
            {children}
            <ToastContainer
              theme="dark"
              position="bottom-left" // Change position as needed
              autoClose={3000} // Duration in milliseconds
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              draggable
            />
            </AuthProvider>
          </SessionProvider>
        </StateProvider>
      </body>
    </html>
  );
}
