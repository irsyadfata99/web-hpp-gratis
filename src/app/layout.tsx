import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kalkulator HPP - Hitung Harga Pokok Produksi UMKM",
  description: "Aplikasi gratis untuk menghitung HPP (Harga Pokok Produksi) dan analisis pendapatan untuk UMKM Indonesia",
  keywords: "HPP, kalkulator, UMKM, harga pokok produksi, bisnis, Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* Google Analytics */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
