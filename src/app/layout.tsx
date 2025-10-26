import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyle Zhang | Music Artist",
  description: "Official website of music artist Kyle Zhang - Producer, Performer, Creator",
  keywords: ["Kyle Zhang", "music", "artist", "producer", "performer"],
  openGraph: {
    title: "Kyle Zhang | Music Artist",
    description: "Official website of music artist Kyle Zhang",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
