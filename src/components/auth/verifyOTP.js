"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Button from "../shared/button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Dynamically import react-otp-input to avoid SSR issues
const OtpInput = dynamic(() => import("react-otp-input"), { ssr: false });

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const router = useRouter();

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entered OTP:", otp);
    // Handle API submission here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <label className="block mb-1 text-[#9AA3B0] text-[0.85rem] text-left">
        Enter OTP
      </label>

      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        shouldAutoFocus
        renderInput={(props) => <input {...props} />}
        renderSeparator={(index) =>
          index === 2 ? <span className="mx-2 text-lg">-</span> : null
        }
        inputStyle={{
          width: "48px",
          height: "48px",
          textAlign: "center",
          fontSize: "1.125rem",
          border: "1px solid rgba(25, 227, 212, 0.16)",
          borderRadius: "8px",
          backgroundColor: "",
          outline: "none",
        }}
        
        containerStyle={{ display: "flex", justifyContent: "space-between" }}
      />

      <Button
        text="Continue"
      
        className="bg-[#4184D6] w-full rounded-[8px] text-white  h-[44px]"
   
        onClick={() => router.push("/reset-password")}
      />

     

        <div className="flex items-center gap-2">
          <span>{`0${Math.floor(timer / 60)}:${(timer % 60)
            .toString()
            .padStart(2, "0")}`}</span>
          {timer === 0 ? (
            <button
              type="button"
              className="text-blue-600 hover:underline cursor-pointer"
              onClick={() => setTimer(60)}
            >
              Resend?
            </button>
          ) : (
            <span className="text-gray-400">Resend?</span>
          )}
        </div>
      {/* </div> */}
    </form>
  );
};

export default VerifyOtp;
