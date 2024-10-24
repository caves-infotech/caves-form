import React from 'react'
import ResultPage from './ResultPage'
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

async function page({params}) {
    const { id } = await params; // Get the ID from the URL parameters
    const imageUrl = await fetchImage(id); // Fetch the image URL
  return (
    <div>
        <ResultPage imageUrl={imageUrl} />
    </div>
  )
}

export default page