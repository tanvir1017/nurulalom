import ComplexNavbar from "@/components/materialtailwind/navbar";

import Footer from "@/shared/footer/footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
