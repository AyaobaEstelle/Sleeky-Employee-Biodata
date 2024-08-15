import { Poppins } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sleeky Employee",
  description: "Employee Details",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
        min-h-screen bg-background font-sans antialiased
        ${poppins.className}
      `}>
        <main>{children}</main>
        <Toaster />
        <ToastContainer />
      </body>
    </html>
  );
}
