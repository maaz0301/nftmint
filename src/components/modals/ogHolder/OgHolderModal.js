// components/CustomModal.js

import React from 'react';
import { Modal, Button } from 'antd';
import Image from 'next/image';

const OGHolderModal = ({ visible, onClose }) => {
  return (
    <Modal
      title="OG Holder Fundraiser"
      open={visible}
      onCancel={onClose}
    //    onCancel={onCancel} // This will close the modal
            closeIcon={
              <Image
                src="/assets/icons/onclose.svg"
                alt="close"
                className="w-5 h-5 cursor-pointer hover:opacity-80"
                height={20}
                width={20}
              />
            
            }
      footer={[
        <Button key="done" type="primary" onClick={onClose} className='w-full bg-[#4184D6]'>
          Done
        </Button>
      ]}
      width={400}
      className="create-fundraiser-modal"
      style={{ fontSize: '16px' }}
    >
         <div className="border-b w-full border-[#19E3D4]/16 my-4  "></div>
      <div className="text-white space-y-2 font-medium  font-[inter] text-lg font-normal ">
        <div className="flex justify-between">
          <span className="text-[16px]">Title</span>
          <span>Burner Special</span>
        </div>
        <div className="border-b w-full border-[#19E3D4]/16 my-4 "></div>
        <div className="flex justify-between">
          <span className="text-[16px]">Entries Limit</span>
          <span>200</span>
        </div>
        <div className="border-b w-full border-[#19E3D4]/16 my-4 "></div>
        <div className="flex justify-between">
          <span className="text-[16px]">Participants</span>
          <span>173</span>
        </div>
        <div className="border-b w-full border-[#19E3D4]/16 my-4 "></div>
        <div className="flex justify-between">
          <span className="text-[16px]">Winner</span>
          <span>0x11...e7C</span>
        </div>
        <div className="border-b w-full border-[#19E3D4]/16 my-4 "></div>
        <div className="flex justify-between">
          <span className="text-[16px]">Fundraiser Type</span>
          <span>Burner NFT Holders</span>
        </div>
        <div className="border-b w-full border-[#19E3D4]/16 my-4 "></div>
        <div className="flex justify-between">
          <span className="text-[16px]">Reward</span>
          <span>Burner NFT #44</span>
        </div>
      </div>
    </Modal>
  );
};

export default OGHolderModal;
