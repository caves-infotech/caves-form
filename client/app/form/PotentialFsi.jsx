"use client";

import { useState, useEffect } from "react";
import LocationDetails from "@/components/details/LocationDetails";
import PlotDetails from "@/components/details/PlotDetails";
import FSIDetails from "@/components/details/FSIDetails";
import Sidebar from "@/components/Sidebar";
import Preview from "@/components/details/Preview";
import Topbar from "@/components/Topbar";
import api from "@/services/axios";
import { formDataSchema } from "@/services/formData";
import { useSession } from "next-auth/react";
import style from "../style.module.css";
import { useGetContext } from "@/services/formStateContext";
import Heading from "@/components/details/Heading";

export default function PotentialFsi() {
  const { isVerticalNavbarOpen, isSidebarOpen} = useGetContext();
  const { data: session } = useSession();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(formDataSchema);

  const handleNestedChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");

    setFormData((prevFormData) => {
      let updatedData = { ...prevFormData };
      let currentLevel = updatedData;

      keys.forEach((key, index) => {
        if (index === keys.length - 1) {
          currentLevel[key] = value;
        } else {
          currentLevel = currentLevel[key];
        }
      });

      return updatedData;
    });
  };

  const handleChange = (e) => {
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

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const [forms, setForms] = useState([]);
  const [ind, setInd] = useState(undefined);
  const [formId, setFormId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await api.post("/user/forms", { session });
    setForms(response.data.forms);
  };

  useEffect(() => {
    if (ind != undefined) {
      setFormData(forms[ind]);
      setFormId(forms[ind]._id);
    } else if (ind === undefined) {
      setFormData(formDataSchema);
    }
  }, [ind]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = "";
      if (ind == undefined) {
        response = await api.post("/form", { formData, session });
        alert("form submitted successfully.", response);
      } else {
        response = await api.put("/form", { formData, session, formId });
        alert("form updated successfully.", response);
      }

      fetchData();
      setStep(1);
    } catch (error) {
      console.log("There was an error while submitting form!", error);
      alert("There was an error while submitting form!");
    }
  };

  return (
    <>
      <div>
          <div
            className={
              style.colorSix +
              `   flex pt-20 ${
                step === 1 || step === 2 ? "h-screen" : ""
              }`
            }
          >
            <Heading text={"Potential FSI"} />

            <Sidebar forms={forms} setInd={setInd} ind={ind} setStep={setStep} />

            <div
            className={` px-2 ${
              isVerticalNavbarOpen
                ? isSidebarOpen
                  ? "sm:pl-[528px] sm:w-10/12 "
                  : "sm:pl-[265px] sm:w-8/12 "
                : isSidebarOpen
                ? " sm:pl-[368px] sm:w-9/12 "
                : "sm:pl-[105px] sm:w-7/12 "
            } mt-20`}
          >              
            <Topbar step={step} setStep={setStep} />

              <div
                className={` bg-white shadow-2xl rounded-b-xl`}
              >
                {step === 1 && (
                  <LocationDetails
                    formData={formData}
                    handleChange={handleChange}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                  />
                )}
                {step === 2 && (
                  <PlotDetails
                    formData={formData}
                    handleChange={handleChange}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                  />
                )}
                {step === 3 && (
                  <FSIDetails
                    formData={formData}
                    handleChange={handleChange}
                    handleNestedChange={handleNestedChange}
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                  />
                )}
                {step === 4 && (
                  <Preview
                    formData={formData}
                    handlePrevious={handlePrevious}
                    handleSubmit={handleSubmit}
                  />
                )}
              </div>
            </div>
          </div>
      </div>
    </>
    
  );
}
