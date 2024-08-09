"use client";
import Link from "next/link";
import { TbLayoutNavbarCollapse, TbLayoutNavbarExpandFilled } from "react-icons/tb";
import { useState } from "react";

export default function AuthLinks() {
  const auth = false; // Adjust authentication logic as needed
  const [open, setOpen] = useState(false);

  return (
    <>
    {auth ? (
        <Link href="/login" className="hover:bg-gray-100 dark:hover:bg-gray-800">Login</Link>
      ) : (
        <>
          <Link href="/write" className=" hover:bg-gray-100 dark:hover:bg-gray-800">Write</Link>
          <span className=" hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">Logout</span>
        </>
      )}
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="text-3xl cursor-pointer sm:hidden"
      >
        {open ? (
          <TbLayoutNavbarCollapse />
        ) : (
          <TbLayoutNavbarExpandFilled />
        )}
      </button>

      {/* Menu Items */}
      <div
        className={`absolute pt-4 text-center top-full -right-4 mt-2 w-screen h-screen bg-white dark:bg-black text-black dark:text-white rounded-lg shadow-lg ${open ? 'block' : 'hidden'} md:hidden`}
      >
        {/* Additional Links */}
        <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 font-bold">HomePage</Link>
        <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 font-bold">Contact</Link>
        <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 font-bold">About</Link>
      </div>
    </div>
    </>
  );
}
