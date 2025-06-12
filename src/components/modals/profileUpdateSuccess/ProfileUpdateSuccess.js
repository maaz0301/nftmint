import React, { useEffect, useState } from "react";
// import { CheckCircle } from "lucide-react";
import clsx from "clsx";

const ProfileUpdateSuccess = ({
  message = "Update Successful!",
  duration = 3000,
  onClose,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Start animation
    const showTimer = setTimeout(() => setVisible(true), 50);

    // Auto-hide after duration
    const hideTimer = setTimeout(() => {
      setVisible(false);
      if (onClose) {
        setTimeout(onClose, 300); // wait for transition to finish
      }
    }, duration);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [duration, onClose]);

  return (
    <div
      className={clsx(
        "fixed bottom-6 right-6 z-50 bg-green-600 text-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 transition-all duration-300 ease-in-out",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      {/* <CheckCircle className="w-6 h-6 text-white" /> */}
      <span className="font-semibold">{message}</span>
    </div>
  );
};

export default ProfileUpdateSuccess;
