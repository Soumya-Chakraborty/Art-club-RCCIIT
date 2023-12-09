"use client"; // Assuming this is a pragma for Vercel's Next.js
// Importing components and styles
import Navbar from "./components/Navbar";
import "./globals.css";

// Importing fonts from Google Fonts using the 'next/font' module
import { Inter } from "next/font/google";

// Importing the authentication context provider
import { AuthContextProvider } from "./context/AuthContext";

// Creating an instance of the Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Default component function for the root layout
export default function RootLayout({ children }) {
  return (
    // HTML root element with lang attribute set to "en"
    <html lang="en">
      {/* Body element with the Inter font class applied */}
      <body className={`font-sans ${inter.className}`}>
        {/* AuthContextProvider wrapping Navbar and child components */}
        <AuthContextProvider>
          <Navbar />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
// Importing necessary modules and components
