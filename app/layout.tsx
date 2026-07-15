import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChinaMotors — запчасти и сервис китайских автомобилей",
  description:
    "Подбор и продажа запчастей, ремонт и обслуживание китайских автомобилей в Махачкале.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}