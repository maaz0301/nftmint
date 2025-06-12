"use client";
import React from "react";

import Sidebar from "@/components/dashboard/dashlayout/sidebar";
import DashNavbar from "@/components/dashboard/dashlayout/navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex ">
   



      {/* Sidebar */}
      <Sidebar className="w-90 md:w-64 fixed top-0 left-0 h-screen z-50 md:translate-x-0 transition-transform duration-300" />

      {/* Main Content */}
      <div className=" flex flex-col flex-grow min-w-0 transition-all duration-300 md:ml-68 ml-0">
        {/* Navbar */}

        <DashNavbar />
      

        {/* Page Content */}
        <div
          className={`w-[100%] md:p-4 sm:p-3 min-h-screen h-full rounded-sm p-4  mt-10 "
          }`}
        >
         

          {children}
          
        </div>
      </div>
    </div>
  );
}
