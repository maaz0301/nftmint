"use client";

import ChangeWalletModal from "@/components/modals/changeWalletModal/changeWallteModal";
import Button from "@/components/shared/button";
import Input from "@/components/shared/input";
import { useState } from "react";

const WalletAndFunds = () => {
  const [walletAddress, setWalletAddress] = useState("7F3x...9Kc2");
  const [isChangingWallet, setIsChangingWallet] = useState(false);
  const [newWallet, setNewWallet] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleSubmit = (selectedWallet) => {
    console.log("Selected wallet:", selectedWallet);
    // Do your logic here — save to state or call an API
    handleClose();
  };


  return (
    <div className=" mt-20  text-white">
      {/* Wallet & Funds Section */}
      <h2 className="text-lg font-[inter] font-semibold mb-10">Wallet & Funds</h2>

      {/* Phantom Wallet Section */}
      <div className="mb-6">
        <label htmlFor="walletAddress" className="text-[16px]  font-[inter] font-medium">
          Phantom Wallet
        </label>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
         
          
            <Input
            id="walletAddress"
            type="text"
            value={newWallet}
            onChange={(e) => setNewWallet(e.target.value)}
            // className="w-full  max-w-[540px]  text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
           
              className="w-full  sm:max-w-[540px] bg-black/20 text-white flex justify-center  border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter new wallet address"
          
            
            />
         
         
          <Button
          
          onClick={handleOpen}
          text={'Change Wallet'}
          className="w-full max-w-[183px] bg-[#4184D6] text-white py-3 rounded-[8px] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          
          />
        </div>
        <ChangeWalletModal
        open={isModalOpen}
        onCancel={handleClose}
        onSubmit={handleSubmit}
      />
      </div>
    </div>
  );
};

export default WalletAndFunds;
