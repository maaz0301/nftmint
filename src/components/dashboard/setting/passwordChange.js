// components/PasswordChange.js
import ChangePasswordModal from "@/components/modals/change-password/changePassword";
import Button from "@/components/shared/button";
import Input from "@/components/shared/input";
import { useState } from "react";

const PasswordChange = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic here
  };

  return (
    <div className=" p-6 rounded-xl shadow-lg max-w-4xl  text-white">
      {/* Account Security Section */}
      <h2 className="text-[18px] font-semibold font-[inter] mb-12">
        Account Security
      </h2>

      {/* Current Password */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-between items-center mb-4">
          <label
            htmlFor="current-password"
            className="text-[16px] font-[inter] font-medium"
          >
            Current Password
          </label>
        </div>
        <div className="flex flex-col sm:flex sm:flex-row justify-between items-center  gap-3">
          <Input
            type={showPassword ? "text" : "password"}
            id="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-black/20 text-white flex justify-center  border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="**************"
            aria-labelledby="current-password"
          />

          <Button
            // type="button"
            onClick={() => setOpen(true)}
            className="text-white w-full max-w-[183px] py-3 bg-[#4184D6] rounded-[8px]"
            text="Change Password"
          />
          <ChangePasswordModal
            open={open}
            onCancel={() => setOpen(false)}
            onSubmit={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default PasswordChange;
