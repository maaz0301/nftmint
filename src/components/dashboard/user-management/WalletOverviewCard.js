"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/shared/button";

const WalletOverviewCard = () => {
  const router = useRouter();
  return (
    <div>
    <div className="  w-full  ">
      {/* Header with Back Arrow */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => router.push("/dashboard/user-management")}
          className="text-white text-lg font-semibold flex items-center space-x-2 font-[inter]"
        >
          <Image
            src={"/assets/icons/back-arrow.svg"}
            width={13}
            height={16}
            alt="back-arrow"
          />
          <span>User Management</span>
        </button>
      </div>

      {/* Wallet Overview Card */}
      <div className="relative max-w-md w-full  p-6 rounded-[22px]  font-[inter]   border border-[#19E3D429]/16 bg-[#025CB91A]/10 text-white shadow-xl">
        <div className="relative">
          <div className="text-sm font-semibold mb-4">
            <div className="flex justify-between text-[16px]  font-semibold ">
              <span>Wallet:</span>
              <span className="font-normal">0×91f...KJ3</span>
            </div>
          </div>
          <h3 className="mb-4">OG Cat NFTs:</h3>
          <div className=" flex justify-between  text-xs font-medium space-y-3">
            <span className="text-white/70">OG #021 – Minted:</span>
            <span>2025-04-02</span>
          </div>
          <div className="border-b border-[#19E3D4]/16 m-2"></div>
          <div className=" flex justify-between mb-4 text-xs font-medium space-y-6">
            <span className="text-white/70">OG #021 – Minted:</span>
            <span>2025-04-02</span>
          </div>
          <h3 className="mb-4">Burner NFTs:</h3>
          <div className="mb-4 ">
            <div className=" text-white/90 flex justify-between mb-4 text-xs font-medium space-y-3">
              <span className="text-white/70">Burner:</span>{" "}
              <span>#011, #032, #046, #072, #091</span>
            </div>
          </div>
          <h3 className="mb-4">Fundraiser Participated:</h3>
          <div className="mb-4">
            <div className="flex justify-between mb-4 text-xs font-medium space-y-3">
              <span className="text-white/70">
                Fundraiser ID #003 – Status:
              </span>
              <span>Active</span>
            </div>
            <div className="border-b border-[#19E3D4]/16 m-2"></div>
            <div className="text-sm flex justify-between">
              <span className="text-white/70">
                Fundraiser ID #001 – Status:
              </span>
              <span>Ended (Won)</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-black border border-[#7F1FFF] rounded-2xl">
            <h3 className="text-lg font-semibold mb-4">Total Available</h3>
            <div className="text-sm flex justify-between mb-2">
              <span className="text-white/70">Earnings Claimed</span>
              <span>9.6 USDC</span>
            </div>
            <div className="border-b border-[#19E3D4]/16 m-2"></div>
            <div className="text-sm flex justify-between">
              <span className="text-white/70">Account Status</span>
              <span>Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>

   <div className="flex gap-4 w-full">
   <Button text={'Ban Wallet'}

className="text-white font-medium px-6 py-3 rounded-[8px] bg-[#4184D6] w-full max-w-[184px]"
         
          // onClick={() => router.push('/dashboard/user-management/view')} // ✅ Use router here

   
   />
   <Button text={'Export User Data'}
   className="text-white font-medium px-6 py-3 rounded-[8px] bg-[#4184D6] w-full max-w-[184px]"
   
   />
   </div>
    </div>
  );
};

export default WalletOverviewCard;
