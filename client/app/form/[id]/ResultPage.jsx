"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function ResultPage({ imageUrl }) {
  return (
    <div>
      <Header isScrolled={false} />
      <div className={`flex items-center justify-center p-20 ${imageUrl ? "" : "h-60"}`}>
        {imageUrl ? (
          <Image src={imageUrl} alt="Image" width={700} height={700} />
        ) : (
          <p>Image not found</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
