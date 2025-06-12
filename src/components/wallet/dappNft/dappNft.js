'use client';

import Button from '@/components/shared/button';
import React from 'react';
import { useRouter } from 'next/navigation';

const MintingPage = () => {
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex justify-center items-center px-4 sm:px-8">
      <div className="bg-[#025CB91A]/10 backdrop-blur-[445.9px] border border-[#19E3D4]/16 rounded-[22px] shadow-xl flex flex-col justify-center items-center px-6 sm:px-16 py-10 sm:py-24 w-full max-w-xl">
        <div className="flex flex-col items-center space-y-8 sm:space-y-12 text-center">
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-[#FFFFFF] font-[inter] mb-4">
              Welcome to Dapp NFT Minting
            </h1>
            <p className="text-white font-[inter] text-base sm:text-xl font-normal">
              Connect your wallet to mint exclusive NFTs and join raffles!
            </p>
          </div>

          <Button
            className="bg-[#4184D6] px-6 py-3 sm:px-8 cursor-pointer text-white rounded-[12px] font-semibold hover:bg-[#3572c1] transition duration-300 w-full"
            onClick={() => {
              router.push('/connectWallet');
            }}
            text={'Connect Your Wallet'}
          />
        </div>
      </div>
    </div>
  );
};

export default MintingPage;
