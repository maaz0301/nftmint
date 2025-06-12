import React from 'react';
import { Modal } from 'antd';
import Image from 'next/image';
import Button from '@/components/shared/button';

const EndFundraiserModal = ({ visible, onCancel, onConfirm }) => {
  return (
    <Modal
      title={
        <div className='flex flex-col justify-center items-center text-center'>
          <Image src={'/assets/icons/QuestionMark.png'} width={120} height={120} alt="Question Mark"/>
          <span className="text-white text-xl font-bold mt-4">Are you sure you want to End Fundraiser?</span>
        </div>
      }
      className="create-fundraiser-modal"
      open={visible}
      onCancel={onCancel}
      closeIcon={
        <Image
          src="/assets/icons/onclose.svg"
          alt="close"
          className="w-6 h-6 cursor-pointer"
          width={24}
          height={24}
        />
      }
      footer={null}
      width={400}
      centered
    >
      <div className="border-b w-full border-[#19E3D4]/16 my-4"></div>
      <div className="text-center text-white mb-6">
        Are you sure you want to end this fundraiser?
      </div>
      <div className="flex justify-end items-center gap-3">
        <Button
          onClick={onCancel}
          className="text-white w-[100%] py-2 border-1 border-red-500 rounded-[8px]"
          text="Cancel"
        />
        <Button
          onClick={onConfirm}
          className="text-white w-[100%] py-2 bg-[#4184D6] rounded-[8px]"
          text="Yes, End Fundraiser"
        />
      </div>
    </Modal>
  );
};

export default EndFundraiserModal;