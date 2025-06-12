'use client';


import SuccessMessage from "@/components/dashboard/success-screen/success";
import Button from "@/components/shared/button";
import Input from "@/components/shared/input";
import { Modal, Form } from "antd";
import Image from "next/image";
import { useState } from "react";

const FundraiserModal = ({ open, onCancel, onSubmit }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    onSubmit(values);
    form.resetFields();
  };
  const [triggerSuccess, setTriggerSuccess] = useState(false);

  const handleClick = () => {
    setTriggerSuccess(true);
  };

  return (
    <Modal
      title={
        <span className="text-white text-xl font-bold ">Create Fundraiser</span>
      }
      open={open}
      onCancel={onCancel} // This will close the modal
      closeIcon={
        <Image
          src="/assets/icons/onclose.svg"
          alt="close"
          className="w-5 h-5 cursor-pointer hover:opacity-80"
          height={20}
          width={20}
        />
      }
      footer={null}
      centered
      closable
      className="create-fundraiser-modal"
    >
      <div className="border-b w-full border-[#19E3D4]/16 mb-8 "></div>
      <Form layout="vertical" form={form} onFinish={handleFinish}>
        <Form.Item
          label={<span className="text-white text-sm">Fundraiser Title</span>}
          name="title"
          rules={[{ required: true, message: "Please enter fundraiser title" }]}
        >
          <Input
            placeholder="April OG Giveaway"
            className="w-full bg-black/20 text-white h-[54px] border border-[#FFFFFF1A] rounded-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>

        <Form.Item
          label={<span className="text-white text-sm">Max Entries</span>}
          name="maxEntries"
          rules={[{ required: true, message: "Please enter max entries" }]}
        >
          <Input
            type="number"
            placeholder="Max Entries"
            className="w-full bg-black/20 text-white h-[54px] border border-[#FFFFFF1A] rounded-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>

        <Form.Item
          label={<span className="text-white text-sm">Ends In</span>}
          name="endsIn"
          rules={[{ required: true, message: "Please set end time" }]}
        >
          <Input
            placeholder="Select end date"
          className="w-full bg-black/20 text-white h-[54px] border border-[#FFFFFF1A] rounded-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>

       

      <div className="flex gap-3">
      <Form.Item
          label={<span className="text-white text-sm">Entry Fee (USDC)</span>}
          name="entryFeeUSDC"
          rules={[{ required: true, message: "Please enter entry fee in USDC" }]}
        >
          <Input
            type="number"
            placeholder="Enter entry fee in USDC"
            className="w-full min-w-[230] bg-black/20 text-white h-[54px] border border-[#FFFFFF1A] rounded-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>
      <Form.Item
          label={<span className="text-white text-sm">Entry Fee (BCWX)</span>}
          name="entryFeeBCWX"
          rules={[{ required: true, message: "Please enter entry fee in BCWX" }]}
        >
          <Input
            type="number"
            placeholder="Enter entry fee in BCWX"
           className="w-full bg-black/20 min-w-[230px] text-white h-[54px] border border-[#FFFFFF1A] rounded-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>

        
      </div>
      <Form.Item
          label={<span className="text-white text-sm">Rewards in USDC</span>}
          name="rewardsUSDC"
          rules={[{ required: true, message: "Please enter rewards in USDC" }]}
        >
          <Input
            type="number"
            placeholder="Enter reward in USDC"
             className="w-full bg-black/20 text-white h-[54px] border border-[#FFFFFF1A] rounded-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>
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
            onClick={handleClick}
            className="text-white w-[100%] py-2 bg-[#4184D6] rounded-[8px]"
            text={"Create Fundraiser"}
          />
        </div>
      </Form>
     
      <SuccessMessage trigger={triggerSuccess} message="Successfully Created!" />
    </Modal>
  );
};

export default FundraiserModal;
