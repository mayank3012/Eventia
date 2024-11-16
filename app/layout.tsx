
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppDescription } from "@/lib/constants";
import NavBar from "@/components/shared/NavBar";
import { ThemeProvider } from "@/components/shared/theme-provider";
import SessionWrapper from "@/components/shared/SessionWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: AppDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-secondary-background`}
      >
        <SessionWrapper>
        <ThemeProvider
          attribute="class"
          defaultTheme="System"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <div className="py-20 main-container">
            {children}
          </div>
        </ThemeProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
