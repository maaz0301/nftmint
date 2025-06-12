'use client';

import React from 'react';

const BurnerNFTCard = () => {
  const info = [
    { label: 'Total Supply', value: '500 NFTs' },
    { label: 'Purchase Token', value: 'BCWX' },
    { label: 'Price', value: '100 BCWX' },
    { label: 'Minting Logic', value: 'System Controlled' },
  ];

  return (
    <section className="border border-[#19E3D429]/16 bg-[#025CB91A]/10 rounded-[22px] p-10 shadow-lg w-full max-w-md  y-8">
      <h2 className="text-white text-[16px] font-[inter] font-semibold mb-4">Burner NFTs Minting</h2>
      
      <div className="space-y-4">
        {info.map((item, index) => (
          <div>
          <div key={index} className="flex justify-between text-white text-lg">
            <span className="font-medium text-xs ">{item.label}</span>
        
            <span className="font-normal text-sm">{item.value}</span>
           
          </div>
          <div className="border-b w-full border-[#19E3D4]/16 my-4  "></div>
          </div>
          
        ))}
      </div>
    
    </section>
  );
};

export default BurnerNFTCard;
