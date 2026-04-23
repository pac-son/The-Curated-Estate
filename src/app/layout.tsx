import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({ 
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["400", "700"],
  display: "swap",
});

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Curated Estate | PrimeNest Lettings",
  description: "Defining the pinnacle of residential luxury across Nigeria's most iconic landscapes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${manrope.variable}`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0" />
      </head>
      <body className="min-h-screen selection:bg-tertiary-container/30">
        {children}
      </body>
    </html>
  );
}