import AuthLayout from "@/components/auth/layout";
import VerifyOtp from "@/components/auth/verifyOTP";
import React from "react";
export default function Page() {
  return (
    <AuthLayout title="Verify Your Email" discription="We’ve sent a 6-digit verification code to your email. Enter it below to continue.">
      <VerifyOtp />
    </AuthLayout>
  );
}
