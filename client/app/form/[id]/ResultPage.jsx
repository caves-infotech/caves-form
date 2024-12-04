"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreviewPage from "@/components/details/potentialFsi/Preview";

export default async function ResultPage({ imageUrl, formData }) {
  return (
    <div>
      <Header isScrolled={false} />
      <div
        className={`flex justify-center p-20 ${
          imageUrl ? "" : "h-60"
        }`}
      >
        {imageUrl ? (
          <>
            <PreviewPage formData={formData} />
            {/* <Image src={imageUrl} alt="Image" width={400} height={400} /> */}
          </>
        ) : (
          <p>Result not found</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
