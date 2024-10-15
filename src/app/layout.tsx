import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Octacom capital - Empowering Your Financial Journey",
  description:
    "Offering affordable loans and financial solutions to help businesses and individuals thrive.",
  keywords:
    "octacom, microfinance, octacom capital, octacom capital limited, ocl, loans, octacom capital loans, financial services, small business, financial growth, credit solutions",
  openGraph: {
    title: "Octacom Capital Limited",
    description:
      "Empowering individuals and businesses with financial solutions to grow and succeed.",
    url: "https://octacomcapital.com",
    images: [
      {
        url: "https://www.imghippo.com/i/tCzAl1728641375.svg",
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
    images: ["https://octacomcapital.com/x.webp"],
  },
  alternates: {
    canonical: "https://octacomcapital.com",
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          property="og:image"
          content="https://i.ibb.co/9gLdzMh/image.png"
        />

        <link rel="icon" href="https://i.ibb.co/9gLdzMh/image.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Octacom Capital Limited",
              "url": "https://octacomcapital.com",
              "logo": "https://i.ibb.co/9gLdzMh/image.png",
              "description": "Offering affordable loans and financial solutions to help businesses and individuals thrive."
            }
          `}
        </script>
      </head>
      <body className="flex flex-col min-h-screen antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
