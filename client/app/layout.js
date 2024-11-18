
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { Nunito } from "next/font/google";

const fredoka = Nunito({
  subsets: ["latin"],
  weights: ["400", "700"],
});

// Metadata
export const metadata = {
  title: "UDCPR Calculation Tool",
  description:
    "Access simplified tools for UDCPR 2024 byelaws, FSI, TDR, and redevelopment calculations at Udcprs.com. Explore Maharashtra's latest building regulations and get accurate guidance on Floor Space Index and other development norms for urban planning.",
  keywords:
    "UDCPR 2024, Maharashtra building byelaws, UDCPR simplified, FSI calculator Maharashtra, TDR in UDCPR, building regulations Maharashtra, redevelopment rules UDCPR, UDCPR FSI guidelines, UDCPR tools, urban development Maharashtra,Maharashtra FSI calculation.",
  openGraph: {
    title: "UDCPR Calculation Tool",
    description:
      "Access simplified tools for UDCPR 2024 byelaws, FSI, TDR, and redevelopment calculations.",
    images: ["https://udcprs.com/home.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
