"use client";

import { Modal } from "antd";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import Input from "@/components/shared/input";

const UpdateWalletModal = ({ open, onCancel }) => {
  const connectedAddress = "0x7f...3d4a";
  const balance = "25 SOL | 500 USDC";

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
      closable
      closeIcon={
        <Image
          src="/assets/icons/onclose.svg" // make sure this matches the red icon
          alt="close"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      }
      className="custom-wallet-modal"
      title={null}
    >
      <div className="text-white p-6 rounded-[20px]">
        <h2 className="text-xl font-bold mb-6">Change Wallet</h2>

        <h3 className="text-2xl font-semibold mb-6">Phantom Wallet</h3>

        <div className="mb-4">
          <p className="text-sm text-[#B9BDC1] mb-1">Connected As</p>
          <Input
            type="text"
            placeholder={connectedAddress}
            name="confirm"
          
            className="w-full bg-black/20 text-white py-2 border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        
        </div>

        <div className="mb-8">
          <p className="text-sm text-[#B9BDC1] mb-1">Balance</p>
          <Input
            type="text"
            placeholder={balance}
            name="confirm"
          
            className="w-full bg-black/20 text-white py-2 border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={onCancel}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-[#4184D6] to-[#599FE3] text-white font-medium text-base hover:opacity-90 transition-all"
        >
          Done
        </button>
      </div>
    </Modal>
  );
};

export default UpdateWalletModal;
