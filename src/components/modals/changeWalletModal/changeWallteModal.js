"use client";

import { Modal } from "antd";
import Image from "next/image";
import { useState } from "react";
import Button from "@/components/shared/button";
import UpdateWalletModal from "../updatewallet/updatewalletModal";

const ChangeWalletModal = ({ open, onCancel, onSubmit }) => {
  const [selected, setSelected] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleSubmit = (selectedWallet) => {
    console.log("Selected wallet:", selectedWallet);
    onSubmit(selectedWallet);
    handleClose();
  };

  const handleWalletSelect = (walletName) => {
    setSelected(walletName);
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
      closable
      closeIcon={
        <Image
          src="/assets/icons/onclose.svg"
          alt="close"
          className="w-6 h-6 cursor-pointer"
          width={24}
          height={24}
        />
      }
      className="change-password-modal"
      title={<span className="text-white text-xl font-bold">Change Wallet</span>}
      }
    >
      <div className="pt-2 pb-4">
        <h2 className="text-white text-lg font-semibold mb-1">
          Choose A Wallet To Connect
        </h2>
        <p className="text-[#B9BDC1] text-sm mb-4">
          Connect Your Wallet To Mint Exclusive NFTs And Join Fundraiser!
        </p>

        <div className="flex flex-col gap-3">
          {/* Wallet Button 1 */}
          <Button
            text={'Phantom Wallet'}
            img={'/assets/icons/wallet.svg'}
            imgHeight={30}
            imgWidth={30}
            className={`flex w-full gap-4 items-center px-6 py-4 rounded-[12px] border transition-all font-[Inter] text-sm font-medium ${
              selected === 'Phantom Wallet' 
                ? 'bg-[#4184D6] text-white border-[#4184D6]' 
                : 'bg-[#fff] text-black border-[#4184D6]'
            }`}
            onClick={() => handleWalletSelect('Phantom Wallet')}
          />

          {/* Wallet Button 2 */}
          <Button
            text={'Solflare Wallet'}
            img={'/assets/icons/wallet.svg'}
            imgHeight={30}
            imgWidth={30}
            className={`flex w-full gap-4 items-center px-6 py-4 rounded-[12px] border transition-all font-[Inter] text-sm font-medium ${
              selected === 'Solflare Wallet' 
                ? 'bg-[#4184D6] text-white border-[#4184D6]' 
                : 'bg-[#fff] text-black border-[#4184D6]'
            }`}
            onClick={() => handleWalletSelect('Solflare Wallet')}
          />

          {/* Wallet Button 3 */}
          <Button
            text={'Glow Wallet'}
            img={'/assets/icons/wallet.svg'}
            imgHeight={30}
            imgWidth={30}
            className={`flex w-full gap-4 items-center px-6 py-4 rounded-[12px] border transition-all font-[Inter] text-sm font-medium ${
              selected === 'Glow Wallet' 
                ? 'bg-[#4184D6] text-white border-[#4184D6]' 
                : 'bg-[#fff] text-black border-[#4184D6]'
            }`}
            onClick={() => handleWalletSelect('Glow Wallet')}
          />
        
          <div className="flex justify-end items-center gap-3 mt-4">
            <Button
              onClick={onCancel}
              className="text-white w-[100%] py-2 border-1 border-red-500 rounded-[8px]"
              text="Cancel"
            />

            <Button
              onClick={handleOpen}
              className="text-white w-[100%] py-2 bg-[#4184D6] rounded-[8px]"
              text="Connect Wallet"
              disabled={!selected}
            />
          </div>
        </div>
        
        <UpdateWalletModal
          open={isModalOpen}
          onCancel={handleClose}
          onSubmit={handleSubmit}
        />
      </div>
    </Modal>
  );
};

export default ChangeWalletModal;