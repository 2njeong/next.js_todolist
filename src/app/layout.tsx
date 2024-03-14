import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import QueryProvider from "./provider";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = ["about", "report", "todos-csr", "todos-ssr"];
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-[#d7c4c4] flex justify-around w-[1080px] h-[50px] items-center mx-auto mt-[20px]">
          {pages.map((page) => (
            <p key={page}>
              <Link href={`/${page}`} style={{ textDecoration: "none" }}>
                {page.toUpperCase()}
              </Link>
            </p>
          ))}
        </nav>

        <Suspense fallback={<div>응애 나 애기 폴백</div>}>
          <QueryProvider>{children}</QueryProvider>
        </Suspense>
      </body>
    </html>
  );
}
