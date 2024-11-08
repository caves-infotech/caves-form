"use client";

import { useState, useEffect } from "react";
import PlotDetails from "@/components/details/potentialFsi/PlotDetails";
import Sidebar from "@/components/details/Sidebar";
import api from "@/services/axios";
import { formPotentialFsiSchema } from "@/services/formData";
import { useSession } from "next-auth/react";
import style from "../style.module.css";
import { useGetContext } from "@/services/formStateContext";
import Heading from "@/components/details/Heading";
import { toast } from "react-toastify";
import { useAuth } from "@/services/authContext";

export default function PotentialFsi({ setIssignedinWhenSubmit, shareWhatsApp, uploadToCloudinary, generateAndUploadImage, shareViaEmail }) {
  const { isVerticalNavbarOpen, isSidebarOpen } = useGetContext();
  const { data: session } = useSession();
  const { isSignedIn } = useAuth();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(formPotentialFsiSchema);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleNestedChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split(".");

    setFormData((prevFormData) => ({
      ...prevFormData,
      [section]: {
        ...prevFormData[section],
        [field]: value,
      },
    }));
  };

  const [forms, setForms] = useState([]);
  const [ind, setInd] = useState(undefined);
  const [formId, setFormId] = useState(null);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    if (isSignedIn) {
      const response = await api.post(
        "/user/forms/potential-fsi",
        { session },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setForms(response.data.forms);
    }
  };

  useEffect(() => {
    if (ind != undefined) {
      setFormData(forms[ind]);
      setFormId(forms[ind]._id);
    } else if (ind === undefined) {
      setFormData(formPotentialFsiSchema);
    }
  }, [ind]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignedIn) {
        let response = "";
        if (ind == undefined) {
          response = await api.post(
            "/form/potential-fsi",
            { formData, session },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          toast.success("Form submitted successfully");
          console.log("sucess: ", response);
        } else {
          response = await api.put(
            "/form/potential-fsi",
            {
              formData,
              session,
              formId,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          toast.success("Form updated successfully");
          console.log("error: ", response);
        }

        setInd(undefined);
        fetchData();
        setStep(1);
      } else {
        setIssignedinWhenSubmit(false);
      }
    } catch (error) {
      console.log("There was an error while submitting form!", error);
      toast.error("There was an error while submitting form!");
    }
  };

  return (
    <>
      <div>
        <div className={style.colorSix + ` flex pt-20 h-screen`}>
          <Heading text={"Potential FSI"} />

          <Sidebar
            isSignedIn={isSignedIn}
            forms={forms}
            setInd={setInd}
            ind={ind}
            setStep={setStep}
            loc={1}
          />

          <div
            className={` px-2 ${isVerticalNavbarOpen
              ? isSidebarOpen
                ? "sm:pl-[463px] sm:w-[1403px] "
                : "sm:pl-[265px] sm:w-[1240px] "
              : isSidebarOpen
                ? " sm:pl-[305px] sm:[1343px] "
                : "sm:pl-[105px] sm:w-[1080px] "
              } mt-20`}
          >
            <div className={` bg-white shadow-2xl rounded-xl`}>
              <PlotDetails
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleNestedChange={handleNestedChange}
                setIssignedinWhenSubmit={setIssignedinWhenSubmit}
                shareViaEmail={shareViaEmail}
                shareWhatsApp={shareWhatsApp}
                generateAndUploadImage={generateAndUploadImage}
                uploadToCloudinary={uploadToCloudinary}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
