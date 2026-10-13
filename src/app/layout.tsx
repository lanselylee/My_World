import "./globals.css";
import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import ThemeRegistry from './ThemeRegistry';
import { IM_Fell_English, Special_Elite } from 'next/font/google';

const fell = IM_Fell_English({ weight: '400', subsets: ['latin'], variable: '--font-fell', display: 'swap', adjustFontFallback: false });
const elite = Special_Elite({ weight: '400', subsets: ['latin'], variable: '--font-elite', display: 'swap' });

export const metadata: Metadata = {
  title: "Xiaomeng — Portfolio",
  description: "Xiaomeng Li: software engineer portfolio. Full-stack, AI tooling, and a slightly haunted study.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fell.variable} ${elite.variable}`}>
      <body className="antialiased">
        <ThemeRegistry>
          <NavBar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
