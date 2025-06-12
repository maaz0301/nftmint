import React from "react";
import AuthLayout from "@/components/auth/layout";
import ResetPassword from "@/components/auth/resetPassword";
export default function Page() {
  return (
    <AuthLayout title="Set a New Password" discription={'Create a strong new password to secure your account.'}>
      <ResetPassword />
    </AuthLayout>
  );
}
