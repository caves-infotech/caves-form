"use client";
const axios = require('axios');


import { useState } from "react";
import LocationDetails from "./components/details/LocationDetails";
import PlotDetails from "./components/details/PlotDetails";
import FSIDetails from "./components/details/FSIDetails";
import Sidebar from "./components/Sidebar";
import Preview from "./components/Preview";

function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    location: {
      village: "",
      taluka: "",
      district: "",
      ulb: "",
      zone: "",
    },
    plot: {
      sizex: undefined,
      sizey: undefined,
      area: undefined,
      roadWidth: undefined,
    },
    fsi: {
      area: undefined,
      deductions: {
        proposedDp: undefined,
        anyDp: undefined,
        total: undefined,
      },
      balanceArea: undefined,
      aminitySpace: {
        required: undefined,
        adj2b: undefined,
        balanceProposed: undefined,
      },
      netPlotArea: undefined,
      recreationOpenSpace: {
        required: undefined,
        proposed: undefined,
      },
      internalRoadArea: undefined,
      plotableArea: undefined,
      builtUpArea: undefined,
      paymentOfPremium: {
        maxPremium: undefined,
        proposedPremium: undefined,
      },
      inSituLoading: {
        areaAgainstDpRoad: undefined,
        areaAgainstAminitySpace: undefined,
        tdrArea: undefined,
        toatlInSitu: undefined,
      },
      additinalFsi: undefined,
      totalEntitlementProposed: {
        whicheverApplicable: undefined,
        ancillaryArea: undefined,
        totalEntitlement: undefined,
      },
      maxUtilizationLimit: undefined,
      totalBuiltUpAreaProposal: {
        existingBuiltUpArea: undefined,
        proposedBuiltUpArea: undefined,
        totalBuiltUp: undefined,
      },
      FSIConsumed: undefined,
      areOfInclusiveHousing: {
        required: undefined,
        proposed: undefined,
      },
    },
  });

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
      const response = await axios.post('http://localhost:8000/form', formData);
      alert("form submitted successfully.", response);
    } catch (error) {
      console.error('There was an error!', error);
      alert('Error creating user');
    }
  };

  return (
    <div className="ml-64 flex-grow flex h-screen">

      <Sidebar step={step} setStep={setStep} />


      {/* Form Container */}
      <div className=" w-full p-8 bg-white">
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
          <Preview formData={formData} handleSubmit={handleSubmit}/>
        )}
      </div>
    </div>
  );
}

export default Home;
