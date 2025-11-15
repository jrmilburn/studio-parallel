import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"], // add more subsets if needed
  variable: "--font-inter", // optional if you want to use as a CSS variable
  display: "swap", // ensures better font rendering
});

export const metadata = {
  title: "My App",
  description: "Using Inter font in Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} overflow-y-none bg-black`}>
        <Navbar />
        <div className="min-h-screen">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
