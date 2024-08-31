"use client";
const axios = require('axios');


import { useState, useRef, useEffect } from "react";
import OwnerDetails from "./components/details/OwnerDetails";
import LocationDetails from "./components/details/LocationDetails";
import PlotDetails from "./components/details/PlotDetails";
import FSIDetails from "./components/details/FSIDetails";
import FSIPreview from "./components/previews/FSIPreview";
import PlotPreview from "./components/previews/PlotPreview";
import LocationPreview from "./components/previews/LocationPreview";
import OwnerPreview from "./components/previews/OwnerPreview";
import Sidebar from "./components/Sidebar";

function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    owner: {
      name: "",
      email: "",
      phone: "",
    },
    location: {
      village: "",
      taluka: "",
      district: "",
      ulb: "",
      zone: "",
    },
    plot: {
      sizex: null,
      sizey: null,
      area: null,
      roadWidth: null,
    },
    // fsi: {
    //   area: null,
    //   deductions: {
    //     proposedDp: null,
    //     anyDp: null,
    //   },
    //   aminitySpace: {
    //     required: null,
    //     adj2b: null,
    //     balanceProposed: null,
    //   },
    //   recreationOpenSpace: {
    //     required: null,
    //     proposed: null,
    //   },
    //   internalRoadArea: null,
    //   plotableArea: null,
    //   paymentOfPremium: {
    //     maxPremium: null,
    //     proposedPremium: null,
    //   },
    //   inSituLoading: {
    //     tdrArea: null,
    //   },
    //   additinalFsi: null,
    //   totalEntitlementProposed: {
    //     ancillaryArea: null,
    //   },
    //   maxUtilizationLimit: null,
    //   totalBuiltUpAreaProposal: {
    //     existingBuiltUpArea: null,
    //     proposedBuiltUpAreaPLine: null,
    //   },
    //   FSIConsumed: null,
    //   areOfInclusiveHousing: {
    //     proposed: null,
    //   },
    // },
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
      const response = await axios.post('http://localhost:8000/', formData);
      alert("form submitted successfully.", response);
    } catch (error) {
      console.error('There was an error!', error);
      alert('Error creating user');
    }
  };

  // useEffect(() => {
  //   if (previewRef.current) {
  //     previewRef.current.scrollTo({
  //       top: previewRef.current.scrollHeight,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [formData]);

  return (
    <div className="flex h-screen">

      <Sidebar step={step} setStep={setStep} />


      {/* Form Container */}
      <div className=" w-full p-8 bg-white">
        {step === 1 && (
          <OwnerDetails
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
          />
        )}
        {step === 2 && (
          <LocationDetails
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        )}
        {step === 3 && (
          <PlotDetails
            formData={formData}
            handleChange={handleChange}
            handleNext={handleSubmit}
            handlePrevious={handlePrevious}
          />
        )}
        {/* {step === 4 && (
          <FSIDetails
            formData={formData}
            handleChange={handleChange}
            handleNestedChange={handleNestedChange}
            handlePrevious={handlePrevious}
            handleSubmit={handleSubmit}
          />
        )} */}
      </div>

      {/* Preview Container */}
      {/* <div className="p-8 w-1/2 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Live Preview</h2>

        {step === 1 && (
          <OwnerPreview owner={formData.owner}/>
          // <div className="mb-4">
          //   <h3 className="font-bold text-xl pb-4 pt-10">Owner Details: </h3>
          //   <p>
          //     <b className="pr-[88px]">Name: </b>
          //     {formData.owner.name}
          //   </p>
          //   <p>
          //     <b className="pr-[92px]">Email: </b>
          //     {formData.owner.email}
          //   </p>
          //   <p>
          //     <b className="pr-[18px]">Phone Number: </b>
          //     {formData.owner.phone}
          //   </p>
          // </div>
        )}
        {step === 2 && (
          <LocationPreview location={formData.location}/>
          // <div className="mb-4">
          //   <h3 className="font-bold text-xl pb-4 pt-10">Location Details: </h3>
          //   <p>
          //     <b className="pr-[78px]">Village: </b>
          //     {formData.location.village}
          //   </p>
          //   <p>
          //     <b className="pr-[81px]">Taluka: </b>
          //     {formData.location.taluka}
          //   </p>
          //   <p>
          //     <b className="pr-[74px]">District: </b>
          //     {formData.location.district}
          //   </p>
          //   <p>
          //     <b className="pr-[98px]">ULB: </b>
          //     {formData.location.ulb}
          //   </p>
          //   <p>
          //     <b className="pr-[90px]">Zone: </b>
          //     {formData.location.zone}
          //   </p>
          // </div>
        )}
        {step === 3 && (
          <PlotPreview plot={formData.plot}/>
          // <div className="mb-4">
          //   <h3 className="font-bold text-xl pb-4 pt-10">Plot Details: </h3>
          //   <h4 className="font-bold">Size: </h4>
          //   <p className="pl-5">
          //     <b className="pr-[100px]">X: </b>
          //     {formData.plot.sizex} meter
          //   </p>
          //   <p className="pl-5">
          //     <b className="pr-[100px]">Y: </b>
          //     {formData.plot.sizey} meter
          //   </p>
          //   <p>
          //     <b className="pr-[95px]">Area: </b>
          //     {formData.plot.area} meter<sup>2</sup>
          //   </p>
          //   <p>
          //     <b className="pr-[42px]">Road Width: </b>
          //     {formData.plot.roadWidth} meter
          //   </p>
          // </div>
        )}
        
      </div> */}
    </div>
  );
}

export default Home;
