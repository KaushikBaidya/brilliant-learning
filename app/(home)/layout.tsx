import type { Metadata } from "next";
import { Raleway, Montserrat } from "next/font/google";
import "../globals.css";
import Navbar from "@/app/ui/home/Navbar";
import Footer from "@/app/ui/home/Footer";

// const inter = Inter({ subsets: ["latin"] });
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

export const metadata: Metadata = {
  title: "Briliant Academy",
  description: "Best Eductional Content for all stutends.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${montserrat.variable} font-sans bg-white text-[#0F172A]`}
      >
        <Navbar />
        <main
          className={`${raleway.variable} ${montserrat.variable} font-sans`}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
