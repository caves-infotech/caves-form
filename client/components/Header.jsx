import Image from "next/image";
import Link from "next/link";
import style from "../app/style.module.css";
import { signOut } from "next-auth/react";
import { getToken, removeToken } from "@/services/auth";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from 'react-toastify';

export default function Header() {
    const { data: session } = useSession();
    const [token, setToken] = useState("");
  
    useEffect(() => {
      setToken(getToken());    
    }, []);

    const handleSignOut = () => {
        if(token){
            removeToken();
        }else if (session) {
            signOut("google");
        }
        toast.info("User Signout Successfully");
      };
  return (
        <header className={ style.colorThree + " bg-gray-800 text-white p-4"}>
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/logos/2.png" // Path to your image
                alt="logo" // Alt text for accessibility
                width={50} // Desired width
                height={50} // Desired height
                className="mr-2"
              />
              <h1 className="text-2xl font-bold text-yellow-300">UDCPR </h1>
            </div>
            <nav>
              <Link href="/" className="px-4 py-2 hover:bg-gray-700 rounded">Home</Link>
              <Link href="#" className="px-4 py-2 hover:bg-gray-700 rounded">About</Link>
              <Link href="#" className="px-4 py-2 hover:bg-gray-700 rounded">FaQ</Link>
              {token || session ? (
                <button
                  className="px-4 py-2 hover:bg-gray-700 rounded"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              ) : (
                  <Link
                    href="/auth/signup"
                    className="px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    Sign Up
                  </Link>
              )}
            </nav>
          </div>
        </header>   
  )
}