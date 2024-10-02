"use client";
import type { Metadata } from "next";
import { Raleway, Montserrat } from "next/font/google";
import "../globals.css";
import Sidebar from "../ui/dashboard/Sidebar";
import { useState } from "react";
import Header from "../ui/dashboard/Header";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "500",
});

const montserrat = Montserrat({
  weight: ["300", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${montserrat.variable} font-sans bg-white text-[#0F172A]`}
      >
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar isOpen={isOpen} />

          {/* Main content with Header */}
          <div className="flex-1 flex flex-col">
            <Header toggleSidebar={toggleSidebar} />
            <main
              className={`${raleway.variable} ${montserrat.variable} font-sans p-4`}
            >
              {children}
            </main>
          </div>

          {/* Sidebar overlay for mobile */}
          {isOpen && (
            <div
              className="fixed inset-0 z-20 bg-black opacity-50 transition-opacity duration-300 ease-in-out lg:hidden"
              onClick={toggleSidebar}
            ></div>
          )}
        </div>
      </body>
    </html>
  );
}
