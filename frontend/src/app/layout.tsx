import type { Metadata } from "next";
import { ccDeadlineDreaded, ccDeadlineDreadedOpen } from './fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "Lock Don",
  description: "Lock Don - Target Tracking System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ccDeadlineDreaded.variable} ${ccDeadlineDreadedOpen.variable}`}>
        {children}
      </body>
    </html>
  );
}
