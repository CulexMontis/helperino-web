import type { Metadata } from "next";
import { Saira, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Helperino - Desktop Playwright Test Runner",
  description:
    "A desktop test runner for Playwright with a built-in browser, test recorder, and AI agent integration via MCP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${saira.variable} ${pixelifySans.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
