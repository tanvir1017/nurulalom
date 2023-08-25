import Footer from "@/shared/footer/footer";
import NavigationMenu from "@/shared/navbar/navigation-menu";
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
        {/* <ComplexNavbar /> */}
        <NavigationMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
