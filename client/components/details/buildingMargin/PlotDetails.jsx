import { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import api from "@/services/axios";

export default function Plodivetails({
  formData,
  handleChange,
  handleNestedChange,
  handleSubmit,
  handleMoreNestedChange,
  setFormData,
}) {
  const sectionRef = useRef(); // Reference to the section to convert to PDF

  const [isNonCongested, setIsNonCongested] = useState();
  const [roadOptions, sedivoadOptions] = useState(
    <option value="lessThan15">Roads of width less than 15.0 m.</option>
  );

  const handleRadioChange = (direction, value) => {
    setFormData((prevState) => ({
      ...prevState,
      roadDirection: {
        ...prevState.roadDirection,
        [direction]: {
          ...prevState.roadDirection[direction],
          radioInput: value,
        },
      },
    }));
  };

  if (formData.buildingType.input == "residential") {
    if (formData.areaType == "congested") {
      if (formData.plotArea > 1000 && formData.plotArea < 4000) {
        formData.roadDirection.right.margin = "1 m.";
        formData.roadDirection.left.margin = "1 m.";
        formData.roadDirection.back.margin = "1 m.";
      } else if (formData.plotArea < 1000) {
        formData.roadDirection.right.margin = "0 m.";
        formData.roadDirection.left.margin = "0 m.";
        formData.roadDirection.back.margin = "0 m.";
      }
      if (formData.buildingHeight > 15) {
        if (formData.buildingHeight < 24) {
          switch (formData.roadDirection.front.input) {
            case "lessThan4o5":
              formData.roadDirection.front.margin =
                "3.25 m. from the cendive of the sdiveet / lane";
              break;
            case "4o5toLessThan6":
              formData.roadDirection.front.margin = "NIL";
              break;
            case "6toLessThan12":
              formData.roadDirection.front.margin = "2 m.";
              break;
            case "12andAbove":
              formData.roadDirection.front.margin = "3 m.";
              break;
            default:
              break;
          }
        }
      } else {
        switch (formData.roadDirection.front.input) {
          case "lessThan4o5":
            formData.roadDirection.front.margin =
              "2.25 m. from the cendive of the sdiveet / lane";
            break;
          case "4o5toLessThan6":
            formData.roadDirection.front.margin = "NIL";
            break;
          case "6toLessThan12":
            formData.roadDirection.front.margin = "1 m.";
            break;
          case "12andAbove":
            formData.roadDirection.front.margin = "2 m.";
            break;
          default:
            break;
        }
      }
    } else if (formData.areaType == "non-congested") {
      switch (formData.roadDirection.front.input) {
        case "30above":
          if (formData.ulb == "muncipleCorp") {
            formData.roadDirection.front.margin = "6 m.";
          } else if (formData.ulb == "otherRp") {
            formData.roadDirection.front.margin = "4.5 m.";
          }
          break;
        case "regional":
          formData.roadDirection.front.margin =
            "4.5 m. or as specified by Highway rules whichever is more";
          break;
        case "18toBelow30":
          formData.roadDirection.front.margin = "4.5 m.";
          break;
        case "15toBelow18":
          formData.roadDirection.front.margin = "3 m.";
          break;
        case "lessThan15":
          formData.roadDirection.front.margin = "3 m.";
          break;
        case "rowHouse12andBelow":
          formData.roadDirection.front.margin = "2.25 m.";
          break;
        case "rowHousePublic":
          formData.roadDirection.front.margin =
            "0.9 m from pathway or 2.25 m. from road boundary";
          break;
        default:
          break;
      }
      switch (formData.roadDirection.right.input) {
        case "30above":
          formData.roadDirection.right.margin = "3 m.";

          break;
        case "regional":
          formData.roadDirection.right.margin = "3 m.";
          break;
        case "18toBelow30":
          formData.roadDirection.right.margin = "2 m.";
          break;
        case "15toBelow18":
          formData.roadDirection.right.margin = "1.5 m.";
          break;
        case "lessThan15":
          formData.roadDirection.right.margin = "1.5 m.";
          break;
        case "rowHouse12andBelow":
          formData.roadDirection.right.margin =
            "0 In case of corner plot, 1.50 or building line of adjoining road whichever is more";
          break;
        case "rowHousePublic":
          formData.roadDirection.right.margin =
            "0 In case of corner plot, 1.50 or building line of adjoining road whichever is more";
          break;
        default:
          break;
      }
      switch (formData.roadDirection.left.input) {
        case "30above":
          formData.roadDirection.left.margin = "3 m.";
          break;
        case "regional":
          formData.roadDirection.left.margin = "3 m.";
          break;
        case "18toBelow30":
          formData.roadDirection.left.margin = "2 m.";
          break;
        case "15toBelow18":
          formData.roadDirection.left.margin = "1.5 m.";
          break;
        case "lessThan15":
          formData.roadDirection.left.margin = "1.5 m.";
          break;
        case "rowHouse12andBelow":
          formData.roadDirection.left.margin =
            "0 In case of corner plot, 1.50 or building line of adjoining road whichever is more";
          break;
        case "rowHousePublic":
          formData.roadDirection.left.margin =
            "0 In case of corner plot, 1.50 or building line of adjoining road whichever is more";
          break;
        default:
          break;
      }
      switch (formData.roadDirection.back.input) {
        case "30above":
          formData.roadDirection.back.margin = "3 m.";
          break;
        case "regional":
          formData.roadDirection.back.margin = "3 m.";
          break;
        case "18toBelow30":
          formData.roadDirection.back.margin = "2 m.";
          break;
        case "15toBelow18":
          formData.roadDirection.back.margin = "1.5 m.";
          break;
        case "lessThan15":
          formData.roadDirection.back.margin = "1.5 m.";
          break;
        case "rowHouse12andBelow":
          formData.roadDirection.back.margin = "1.5 m.";
          break;
        case "rowHousePublic":
          formData.roadDirection.back.margin = "0.9 m.";
          break;
        default:
          break;
      }
    }
  } else if (formData.buildingType.input == "mix") {
    if (formData.areaType == "congested") {
      if (formData.plotArea > 1000 && formData.plotArea < 4000) {
        formData.roadDirection.right.margin = "1 m.";
        formData.roadDirection.left.margin = "1 m.";
        formData.roadDirection.back.margin = "1 m.";
      } else if (formData.plotArea < 1000) {
        formData.roadDirection.right.margin = "0 m.";
        formData.roadDirection.left.margin = "0 m.";
        formData.roadDirection.back.margin = "0 m.";
      }
      if (formData.buildingHeight > 15) {
        if (formData.buildingHeight < 24) {
          switch (formData.roadDirection.front.input) {
            case "lessThan4o5":
              formData.roadDirection.front.margin =
                "4.75 m. from the cendive of the sdiveet / lane";
              break;
            case "4o5toLessThan6":
              formData.roadDirection.front.margin = "2.5 m.";
              break;
            case "6toLessThan12":
              formData.roadDirection.front.margin = "3 m.";
              break;
            case "12andAbove":
              formData.roadDirection.front.margin = "3.5 m.";
              break;
            default:
              break;
          }
        }
      } else {
        switch (formData.roadDirection.front.input) {
          case "lessThan4o5":
            formData.roadDirection.front.margin =
              "3.75 m. from the cendive of the sdiveet / lane";
            break;
          case "4o5toLessThan6":
            formData.roadDirection.front.margin = "1.5 m.";
            break;
          case "6toLessThan12":
            formData.roadDirection.front.margin = "2 m.";
            break;
          case "12andAbove":
            formData.roadDirection.front.margin = "2.5 m.";
            break;
          default:
            break;
        }
      }
    } else if (formData.areaType == "non-congested") {
      switch (formData.roadDirection.front.input) {
        case "30above":
          if (formData.ulb == "muncipleCorp") {
            formData.roadDirection.front.margin = "6 m.";
          } else if (formData.ulb == "otherRp") {
            formData.roadDirection.front.margin = "4.5 m.";
          }
          break;
        case "regional":
          formData.roadDirection.front.margin =
            "4.5 m. or as specified by Highway rules whichever is more";
          break;
        case "18toBelow30":
          formData.roadDirection.front.margin = "4.5 m.";
          break;
        case "15toBelow18":
          formData.roadDirection.front.margin = "3 m.";
          break;
        case "lessThan15":
          formData.roadDirection.front.margin = "3 m.";
          break;
        case "rowHouse12andBelow":
          formData.roadDirection.front.margin = "2.25 m.";
          break;
        case "rowHousePublic":
          formData.roadDirection.front.margin =
            "0.9 m from pathway or 2.25 m. from road boundary";
          break;
        default:
          break;
      }
      switch (formData.roadDirection.right.input) {
        case "30above":
          formData.roadDirection.right.margin = "3 m.";

          break;
        case "regional":
          formData.roadDirection.right.margin = "3 m.";
          break;
        case "18toBelow30":
          formData.roadDirection.right.margin = "2 m.";
          break;
        case "15toBelow18":
          formData.roadDirection.right.margin = "1.5 m.";
          break;
        case "lessThan15":
          formData.roadDirection.right.margin = "1.5 m.";
          break;
        case "rowHouse12andBelow":
          formData.roadDirection.right.margin =
            "0 In case of corner plot, 1.50 or building line of adjoining road whichever is more";
          break;
        case "rowHousePublic":
          formData.roadDirection.right.margin =
            "0 In case of corner plot, 1.50 or building line of adjoining road whichever is more";
          break;
        default:
          break;
      }
      switch (formData.roadDirection.left.input) {
        case "30above":
          formData.roadDirection.left.margin = "3 m.";
          break;
        case "regional":
          formData.roadDirection.left.margin = "3 m.";
          break;
        case "18toBelow30":
          formData.roadDirection.left.margin = "2 m.";
          break;
        case "15toBelow18":
          formData.roadDirection.left.margin = "1.5 m.";
          break;
        case "lessThan15":
          formData.roadDirection.left.margin = "1.5 m.";
          break;
        case "rowHouse12andBelow":
          formData.roadDirection.left.margin =
            "0 In case of corner plot, 1.50 or building line of adjoining road whichever is more";
          break;
        case "rowHousePublic":
          formData.roadDirection.left.margin =
            "0 In case of corner plot, 1.50 or building line of adjoining road whichever is more";
          break;
        default:
          break;
      }
      switch (formData.roadDirection.back.input) {
        case "30above":
          formData.roadDirection.back.margin = "3 m.";
          break;
        case "regional":
          formData.roadDirection.back.margin = "3 m.";
          break;
        case "18toBelow30":
          formData.roadDirection.back.margin = "2 m.";
          break;
        case "15toBelow18":
          formData.roadDirection.back.margin = "1.5 m.";
          break;
        case "lessThan15":
          formData.roadDirection.back.margin = "1.5 m.";
          break;
        case "rowHouse12andBelow":
          formData.roadDirection.back.margin = "1.5 m.";
          break;
        case "rowHousePublic":
          formData.roadDirection.back.margin = "0.9 m.";
          break;
        default:
          break;
      }
    }
  } else if (formData.buildingType.input == "commercial") {
    if (formData.areaType == "congested") {
      if (formData.buildingHeight < 24) {
        formData.roadDirection.front.margin = "3 m.";
        formData.roadDirection.right.margin = "3 m.";
        formData.roadDirection.left.margin = "3 m.";
        formData.roadDirection.back.margin = "3 m.";
      }
    } else if (formData.areaType == "non-congested") {
      if (
        formData.buildingType.input == "commercial" &&
        ((formData.buildingType?.commercial?.input == "medical" &&
          formData.buildingType?.commercial?.subInput == "a") ||
          (formData.buildingType?.commercial?.input == "public" &&
            formData.buildingType?.commercial?.subInput == "a") ||
          (formData.buildingType?.commercial?.input == "mercantile" &&
            formData.buildingType?.commercial?.subInput == "b"))
      ) {
        switch (formData.roadDirection.front.input) {
          case "30above":
            if (formData.ulb == "muncipleCorp") {
              formData.roadDirection.front.margin = "6 m.";
            } else if (formData.ulb == "otherRp") {
              formData.roadDirection.front.margin = "4.5 m.";
            }
            break;
          case "regional":
            formData.roadDirection.front.margin =
              "4.5 m. or as specified by Highway rules whichever is more";
            break;
          case "18toBelow30":
            formData.roadDirection.front.margin = "4.5 m.";
            break;
          case "15toBelow18":
            formData.roadDirection.front.margin = "3 m.";
            break;
          case "lessThan15":
            formData.roadDirection.front.margin = "3 m.";
            break;
          default:
            break;
        }
        if (formData.roadDirection.right.input) {
          formData.roadDirection.right.margin = "3 m.";
        }
        if (formData.roadDirection.left.input) {
          formData.roadDirection.left.margin = "3 m.";
        }
        if (formData.roadDirection.back.input) {
          formData.roadDirection.back.margin = "3 m.";
        }
      } else if (
        formData.buildingType.input == "commercial" &&
        ((formData.buildingType?.commercial?.input == "educational" &&
          (formData.buildingType?.commercial?.subInput == "a" ||
            formData.buildingType?.commercial?.subInput == "b")) ||
          (formData.buildingType?.commercial?.input == "mercantile" &&
            formData.buildingType?.commercial?.subInput == "c"))
      ) {
        switch (formData.roadDirection.front.input) {
          case "30above":
            if (formData.ulb == "muncipleCorp") {
              formData.roadDirection.front.margin = "6 m.";
            } else if (formData.ulb == "otherRp") {
              formData.roadDirection.front.margin = "4.5 m.";
            }
            break;
          case "regional":
            formData.roadDirection.front.margin =
              "4.5 m. or as specified by Highway rules whichever is more";
            break;
          case "18toBelow30":
            formData.roadDirection.front.margin = "4.5 m.";
            break;
          case "15toBelow18":
            formData.roadDirection.front.margin = "3 m.";
            break;
          case "lessThan15":
            formData.roadDirection.front.margin = "3 m.";
            break;
          default:
            break;
        }
        switch (formData.roadDirection.right.input) {
          case "30above":
            formData.roadDirection.right.margin = "3 m.";

            break;
          case "regional":
            formData.roadDirection.right.margin = "3 m.";
            break;
          case "18toBelow30":
            formData.roadDirection.right.margin = "2 m.";
            break;
          case "15toBelow18":
            formData.roadDirection.right.margin = "1.5 m.";
            break;
          case "lessThan15":
            formData.roadDirection.right.margin = "1.5 m.";
            break;
          default:
            break;
        }
        switch (formData.roadDirection.left.input) {
          case "30above":
            formData.roadDirection.left.margin = "3 m.";
            break;
          case "regional":
            formData.roadDirection.left.margin = "3 m.";
            break;
          case "18toBelow30":
            formData.roadDirection.left.margin = "2 m.";
            break;
          case "15toBelow18":
            formData.roadDirection.left.margin = "1.5 m.";
            break;
          case "lessThan15":
            formData.roadDirection.left.margin = "1.5 m.";
            break;
          default:
            break;
        }
        switch (formData.roadDirection.back.input) {
          case "30above":
            formData.roadDirection.back.margin = "3 m.";
            break;
          case "regional":
            formData.roadDirection.back.margin = "3 m.";
            break;
          case "18toBelow30":
            formData.roadDirection.back.margin = "2 m.";
            break;
          case "15toBelow18":
            formData.roadDirection.back.margin = "1.5 m.";
            break;
          case "lessThan15":
            formData.roadDirection.back.margin = "1.5 m.";
            break;
          default:
            break;
        }
      }
      {
        if (
          (formData.buildingType?.commercial?.input == "medical" &&
            formData.buildingType?.commercial?.subInput == "b") ||
          (formData.buildingType?.commercial?.input == "educational" &&
            formData.buildingType?.commercial?.subInput == "c") ||
          (formData.buildingType?.commercial?.input == "public" &&
            formData.buildingType?.commercial?.subInput == "b") ||
          (formData.buildingType?.commercial?.input == "mangalKaryalay" &&
            formData.buildingType?.commercial?.subInput == "b") ||
          (formData.buildingType?.commercial?.input == "mercantile" &&
            formData.buildingType?.commercial?.subInput == "a") ||
          formData.buildingType?.commercial?.input == "stadium"
        ) {
          formData.roadDirection.front.margin = "6 m.";
          formData.roadDirection.right.margin = "6 m.";
          formData.roadDirection.left.margin = "6 m.";
          formData.roadDirection.back.margin = "6 m.";
        }

        if (
          formData.buildingType?.commercial?.input == "educational" &&
          formData.buildingType?.commercial?.subInput == "b"
        ) {
          formData.roadDirection.front.margin = "3 m.";
          formData.roadDirection.right.margin = "3 m.";
          formData.roadDirection.left.margin = "3 m.";
          formData.roadDirection.back.margin = "3 m.";
        }

        if (formData.buildingType?.commercial?.input == "cinema") {
          formData.roadDirection.front.margin = "12 m.";
          formData.roadDirection.right.margin = "6 m.";
          formData.roadDirection.left.margin = "6 m.";
          formData.roadDirection.back.margin = "6 m.";
        }

        if (
          formData.buildingType?.commercial?.input == "mangalKaryalay" &&
          formData.buildingType?.commercial?.subInput == "a"
        ) {
          formData.roadDirection.front.margin = "3 m.";
          formData.roadDirection.right.margin = "3 m.";
          formData.roadDirection.left.margin = "3 m.";
          formData.roadDirection.back.margin = "3 m.";
        }

        if (formData.buildingType?.commercial?.input == "fuel") {
          formData.roadDirection.front.margin = "4.5 m.";
          formData.roadDirection.right.margin = "4.5 m.";
          formData.roadDirection.left.margin = "4.5 m.";
          formData.roadDirection.back.margin = "4.5 m.";
        }
      }
    }
  }

  useEffect(() => {
    if (
      (formData.buildingType.input == "commercial" &&
        ((formData.buildingType?.commercial?.input == "medical" &&
          formData.buildingType?.commercial?.subInput == "a") ||
          (formData.buildingType?.commercial?.input == "educational" &&
            (formData.buildingType?.commercial?.subInput == "a" ||
              formData.buildingType?.commercial?.subInput == "b")) ||
          (formData.buildingType?.commercial?.input == "public" &&
            formData.buildingType?.commercial?.subInput == "a") ||
          (formData.buildingType?.commercial?.input == "mercantile" &&
            (formData.buildingType?.commercial?.subInput == "b" ||
              formData.buildingType?.commercial?.subInput == "c")))) ||
      parseFloat(formData.plotArea) > 4000 ||
      (formData.buildingType.input == "commercial" &&
        parseFloat(formData.buildingHeight) > 24) ||
      (formData.buildingType.input !== "commercial" &&
        parseFloat(formData.buildingHeight) >= 24)
    ) {
      formData.areaType = "non-congested";
      setIsNonCongested(true);
      // console.log("non-congested inside commercial");

      if (
        formData.buildingType?.commercial?.input == "medical" &&
        formData.buildingType?.commercial?.subInput == "a"
      ) {
        if (formData.ulb == "muncipleCorp") {
          sedivoadOptions(
            <option value="lessThan15">
              Roads of width 9.0 m. and above but below 15.0 m.
            </option>
          );
        } else if (formData.ulb == "otherRp") {
          sedivoadOptions(
            <option value="lessThan15">
              Roads of width 7.5 m. and above but below 15.0 m.
            </option>
          );
        }
      }

      if (formData.buildingType?.commercial?.input == "educational") {
        if (formData.buildingType?.commercial?.subInput == "a") {
          sedivoadOptions(
            <option value="lessThan15">Roads of width less than 15.0 m.</option>
          );
        } else if (formData.buildingType?.commercial?.subInput == "b") {
          sedivoadOptions(
            <option value="lessThan15">
              Roads of width 6.0 m. and above but below 15.0 m.
            </option>
          );
        }
      }

      if (
        formData.buildingType?.commercial?.input == "public" &&
        formData.buildingType?.commercial?.subInput == "a"
      ) {
        sedivoadOptions(
          <option value="lessThan15">
            Roads of width 9.0 m. and above but below 15.0 m.
          </option>
        );
      }

      if (formData.buildingType?.commercial?.input == "mercantile") {
        if (formData.buildingType?.commercial?.subInput == "b") {
          sedivoadOptions(
            <option value="lessThan15">
              Roads of width 9.0 m. and above but below 12.0 m.
            </option>
          );
        }
      }
    } else {
      // formData.areaType = "congested";
      // setIsNonCongested(false);
    }
    return () => {
      formData.areaType = "";
      setIsNonCongested();
    };
  }, [
    isNonCongested,
    formData.areaType,
    formData.buildingType.input,
    formData.buildingType.commercial.subInput,
    formData.buildingType.commercial.input,
    formData.ulb,
    formData.plotArea,
    formData.buildingHeight,
  ]);

  const uploadToCloudinary = async (imageBlob) => {
    const formData = new FormData();
    formData.append("file", imageBlob);
    // formData.append("upload_preset", "your_upload_preset");

    try {
      const response = await api.post("/form/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        console.log("Cloudinary Response: ", response.data);
        return response.data.file._id; // Return the file ID for later use
      }
    } catch (error) {
      console.error("Error uploading the file:", error);
    }
  };

  const generateAndUploadImage = async () => {
    // const imageElement = sectionRef.current.querySelector("div");
    // const { width, height } = imageElement.getBoundingClientRect(); // Get image dimensions

    const canvas = await html2canvas(sectionRef.current, {
      width: 300,
      height: 500,
      useCORS: true, // Enable CORS for external images if necessary
      scale: 1, // Ensure no extra scaling
    });

    canvas.toBlob(async (blob) => {
      if (blob) {
        const id = await uploadToCloudinary(blob); // Upload the Blob to Cloudinary and get the ID
        if (id) {
          shareWhatsApp(id); // Share on WhatsApp with the received file ID
        }
      }
    }, "image/png");
  };

  const shareWhatsApp = (id) => {
    const message = encodeURIComponent(`
      Click below link to view result:

      http://localhost:3000/form/${id}

      https://udcprs.com/form/${id}

      Do visit to get more information about us
      https://udcprs.com
      `);
    // const url = encodeURIComponent(window.location.href);
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  return (
    <>
      <div className="p-2">
        <div className=" lg:flex gap-x-5 p-2">
          <div className="w-full flex flex-col mb-2 gap-y-2">
            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">
                1. Proposed Project Name:
              </div>

              <div className="px-4 py-2 sm:w-1/2">
                {" "}
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  className="w-full p-2 border-2 rounded-lg border-slate-400 "
                  placeholder="Enter your project name"
                />
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">4. ULB:</div>
              <div className="flex px-4 py-3 flex-col ">
                <label className="flex-1">
                  <input
                    type="radio"
                    name="ulb"
                    value="muncipleCorp"
                    checked={formData.ulb == "muncipleCorp"}
                    className="w-4 h-4 text-blue-600 form-radio"
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-gray-700">
                    Municipal Corporation (A, B, C)
                  </span>
                </label>
                <label className="flex-1">
                  <input
                    type="radio"
                    name="ulb"
                    value="otherRp"
                    checked={formData.ulb == "otherRp"}
                    className="w-4 h-4 text-blue-600 form-radio"
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-gray-700">Other / Rp</span>
                </label>
              </div>
            </div>

            <div className=" even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="sm:flex">
                <div className="px-4 py-2 sm:w-1/2">3. Building Type:</div>
                <div className="px-4 py-2 sm:w-1/2">
                  <select
                    name="buildingType.input"
                    value={formData.buildingType.input}
                    onChange={handleNestedChange}
                    className="w-full p-2 border-2 border-slate-400 rounded-lg bg--bg-[#dededeac]"
                  >
                    <option value="">--Select Building Type--</option>
                    <option value="residential">Residential</option>
                    <option value="mix">Residential with Mixed Use</option>
                    <option value="commercial">
                      Commercial / Public / Semi-Public
                    </option>
                  </select>
                </div>
              </div>

              {formData.buildingType.input == "commercial" && (
                <>
                  <div className="sm:flex  rounded-xl border border-slate-200">
                    <div className="px-4 py-2 sm:w-1/2">
                      Categories of Commercial Buildings:
                    </div>
                    <div className="px-4 py-2 sm:w-1/2">
                      <select
                        name="buildingType.commercial.input"
                        value={formData.buildingType.commercial.input}
                        onChange={handleMoreNestedChange}
                        className="w-full p-2 border-2 border-slate-400 rounded-lg bg--bg-[#dededeac]"
                      >
                        <option value="">--Select Other Building Type--</option>
                        <option value="medical">Medical</option>
                        <option value="educational">Education</option>
                        <option value="public">
                          Public-Semi Public Building
                        </option>
                        <option value="cinema">Cenema Theadive</option>
                        <option value="mangalKaryalay">Mangal Karyalay</option>
                        <option value="fuel"> Fuel Stations</option>
                        <option value="mercantile">Mercantile Buildings</option>
                        <option value="stadium">Stadium</option>
                      </select>
                    </div>
                  </div>

                  {formData.buildingType?.commercial?.input == "medical" && (
                    <>
                      <div className="sm:flex  rounded-xl border border-slate-200">
                        <div className="px-4 py-2 sm:w-1/2">
                          Categories of Medical Buildings:
                        </div>
                        <div className="px-4 py-2 sm:w-1/2">
                          <select
                            name="buildingType.commercial.subInput"
                            value={formData.buildingType.commercial.subInput}
                            onChange={handleMoreNestedChange}
                            className="w-full p-2 border-2 border-slate-400 rounded-lg bg--bg-[#dededeac]"
                          >
                            <option value="">
                              --Select Other Building Type--
                            </option>
                            <option value="a">
                              Hospital, Maternity Homes, Health Club, Clinics
                              etc. buildings not being special buildings
                            </option>
                            <option value="b">
                              Hospital, Maternity Homes, Health Club etc.
                              buildings under category of special building.
                            </option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {formData.buildingType?.commercial?.input ==
                    "educational" && (
                    <>
                      <div className="sm:flex  rounded-xl border border-slate-200">
                        <div className="px-4 py-2 sm:w-1/2">
                          Categories of Educational Buildings:
                        </div>
                        <div className="px-4 py-2 sm:w-1/2">
                          <select
                            name="buildingType.commercial.subInput"
                            value={formData.buildingType.commercial.subInput}
                            onChange={handleMoreNestedChange}
                            className="w-full p-2 border-2 border-slate-400 rounded-lg bg--bg-[#dededeac]"
                          >
                            <option value="">
                              --Select Other Building Type--
                            </option>
                            <option value="a">Pre-primary School</option>
                            <option value="b">
                              Primary School not being special building.
                            </option>
                            <option value="c">
                              Other Educational Buildings not being special
                              building
                            </option>
                            <option value="d">
                              Any building of category a, b, c above being
                              special building
                            </option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {formData.buildingType?.commercial?.input == "public" && (
                    <>
                      <div className="sm:flex  rounded-xl border border-slate-200">
                        <div className="px-4 py-2 sm:w-1/2">
                          Categories of Educational Buildings:
                        </div>
                        <div className="px-4 py-2 sm:w-1/2">
                          <select
                            name="buildingType.commercial.subInput"
                            value={formData.buildingType.commercial.subInput}
                            onChange={handleMoreNestedChange}
                            className="w-full p-2 border-2 border-slate-400 rounded-lg bg--bg-[#dededeac]"
                          >
                            <option value="">
                              --Select Other Building Type--
                            </option>
                            <option value="a">
                              Public-Semi Public Building not being special
                              building.
                            </option>
                            <option value="b">
                              Public-Semi Public Building being special
                              building.
                            </option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {formData.buildingType?.commercial?.input ==
                    "mangalKaryalay" && (
                    <>
                      <div className="sm:flex  rounded-xl border border-slate-200">
                        <div className="px-4 py-2 sm:w-1/2">
                          Categories of Educational Buildings:
                        </div>
                        <div className="px-4 py-2 sm:w-1/2">
                          <select
                            name="buildingType.commercial.subInput"
                            value={formData.buildingType.commercial.subInput}
                            onChange={handleMoreNestedChange}
                            className="w-full p-2 border-2 border-slate-400 rounded-lg bg--bg-[#dededeac]"
                          >
                            <option value="">
                              --Select Other Building Type--
                            </option>
                            <option value="a">
                              Mangal karyalaya and like buildings not under the
                              category of special building.
                            </option>
                            <option value="b">
                              Mangal karyalaya and like buildings under the
                              category of special building
                            </option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {formData.buildingType?.commercial?.input == "mercantile" && (
                    <>
                      <div className="sm:flex  rounded-xl border border-slate-200">
                        <div className="px-4 py-2 sm:w-1/2">
                          Categories of Educational Buildings:
                        </div>
                        <div className="px-4 py-2 sm:w-1/2">
                          <select
                            name="buildingType.commercial.subInput"
                            value={formData.buildingType.commercial.subInput}
                            onChange={handleMoreNestedChange}
                            className="w-full p-2 border-2 border-slate-400 rounded-lg bg--bg-[#dededeac]"
                          >
                            <option value="">
                              --Select Other Building Type--
                            </option>
                            <option value="a">
                              Mercantile / Business / Hotel / Commercial
                              building under the category of special buildings.
                            </option>
                            <option value="b">
                              Mercantile / Business / Hotel / Commercial
                              building not under category of special buildings
                            </option>
                            <option value="c">
                              Convenience shopping in R-1 zone
                            </option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-3 sm:w-1/2">5. Area Type:</div>
              <div className="flex px-4 py-3 lg:flex-col sm:w-1/2">
                <label className="flex-1">
                  <input
                    type="radio"
                    name="areaType"
                    value="congested"
                    className="w-4 h-4 text-blue-600 form-radio"
                    onChange={handleChange}
                    disabled={isNonCongested}
                    checked={formData.areaType == "congested"}
                    // disabled={isNonCongested}
                    // checked={!isNonCongested || formData.areaType == "congested"}
                  />
                  <span className="ml-2 text-gray-700">Congested</span>
                </label>
                <label className="flex-1">
                  <input
                    type="radio"
                    name="areaType"
                    value="non-congested"
                    className="w-4 h-4 text-blue-600 form-radio"
                    onChange={handleChange}
                    checked={
                      isNonCongested || formData.areaType == "non-congested"
                    }
                    // checked={isNonCongested || formData.areaType == "non-congested"}
                  />
                  <span className="ml-2 text-gray-700">Non-congested</span>
                </label>
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-3 sm:w-1/2">8. Building Height:</div>
              <div className="px-4 py-3 sm:w-1/2">
                {" "}
                <input
                  type="number"
                  name="buildingHeight"
                  value={formData.buildingHeight}
                  onChange={handleChange}
                  className="w-full p-2 border-2 rounded-lg border-slate-400"
                  placeholder="Enter Building Height"
                />
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-3 sm:w-1/2">8. Plot width:</div>
              <div className="px-4 py-3 sm:w-1/2">
                {" "}
                <input
                  type="number"
                  name="plotWidth"
                  value={formData.plotWidth}
                  onChange={handleChange}
                  className="w-full p-2 border-2 rounded-lg border-slate-400"
                  placeholder="Enter Plot width"
                />
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-3 sm:w-1/2">8. Plot Area:</div>
              <div className="px-4 py-3 sm:w-1/2">
                {" "}
                <input
                  type="number"
                  name="plotArea"
                  value={formData.plotArea}
                  onChange={handleChange}
                  className="w-full p-2 border-2 rounded-lg border-slate-400"
                  placeholder="Enter Plot Area"
                />
              </div>
            </div>

            {!(formData.buildingType.input == "commercial") && (
              <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-3 sm:w-1/2">2. Plot Type:</div>
                <div className="px-4 py-3 sm:w-1/2">
                  {" "}
                  <select
                    name="plotType"
                    value={formData.plotType}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                  >
                    <option value="">--Select Plot Type--</option>
                    <option value="rowHouse">Row House (Attached)</option>
                    <option value="teinHouse">
                      Twin Row House (Semi detached)
                    </option>
                    <option value="individualPlot">Individual Plot</option>
                  </select>
                </div>
              </div>
            )}

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-3 sm:w-1/2">
                7. Single floor plate B/Up area:
              </div>
              <div className="px-4 py-3 sm:w-1/2">
                {" "}
                <input
                  type="number"
                  name="moreThan500"
                  value={formData.moreThan500}
                  onChange={handleChange}
                  className="w-full p-2 border-2 rounded-lg border-slate-400"
                  placeholder="Enter B/Up area"
                />
              </div>
            </div>
            {!(
              formData.buildingType.input == "commercial" &&
              formData.areaType == "congested"
            ) && (
              <>
                <div className=" even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                  <div className="px-4 py-3 sm:w-1/2">9. Road Width:</div>

                  <div className="sm:flex ">
                    <div className="px-4 py-3 sm:w-1/2">
                      a. Front (Road / Entry side):
                    </div>
                    <div className="px-4 py-3 sm:w-1/2">
                      <select
                        name="roadDirection.front.input"
                        value={formData.roadDirection.front.input}
                        onChange={handleMoreNestedChange}
                        className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                      >
                        <option value="">--Select Road Status--</option>
                        {formData.buildingType.input == "residential" ||
                        formData.buildingType.input == "mix" ? (
                          <>
                            {formData.areaType == "congested" ? (
                              <>
                                <option value="lessThan4o5">
                                  For sdiveets / lane less than 4.5 m. width
                                </option>
                                <option value="4o5toLessThan6">
                                  For sdiveets 4.5 m. to less than 6.0 m. in
                                  width
                                </option>
                                <option value="6toLessThan12">
                                  For sdiveets 6.0 m. to less than 12.0 m. in
                                  width
                                </option>
                                <option value="12andAbove">
                                  For sdiveets 12.0 m. in width and above
                                </option>
                              </>
                            ) : (
                              <>
                                <option value="30above">
                                  Roads of width 30.0 m. and above in local
                                  authority area.
                                </option>
                                <option value="regional">
                                  In case of Regional Plan area. NH / SH 2
                                </option>
                                <option value="18toBelow30">
                                  Roads of width 18.0 m. and above but below
                                  30.0 m.
                                </option>
                                <option value="15toBelow18">
                                  Roads of width 15.0 m. and above but below
                                  18.0 m.
                                </option>
                                <option value="lessThan15">
                                  Roads of width less than 15.0 m.
                                </option>
                                {formData.plotType !== "individualPlot" && (
                                  <>
                                    <option value="rowHouse12andBelow">
                                      Row Housing on roads of 12.0 m. and below
                                    </option>
                                    <option value="rowHousePublic">
                                      Row Housing for EWS / LIG / by public
                                      authority / private individual / Slum
                                      Upgradation etc. by public authority
                                    </option>
                                  </>
                                )}
                              </>
                            )}
                          </>
                        ) : (
                          <>
                            {formData.areaType == "congested" ? (
                              <>
                                <option value="below9">
                                  For sdiveets / lane less than 4.5 m. width
                                </option>
                                <option value="9toBelow12">
                                  For sdiveets 4.5 m. to less than 6.0 m. in
                                  width
                                </option>

                                <option value="12toBelow15">
                                  For sdiveets 6.0 m. to less than 12.0 m. in
                                  width
                                </option>
                                <option value="15toBelow24">
                                  For sdiveets 12.0 m. in width and above
                                </option>
                              </>
                            ) : (
                              <>
                                <option value="30above">
                                  Roads of width 30.0 m. and above in local
                                  authority area.
                                </option>
                                <option value="regional">
                                  In case of Regional Plan area. NH / SH 2
                                </option>
                                <option value="18toBelow30">
                                  Roads of width 18.0 m. and above but below
                                  30.0 m.
                                </option>
                                <option value="15toBelow18">
                                  Roads of width 15.0 m. and above but below
                                  18.0 m.
                                </option>

                                {roadOptions}

                                {formData.buildingType.input !=
                                  "commercial" && (
                                  <>
                                    <option value="rowHouse12andBelow">
                                      Row Housing on roads of 12.0 m. and below
                                    </option>
                                    <option value="rowHousePublic">
                                      Row Housing for EWS / LIG / by public
                                      authority / private individual / Slum
                                      Upgradation etc. by public authority
                                    </option>
                                  </>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </select>
                    </div>
                  </div>

                  {/* {(formData.buildingHeight <= 15 && formData.areaType == "congested") && ( */}
                  {(((formData.buildingType.input == "residential" ||
                    formData.buildingType.input == "mix") &&
                    formData.areaType == "non-congested") ||
                    formData.buildingType.input == "commercial") && (
                    <>
                      <div className="sm:flex">
                        <div className="px-4 py-3 sm:w-1/2">
                          b. Right (Side):
                        </div>
                        <div className="px-4 py-3 sm:w-1/2">
                          <div className="flex lg:flex-col ">
                            <label className="flex-1">
                              <input
                                type="radio"
                                name="right"
                                value="other"
                                className="w-4 h-4 text-blue-600 form-radio"
                                onChange={(e) =>
                                  handleRadioChange("right", e.target.value)
                                }
                              />
                              <span className="ml-2 text-gray-700">
                                Other property
                              </span>
                            </label>
                            <label className="flex-1">
                              <input
                                type="radio"
                                name="right"
                                value="road"
                                className="w-4 h-4 text-blue-600 form-radio"
                                onChange={(e) =>
                                  handleRadioChange("right", e.target.value)
                                }
                              />
                              <span className="ml-2 text-gray-700">Road</span>
                            </label>
                          </div>
                          {formData.roadDirection.right.radioInput ==
                            "road" && (
                            <select
                              name="roadDirection.right.input"
                              value={formData.roadDirection.right.input}
                              onChange={handleMoreNestedChange}
                              className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                            >
                              <option value="">--Select Road Status--</option>
                              {formData.buildingType.input == "residential" ||
                              formData.buildingType.input == "mix" ? (
                                <>
                                  {formData.areaType == "congested" ? (
                                    <>
                                      <option value="lessThan4o5">
                                        For sdiveets / lane less than 4.5 m.
                                        width
                                      </option>
                                      <option value="4o5toLessThan6">
                                        For sdiveets 4.5 m. to less than 6.0 m.
                                        in width
                                      </option>
                                      <option value="6toLessThan12">
                                        For sdiveets 6.0 m. to less than 12.0 m.
                                        in width
                                      </option>
                                      <option value="12andAbove">
                                        For sdiveets 12.0 m. in width and above
                                      </option>
                                    </>
                                  ) : (
                                    <>
                                      <option value="30above">
                                        Roads of width 30.0 m. and above in
                                        local authority area.
                                      </option>
                                      <option value="regional">
                                        In case of Regional Plan area. NH / SH 2
                                      </option>
                                      <option value="18toBelow30">
                                        Roads of width 18.0 m. and above but
                                        below 30.0 m.
                                      </option>
                                      <option value="15toBelow18">
                                        Roads of width 15.0 m. and above but
                                        below 18.0 m.
                                      </option>
                                      <option value="lessThan15">
                                        Roads of width less than 15.0 m.
                                      </option>
                                      {formData.plotType !==
                                        "individualPlot" && (
                                        <>
                                          <option value="rowHouse12andBelow">
                                            Row Housing on roads of 12.0 m. and
                                            below
                                          </option>
                                          <option value="rowHousePublic">
                                            Row Housing for EWS / LIG / by
                                            public authority / private
                                            individual / Slum Upgradation etc.
                                            by public authority
                                          </option>
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              ) : (
                                <>
                                  {formData.areaType == "congested" ? (
                                    <>
                                      <option value="below9">
                                        For sdiveets / lane less than 4.5 m.
                                        width
                                      </option>
                                      <option value="9toBelow12">
                                        For sdiveets 4.5 m. to less than 6.0 m.
                                        in width
                                      </option>

                                      <option value="12toBelow15">
                                        For sdiveets 6.0 m. to less than 12.0 m.
                                        in width
                                      </option>
                                      <option value="15toBelow24">
                                        For sdiveets 12.0 m. in width and above
                                      </option>
                                    </>
                                  ) : (
                                    <>
                                      <option value="30above">
                                        Roads of width 30.0 m. and above in
                                        local authority area.
                                      </option>
                                      <option value="regional">
                                        In case of Regional Plan area. NH / SH 2
                                      </option>
                                      <option value="18toBelow30">
                                        Roads of width 18.0 m. and above but
                                        below 30.0 m.
                                      </option>
                                      <option value="15toBelow18">
                                        Roads of width 15.0 m. and above but
                                        below 18.0 m.
                                      </option>

                                      {roadOptions}

                                      {formData.buildingType.input !=
                                        "commercial" && (
                                        <>
                                          <option value="rowHouse12andBelow">
                                            Row Housing on roads of 12.0 m. and
                                            below
                                          </option>
                                          <option value="rowHousePublic">
                                            Row Housing for EWS / LIG / by
                                            public authority / private
                                            individual / Slum Upgradation etc.
                                            by public authority
                                          </option>
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </select>
                          )}
                        </div>
                      </div>

                      <div className="sm:flex">
                        <div className="px-4 py-3 sm:w-1/2">
                          c. Left (Side):
                        </div>
                        <div className="px-4 py-3 sm:w-1/2">
                          <div className="flex lg:flex-col ">
                            <label className="flex-1">
                              <input
                                type="radio"
                                name="left"
                                value="other"
                                className="w-4 h-4 text-blue-600 form-radio"
                                onChange={(e) =>
                                  handleRadioChange("left", e.target.value)
                                }
                              />
                              <span className="ml-2 text-gray-700">
                                Other property
                              </span>
                            </label>
                            <label className="flex-1">
                              <input
                                type="radio"
                                name="left"
                                value="road"
                                className="w-4 h-4 text-blue-600 form-radio"
                                onChange={(e) =>
                                  handleRadioChange("left", e.target.value)
                                }
                              />
                              <span className="ml-2 text-gray-700">Road</span>
                            </label>
                          </div>
                          {formData.roadDirection.left.radioInput == "road" && (
                            <select
                              name="roadDirection.left.input"
                              value={formData.roadDirection.left.input}
                              onChange={handleMoreNestedChange}
                              className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                            >
                              <option value="">--Select Road Status--</option>
                              {formData.buildingType.input == "residential" ||
                              formData.buildingType.input == "mix" ? (
                                <>
                                  {formData.areaType == "congested" ? (
                                    <>
                                      <option value="lessThan4o5">
                                        For sdiveets / lane less than 4.5 m.
                                        width
                                      </option>
                                      <option value="4o5toLessThan6">
                                        For sdiveets 4.5 m. to less than 6.0 m.
                                        in width
                                      </option>
                                      <option value="6toLessThan12">
                                        For sdiveets 6.0 m. to less than 12.0 m.
                                        in width
                                      </option>
                                      <option value="12andAbove">
                                        For sdiveets 12.0 m. in width and above
                                      </option>
                                    </>
                                  ) : (
                                    <>
                                      <option value="30above">
                                        Roads of width 30.0 m. and above in
                                        local authority area.
                                      </option>
                                      <option value="regional">
                                        In case of Regional Plan area. NH / SH 2
                                      </option>
                                      <option value="18toBelow30">
                                        Roads of width 18.0 m. and above but
                                        below 30.0 m.
                                      </option>
                                      <option value="15toBelow18">
                                        Roads of width 15.0 m. and above but
                                        below 18.0 m.
                                      </option>
                                      <option value="lessThan15">
                                        Roads of width less than 15.0 m.
                                      </option>
                                      {formData.plotType !==
                                        "individualPlot" && (
                                        <>
                                          <option value="rowHouse12andBelow">
                                            Row Housing on roads of 12.0 m. and
                                            below
                                          </option>
                                          <option value="rowHousePublic">
                                            Row Housing for EWS / LIG / by
                                            public authority / private
                                            individual / Slum Upgradation etc.
                                            by public authority
                                          </option>
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              ) : (
                                <>
                                  {formData.areaType == "congested" ? (
                                    <>
                                      <option value="below9">
                                        For sdiveets / lane less than 4.5 m.
                                        width
                                      </option>
                                      <option value="9toBelow12">
                                        For sdiveets 4.5 m. to less than 6.0 m.
                                        in width
                                      </option>

                                      <option value="12toBelow15">
                                        For sdiveets 6.0 m. to less than 12.0 m.
                                        in width
                                      </option>
                                      <option value="15toBelow24">
                                        For sdiveets 12.0 m. in width and above
                                      </option>
                                    </>
                                  ) : (
                                    <>
                                      <option value="30above">
                                        Roads of width 30.0 m. and above in
                                        local authority area.
                                      </option>
                                      <option value="regional">
                                        In case of Regional Plan area. NH / SH 2
                                      </option>
                                      <option value="18toBelow30">
                                        Roads of width 18.0 m. and above but
                                        below 30.0 m.
                                      </option>
                                      <option value="15toBelow18">
                                        Roads of width 15.0 m. and above but
                                        below 18.0 m.
                                      </option>

                                      {roadOptions}

                                      {formData.buildingType.input !=
                                        "commercial" && (
                                        <>
                                          <option value="rowHouse12andBelow">
                                            Row Housing on roads of 12.0 m. and
                                            below
                                          </option>
                                          <option value="rowHousePublic">
                                            Row Housing for EWS / LIG / by
                                            public authority / private
                                            individual / Slum Upgradation etc.
                                            by public authority
                                          </option>
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </select>
                          )}
                        </div>
                      </div>

                      <div className="sm:flex">
                        <div className="px-4 py-3 sm:w-1/2">
                          d. Back (Rare):
                        </div>
                        <div className="px-4 py-3 sm:w-1/2">
                          <div className="flex lg:flex-col ">
                            <label className="flex-1">
                              <input
                                type="radio"
                                name="back"
                                value="other"
                                className="w-4 h-4 text-blue-600 form-radio"
                                onChange={(e) =>
                                  handleRadioChange("back", e.target.value)
                                }
                              />
                              <span className="ml-2 text-gray-700">
                                Other property
                              </span>
                            </label>
                            <label className="flex-1">
                              <input
                                type="radio"
                                name="back"
                                value="road"
                                className="w-4 h-4 text-blue-600 form-radio"
                                onChange={(e) =>
                                  handleRadioChange("back", e.target.value)
                                }
                              />
                              <span className="ml-2 text-gray-700">Road</span>
                            </label>
                          </div>
                          {formData.roadDirection.back.radioInput == "road" && (
                            <select
                              name="roadDirection.back.input"
                              value={formData.roadDirection.back.input}
                              onChange={handleMoreNestedChange}
                              className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                            >
                              <option value="">--Select Road Status--</option>
                              {formData.buildingType.input == "residential" ||
                              formData.buildingType.input == "mix" ? (
                                <>
                                  {formData.areaType == "congested" ? (
                                    <>
                                      <option value="lessThan4o5">
                                        For sdiveets / lane less than 4.5 m.
                                        width
                                      </option>
                                      <option value="4o5toLessThan6">
                                        For sdiveets 4.5 m. to less than 6.0 m.
                                        in width
                                      </option>
                                      <option value="6toLessThan12">
                                        For sdiveets 6.0 m. to less than 12.0 m.
                                        in width
                                      </option>
                                      <option value="12andAbove">
                                        For sdiveets 12.0 m. in width and above
                                      </option>
                                    </>
                                  ) : (
                                    <>
                                      <option value="30above">
                                        Roads of width 30.0 m. and above in
                                        local authority area.
                                      </option>
                                      <option value="regional">
                                        In case of Regional Plan area. NH / SH 2
                                      </option>
                                      <option value="18toBelow30">
                                        Roads of width 18.0 m. and above but
                                        below 30.0 m.
                                      </option>
                                      <option value="15toBelow18">
                                        Roads of width 15.0 m. and above but
                                        below 18.0 m.
                                      </option>
                                      <option value="lessThan15">
                                        Roads of width less than 15.0 m.
                                      </option>
                                      {formData.plotType !==
                                        "individualPlot" && (
                                        <>
                                          <option value="rowHouse12andBelow">
                                            Row Housing on roads of 12.0 m. and
                                            below
                                          </option>
                                          <option value="rowHousePublic">
                                            Row Housing for EWS / LIG / by
                                            public authority / private
                                            individual / Slum Upgradation etc.
                                            by public authority
                                          </option>
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              ) : (
                                <>
                                  {formData.areaType == "congested" ? (
                                    <>
                                      <option value="below9">
                                        For sdiveets / lane less than 4.5 m.
                                        width
                                      </option>
                                      <option value="9toBelow12">
                                        For sdiveets 4.5 m. to less than 6.0 m.
                                        in width
                                      </option>

                                      <option value="12toBelow15">
                                        For sdiveets 6.0 m. to less than 12.0 m.
                                        in width
                                      </option>
                                      <option value="15toBelow24">
                                        For sdiveets 12.0 m. in width and above
                                      </option>
                                    </>
                                  ) : (
                                    <>
                                      <option value="30above">
                                        Roads of width 30.0 m. and above in
                                        local authority area.
                                      </option>
                                      <option value="regional">
                                        In case of Regional Plan area. NH / SH 2
                                      </option>
                                      <option value="18toBelow30">
                                        Roads of width 18.0 m. and above but
                                        below 30.0 m.
                                      </option>
                                      <option value="15toBelow18">
                                        Roads of width 15.0 m. and above but
                                        below 18.0 m.
                                      </option>

                                      {roadOptions}

                                      {formData.buildingType.input !=
                                        "commercial" && (
                                        <>
                                          <option value="rowHouse12andBelow">
                                            Row Housing on roads of 12.0 m. and
                                            below
                                          </option>
                                          <option value="rowHousePublic">
                                            Row Housing for EWS / LIG / by
                                            public authority / private
                                            individual / Slum Upgradation etc.
                                            by public authority
                                          </option>
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </select>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </>
            )}
          </div>

          <div className=" p-5 mb-2 bg-slate-100 rounded-2xl">
            <div className=" text-md text-center">
              <div className="border rounded-2xl mb-4 bg-white">
                <div className="flex justify-evenly rounded-t-2xl bg-[#dededeac] py-2">
                  <p>Front Margin</p>
                  <p>Road Side</p>
                </div>
                <div className=" ">
                  <p className="p-4 text-2xl">
                    {formData.roadDirection.front.margin ||
                      "Enter data in required field"}
                  </p>
                </div>
              </div>

              <div className="border rounded-2xl mb-4 bg-white">
                <div className="flex justify-evenly rounded-t-2xl bg-[#dededeac] py-2">
                  <p>Right Margin</p>
                  <p>Adjacent Other Plot</p>
                </div>
                <div className="  ">
                  <p className="p-4 text-2xl">
                    {formData.roadDirection.right.radioInput == "other"
                      ? "Not Applicable"
                      : formData.roadDirection.right.margin ||
                        "Enter data in required field"}
                  </p>
                </div>
              </div>

              <div className="border rounded-2xl mb-4 bg-white">
                <div className="flex justify-evenly rounded-t-2xl bg-[#dededeac] py-2">
                  <p>Left Margin</p>
                  <p>Adjacent Other Plot</p>
                </div>
                <div className="  ">
                  <p className="p-4 text-2xl">
                    {formData.roadDirection.left.radioInput == "other"
                      ? "Not Applicable"
                      : formData.roadDirection.left.margin ||
                        "Enter data in required field"}
                  </p>
                </div>
              </div>

              <div className="border rounded-2xl mb-4 bg-white">
                <div className="flex justify-evenly rounded-t-2xl bg-[#dededeac] py-2">
                  <p>Rear Margin</p>
                  <p>Adjacent Other Plot</p>
                </div>
                <div className="  ">
                  <p className="p-4 text-2xl">
                    {formData.roadDirection.back.radioInput == "other"
                      ? "Not Applicable"
                      : formData.roadDirection.back.margin ||
                        "Enter data in required field"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center p-2">
          <button
            onClick={handleSubmit}
            className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
          <button onClick={generateAndUploadImage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 30 30"
            >
              <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
