// components/Sidebar.js
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineBell,
  AiOutlineStar,
} from "react-icons/ai"; // Importing icons

const ProfileSidebar = ({ isOpen, closeSidebar }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar(); // Close sidebar if clicking outside
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSidebar]);

  return (
    <aside
      ref={sidebarRef} // Attach ref to the sidebar
      className={`fixed h-screen sm:h-auto z-10 left-0 bg-white border-r border-indigo-200 shadow-lg transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:static md:translate-x-0 md:w-1/4`}
    >
      <div className=" flex items-center justify-between p-3 border-b border-indigo-200">
        <h2 className="text-2xl font-semibold">Settings</h2>
        <button onClick={closeSidebar} className="md:hidden text-indigo-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
          >
            <path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" />
          </svg>
        </button>
      </div>
      <div className="py-4">
        <Link
          href="/profile"
          className="flex items-center px-4 py-2 text-sm font-bold text-indigo-900 hover:bg-indigo-100"
        >
          <AiOutlineUser className="mr-2" />
          Public Profile
        </Link>
        <Link
          href="/account-settings"
          className="flex items-center px-4 py-2 text-sm font-semibold text-indigo-900 hover:bg-indigo-100"
        >
          <AiOutlineSetting className="mr-2" />
          Account Settings
        </Link>
        <Link
          href="/notifications"
          className="flex items-center px-4 py-2 text-sm font-semibold text-indigo-900 hover:bg-indigo-100"
        >
          <AiOutlineBell className="mr-2" />
          Notifications
        </Link>
        <Link
          href="/pro-account"
          className="flex items-center px-4 py-2 text-sm font-semibold text-indigo-900 hover:bg-indigo-100"
        >
          <AiOutlineStar className="mr-2" />
          PRO Account
        </Link>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
