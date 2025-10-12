import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "roahoki.dev",
  description: "personal website of roahoki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  suppressHydrationWarning lang="en">
      <body
        suppressHydrationWarning
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
