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
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-FYLD2GDD4F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-FYLD2GDD4F');
</script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
