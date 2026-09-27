import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stane — Security infrastructure you can trust",
  description:
    "Stane builds hardened, verifiable security tooling for teams that cannot afford to guess. Detection, response, and integrity — built to be audited, not just trusted.",
  metadataBase: new URL("https://stane.sh"),
  openGraph: {
    title: "Stane — Security infrastructure you can trust",
    description:
      "Detection, response, and integrity tooling built to be audited, not just trusted.",
    url: "https://stane.sh",
    siteName: "Stane",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stane — Security infrastructure you can trust",
    description:
      "Detection, response, and integrity tooling built to be audited, not just trusted.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-dvh bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
