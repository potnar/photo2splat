import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@theme-toggles/react/css/Around.css";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Photo2Splat - 3D Gaussian Splatting",
  description: "Create stunning 3D models from photos and videos using Gaussian Splatting technology. Fast, easy, and powerful.",
  manifest: "/manifest.json",
  themeColor: "#3b82f6",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Photo2Splat",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`min-h-screen bg-background text-foreground ${inter.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          {/* NAVBAR */}
          <Navbar />

          {/* MAIN */}
          <main className="flex-1">{children}</main>

          {/* FOOTER */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
