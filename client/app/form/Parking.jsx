"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/details/Sidebar";
import api from "@/services/axios";
import { formParkingSchema } from "@/services/formData";
import { useSession } from "next-auth/react";
import style from "../style.module.css";
import { useGetContext } from "@/services/formStateContext";
import Heading from "@/components/details/Heading";
import ParkingDetails from "@/components/details/parking/ParkingDetails";
import { toast } from "react-toastify";
import { useAuth } from "@/services/authContext";

export default function Parking({ setIssignedinWhenSubmit, shareViaEmail, shareWhatsApp, shareViaLink }) {
  const { isVerticalNavbarOpen, isSidebarOpen } = useGetContext();
  const { data: session } = useSession();
  const { isSignedIn } = useAuth();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(formParkingSchema);

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

  const handleMoreNestedChange = (e) => {
    const { name, value } = e.target;
    const [section, field, place] = name.split(".");

    setFormData((prevFormData) => ({
      ...prevFormData,
      [section]: {
        ...prevFormData[section],
        [field]: {
          ...prevFormData[section][field],
          [place]: value,
        },
      },
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
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
        "/user/forms/parking",
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
    } else {
      setFormData({...formParkingSchema});
    }
  }, [ind]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignedIn) {
        let response = "";
        if (ind == undefined) {
          response = await api.post(
            "/form/parking",
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
            "/form/parking",
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

  const handleDelete = async (e) => {
    try {
      if (isSignedIn) {
          const response = await api.post(
            "/form/parking/delete",
              {session, formId}
          );
          toast.success("Form deleted successfully");
          console.log("error: ", response);
        fetchData();
        setStep(1);
      } else {
        setIssignedinWhenSubmit(false);
      }
    } catch (error) {
      console.log("There was an error while deleting form!", error);
      toast.error("There was an error while deleting form!");
    }
  };

  return (
    <>
      <div>
        <div
          className={
            style.colorSix +
            `   flex sm:pb-0 pb-20 sm:pt-20 pt-24  ${step === 1 || step === 2 ? "sm:h-screen" : ""}`
          }
        >
          <Heading isVerticalNavbarOpen={isVerticalNavbarOpen} text={"Parking"} />

          <Sidebar
            isSignedIn={isSignedIn}
            forms={forms}
            setInd={setInd}
            handleDelete={handleDelete}
            ind={ind}
            setStep={setStep}
            loc={2}
          />

          <div
            className={` px-2 ${isVerticalNavbarOpen
              ? isSidebarOpen
                ? "sm:pl-[463px] sm:w-[1403px] "
                : "sm:pl-[265px] sm:w-[1140px] "
              : isSidebarOpen
                ? " sm:pl-[305px] sm:w-[1243px] "
                : "sm:pl-[105px] sm:w-[980px] "
              } mt-20`}
          >
            <div className={` bg-white shadow-2xl rounded-3xl`}>
              {step === 1 && (
                <ParkingDetails
                  formData={formData}
                  handleChange={handleChange}
                  handleNestedChange={handleNestedChange}
                  handleSubmit={handleSubmit}
                  setFormData={setFormData}
                  handleMoreNestedChange={handleMoreNestedChange}
                  setIssignedinWhenSubmit={setIssignedinWhenSubmit}
                  shareViaEmail={shareViaEmail}
                  shareWhatsApp={shareWhatsApp}
                  shareViaLink={shareViaLink}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
