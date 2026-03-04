import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jack Tsai - Product Engineer",
  description:
    "Jack Tsai is a Product Engineer who builds digital experiences for the web. Currently at GAZAI, previously in fintech, adtech, and IoT.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
