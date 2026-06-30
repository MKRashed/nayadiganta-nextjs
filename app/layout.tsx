import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daily Naya Diganta (দৈনিক নয়া দিগন্ত) : Most Popular Bangla Newspaper",
  description:
    "দৈনিক নয়া দিগন্ত - সর্বশেষ বাংলা সংবাদ, রাজনীতি, খেলা, আন্তর্জাতিক ও লাইফস্টাইল",
  icons: {
    icon: "/assets/img/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" data-bs-theme="light">
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/media_quary.css" />
      </head>
      <body>
        {children}
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/custom.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
