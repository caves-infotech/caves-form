"use client";

import { useState, useEffect } from "react";
import ProjectDetails from "@/components/details/parking/ProjectDetails";
import Sidebar from "@/components/Sidebar";
import Preview from "@/components/details/parking/Preview";
import Topbar from "@/components/details/parking/Topbar";
import api from "@/services/axios";
import { formParkingSchema } from "@/services/formData";
import { useSession } from "next-auth/react";
import style from "../style.module.css";
import { useGetContext } from "@/services/formStateContext";
import Heading from "@/components/details/parking/Heading";
import ParkingDetails from "@/components/details/parking/ParkingDetails";

export default function Parking() {

  const { isVerticalNavbarOpen, isSidebarOpen } = useGetContext();
  const { data: session } = useSession();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(formParkingSchema);

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
      setFormData(formParkingSchema);
    }
  }, [ind]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = "";
      if (ind == undefined) {
        // response = await api.post("/form", { formData, session });
        console.log("form submitted successfully.", formData);
      } 
      // else {
      //   response = await api.put("/form", { formData, session, formId });
      //   console.log("form submitted successfully.", formData);
      // }

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
            `   flex pt-20 ${step === 1 || step === 2 ? "h-screen" : ""}`
          }
        >
          <Heading text={"Parking"} />

          <Sidebar forms={forms} setInd={setInd} ind={ind} setStep={setStep} />

          <div
            className={` px-2 ${
              isVerticalNavbarOpen
                ? isSidebarOpen
                  ? "sm:pl-[528px] sm:w-[1403px] "
                  : "sm:pl-[265px] sm:w-[1140px] "
                : isSidebarOpen
                ? " sm:pl-[368px] sm:[1243px] "
                : "sm:pl-[105px] sm:w-[980px] "
            } mt-20`}
          >
            <Topbar step={step} setStep={setStep} />

            <div className={` bg-white shadow-2xl rounded-b-xl`}>
              {step === 1 && (
                <ParkingDetails
                  formData={formData}
                  handleChange={handleChange}
                  handleNestedChange={handleNestedChange}
                  handlePrevious={handlePrevious}
                  handleNext={handleNext}
                  setFormData={setFormData}
                />
              )}
              {step === 2 && (
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
