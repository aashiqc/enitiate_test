import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/providers/ToastProvider";




const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Enitiate",
  description: "Test app by Ashiq",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
   
        <ToastProvider>
          {children}
        </ToastProvider>
  
      </body>
    </html>
  );
}
