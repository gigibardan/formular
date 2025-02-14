import type { Metadata } from "next";
import { Poppins } from 'next/font/google';  // Poppins e un font modern și elegant
import "./globals.css";

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],  // diferite grosimi pentru font
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "TechMinds Academy",
  description: "Formular Înscriere TechMinds Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${poppins.className} min-h-screen bg-background antialiased`}>
        {children}
      </body>
    </html>
  );
}