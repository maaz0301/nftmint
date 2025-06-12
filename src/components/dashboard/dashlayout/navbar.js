"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NotificationModal from "@/components/modals/notification/notificationModal";
import Bell from "../../../../public/assets/icons/noftication.svg";
import signOut from "../../../../public/assets/icons/logout.svg";
import ArrowRight from "../../../../public/assets/icons/arrow-right.svg";
import ArrowLogout from "../../../../public/assets/icons/arrow-logout.svg";
import DotsIcon from "../../../../public/assets/icons/dots.svg"; 
import { Icon } from '@iconify/react';
import {
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const DashNavbar = ({ userName = "Alice", profileImg }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const profileButtonRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        profileButtonRef.current &&
        !profileButtonRef.current.contains(event.target)
      ) {
        setMenuVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  const tabs = [
    {
      id: 1,
      title: "Profile",
      action: () => router.push("/dashboard/profile"),
      icon: <UserOutlined className="text-white text-base" />,
      arrow: true,
    },
    {
      id: 2,
      title: "Settings",
      action: () => router.push("/dashboard/settings"),
      icon: <SettingOutlined className="text-white text-base" />,
      arrow: true,
    },
    {
      id: 3,
      title: "Logout",
      action: () => router.push("/connectWallet"),
      icon: (
        <Image
          src={signOut}
          alt="Logout Icon"
          width={16}
          height={16}
        />
      ),
      arrow: true,
      danger: true,
    },
  ];

  return (
    <nav className="sticky top-0 z-30 w-full flex flex-col sm:flex-row justify-between items-center gap-6 px-4 sm:px-6 py-4 bg-grad sm:bg-none text-white">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left sm:w-1/3">
        <h1 className="text-lg sm:text-xl font-semibold">
          Welcome back, {userName}!
        </h1>
        <p className="text-xs sm:text-sm">
          Solana Address: <span className="text-white">0x7f...3d4a</span>
          <span className="text-[#6cdb7e] ml-1">(connected wallet)</span>
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap sm:flex-row items-center gap-6 sm:w-2/3 sm:justify-end">
        {/* Search */}
        <div className="relative w-[250px] sm:w-[300px] mb-4 sm:mb-0">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-3 pl-10 pr-4 rounded-[10px] bg-[#1B2B34] placeholder-gray-400 text-sm border border-[#123c43] focus:outline-none"
          />
          <Icon
            icon="mdi:magnify"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            width={24}
            height={24}
          />
        </div>

        {/* Notification */}
        <button
          onClick={showModal}
          className="relative flex justify-center items-center bg-[#1B2B34] border border-gray-600 rounded-full p-2"
        >
          <Image src={Bell} alt="Notification Icon" width={24} height={24} />
        </button>

        {/* Profile Section */}
        <div className="relative" ref={menuRef}>
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setMenuVisible(!menuVisible)}
            ref={profileButtonRef}
          >
            <Image
              src={profileImg || "/assets/icons/alice.svg"}
              alt="User"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div className="flex flex-col text-sm text-white">
              <span className="font-medium truncate">{userName}</span>
              <span className="text-xs text-[#b0b0b0] truncate">
                alice@gmail.com
              </span>
            </div>
            <Image
              src={DotsIcon}
              alt="Menu"
              width={5}
              height={5}
              className="ml-2"
            />
          </div>

          {/* Dropdown */}
          {menuVisible && (
            <div className="absolute top-14 right-0 w-52 bg-[#0D1B2A] rounded-2xl py-4 px-3 shadow-lg z-50 flex flex-col gap-2">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => {
                    tab.action();
                    setMenuVisible(false);
                  }}
                  className={`flex justify-between items-center px-2 py-2 rounded-lg hover:bg-[#1c2e44] cursor-pointer ${
                    tab.danger ? "text-red-500 font-semibold" : "text-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {tab.icon}
                    <span className="text-sm">{tab.title}</span>
                  </div>
                  {tab.arrow && (
                    <Image
                      src={tab.danger ? ArrowLogout : ArrowRight}
                      alt="arrow"
                      width={12}
                      height={12}
                      className={tab.danger ? "text-red-500" : ""}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Notification Modal */}
      <NotificationModal
        isVisible={isModalVisible}
        handleCancel={handleCancel}
      />
    </nav>
  );
};

export default DashNavbar;