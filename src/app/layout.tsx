import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import LenisProvider from "@/components/lenis-provider";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Klinik Utama Nikita Farla — Klinik Spesialis di Tulungagung",
  description:
    "Klinik Utama Nikita Farla di Tulungagung, Jawa Timur. Rating 4,9 dari 265 ulasan — pelayanan cepat, dokter berpengalaman dan ramah, tempat bersih, parkir luas.",
  openGraph: {
    title: "Klinik Utama Nikita Farla — Klinik Spesialis di Tulungagung",
    description:
      "Pelayanan kesehatan keluarga yang cepat, ramah, dan profesional. Buka hingga pukul 17.00, konsultasi via WhatsApp dibalas cepat.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klinik Utama Nikita Farla — Klinik Spesialis di Tulungagung",
    description:
      "Pelayanan kesehatan keluarga yang cepat, ramah, dan profesional.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}