"use client";

import React, { useState } from "react";
import { Table, Modal } from "antd";
import Input from "@/components/shared/input";
import Button from "@/components/shared/button";
import Image from "next/image";

const WalletSettings = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(null);

  // Data for the wallet table
  const walletData = [
    {
      key: "1",
      walletType: "Multisig Wallet",
      walletAddress: "0xAB12...cd34",
    },
    {
      key: "2",
      walletType: "Rewards Distributor",
      walletAddress: "0xDD34...aa56",
    },
  ];

  // Columns for the table
  const columns = [
    {
      title: "Wallet Type",
      dataIndex: "walletType",
      key: "walletType",
    },
    {
      title: "Wallet Address",
      dataIndex: "walletAddress",
      key: "walletAddress",
      render: (text) => (
        <span
          title={text}
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Actions",
      key: "action",
      render: (_, record) => (
        <Button
          type="primary"
          onClick={() => handleEditClick(record)}
          aria-label={`Edit ${record.walletType} settings`}
          text="Edit"
           className="text-white w-[100%] py-2 bg-[#4184D6] rounded-[8px]"
        />
      ),
    },
  ];

  // Handle the "Edit" button click
  const handleEditClick = (record) => {
    setSelectedWallet(record);
    setIsModalVisible(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedWallet(null);
  };

  // Handle save changes logic
  const handleSaveChanges = () => {
    // Your save logic here
    console.log("Changes saved for:", selectedWallet);
    handleModalClose();
  };

  return (
    <section className="wallet-settings-container py-6 bg-gradient-to-br bg-black/30 backdrop-blur-[80px] border border-[#19E3D4]/16 rounded-[22px] shadow-md">
      <h2 className=" text-white text-lg sm:text-xl font-semibold mb-4 px-6">
        Wallet Settings
      </h2>

      <div className="p-4 m-6 w-full max-w-4xl  bg-gradient-to-br bg-black/30 backdrop-blur-[80px] border border-[#19E3D4]/16 rounded-[22px] shadow-md ">
        <Table
          columns={columns}
          dataSource={walletData}
          pagination={false}
        
           rowClassName="hover:bg-[#ffffff05] transition"
          className="custom-ant-table"
        />
      </div>

      {/* Edit Modal */}
      <Modal
        title={`Edit ${selectedWallet?.walletType} Settings`}
        visible={isModalVisible}
        
        className="create-fundraiser-modal"
        onCancel={handleModalClose}
         closeIcon={
                <Image
                  src="/assets/icons/onclose.svg"
                  alt="close"
                  className="w-6 h-6 cursor-pointer"
                  width={24}
                  height={24}
                />}
               
        footer={[
          <div className="flex justify-end items-center gap-3">
            <Button
              onClick={() => {
                form.resetFields();
                onCancel();
              }}
              className="text-white w-[100%] py-2 border-1 border-red-500 rounded-[8px]"
              text={"Cancel"}
            />

            <Button
              onClick={() => {
                form.resetFields();
                onCancel();
              }}
              className="text-white w-[100%] py-2 bg-[#4184D6] rounded-[8px]"
              text={"yes"}
            />
          </div>,
        ]}
        width={400}
      >
        <div className="modal-content">
          <label className="text-white text-sm font-[inter] font-normal">
            Edit Wallet Address:
          </label>
          <Input
            type="text"
            // label="Confirm Password"

            placeholder="0xABCD1234...EFGH5678"
              className="w-full  sm:max-w-[540px] bg-black/20 text-white flex justify-center  border border-[#FFFFFF1A] rounded-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </Modal>
    </section>
  );
};

export default WalletSettings;
