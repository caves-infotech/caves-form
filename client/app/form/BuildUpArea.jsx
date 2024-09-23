"use client";

import api from "@/services/axios";
import { useEffect, useState } from "react";
import { formDataSchema } from "@/services/formData";
import style from "../style.module.css";
import Sidebar from "@/components/Sidebar";

function BuildUpArea() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(formDataSchema);

  
  const [forms, setForms] = useState([]);
  const [ind, setInd] = useState(undefined);
  const [formId, setFormId] = useState(null);

  return (
    <div className=" sm:pl-40">
      <div
        className={
          style.colorFour +
          `  p-2 flex pt-20  w-screen ${
            step === 1 || step === 2 ? "h-screen" : ""
          }`
        }
      >
        <Sidebar forms={forms} setInd={setInd} setStep={setStep} />

        <div className=" mt-6 sm:pl-80">Build Up Area</div>
      </div>
    </div>
  );
}
export default BuildUpArea;
