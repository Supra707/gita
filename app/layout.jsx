import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "./components/navbar";
import Footer from "./components/footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Bhagavad Gita - Timeless Spiritual Wisdom",
  description: "Explore the teachings of the Bhagavad Gita for life and purpose.",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>

      </body>
    </html>
  );
}
