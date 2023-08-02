import ComplexNavbar from "@/components/materialtailwind/navbar";
import Footer from "@/components/pages/shared/footer/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nurul alom",
  description: "Digital Marketing Consulting consultant",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
