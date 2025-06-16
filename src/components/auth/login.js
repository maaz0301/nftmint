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
        <label className="text-text-primary text-sm font-[inter] font-normal"> Full Name </label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type here.."
          className="w-full sm:max-w-[540px] bg-card-bg/30 text-white flex justify-center border border-border-primary/30 rounded-[13px] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
        />
        
        <label className="text-text-primary text-sm font-[inter] font-normal"> Password </label>
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type here"
          icon="/assets/icons/eye-open.svg"
          iconAction={() => setShowPassword(!showPassword)}
          className="w-full sm:max-w-[540px] bg-card-bg/30 text-white flex justify-center border border-border-primary/30 rounded-[13px] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
        />

        <div className="flex justify-between items-center text-sm">
          <div className="flex justify-between items-center gap-2">
            <Input type="checkbox" />
            <span className="text-text-secondary"> Remember me</span>
          </div>
          <button className="text-primary hover:text-secondary hover:underline transition-colors">Forgot Password?</button>
        </div>

        <Button
          text="Login"
          className="bg-gradient-to-r from-primary to-secondary w-full rounded-[8px] text-white h-[44px] hover:shadow-glow transition-all duration-200"
          onClick={() => router.push("/dashboard")}
        />
      </form>
    </>
  );
};

export default Login;