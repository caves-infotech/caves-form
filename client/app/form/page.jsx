"use client";

import { useState, useEffect } from "react";
import LocationDetails from "../../components/details/LocationDetails";
import PlotDetails from "../../components/details/PlotDetails";
import FSIDetails from "../../components/details/FSIDetails";
import Sidebar from "../../components/Sidebar";
import Preview from "../../components/Preview";
import Topbar from "../../components/Topbar";
import api from "@/services/axios";
import { redirect } from "next/navigation";
import { formDataSchema } from "@/services/formData";
import { getToken } from "@/services/auth";
import { useSession } from 'next-auth/react';

function Form() {
  const [loading, setLoading] = useState(true);
  const token = getToken();
  const { data: session } = useSession();  

  useEffect(() => {
    if (token || session) {
      setLoading(false);
    } else {
      redirect('/auth/signin');
    }
  }, []);
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(formDataSchema);

  const handleNestedChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {     
      const response = await api.post('/form', {formData, session});
      alert("form submitted successfully.", response);
      fetchData();
      setStep(1);
    } catch (error) {
      console.log('There was an error while submitting form!', error);
      alert('There was an error while submitting form!');
    }
  };

  

  const [forms, setForms] = useState([]);
  const [ind, setInd] = useState(undefined);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("session:    ", session);
             
    const response = await api.post('/user/forms', {session});
    console.log(response);
    setForms(response.data.forms);
  };

  useEffect(() => {
    if (ind != undefined) {
      setFormData(forms[ind]);
    } else if (ind === undefined) {
      setFormData(formDataSchema);
    }
  }, [ind]);

  return (
    <>
    { !loading &&
      <div className={`pl-80 p-8 flex-grow bg-blue-900 ${step === 1 ? 'h-screen' : ''}`}>

      <Topbar step={step} setStep={setStep} />

      <Sidebar forms={forms} setInd={setInd} setStep={setStep} />

      {/* Form Container */}
      <div className={`w-full bg-white rounded-2xl ${step === 1 ? 'rounded-ss-none' : ''}`}>
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
            handleSubmit={handleSubmit} />
        )}
      </div>
    </div>
    }
    </>
  );
}

export default Form;
