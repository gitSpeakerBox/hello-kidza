import type { Metadata, Viewport } from "next";
import "@/styles/style";
import { Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Chaaya Club",
  manifest: "/favicon_io/site.webmanifest",
  description:
    "Discover Chaaya Club, your destination for premium tea, specialty coffee, and delicious artisan baked goods. Experience the perfect blend of flavor and comfort.",
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
      className={`relative bg-white text-black z-0 ${poppins.className} object-cover`}
    >
      <body className="relative z-0  bg-white text-black">
        {children}
      </body>
    </html>
  );
}
