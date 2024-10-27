"use client";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast CSS
import { StateProvider } from "@/services/formStateContext";
import { Nunito } from "next/font/google";
import { AuthProvider } from "@/services/authContext";

const fredoka = Nunito({
  subsets: ["latin"],
  weights: ["400", "700"],
});

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <head>
        <title>UDCPR Calculation Tool</title>
        <meta
          name="title"
          content="UDCPR 2024 Simplified | Building Byelaws & FSI Calculator for Maharashtra | udcprs.com"
        />
        <meta
          name="description"
          content="Access simplified tools for UDCPR 2024 byelaws, FSI, TDR, and redevelopment calculations at Udcprs.com. Explore Maharashtra's latest building regulations and get accurate guidance on Floor Space Index and other development norms for urban planning"
        />
        <meta
          name="keywords"
          content="UDCPR 2024, Maharashtra building byelaws, UDCPR simplified, FSI calculator Maharashtra, TDR in UDCPR, building regulations Maharashtra, redevelopment rules UDCPR, UDCPR FSI guidelines, UDCPR tools, urban development Maharashtra,Maharashtra FSI calculation."
        ></meta>
        <meta property="og:image" content="https://udcprs.com/home.png" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
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
