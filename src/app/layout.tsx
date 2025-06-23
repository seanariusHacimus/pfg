import type { Metadata } from "next";
import { abcDiatype, sharpGrotesk } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "PFG - Премиум Финанс Групп",
  description: "Услуги в области инвестиционного посредничества, выпуска ценных бумаг и сопровождения сделок",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${abcDiatype.variable} ${sharpGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
