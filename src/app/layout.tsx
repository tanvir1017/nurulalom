"use client";
import ComplexNavbar from "@/components/materialtailwind/navbar";
import { ThemeProvider } from "@material-tailwind/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ComplexNavbar />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
