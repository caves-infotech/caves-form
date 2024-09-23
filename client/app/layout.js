"use client";

import "./globals.css";

import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast CSS
import { StateProvider } from "@/services/formStateContext";

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body>
        <StateProvider>
          <SessionProvider session={session}>
            {children}
            <ToastContainer
              position="top-center" // Change position as needed
              autoClose={3000} // Duration in milliseconds
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </SessionProvider>
        </StateProvider>
      </body>
    </html>
  );
}
