"use client";

import api from "@/services/axios";

async function fetchImage(id) {
    const res = await api.get(`/form/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (res.status !== 200) {
      throw new Error("Failed to fetch image");
    }
  
    return res.data.fileUrl; // Adjust according to your response structure
  }

export default async function Layout({ children, params }) {
    const { id } = await params; // Get the ID from the URL parameters
    const imageUrl = await fetchImage(id); // Fetch the image URL
  return (
    <>
      <head>
        <title>UDCPR Calculation Tool</title>
        <meta
          name="description"
          content="Click here and get your result"
        />
        <meta property="og:image" content={imageUrl} />

      </head>
      {children}
    </>
  );
}
