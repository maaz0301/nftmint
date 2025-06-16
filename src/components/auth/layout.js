'use client';

import React from 'react';
import Image from 'next/image';

const AuthLayout = ({ children, title, discription }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-gradient-dark">
      <div className="w-full max-w-md bg-card-bg/20 backdrop-blur-[445.9px] border border-border-primary/30 rounded-[22px] shadow-xl p-8 sm:p-10 text-white glow-purple">
        {/* Logo + Title */}
        <div className="flex flex-col items-center mb-8">
          <Image src="/logo.svg" alt="Solspin Logo" width={181} height={60} />
          <h2 className="text-3xl font-bold mt-10 font-[inter] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{title}</h2>
          <p className="text-lg font-[inter] mt-1 text-center px-5 text-text-secondary">{discription}</p>
        </div>

        {/* Page Content (Login or Signup Form) */}
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;