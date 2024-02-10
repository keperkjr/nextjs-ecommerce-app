'use client'
import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css"
import TopNav from "@/components/TopNav";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

// export const metadata: Metadata = {
//   title: "Nextjs - Ecommerce app",
//   description: "Ecommerce app using Nextjs",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <SessionProvider>
            <body>
                <TopNav />
                <Toaster />
                {children}
            </body>            
        </SessionProvider>
    </html>
  );
}
