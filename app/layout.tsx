import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@theme-toggles/react/css/Around.css";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "photo2splat",
  description: "Turn photos & videos into 3D Gaussian splats",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
