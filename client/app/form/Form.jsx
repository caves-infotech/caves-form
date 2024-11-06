"use client";
import Performa from "./Performa";
import PotentialFsi from "./PotentialFsi";
import PdfForms from "./PdfForms";
import Parking from "./Parking";
import BuildingMargin from "./BuildingMargin";
import UdcprIndex from "./UdcprIndex";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import VerticalNavbar from "@/components/verticalNavbar/VerticalNavbar";
import { useGetContext } from "@/services/formStateContext";
import { useAuth } from "@/services/authContext";
import SignUpPopup from "@/components/auth/Signup";
import SignInPopup from "@/components/auth/Signin";
import GoTopBouncer from "@/components/GoTopBouncer";
import html2canvas from "html2canvas";
import api from "@/services/axios";

export default function Form() {
  const { state } = useGetContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignin, setIsSignin] = useState(true);
  const { isSignedIn } = useAuth();
  const [isSignedinWhenSubmit, setIssignedinWhenSubmit] = useState(true);
  const [id, setId] = useState(null)


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const uploadToCloudinary = async (imageBlob) => {
    const formData = new FormData();
    formData.append("file", imageBlob);
    // formData.append("upload_preset", "your_upload_preset");

    try {
      const response = await api.post("/form/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        console.log("Cloudinary Response: ", response.data);
        return response.data.file._id; // Return the file ID for later use
      }
    } catch (error) {
      console.error("Error uploading the file:", error);
    }
  };

  const generateAndUploadImage = async (sectionRef) => {
    // const imageElement = sectionRef.current.querySelector("div");
    // const { width, height } = imageElement.getBoundingClientRect(); // Get image dimensions
    if (isSignedIn) {
      const canvas = await html2canvas(sectionRef.current, {
        width: 300,
        height: 500,
        useCORS: true, // Enable CORS for external images if necessary
        scale: 1, // Ensure no extra scaling
      });

      canvas.toBlob(async (blob) => {
        if (blob) {
          const res = await uploadToCloudinary(blob)
          setId(res)
          // Upload the Blob to Cloudinary and get the ID
          console.log(id)
        }
      }, "image/png");
    } else {
      setIssignedinWhenSubmit(false);
    }
  };

  const shareWhatsApp = async (sectionRef) => {
    if (isSignedIn) {
      await generateAndUploadImage(sectionRef);
      const message = encodeURIComponent(`
              Click below link to view result:
        
              https://udcprs.com/form/${id}
        
              Do visit to get more information about us
              https://udcprs.com
              `);
      // const url = encodeURIComponent(window.location.href);
      window.open(`https://wa.me/?text=${message}`, "_blank");
    } else {
      setIssignedinWhenSubmit(false);
    }
  };

  // Function to share via email
  const shareViaEmail = async (sectionRef) => {
    if (isSignedIn) {
      await generateAndUploadImage(sectionRef);
      const subject = encodeURIComponent("Check out this section");
      const body = encodeURIComponent(`
      Click below link to view result:

      https://udcprs.com/form/${id}

      Do visit to get more information about us
      https://udcprs.com
      `);
      window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
    } else {
      setIssignedinWhenSubmit(false);
    }
  };

  return (
    <div>
      <Header
        isScrolled={isScrolled}
        isSignedinWhenSubmit={isSignedinWhenSubmit}
      />

      <VerticalNavbar />

      <div>
        {state == 1 && <Performa setIssignedinWhenSubmit={setIssignedinWhenSubmit} shareViaEmail={shareViaEmail} shareWhatsApp={shareWhatsApp} />}
        {state == 2 && <PotentialFsi setIssignedinWhenSubmit={setIssignedinWhenSubmit} shareViaEmail={shareViaEmail} shareWhatsApp={shareWhatsApp} />}
        {state == 3 && <Parking setIssignedinWhenSubmit={setIssignedinWhenSubmit} shareViaEmail={shareViaEmail} shareWhatsApp={shareWhatsApp} />}
        {state == 4 && <BuildingMargin setIssignedinWhenSubmit={setIssignedinWhenSubmit} shareViaEmail={shareViaEmail} shareWhatsApp={shareWhatsApp} />}
        {state == 5 && <PdfForms />}
        {state == 6 && <UdcprIndex />}
      </div>

      {/* {!isSignedinWhenSubmit && (
        <>
          {isSignin ? (
            <SignInPopup setIsSignin={setIsSignin} />
          ) : (
            <SignUpPopup setIsSignin={setIsSignin} />
          )}
        </>
      )} */}

      {isScrolled && state == 1 && <GoTopBouncer scrollToTop={scrollToTop} />}
    </div>
  );
}
