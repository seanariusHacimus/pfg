import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PFG App",
  description: "PFG App Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
