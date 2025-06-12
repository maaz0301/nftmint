"use client";
import React, { useState } from "react";
import Input from "../shared/input";
import Button from "../shared/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const handleResetPassword = (e) => {
    e.preventDefault();
    // Handle reset password logic (API call)
  };
  return (
    <>
      <form onSubmit={handleResetPassword} className="space-y-4">
      
        <label className="text-white text-sm font-[inter] font-normal"> Full Name </label>
      <Input
          // label="Full Name"
          id="name"
      
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type here.."
         className="w-full  sm:max-w-[540px] bg-black/20 text-white flex justify-center  border border-[#FFFFFF1A] rounded-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
         
        />
  <label className="text-white text-sm font-[inter] font-normal"> Password </label>
        <Input
       
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type here"
          icon="/assets/icons/eye-open.svg"
          iconAction={() => setShowPassword(!showPassword)}
          className="w-full  sm:max-w-[540px] bg-black/20  text-white flex justify-center  border border-[#FFFFFF1A] rounded-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

<div className="flex justify-between items-center  text-sm">
        
      <div className="flex justify-between items-center gap-2">   <Input type="checkbox"> </Input><span> Remember me</span></div>
        <button className=" hover:underline">Forgot Password?</button>
      </div>

        <Button
          text="Login"
          className="bg-[#4184D6] w-full rounded-[8px] text-white  h-[44px]"
          onClick={() => router.push("/dashboard")}
        />
          
      </form>
    </>
  );
};

export default Login;
