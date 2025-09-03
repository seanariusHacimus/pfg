import type { Metadata } from "next";
import { abcDiatype, sharpGrotesk } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pfg-nu.vercel.app"),
  title: "PFG — Premium Finance Group",
  description: "Your partner in the world of investments and finance",
  keywords: ["investment", "finance", "brokerage", "securities", "financial services", "PFG"],
  authors: [{ name: "PFG - Premium Finance Group" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "PFG — Premium Finance Group",
    description: "Your partner in the world of investments and finance",
    url: "https://pfg-nu.vercel.app",
    siteName: "PFG - Premium Finance Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/media/PFG_COVER_1200X630.jpg",
        width: 1200,
        height: 630,
        alt: "PFG - Premium Finance Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PFG — Premium Finance Group",
    description: "Your partner in the world of investments and finance",
    images: ["/media/PFG_COVER_1200X630.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${abcDiatype.variable} ${sharpGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
