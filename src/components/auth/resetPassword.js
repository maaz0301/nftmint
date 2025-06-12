"use client";
import React, { useState } from "react";
import Input from "../shared/input";
import Button from "../shared/button";
// import SocialLoginButtons from "./social";
import Link from "next/link";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleLogin} className="space-y-4">
        {/* <Input
          label={"Email"}
          id={"email"}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}
 <label className="text-white text-sm font-[inter] font-normal"> Password </label>
        <Input
          type="password"
         
          name="password"
          id="password"
          value={password}
          // onChange={handlePasswordChange}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          icon="/assets/icons/eye-open.svg"
            className="w-full  sm:max-w-[540px] bg-black/20 text-white flex justify-center  border border-[#FFFFFF1A] rounded-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          error={password.length < 6 && password.length > 0}
          errorMessage={
            password.length < 6 && password.length > 0
              ? "Password must be at least 6 characters."
              : ""
          }
        />
         <label className="text-white text-sm font-[inter] font-normal">Confirm  Password </label>
        <Input
          type="password"
          // label="Confirm Password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          icon="/assets/icons/eye-open.svg"
            className="w-full  sm:max-w-[540px] bg-black/20 text-white flex justify-center  border border-[#FFFFFF1A] rounded-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          error={confirmPassword.length > 0 && confirmPassword !== password}
          errorMessage={
            confirmPassword.length > 0 && confirmPassword !== password
              ? "Passwords do not match."
              : ""
          }
        />

       
        <Button
          text={"Change Password"}
          
          className="bg-[#4184D6] w-full rounded-[8px] text-white  h-[44px] mt-6"
   
        ></Button>
      </form>
    
    </>
  );
};

export default ResetPassword;
