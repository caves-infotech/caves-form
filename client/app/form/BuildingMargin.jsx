"use client";

import { useState, useEffect } from "react";
import PlotDetails from "@/components/details/buildingMargin/PlotDetails";
import Sidebar from "@/components/details/Sidebar";
import api from "@/services/axios";
import { formBuildingMarginSchema } from "@/services/formData";
import { useSession } from "next-auth/react";
import style from "../style.module.css";
import { useGetContext } from "@/services/formStateContext";
import Heading from "@/components/details/Heading";
import { toast } from "react-toastify";
import { useAuth } from "@/services/authContext";

export default function BuildingMargin({ setIssignedinWhenSubmit, shareViaEmail, shareWhatsApp }) {
  const { isVerticalNavbarOpen, isSidebarOpen } = useGetContext();
  const { data: session } = useSession();
  const { isSignedIn } = useAuth();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(formBuildingMarginSchema);

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
      const response = await api.post("/user/forms/building-margin", {
        session,
      });
      setForms(response.data.forms);
    }
  };

  useEffect(() => {
    if (ind != undefined) {
      setFormData(forms[ind]);
      setFormId(forms[ind]._id);
    } else if (ind === undefined) {
      setFormData(formBuildingMarginSchema);
    }
  }, [ind]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignedIn) {
        let response = "";
        if (ind == undefined) {
          console.log(formData);

          response = await api.post(
            "/form/building-margin",
            {
              formData,
              session,
            },
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
            "/form/building-margin",
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
            "/form/building-margin/delete",
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
            `   flex sm:pb-0 pb-20 pt-24  ${step === 1 || step === 2 ? "sm:h-screen" : ""}`
          }
        >
          <Heading isVerticalNavbarOpen={isVerticalNavbarOpen} text={"Building Margin"} />

          <Sidebar
            isSignedIn={isSignedIn}
            forms={forms}
            setInd={setInd}
            handleDelete={handleDelete}
            ind={ind}
            setStep={setStep}
            loc={3}
          />

          <div
            className={` px-2 ${isVerticalNavbarOpen
              ? isSidebarOpen
                ? "sm:pl-[463px] sm:w-[1403px] "
                : "sm:pl-[265px] sm:w-[1240px] "
              : isSidebarOpen
                ? " sm:pl-[305px] sm:w-[1243px] "
                : "sm:pl-[105px] sm:w-[1080px] "
              } mt-20`}
          >
            <div className={` bg-white shadow-2xl rounded-3xl`}>
              <PlotDetails
                formData={formData}
                handleChange={handleChange}
                handleNestedChange={handleNestedChange}
                handleSubmit={handleSubmit}
                handleMoreNestedChange={handleMoreNestedChange}
                setFormData={setFormData}
                setIssignedinWhenSubmit={setIssignedinWhenSubmit}
                shareViaEmail={shareViaEmail}
                shareWhatsApp={shareWhatsApp}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
