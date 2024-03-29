import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./mui.web-component.css";
import "font-awesome/css/font-awesome.css";
import './glabals.jsx';
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* <div className="pt-[80px] w-full h-full"> */}
        {children}
        {/* </div> */}
      </body>
    </html>
  );
}
