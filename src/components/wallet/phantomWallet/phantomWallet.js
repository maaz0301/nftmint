"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/shared/button";
import Input from "@/components/shared/input";
import { useRouter } from 'next/navigation';
import { Connection, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';

const PhantomWalletPage = () => {
  const router = useRouter(); 
  const [walletAddress, setWalletAddress] = useState(null);
  const [balance, setBalance] = useState(null);

  // Initialize connection to the Solana blockchain
  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

  // Function to fetch wallet balance
  const fetchBalance = async (publicKey) => {
    const balance = await connection.getBalance(publicKey);
    setBalance(balance / LAMPORTS_PER_SOL); // Convert balance from lamports to SOL
  };

  // Effect to handle wallet connection and balance retrieval
  useEffect(() => {
    if (window.solana && window.solana.isPhantom) {
      // Get the wallet's public key
      window.solana.connect()
        .then((response) => {
          const publicKey = response.publicKey.toString();
          setWalletAddress(publicKey); // Set the wallet address
          fetchBalance(response.publicKey); // Fetch the balance of the wallet
        })
        .catch((err) => {
          console.error('Failed to connect Phantom Wallet:', err);
          alert('Failed to connect Phantom Wallet.');
        });
    } else {
      alert('Please install the Phantom wallet extension.');
    }
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-[#062E38] rounded-[22px] w-[876px] px-24 py-24 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-[#FFFFFF] mb-6">
          Phantom Wallet
        </h1>

        <div className="flex flex-col gap-4 mb-4">
          <label htmlFor="walletAddress" className="text-sm font-medium text-white">
            Connected As
          </label>
          <Input
            type="text"
            id="connectedAs"
            labelClass="text-white"
            className="w-full bg-black/20 text-white border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="balance" className="text-sm font-medium text-white">
            Balance
          </label>
          <Input
            type="text"
            id="balance"
            labelClass="text-white"
            className="w-full bg-black/20 text-white border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <Button
          text="Go To Home"
          className="bg-[#4184D6] w-full text-white rounded-[12px] font-semibold px-4 py-3 transition duration-300 hover:bg-[#3572c1] max-w-[540px]"
          onClick={() => router.push('/dashboard')}
        />
      </div>
    </div>
  );
};

export default PhantomWalletPage;
