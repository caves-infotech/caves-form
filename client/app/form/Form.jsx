"use client";
import Performa from "./Performa";
import PotentialFsi from "./PotentialFsi";
import PdfForms from "./PdfForms";
import Parking from "./Parking";
import BuildingMargin from "./BuildingMargin";
import UdcprIndex from "./UdcprIndex";
import Tables from "./Tables";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import VerticalNavbar from "@/components/verticalNavbar/VerticalNavbar";
import { useGetContext } from "@/services/formStateContext";
import { useAuth } from "@/services/authContext";
import GoTopBouncer from "@/components/GoTopBouncer";
import html2canvas from "html2canvas";
import api from "@/services/axios";
import Adds from "@/components/Adds";

export default function Form() {
  const { state } = useGetContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const { isSignedIn } = useAuth();
  const [isSignedinWhenSubmit, setIssignedinWhenSubmit] = useState(true);

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

  const [id, setId] = useState(null);
  const [pendingShare, setPendingShare] = useState(null); // State to track pending share action

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

  const generateAndUploadImage = async (sectionRef, shareType) => {
    if (isSignedIn) {
      const canvas = await html2canvas(sectionRef.current, {
        width: 300,
        height: 500,
        useCORS: true,
        scale: 1,
      });

      canvas.toBlob(async (blob) => {
        if (blob) {
          const res = await uploadToCloudinary(blob);
          setId(res); // This will trigger the useEffect hook
          setPendingShare(shareType); // Set pending share action
        }
      }, "image/png");
    } else {
      setIssignedinWhenSubmit(false);
    }
  };

  // Monitor changes in `id` and execute pending share actions
  useEffect(() => {
    if (id && pendingShare) {
      const message = encodeURIComponent(`
Click below link to view result:

https://udcprs.com/form/${id}

Do visit to get more information about us https://udcprs.com
    `);

      if (pendingShare === "WhatsApp") {
        window.open(`https://wa.me/?text=${message}`, "_blank");
      } else if (pendingShare === "Email") {
        const subject = encodeURIComponent("Check out this section");
        window.open(`mailto:?subject=${subject}&body=${message}`, "_blank");
      }

      setPendingShare(null); // Reset pending share action after execution
    }
  }, [id, pendingShare]);

  // Function to initiate WhatsApp share
  const shareWhatsApp = async (sectionRef) => {
    if (isSignedIn) {
      await generateAndUploadImage(sectionRef, "WhatsApp");
    } else {
      setIssignedinWhenSubmit(false);
    }
  };

  // Function to initiate Email share
  const shareViaEmail = async (sectionRef) => {
    if (isSignedIn) {
      await generateAndUploadImage(sectionRef, "Email");
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
        {state == 1 && (
          <Performa
            setIssignedinWhenSubmit={setIssignedinWhenSubmit}
            shareViaEmail={shareViaEmail}
            shareWhatsApp={shareWhatsApp}
          />
        )}
        {state == 2 && (
          <PotentialFsi
            setIssignedinWhenSubmit={setIssignedinWhenSubmit}
            shareViaEmail={shareViaEmail}
            shareWhatsApp={shareWhatsApp}
          />
        )}
        {state == 3 && (
          <Parking
            setIssignedinWhenSubmit={setIssignedinWhenSubmit}
            shareViaEmail={shareViaEmail}
            shareWhatsApp={shareWhatsApp}
          />
        )}
        {state == 4 && (
          <BuildingMargin
            setIssignedinWhenSubmit={setIssignedinWhenSubmit}
            shareViaEmail={shareViaEmail}
            shareWhatsApp={shareWhatsApp}
          />
        )}
        {state == 5 && <PdfForms />}
        {state == 6 && <UdcprIndex />}
        {state == 7 && <Tables />}
      </div>

      {/* <Adds /> */}

      {isScrolled && state == 1 && <GoTopBouncer scrollToTop={scrollToTop} />}
    </div>
  );
}
