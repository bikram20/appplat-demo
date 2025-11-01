import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "App Platform Demo - DigitalOcean",
  description: "Interactive demo of DigitalOcean App Platform",
};

export default function RootLayout({
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
