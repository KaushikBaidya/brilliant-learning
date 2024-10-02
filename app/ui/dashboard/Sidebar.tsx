"use client";

import Image from "next/image";
import PortfolioLogo from "@/assets/logo.png";

import { useState } from "react";
type SidebarProps = {
  isOpen: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 p-4 text-white transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:relative lg:translate-x-0 lg:opacity-100`}
    >
      <div>
        <Image
          className="w-48"
          src={PortfolioLogo}
          alt="logo"
          width={200}
          height={50}
        />
      </div>
      <ul className="mt-4 space-y-2">
        <li className="p-2 hover:bg-gray-700 cursor-pointer">Dashboard</li>
        <li className="p-2 hover:bg-gray-700 cursor-pointer">Profile</li>
        <li className="p-2 hover:bg-gray-700 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
