import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import {ThemeContextProvider} from '@/context/ThemeContext'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyBlog",
  description: "A simple blog app built in NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
        <div className="sm:max-w-[90%] md:max-w-[80%] ml-auto mr-auto">
        <Navbar/>
        {children}
        <Footer/>
        </div>
        </ThemeContextProvider>
       
        </body>
    </html>
  );
}
