import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import Button from '@/components/shared/button';
import Input from '@/components/shared/input';
import Image from 'next/image';

const SetPriceModal = ({ visible, onCancel, onSave, initialPrice = '' }) => {
  const [price, setPrice] = useState(initialPrice.toString());
  const [isValid, setIsValid] = useState(false);

  // Reset state when modal opens/closes or initialPrice changes
  useEffect(() => {
    const initialValue = initialPrice.toString();
    setPrice(initialValue);
    validatePrice(initialValue);
  }, [visible, initialPrice]);

  const validatePrice = (value) => {
    const numericPrice = parseFloat(value);
    const valid = value.trim() !== '' && !isNaN(numericPrice) && numericPrice >= 0;
    setIsValid(valid);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setPrice(value);
      validatePrice(value);
    }
  };

  const handleSave = () => {
    if (isValid) onSave(parseFloat(price));
  };

  return (
    <Modal
      title={<span className="text-white text-xl font-bold">Set Price</span>}
      }
      open={visible}
      onCancel={onCancel}
      className="create-fundraiser-modal"
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
      destroyOnClose
    >
      <div className="border-b w-full border-[#19E3D4]/16 mb-6"></div>
      <div className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="price-input"
            className="block text-sm font-medium text-white"
          >
            Set Price In USDC
          </label>
          <Input
            id="price-input"
            value={price}
            onChange={handlePriceChange}
            placeholder="Enter price (e.g., 10.5)"
            type="text"
            className="w-full bg-black/20 text-white border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {!isValid && price.trim() !== '' && (
            <p className="text-red-500 text-xs mt-1">
              Please enter a valid non-negative number
            </p>
          )}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <Button
            onClick={onCancel}
            className="text-white w-[100%] py-2 border-1 border-red-500 rounded-[8px]"
            text="Cancel"
          />
          <Button
            onClick={handleSave}
            className={`text-white w-[100%] py-2 rounded-[8px] ${
              isValid ? 'bg-[#4184D6] hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
            }`}
            text="Set Price"
            disabled={!isValid}
          />
        </div>
      </div>
    </Modal>
  );
};

export default SetPriceModal;