'use client';

import React from 'react';
import Image from 'next/image';

const AuthLayout = ({ children,title,discription }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#025CB91A]/10 backdrop-blur-[445.9px] border border-[#19E3D4]/16 rounded-[22px]  shadow-xl p-8 sm:p-10 text-white">
        {/* Logo + Title */}
        <div className="flex flex-col items-center mb-8">
          <Image src="/logo.svg" alt="Solspin Logo" width={181} height={60} />
          <h2 className="text-3xl font-bold mt-10 font-[inter]">{title}</h2>
          <p className="text-lg  font-[inter] mt-1 text-center px-5">{discription}</p>
        </div>

        {/* Page Content (Login or Signup Form) */}
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
