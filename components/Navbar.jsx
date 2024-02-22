"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-white fixed p-4 ">
      <div className="container mx-auto font-bold ">
        <ul className="flex flex-col justify-between h-screen">
          <div className="one">
            <li className="mx-4 mt-5">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-4 mt-5">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="mx-4 mt-5">
              <Link href="/">Home</Link>
            </li>
          </div>
          <div className="outh">
            <>
              <li className="mx-4 mt-5">
                <Link href="/login">Login</Link>
              </li>
              <li className="mx-4 mb-[2rem]">
                <Link href="/register">Register</Link>
              </li>
            </>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
