import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from "@/components/ReduxProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MindX Community",
  description: "MindX Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html className="sm:text-[5px] md:text-[5px] lg:text-[5px] xl:text-[8px] 2xl:text-[10px]" lang="en">
        <body className={`${inter.className} min-h-screen`}>
          <ToastContainer />
          {children}
        </body>
      </html>
    </ReduxProvider>
  );
}