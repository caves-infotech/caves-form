"use client";

import { useState, useEffect } from "react";
import LocationDetails from "../../../components/details/LocationDetails";
import PlotDetails from "../../../components/details/PlotDetails";
import FSIDetails from "../../../components/details/FSIDetails";
import Sidebar from "../../../components/Sidebar";
import Preview from "../../../components/Preview";
import Topbar from "../../../components/Topbar";
import api from "@/services/axios";
import { redirect } from "next/navigation";
import { formDataSchema } from "@/services/formData";
import { getToken } from "@/services/auth";
import { useSession } from "next-auth/react";
import style from "../../style.module.css";
import Header from "@/components/Header";

export default function Performa() {
  const [loading, setLoading] = useState(true);
  const token = getToken();
  const { data: session } = useSession();

  useEffect(() => {
    if (token || session) {
      setLoading(false);
    } else {
      redirect("/auth/signin");
    }
  }, []);

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
    console.log("forms: ", response);
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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Header isScrolled={isScrolled} />

      {!loading && (
        <div
          className={
            style.colorFour +
            `  p-8 flex flex-grow pt-20 ${
              step === 1 || step === 2 ? "h-screen" : ""
            }`
          }
        >

          <Sidebar forms={forms} setInd={setInd} setStep={setStep} />

          <div className=" mt-6">
          <Topbar step={step} setStep={setStep} />

            <div
              className={` bg-white rounded-2xl ${
                step === 1 ? "rounded-ss-none" : ""
              }`}
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
          {/* Form Container */}

          {isScrolled && (
            <button
              className={
                style.colorOne +
                " fixed text-2xl bottom-10 right-8 p-5 rounded-full"
              }
              onClick={scrollToTop}
            >
              ⇑
            </button>
          )}
        </div>
      )}
    </>
  );
}
