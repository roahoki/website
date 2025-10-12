import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const clashDisplay = localFont({
  src: '../../public/ClashDisplay-Variable.woff2',
  variable: '--font-clash-display',
  display: 'swap',
}) 

export const metadata: Metadata = {
  title: "roahoki.dev",
  description: "personal website of roahoki",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png", sizes: "1024x1024" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" }
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/favicon.png", type: "image/png", sizes: "1024x1024" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={`${clashDisplay.variable} bg-primary min-h-screen`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body
        suppressHydrationWarning
        className={`antialiased bg-primary min-h-screen`}
      >
        <div className="bg-primary min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
