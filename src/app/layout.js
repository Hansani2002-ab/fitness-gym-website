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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-[#E1B12C] selection:text-black bg-white dark:bg-[#212121] text-[#26211A] dark:text-white transition-colors duration-500`}>
  <ThemeProvider 
    attribute="class" 
    defaultTheme="dark" 
    enableSystem={false}
  >
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
    </div>
  </ThemeProvider>
</body>
    </html>
  );
}