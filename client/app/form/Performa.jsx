"use client";

import { useState, useEffect } from "react";
import ProjectDetails from "@/components/details/performa/ProjectDetails";
import PlotDetails from "@/components/details/performa/PlotDetails";
import FSIDetails from "@/components/details/performa/FSIDetails";
import Sidebar from "@/components/details/Sidebar";
import Preview from "@/components/details/performa/Preview";
import Topbar from "@/components/details/performa/Topbar";
import api from "@/services/axios";
import { formDataSchema } from "@/services/formData";
import { useSession } from "next-auth/react";
import style from "../style.module.css";
import { useGetContext } from "@/services/formStateContext";
import Heading from "@/components/details/Heading";
import { toast } from "react-toastify";
import { useAuth } from "@/services/authContext";

export default function Performa({ setIssignedinWhenSubmit }) {
  const { isVerticalNavbarOpen, isSidebarOpen } = useGetContext();
  const { data: session } = useSession();
  const { isSignedIn } = useAuth();

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
  });

  const fetchData = async () => {
    if (isSignedIn) {
      const response = await api.post(
        "/user/forms",
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

  const resetNestedFields = (schema) => {
    const resetSchema = {};
    for (const key in schema) {
      if (typeof schema[key] === "object" && schema[key] !== null) {
        resetSchema[key] = resetNestedFields(schema[key]);
      } else {
        resetSchema[key] = schema[key] === undefined ? undefined : "";
      }
    }
    return resetSchema;
  };

  useEffect(() => {
    if (ind != undefined) {
      setFormData(forms[ind]);
      setFormId(forms[ind]._id);
    } else if (ind === undefined) {
      setFormData(resetNestedFields(formDataSchema));
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
            "/form",
            { formData, session },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          toast.success("Form submitted successfully");
        } else {
          response = await api.put(
            "/form",
            { formData, session, formId },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          toast.success("Form updated successfully");
        }

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
            "/form/delete",
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
            `   sm:pb-0 pb-20 pt-24 sm:pt-20
            `
          }
        >
          <Heading isVerticalNavbarOpen={isVerticalNavbarOpen} text={"Create Performa-1"} />

          <Sidebar
            isSignedIn={isSignedIn}
            forms={forms}
            handleDelete={handleDelete}
            setInd={setInd}
            ind={ind}
            setStep={setStep}
            loc={0}
          />

          <div
            className={` px-2 ${
              isVerticalNavbarOpen
                ? isSidebarOpen
                  ? "sm:pl-[463px] sm:w-[1403px] "
                  : "sm:pl-[265px] sm:w-[1140px] "
                : isSidebarOpen
                ? " sm:pl-[305px] sm:w-[1243px] "
                : "sm:pl-[105px] sm:w-[980px] "
            } mt-20 `}
          >
            {/* <div className=" -z-10"> */}
              
            {/* </div> */}

            <Topbar step={step} setStep={setStep} />

            <div className={` sm:h-[74vh] bg-white shadow-2xl rounded-b-3xl overflow-y-auto`}>
              {step === 1 && (
                <ProjectDetails
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
                  handleNestedChange={handleNestedChange}
                  handleNext={handleNext}
                  handlePrevious={handlePrevious}
                  setFormData={setFormData}
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
