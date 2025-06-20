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
    <nav className="sticky top-0 z-30 w-full flex flex-col sm:flex-row justify-between items-center gap-6 px-4 sm:px-6 py-4 bg-gradient-to-r from-card-bg/80 to-purple-900/50 backdrop-blur-xl border-b border-border-primary/20 sm:bg-none text-white">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left sm:w-1/3">
        <h1 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-primary">
          Welcome back, {userName}!
        </h1>
        <p className="text-xs sm:text-sm">
          Solana Address: <span className="text-white">0x7f...3d4a</span>
          <span className="text-accent ml-1">(connected wallet)</span>
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap sm:flex-row items-center gap-6 sm:w-2/3 sm:justify-end">
        {/* Search */}
        <div className="relative w-[250px] sm:w-[300px] mb-4 sm:mb-0">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-3 pl-10 pr-4 rounded-[10px] bg-card-bg/50 backdrop-blur-sm placeholder-text-secondary text-sm border border-border-primary/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <Icon
            icon="mdi:magnify"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary"
            width={24}
            height={24}
          />
        </div>

        {/* Notification */}
        <button
          onClick={showModal}
          className="relative flex justify-center items-center bg-card-bg/50 backdrop-blur-sm border border-border-primary/30 rounded-full p-2 hover:bg-primary/20 hover:border-primary/50 transition-all duration-200"
        >
          <Image src={Bell} alt="Notification Icon" width={24} height={24} />
        </button>

        {/* Profile Section */}
        <div className="relative" ref={menuRef}>
          <div
            className="flex items-center gap-3 cursor-pointer hover:bg-card-bg/30 rounded-lg p-2 transition-all duration-200"
            onClick={() => setMenuVisible(!menuVisible)}
            ref={profileButtonRef}
          >
            <Image
              src={profileImg || "/assets/icons/alice.svg"}
              alt="User"
              width={40}
              height={40}
              className="rounded-full object-cover border-2 border-primary/30"
            />
            <div className="flex flex-col text-sm text-white">
              <span className="font-medium truncate">{userName}</span>
              <span className="text-xs text-text-secondary truncate">
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
            <div className="absolute top-14 right-0 w-52 bg-card-bg/90 backdrop-blur-xl rounded-2xl py-4 px-3 shadow-xl border border-border-primary/30 z-50 flex flex-col gap-2">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => {
                    tab.action();
                    setMenuVisible(false);
                  }}
                  className={`flex justify-between items-center px-2 py-2 rounded-lg hover:bg-primary/20 cursor-pointer transition-all duration-200 ${
                    tab.danger ? "text-red-400 hover:bg-red-500/20 font-semibold" : "text-white"
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
                      className={tab.danger ? "text-red-400" : ""}
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