import "./globals.css";
import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import ThemeRegistry from './ThemeRegistry';
import { IM_Fell_English, Special_Elite } from 'next/font/google';

const fell = IM_Fell_English({ weight: '400', subsets: ['latin'], variable: '--font-fell', display: 'swap', adjustFontFallback: false });
const elite = Special_Elite({ weight: '400', subsets: ['latin'], variable: '--font-elite', display: 'swap' });

const description =
  'Xiaomeng Li: software engineer portfolio. Full-stack, AI tooling, and a slightly haunted study.';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://my-world-lyart-one.vercel.app'),
  title: 'Xiaomeng Li: Software Engineer',
  description,
  openGraph: { title: 'Xiaomeng Li: Software Engineer', description, type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Xiaomeng Li: Software Engineer', description },
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
