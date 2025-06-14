import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfitFont = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"],
});
const ovoFont = Ovo({
  subsets: ["latin"], weight: "400",
});

export const metadata: Metadata = {
  title: "Portfolio-NawazIbrhaim",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfitFont.className} ${ovoFont.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
