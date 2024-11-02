import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

// Use Inter font with a variable for font-weight support
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Get Global",
  description: "Building the future of Software Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>
      <body className={`${inter.variable} antialiased bg-[#F2F2F2]`} >{children}</body>
    </html>
  );
}
