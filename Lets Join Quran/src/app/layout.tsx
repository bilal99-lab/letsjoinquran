import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Let’s Join Quran | Online Quran Classes for Kids & Adults",
  description: "Learn Quran online with trusted one-to-one classes, male and female teachers, flexible timings, and 3 days free trial classes.",
  keywords: "online Quran classes, Quran classes for kids, online Quran academy, Noorani Qaida online, Quran with Tajweed, Hifz online, Quran teacher online, Quran classes USA, Quran classes UK, Quran classes Canada",
  openGraph: {
    title: "Let’s Join Quran | Online Quran Classes for Kids & Adults",
    description: "Learn Quran online with trusted one-to-one classes, male and female teachers, flexible timings, and 3 days free trial classes.",
    url: "https://www.letsjoinquran.com",
    siteName: "Let’s Join Quran",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Let’s Join Quran | Online Quran Classes for Kids & Adults",
    description: "Learn Quran online with trusted one-to-one classes, male and female teachers, flexible timings, and 3 days free trial classes.",
  },
  alternates: {
    canonical: "https://www.letsjoinquran.com",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${plusJakarta.variable} font-sans antialiased bg-white text-navy min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
