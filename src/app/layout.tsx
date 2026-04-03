import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stone House Marble & Granite",
  description: "Custom marble, granite, quartz, and quartzite countertops with expert fabrication and installation.",
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
