
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

//   export const metadata = {
//     title: "UDCPR Calculation Tool",
//     description:
//       "Access simplified tools for UDCPR 2024 byelaws, FSI, TDR, and redevelopment calculations at Udcprs.com. Explore Maharashtra's latest building regulations and get accurate guidance on Floor Space Index and other development norms for urban planning.",
//     keywords:
//       "UDCPR 2024, Maharashtra building byelaws, UDCPR simplified, FSI calculator Maharashtra, TDR in UDCPR, building regulations Maharashtra, redevelopment rules UDCPR, UDCPR FSI guidelines, UDCPR tools, urban development Maharashtra,Maharashtra FSI calculation.",
//     openGraph: {
//       title: "UDCPR Calculation Tool",
//       description:
//         "Access simplified tools for UDCPR 2024 byelaws, FSI, TDR, and redevelopment calculations.",
//       images: ["https://udcprs.com/home.png"],
//     },
//   };

// export default async function Layout({ children, params }) {
//     const { id } = await params; // Get the ID from the URL parameters
//     const imageUrl = await fetchImage(id); // Fetch the image URL
//   return (
//     <>
//       {children}
//     </>
//   );
// }

// app/[id]/page.js

import PreviewPage from '@/components/details/potentialFsi/Preview';
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
  return res.data; // Adjust according to your API response
}

// Function to generate metadata dynamically
export async function generateMetadata({ params }) {
  const { id } = params;
  try {
    const data = await fetchImage(id); // Fetch image URL for the ID
    
    const {imageUrl} = data;
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
    const data = await fetchImage(id); // Fetch image URL for the ID
    
    const {imageUrl, formData} = data;
    return (
      <div>
        <ResultPage imageUrl={imageUrl} formData={formData} />
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
