import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./react/components/Navbar";
import Footer from "./react/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "rpitst elibrary",
  description: "the cambodia e-library",
  verification: {
    google: "25BReDN8kEZKLhepDXdmBiA9awH4ORf37ssAZXSfUuE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Navbar/> 
        {children}
        <Footer/>
      </body>
    </html>
  );
}
