import { Poppins, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata, Viewport } from "next";
import JsonLd from "@/components/JsonLd";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","600","700"],
  variable: "--font-poppins",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400","500","700"],
  variable: "--font-nunito",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} ${nunito.variable}`}>
      <body className="font-body bg-white text-dark text-lg">
        <JsonLd />
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.verdevida.mx"),
  title: {
    default: "Verde Vida | Buffet y eventos",
    template: "%s | Verde Vida",
  },
  description: "Buffet fresco con opciones para todos los gustos. Eventos y banquetes para bodas, empresas y celebraciones.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Verde Vida | Buffet y eventos",
    siteName: "Verde Vida",
    description: "Buffet fresco con opciones para todos los gustos.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Verde Vida Buffet",
      },
    ],
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    site: "@verdevida",
    title: "Verde Vida | Buffet y eventos",
    description: "Buffet fresco y eventos memorables.",
    images: ["https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "restaurant",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};
