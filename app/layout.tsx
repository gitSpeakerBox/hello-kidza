import type { Metadata, Viewport } from "next";
import "@/styles/style";
import { Inter } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kidza | The Baby Shop",
  description:
    "Premium, Personalised & Affordable Baby, Toddler & Kids Essentials. India's Largest Online Store for high-quality Onesies, Bodysuits & Toys.",
  manifest: "/favicon_io/site.webmanifest",
  icons: {
    icon: "favicon_io/android-chrome-192x192.png",
    apple: "favicon_io/apple-touch-icon.png",
  },
};
export const viewport: Viewport = {
  themeColor: "#000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`relative bg-white text-black z-0 ${inter.className} object-cover`}
    >
      <body className="relative z-0  bg-white text-black">
        {children}
      </body>
    </html>
  );
}
