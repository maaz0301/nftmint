
"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react";

// Logo
import Logo from "../../../../public/assets/icons/BabyCatwif.svg";

// Icons
import HomeIcon from "../../../../public/assets/icons/home.svg";
import NFTIcon from "../../../../public/assets/icons/nfts.svg";
import userIcon from "../../../../public/assets/icons/usermanagement.svg"
import RafflesIcon from "../../../../public/assets/icons/fund.svg";
import EarningsIcon from "../../../../public/assets/icons/earningOverview.svg";
import BatchIcon from "../../../../public/assets/icons/batch-control.svg";
const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: HomeIcon,
  },
  {
    name: "Listes NFTs",
    path: "/dashboard/listedNfts",
    icon: NFTIcon,
  },
  {
    name: "User Management",
    path: "/dashboard/user-management",
    icon: userIcon,
  },
  {
    name: "Manage Fundraisers",
    path: "/dashboard/managefundraiser",
    icon: RafflesIcon,
  },
  {
    name: "Earnings Overview",
    path: "/dashboard/earning-overview",
    icon: EarningsIcon,
  },
  {
    name: "Batch Control",
    path: "/dashboard/batchControl",
    icon: BatchIcon,
  },
  {
    name: "Website",
    path: "/dashboard/website",
    icon: EarningsIcon,
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (path) => {
    router.push(path);
    setIsOpen(false); // Close sidebar on mobile
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        aria-label="Toggle Menu"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-60 p-2 rounded-full  shadow-md"
      >
        <Icon
          icon={isOpen ? "mdi:close" : "mdi:menu"}
          className="w-6 h-6 text-white"
        />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[75%] sm:w-68 bg-[#032027] border-r border-[#19E3D4]/16 rounded--r[22px] shadow-xl flex flex-col p-6 transition-transform duration-300 ease-in-out z-40 rounded-r-[20px] cursor-pointer
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex justify-center mb-10">
        <Image src={Logo} alt="Logo" width={179} height={34} priority />
        </div>
        {/* <div className="glowing-background fixed top-0 left-0 w-full h-full pointer-events-none z-0"></div> */}
        {/* Navigation Menu */}
        <nav className="flex-1 space-y-3">
          <h3 className="text-sm font-semibold text-white">Menu</h3>
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`flex items-center w-full px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium cursor-pointer font-[inter]
                ${isActive ? "text-[#4184D6] " : "text-white "}`}
              >
                <span
                  className={`flex items-center justify-center w-10 h-10 rounded-full mr-3
                  ${isActive ? "bg-[#4184D6]" : ""}`}
                >
                  <Image src={item.icon} alt={item.name} className="w-5 h-5" />
                </span>
                {item.name}
              </button>
              
            );
          })}
        </nav>
        {/* <div className="glowing-background fixed top-0 left-0 w-full h-full pointer-events-none z-0"></div> */}
      </aside>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
