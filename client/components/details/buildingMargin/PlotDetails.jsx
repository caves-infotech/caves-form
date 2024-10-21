import { useEffect, useState } from "react";

export default function PlotDetails({
  formData,
  handleChange,
  handleNestedChange,
  handleSubmit,
  handleMoreNestedChange,
  setFormData,
}) {
  const [isNonCongested, setIsNonCongested] = useState();
  const [roadOptions, setRoadOptions] = useState(
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
                "3.25 m. from the centre of the street / lane";
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
              "2.25 m. from the centre of the street / lane";
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
                "4.75 m. from the centre of the street / lane";
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
              "3.75 m. from the centre of the street / lane";
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
          setRoadOptions(
            <option value="lessThan15">
              Roads of width 9.0 m. and above but below 15.0 m.
            </option>
          );
        } else if (formData.ulb == "otherRp") {
          setRoadOptions(
            <option value="lessThan15">
              Roads of width 7.5 m. and above but below 15.0 m.
            </option>
          );
        }
      }

      if (formData.buildingType?.commercial?.input == "educational") {
        if (formData.buildingType?.commercial?.subInput == "a") {
          setRoadOptions(
            <option value="lessThan15">Roads of width less than 15.0 m.</option>
          );
        } else if (formData.buildingType?.commercial?.subInput == "b") {
          setRoadOptions(
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
        setRoadOptions(
          <option value="lessThan15">
            Roads of width 9.0 m. and above but below 15.0 m.
          </option>
        );
      }

      if (formData.buildingType?.commercial?.input == "mercantile") {
        if (formData.buildingType?.commercial?.subInput == "b") {
          setRoadOptions(
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

  return (
    <>
      <div className="hidden p-5 sm:flex">
        <div className="flex gap-x-5">
          <div>
            <h2 className="mb-4 text-2xl">Plot Details and FSI</h2>
            <table className="table-auto w-[530px] text-sm">
              <tbody>
                <tr className="even:bg-white  odd:bg-[#dededeac] ">
                  <td className="w-48 px-4 py-2 border border-slate-400">
                    1. Proposed Project Name:
                  </td>
                  <td className="px-4 py-2 border border-slate-400">
                    <input
                      type="text"
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleChange}
                      className="w-full p-2 border-2 rounded-lg border-slate-400 "
                      placeholder="Enter your project name"
                    />
                  </td>
                </tr>

                <tr className="even:bg-white  odd:bg-[#dededeac] border-r border-slate-400">
                  <td className="px-4 py-3 border border-slate-400">4. ULB:</td>
                  <td className="flex px-4 py-2 ">
                    <label className="flex-[50%]">
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
                        {/* <br /> Municipal Council (A, B) */}
                      </span>
                    </label>
                    <label className="flex-[50%]">
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
                  </td>
                </tr>

                <tr className="even:bg-white  odd:bg-[#dededeac] ">
                  <td className="px-4 py-2 border border-slate-400">
                    3. Building Type:
                  </td>
                  <td className="px-4 py-2 border border-slate-400">
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
                  </td>
                </tr>

                {formData.buildingType.input == "commercial" && (
                  <>
                    <tr className="even:bg-white  odd:bg-[#dededeac] ">
                      <td className="px-16 py-2 border-l border-slate-400">
                        Categories of Commercial Buildings:
                      </td>
                      <td className="px-4 py-2 border-r border-b border-slate-400">
                        <select
                          name="buildingType.commercial.input"
                          value={formData.buildingType.commercial.input}
                          onChange={handleMoreNestedChange}
                          className="w-full p-2 border-2 border-slate-400 rounded-lg bg--bg-[#dededeac]"
                        >
                          <option value="">
                            --Select Other Building Type--
                          </option>
                          <option value="medical">Medical</option>
                          <option value="educational">Education</option>
                          <option value="public">
                            Public-Semi Public Building
                          </option>
                          <option value="cinema">Cenema Theatre</option>
                          <option value="mangalKaryalay">
                            Mangal Karyalay
                          </option>
                          <option value="fuel"> Fuel Stations</option>
                          <option value="mercantile">
                            Mercantile Buildings
                          </option>
                          <option value="stadium">Stadium</option>
                        </select>
                      </td>
                    </tr>

                    {formData.buildingType?.commercial?.input == "medical" && (
                      <>
                        <tr className="even:bg-white  odd:bg-[#dededeac] ">
                          <td className="px-16 py-2 border-l border-slate-400">
                            Categories of Medical Buildings:
                          </td>
                          <td className="px-4 py-2 border-r border-b border-slate-400">
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
                          </td>
                        </tr>
                      </>
                    )}

                    {formData.buildingType?.commercial?.input ==
                      "educational" && (
                      <>
                        <tr className="even:bg-white  odd:bg-[#dededeac] ">
                          <td className="px-16 py-2 border-l border-slate-400">
                            Categories of Educational Buildings:
                          </td>
                          <td className="px-4 py-2 border-r border-b border-slate-400">
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
                          </td>
                        </tr>
                      </>
                    )}

                    {formData.buildingType?.commercial?.input == "public" && (
                      <>
                        <tr className="even:bg-white  odd:bg-[#dededeac] ">
                          <td className="px-16 py-2 border-l border-slate-400">
                            Categories of Educational Buildings:
                          </td>
                          <td className="px-4 py-2 border-r border-b border-slate-400">
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
                          </td>
                        </tr>
                      </>
                    )}

                    {formData.buildingType?.commercial?.input ==
                      "mangalKaryalay" && (
                      <>
                        <tr className="even:bg-white  odd:bg-[#dededeac] ">
                          <td className="px-16 py-2 border-l border-slate-400">
                            Categories of Educational Buildings:
                          </td>
                          <td className="px-4 py-2 border-r border-b border-slate-400">
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
                                Mangal karyalaya and like buildings not under
                                the category of special building.
                              </option>
                              <option value="b">
                                Mangal karyalaya and like buildings under the
                                category of special building
                              </option>
                            </select>
                          </td>
                        </tr>
                      </>
                    )}

                    {formData.buildingType?.commercial?.input ==
                      "mercantile" && (
                      <>
                        <tr className="even:bg-white  odd:bg-[#dededeac] ">
                          <td className="px-16 py-2 border-l border-slate-400">
                            Categories of Educational Buildings:
                          </td>
                          <td className="px-4 py-2 border-r border-b border-slate-400">
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
                                building under the category of special
                                buildings.
                              </option>
                              <option value="b">
                                Mercantile / Business / Hotel / Commercial
                                building not under category of special buildings
                              </option>
                              <option value="c">
                                Convenience shopping in R-1 zone
                              </option>
                            </select>
                          </td>
                        </tr>
                      </>
                    )}
                  </>
                )}

                <tr className="even:bg-white  odd:bg-[#dededeac]">
                  <td className="px-4 py-3 border border-slate-400">
                    5. Area Type:
                  </td>
                  <td className="flex px-4 py-3 border-t border-r border-slate-400">
                    <label className="flex-[50%]">
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
                    <label className="flex-[50%]">
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
                  </td>
                </tr>

                <tr className="even:bg-white  odd:bg-[#dededeac] ">
                  <td className="px-4 py-2 border border-slate-400">
                    8. Building Height:
                  </td>
                  <td className="px-4 py-2 border border-slate-400">
                    <input
                      type="number"
                      name="buildingHeight"
                      value={formData.buildingHeight}
                      onChange={handleChange}
                      className="w-full p-2 border-2 rounded-lg border-slate-400"
                      placeholder="Enter Building Height"
                    />
                  </td>
                </tr>

                <tr className="even:bg-white  odd:bg-[#dededeac] ">
                  <td className="px-4 py-2 border border-slate-400">
                    8. Plot width:
                  </td>
                  <td className="px-4 py-2 border border-slate-400">
                    <input
                      type="number"
                      name="plotWidth"
                      value={formData.plotWidth}
                      onChange={handleChange}
                      className="w-full p-2 border-2 rounded-lg border-slate-400"
                      placeholder="Enter Plot width"
                    />
                  </td>
                </tr>

                <tr className="even:bg-white  odd:bg-[#dededeac] ">
                  <td className="px-4 py-2 border border-slate-400">
                    8. Plot Area:
                  </td>
                  <td className="px-4 py-2 border border-slate-400">
                    <input
                      type="number"
                      name="plotArea"
                      value={formData.plotArea}
                      onChange={handleChange}
                      className="w-full p-2 border-2 rounded-lg border-slate-400"
                      placeholder="Enter Plot Area"
                    />
                  </td>
                </tr>

                {!(formData.buildingType.input == "commercial") && (
                  <tr className="even:bg-white  odd:bg-[#dededeac] ">
                    <td className="px-4 py-2 border border-slate-400">
                      2. Plot Type:
                    </td>
                    <td className="px-4 py-2 border border-slate-400">
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
                    </td>
                  </tr>
                )}

                <tr className="even:bg-white  odd:bg-[#dededeac] border-slate-400 border-b">
                  <td className="px-4 py-2 border border-slate-400">
                    7. Single floor plate B/Up area:
                  </td>
                  <td className="flex px-4 py-3 border-t border-r border-slate-400">
                    <input
                      type="number"
                      name="moreThan500"
                      value={formData.moreThan500}
                      onChange={handleChange}
                      className="w-full p-2 border-2 rounded-lg border-slate-400"
                      placeholder="Enter B/Up area"
                    />
                  </td>
                </tr>
                {!(
                  formData.buildingType.input == "commercial" &&
                  formData.areaType == "congested"
                ) && (
                  <>
                    <tr className="even:bg-white  odd:bg-[#dededeac] border-r border-slate-400">
                      <td
                        className="px-4 py-2 border-l border-slate-400"
                        colSpan={2}
                      >
                        9. Road Width:
                      </td>
                    </tr>

                    <tr className="odd:bg-white  even:bg-[#dededeac] border-r border-b border-slate-400">
                      <td className="px-8 border-l border-slate-400 ">
                        a. Front (Road / Entry side):
                      </td>
                      <td className="px-4 py-2 ">
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
                                    For streets / lane less than 4.5 m. width
                                  </option>
                                  <option value="4o5toLessThan6">
                                    For streets 4.5 m. to less than 6.0 m. in
                                    width
                                  </option>
                                  <option value="6toLessThan12">
                                    For streets 6.0 m. to less than 12.0 m. in
                                    width
                                  </option>
                                  <option value="12andAbove">
                                    For streets 12.0 m. in width and above
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
                                        Row Housing on roads of 12.0 m. and
                                        below
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
                                    For streets / lane less than 4.5 m. width
                                  </option>
                                  <option value="9toBelow12">
                                    For streets 4.5 m. to less than 6.0 m. in
                                    width
                                  </option>

                                  <option value="12toBelow15">
                                    For streets 6.0 m. to less than 12.0 m. in
                                    width
                                  </option>
                                  <option value="15toBelow24">
                                    For streets 12.0 m. in width and above
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
                                        Row Housing on roads of 12.0 m. and
                                        below
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
                      </td>
                    </tr>

                    {/* {(formData.buildingHeight <= 15 && formData.areaType == "congested") && ( */}
                    {(((formData.buildingType.input == "residential" ||
                      formData.buildingType.input == "mix") &&
                      formData.areaType == "non-congested") ||
                      formData.buildingType.input == "commercial") && (
                      <>
                        <tr className="odd:bg-white  even:bg-[#dededeac] border-r  border-slate-400">
                          <td className="px-8 border-l border-slate-400 ">
                            d. Right (Side):
                          </td>
                          <td className="px-4 py-2 ">
                            <div className="flex px-4 py-3 justify-evenly">
                              <label className="flex-[50%]">
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
                              <label className="flex-[50%]">
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
                                          For streets / lane less than 4.5 m.
                                          width
                                        </option>
                                        <option value="4o5toLessThan6">
                                          For streets 4.5 m. to less than 6.0 m.
                                          in width
                                        </option>
                                        <option value="6toLessThan12">
                                          For streets 6.0 m. to less than 12.0
                                          m. in width
                                        </option>
                                        <option value="12andAbove">
                                          For streets 12.0 m. in width and above
                                        </option>
                                      </>
                                    ) : (
                                      <>
                                        <option value="30above">
                                          Roads of width 30.0 m. and above in
                                          local authority area.
                                        </option>
                                        <option value="regional">
                                          In case of Regional Plan area. NH / SH
                                          2
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
                                              Row Housing on roads of 12.0 m.
                                              and below
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
                                          For streets / lane less than 4.5 m.
                                          width
                                        </option>
                                        <option value="9toBelow12">
                                          For streets 4.5 m. to less than 6.0 m.
                                          in width
                                        </option>

                                        <option value="12toBelow15">
                                          For streets 6.0 m. to less than 12.0
                                          m. in width
                                        </option>
                                        <option value="15toBelow24">
                                          For streets 12.0 m. in width and above
                                        </option>
                                      </>
                                    ) : (
                                      <>
                                        <option value="30above">
                                          Roads of width 30.0 m. and above in
                                          local authority area.
                                        </option>
                                        <option value="regional">
                                          In case of Regional Plan area. NH / SH
                                          2
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
                                              Row Housing on roads of 12.0 m.
                                              and below
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
                          </td>
                        </tr>

                        <tr className="odd:bg-white  even:bg-[#dededeac] border-r border-slate-400">
                          <td className="px-8 border-l border-slate-400 ">
                            c. Left (Side):
                          </td>
                          <td className="px-4 py-2 ">
                            <div className="flex px-4 py-3 justify-evenly">
                              <label className="flex-[50%]">
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
                              <label className="flex-[50%]">
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
                            {formData.roadDirection.left.radioInput ==
                              "road" && (
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
                                          For streets / lane less than 4.5 m.
                                          width
                                        </option>
                                        <option value="4o5toLessThan6">
                                          For streets 4.5 m. to less than 6.0 m.
                                          in width
                                        </option>
                                        <option value="6toLessThan12">
                                          For streets 6.0 m. to less than 12.0
                                          m. in width
                                        </option>
                                        <option value="12andAbove">
                                          For streets 12.0 m. in width and above
                                        </option>
                                      </>
                                    ) : (
                                      <>
                                        <option value="30above">
                                          Roads of width 30.0 m. and above in
                                          local authority area.
                                        </option>
                                        <option value="regional">
                                          In case of Regional Plan area. NH / SH
                                          2
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
                                              Row Housing on roads of 12.0 m.
                                              and below
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
                                          For streets / lane less than 4.5 m.
                                          width
                                        </option>
                                        <option value="9toBelow12">
                                          For streets 4.5 m. to less than 6.0 m.
                                          in width
                                        </option>

                                        <option value="12toBelow15">
                                          For streets 6.0 m. to less than 12.0
                                          m. in width
                                        </option>
                                        <option value="15toBelow24">
                                          For streets 12.0 m. in width and above
                                        </option>
                                      </>
                                    ) : (
                                      <>
                                        <option value="30above">
                                          Roads of width 30.0 m. and above in
                                          local authority area.
                                        </option>
                                        <option value="regional">
                                          In case of Regional Plan area. NH / SH
                                          2
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
                                              Row Housing on roads of 12.0 m.
                                              and below
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
                          </td>
                        </tr>

                        <tr className="odd:bg-white  even:bg-[#dededeac] border-r border-b border-slate-400">
                          <td className="px-8 border-l border-slate-400 ">
                            b. Back (Rare):
                          </td>
                          <td className="px-4 py-2 ">
                            <div className="flex px-4 py-3 justify-evenly">
                              <label className="flex-[50%]">
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
                              <label className="flex-[50%]">
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
                            {formData.roadDirection.back.radioInput ==
                              "road" && (
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
                                          For streets / lane less than 4.5 m.
                                          width
                                        </option>
                                        <option value="4o5toLessThan6">
                                          For streets 4.5 m. to less than 6.0 m.
                                          in width
                                        </option>
                                        <option value="6toLessThan12">
                                          For streets 6.0 m. to less than 12.0
                                          m. in width
                                        </option>
                                        <option value="12andAbove">
                                          For streets 12.0 m. in width and above
                                        </option>
                                      </>
                                    ) : (
                                      <>
                                        <option value="30above">
                                          Roads of width 30.0 m. and above in
                                          local authority area.
                                        </option>
                                        <option value="regional">
                                          In case of Regional Plan area. NH / SH
                                          2
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
                                              Row Housing on roads of 12.0 m.
                                              and below
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
                                          For streets / lane less than 4.5 m.
                                          width
                                        </option>
                                        <option value="9toBelow12">
                                          For streets 4.5 m. to less than 6.0 m.
                                          in width
                                        </option>

                                        <option value="12toBelow15">
                                          For streets 6.0 m. to less than 12.0
                                          m. in width
                                        </option>
                                        <option value="15toBelow24">
                                          For streets 12.0 m. in width and above
                                        </option>
                                      </>
                                    ) : (
                                      <>
                                        <option value="30above">
                                          Roads of width 30.0 m. and above in
                                          local authority area.
                                        </option>
                                        <option value="regional">
                                          In case of Regional Plan area. NH / SH
                                          2
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
                                              Row Housing on roads of 12.0 m.
                                              and below
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
                          </td>
                        </tr>
                      </>
                    )}
                  </>
                )}
              </tbody>
            </table>

            <div className="flex justify-end mt-4 ">
              <button
                onClick={handleSubmit}
                className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl">Result</h2>

            <table className="table-auto w-[340px] text-md text-center">
              <tbody>
                <tr className="odd:bg-[#dededeac] even:bg-white border border-slate-400 ">
                  <td className="border-r border-slate-400">
                    <p>Front Margin</p>
                  </td>
                  <td>Road Side</td>
                </tr>
                <tr className="border-b odd:bg-[#dededeac] even:bg-white border-x border-slate-400 h-20">
                  <td colSpan={2}>
                    <p className="my-4 text-2xl">
                      {formData.roadDirection.front.margin ||
                        "Enter data in required field"}
                    </p>
                  </td>
                </tr>

                <div className="my-5 border-white"></div>

                <tr className="odd:bg-white  even:bg-[#dededeac] border border-slate-400 ">
                  <td className="border-r border-slate-400">
                    <p>Right Side Margin</p>
                  </td>
                  <td>Adjacent Other Plot</td>
                </tr>
                <tr className="border-b odd:bg-white  even:bg-[#dededeac] border-x border-slate-400 h-20">
                  <td colSpan={2}>
                    <p className="my-4 text-2xl">
                      {formData.roadDirection.right.radioInput == "other"
                        ? "Not Applicable"
                        : formData.roadDirection.right.margin ||
                          "Enter data in required field"}
                    </p>
                  </td>
                </tr>

                <div className="my-5 border-white"></div>

                <tr className="odd:bg-[#dededeac] even:bg-white border border-slate-400">
                  <td className="border-r border-slate-400">
                    <p>Left Side Margin</p>
                  </td>
                  <td>Adjacent Other Plot</td>
                </tr>
                <tr className="border-b odd:bg-[#dededeac] even:bg-white border-x border-slate-400 h-20">
                  <td colSpan={2}>
                    <p className="my-4 text-2xl">
                      {formData.roadDirection.left.radioInput == "other"
                        ? "Not Applicable"
                        : formData.roadDirection.left.margin ||
                          "Enter data in required field"}
                    </p>
                  </td>
                </tr>

                <div className="my-5 border-white"></div>

                <tr className="odd:bg-white  even:bg-[#dededeac] border border-slate-400">
                  <td className="border-r border-slate-400">
                    <p>Rear (Back) Margin</p>
                  </td>
                  <td>Adjacent Other Plot</td>
                </tr>
                <tr className="border-b odd:bg-white  even:bg-[#dededeac] border-x border-slate-400 h-20">
                  <td colSpan={2}>
                    <p className="my-4 text-2xl">
                      {formData.roadDirection.back.radioInput == "other"
                        ? "Not Applicable"
                        : formData.roadDirection.back.margin ||
                          "Enter data in required field"}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
