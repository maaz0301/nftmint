import React from "react";
import ForgetPassword from "@/components/auth/forgetPassword";
import AuthLayout from "@/components/auth/layout";

export default function Page() {
  return (
    <AuthLayout title={'Forgot Your Password?'}  discription={'Enter your email, and we’ll send you a link to reset your password'}
    >
      <ForgetPassword />
    </AuthLayout>
  );
}
