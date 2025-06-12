"use client"
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { useMemo } from 'react';
import { Inter } from "next/font/google";
import "./style/globals.css";

// Define fonts with variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});




export default function RootLayout({ children }) {
  const network = 'devnet'; // You can change to 'mainnet-beta' or 'testnet'
  const endpoint = useMemo(() => clusterApiUrl(network), [network]); // Set network endpoint
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []); // Use Phantom Wallet Adapter

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            {children}
          </WalletProvider>
        </ConnectionProvider>
      </body>
    </html>
  );
}