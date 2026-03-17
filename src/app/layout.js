import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider"; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fitness Pro | Transform Your Body",
  description: "Elite Fitness Training Center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 1. Added transition-colors for smooth theme switching 
          2. Added bg-white and dark:bg-[#2D2D2D] to fill the whole screen 
          3. Added overflow-x-hidden to prevent the horizontal dark strip
      */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-[#2D2D2D] transition-colors duration-500 overflow-x-hidden`}>
        
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false}
        >
          {/* Ensure the wrapper also expands fully */}
          <div className="flex flex-col min-h-screen w-full">
            <Navbar />
            
            <main className="flex-grow w-full">
              {children}
            </main>
            
            <Footer />
          </div>
        </ThemeProvider>

      </body>
    </html>
  );
}