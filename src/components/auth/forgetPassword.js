"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../shared/input";
import Button from "../shared/button";
import Link from "next/link";
// import GetBackArrow from "../../../public/assets/icons/Auth/getBackArrow.svg";
import Image from "next/image";

const ForgetPassword = () => {
  const [email, setEmail] = useState(""); 

  const handleRecovery = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleRecovery} className="space-y-6">
     

      <label className="text-white text-sm font-[inter] font-normal"> email </label>
        <Input
         
          id={"email"}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
           className="w-full  sm:max-w-[540px] bg-black/20 text-white flex justify-center  border border-[#FFFFFF1A] rounded-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

<Button
          text="continue"
          className="bg-[#4184D6] w-full rounded-[8px] text-white  h-[44px]"
          onClick={() => router.push("/verify-otp")}
        />

        {/* <div className="flex gap-2 text-[0.85rem]  cursor-pointer">
          <Link
            href="/login"
            className="flex items-center gap-2 text-[#04325C] "
          >
            <Image src={GetBackArrow} alt="Arrow" width={9} height={11} />
            Get Back
          </Link> */}
        {/* </div> */}
      </form>
    </>
  );
};

export default ForgetPassword;

