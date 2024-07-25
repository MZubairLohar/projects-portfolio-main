import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({ weight: "400", preload: false });

export const metadata: Metadata = {
  title: "Projects Portfolio",
  description: "Projects Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} bg-gradient-to-r from-[#32cccb] via-[#389dc0] to-[#3f71b8]`}
      >
        {children}
      </body>
    </html>
  );
}