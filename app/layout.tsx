import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AMassage - Premium Massage Therapy in Lisle, IL",
  description: "Experience tranquility and wellness at AMassage. Expert massage therapy in Lisle, IL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md shadow-lg z-50 border-b border-green-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="text-2xl font-playfair font-bold text-white">
                  AMassage
                </span>
              </Link>
              <div className="hidden lg:flex items-center space-x-8">
                <Link href="/#home" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
                  Home
                </Link>
                <Link href="/#about" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
                  About
                </Link>
                <Link href="/#services" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
                  Services
                </Link>
                <Link href="/#gallery" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
                  Gallery
                </Link>
                <Link href="/#reviews" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
                  Reviews
                </Link>
                <Link href="/#contact" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
                  Contact
                </Link>
                <Link href="/booking" className="bg-green-500 text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition-all shadow-lg hover:shadow-green-500/50">
                  Book Now
                </Link>
              </div>
              <div className="lg:hidden">
                <Link href="/booking" className="bg-green-500 text-slate-900 px-5 py-2 rounded-full text-sm font-semibold">
                  Book
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-slate-900 text-white py-16 border-t border-green-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  <h3 className="text-2xl font-playfair font-bold">AMassage</h3>
                </div>
                <p className="text-gray-400 max-w-md">
                  Your sanctuary for relaxation and rejuvenation. Experience the art of professional massage therapy in the heart of Lisle.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-green-400">Hours</h4>
                <p className="text-gray-400 text-sm">
                  Every Day<br />
                  <span className="text-white">10:00 AM - 9:00 PM (CST)</span>
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-green-400">Contact</h4>
                <p className="text-gray-400 text-sm mb-3">
                  <span className="text-white">📞 630-362-8219</span>
                </p>
                <p className="text-gray-400 text-sm">
                  📍 1600 Maple Ave, B3<br />
                  Lisle, IL 60532
                </p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-green-500/20 text-center">
              <p className="text-gray-500 text-sm">© 2025 AMassage. Crafted with care for your wellness.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
