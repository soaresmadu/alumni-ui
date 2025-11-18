import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

// Configurando a fonte Bebas Neue
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "ALUMNI",
  description: "Educação e Tecnologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
