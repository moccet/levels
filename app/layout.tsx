import type { Metadata } from "next";
import { Poppins, Playfair_Display } from 'next/font/google';
import "./globals.css";
import LayoutContent from "./LayoutContent";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Levels | Your Proactive Companion for Healthy Living",
  description: "Join Levels: science-led healthcare, driven by the country's leading medical experts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="WEB_LevelsAGE" className={`${poppins.variable} ${playfairDisplay.variable}`}>
      <body className="antialiased">
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
