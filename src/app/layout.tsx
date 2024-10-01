import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Octacom capital - Empowering Your Financial Journey",
  description:
    "Offering affordable loans and financial solutions to help businesses and individuals thrive.",
  keywords:
    "microfinance, octacom, octacom capital, loans, financial services, small business, financial growth, credit solutions",
  openGraph: {
    title: "Octacom Capital Limited",
    description:
      "Empowering individuals and businesses with financial solutions to grow and succeed.",
    url: "https://octacom.com",
    images: [
      {
        url: "/path/to/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your financial bridge to success",
      },
    ],
    siteName: "Octacom Capital Limited",
  },
  twitter: {
    card: "summary_large_image",
    title: "Octacom Capital Limited",
    description:
      "Empowering your financial journey with personalized loan solutions.",
    images: ["/x.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <link rel="icon" href="/icon.svg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="flex flex-col min-h-screen antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
