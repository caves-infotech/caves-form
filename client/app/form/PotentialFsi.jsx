"use client";

import api from "@/services/axios";
import { useEffect, useState } from "react";
import { formDataSchema } from "@/services/formData";
import style from "../style.module.css";
import Sidebar from "@/components/Sidebar";
import { useGetContext } from "@/services/formStateContext";

function PotentialFsi() {
  const { isSidebarOpen} = useGetContext();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(formDataSchema);

  // const handleNestedChange = (e) => {
  //   const { name, value } = e.target;
  //   const keys = name.split(".");

  //   setFormData((prevFormData) => {
  //     let updatedData = { ...prevFormData };
  //     let currentLevel = updatedData;

  //     keys.forEach((key, index) => {
  //       if (index === keys.length - 1) {
  //         currentLevel[key] = value;
  //       } else {
  //         currentLevel = currentLevel[key];
  //       }
  //     });

  //     return updatedData;
  //   });
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   const [section, field] = name.split(".");

  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [section]: {
  //       ...prevFormData[section],
  //       [field]: value,
  //     },
  //   }));
  // };

  // const handleNext = (e) => {
  //   e.preventDefault();
  //   setStep(step + 1);
  // };

  // const handlePrevious = (e) => {
  //   e.preventDefault();
  //   setStep(step - 1);
  // };

  const [forms, setForms] = useState([]);
  const [ind, setInd] = useState(undefined);
  const [formId, setFormId] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const response = await api.post("/user/forms", { session });
  //   console.log("forms: ", response);
  //   setForms(response.data.forms);
  // };

  // useEffect(() => {
  //   if (ind != undefined) {
  //     setFormData(forms[ind]);
  //     setFormId(forms[ind]._id);
  //   } else if (ind === undefined) {
  //     setFormData(formDataSchema);
  //   }
  // }, [ind]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let response = "";
  //     if (ind == undefined) {
  //       response = await api.post("/form", { formData, session });
  //       alert("form submitted successfully.", response);
  //     } else {
  //       response = await api.put("/form", { formData, session, formId });
  //       alert("form updated successfully.", response);
  //     }

  //     fetchData();
  //     setStep(1);
  //   } catch (error) {
  //     console.log("There was an error while submitting form!", error);
  //     alert("There was an error while submitting form!");
  //   }
  // };

  return (
    <div className=" sm:pl-40">
      <div
            className={
              style.colorSix +
              `  p-2 flex pt-20  w-screen ${
                step === 1 || step === 2 ? "h-screen" : ""
              }`
            }
          >
            <Sidebar forms={forms} setInd={setInd} setStep={setStep} isSidebarOpen={isSidebarOpen} />

        <div className=" mt-6 sm:pl-80">Potential Fsi</div>
      </div>
    </div>
  );
}

export default PotentialFsi;
