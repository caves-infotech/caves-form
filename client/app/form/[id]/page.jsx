// import React from 'react'
// import ResultPage from './ResultPage'
// import api from "@/services/axios";

// async function fetchImage(id) {
//     const res = await api.get(`/form/${id}`, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
  
//     if (res.status !== 200) {
//       throw new Error("Failed to fetch image");
//     }
  
//     return res.data.fileUrl; // Adjust according to your response structure
//   }

// async function page({params}) {
//     const { id } = await params; // Get the ID from the URL parameters
//     const imageUrl = await fetchImage(id); // Fetch the image URL
//   return (
//     <div>
//       <ResultPage imageUrl={imageUrl} />
//     </div>
//   )
// }

// export default page;

// app/[id]/page.js

import ResultPage from './ResultPage';
import api from "@/services/axios";

// Function to fetch image dynamically based on the ID
async function fetchImage(id) {
  const res = await api.get(`/form/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status !== 200) {
    throw new Error("Failed to fetch image");
  }

  return res.data.fileUrl; // Adjust according to your API response
}

// Function to generate metadata dynamically
export async function generateMetadata({ params }) {
  const { id } = params;
  try {
    const imageUrl = await fetchImage(id); // Fetch image URL for the ID

    return {
      title: `Result for ${id}`,
      description: `View the result for ID: ${id}.`,
      openGraph: {
        title: `Result for ${id}`,
        description: `View the result for ID: ${id}.`,
        images: [imageUrl || '/defaultImage.png'], // Fallback to a default image
      },
    };
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    return {
      title: "Error",
      description: "Failed to load the page.",
    };
  }
}

// Dynamic page component
export default async function Page({ params }) {
  const { id } = params; // Get the ID from the URL parameters

  try {
    const imageUrl = await fetchImage(id); // Fetch the image URL
    return (
      <div>
        <ResultPage imageUrl={imageUrl} />
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch page data:", error);
    return (
      <div>
        <h1>Error loading page</h1>
        <p>Could not fetch data for ID: {id}.</p>
      </div>
    );
  }
}
