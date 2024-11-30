import { useState, useEffect, useRef } from "react";

export default function Plodivetails({
  formData,
  handleChange,
  handleNestedChange,
  handleSubmit,
  handleMoreNestedChange,
  setFormData,
  shareViaEmail,
  shareWhatsApp,
  shareViaLink,
}) {
  const sectionRef = useRef(); // Reference to the section to convert to PDF
  const [copied, setCopied] = useState(false);
  const [isNonCongested, setIsNonCongested] = useState();
  // const [isSubmitted, setIsSubmitted] = useState(false);
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

  // useEffect(() => {
  if (formData.buildingType.input == "residential") {
    if (formData.areaType == "congested") {
      if (formData.plotArea > 1000 && formData.plotArea <= 4000) {
        if (formData.buildingHeight > 15) {
          if (formData.buildingHeight < 24) {
            formData.roadDirection.right.margin = "2 m.";
            formData.roadDirection.left.margin = "2 m.";
            formData.roadDirection.back.margin = "2 m.";
            switch (formData.roadDirection.front.input) {
              case "lessThan4o5":
                formData.roadDirection.front.margin =
                  "3.25 m. from the center of the street / lane";
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
          formData.roadDirection.right.margin = "1 m.";
          formData.roadDirection.left.margin = "1 m.";
          formData.roadDirection.back.margin = "1 m.";
          switch (formData.roadDirection.front.input) {
            case "lessThan4o5":
              formData.roadDirection.front.margin =
                "2.25 m. from the center of the street / lane";
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
      } else if (formData.plotArea <= 1000) {
        if (formData.buildingHeight > 15) {
          if (formData.buildingHeight < 24) {
            formData.roadDirection.right.margin = "0 m.";
            formData.roadDirection.left.margin = "0 m.";
            formData.roadDirection.back.margin = "0 m.";
            switch (formData.roadDirection.front.input) {
              case "lessThan4o5":
                formData.roadDirection.front.margin =
                  "2.25 m. from the center of the street / lane";
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
        } else {
          formData.roadDirection.right.margin = "1 m.";
          formData.roadDirection.left.margin = "1 m.";
          formData.roadDirection.back.margin = "1 m.";
          switch (formData.roadDirection.front.input) {
            case "lessThan4o5":
              formData.roadDirection.front.margin =
                "3.25 m. from the center of the street / lane";
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
      if (formData.roadDirection.right.radioInput == "road") {
        switch (formData.roadDirection.right.input) {
          case "30above":
            if (formData.ulb == "muncipleCorp") {
              formData.roadDirection.right.margin = "6 m.";
            } else if (formData.ulb == "otherRp") {
              formData.roadDirection.right.margin = "4.5 m.";
            }
            break;
          case "regional":
            formData.roadDirection.right.margin =
              "4.5 m. or as specified by Highway rules whichever is more";
            break;
          case "18toBelow30":
            formData.roadDirection.right.margin = "4.5 m.";
            break;
          case "15toBelow18":
            formData.roadDirection.right.margin = "3 m.";
            break;
          case "lessThan15":
            formData.roadDirection.right.margin = "3 m.";
            break;
          case "rowHouse12andBelow":
            formData.roadDirection.right.margin = "2.25 m.";
            break;
          case "rowHousePublic":
            formData.roadDirection.right.margin =
              "0.9 m from pathway or 2.25 m. from road boundary";
            break;
          default:
            break;
        }
      }
      if (formData.roadDirection.left.radioInput == "road") {
        switch (formData.roadDirection.left.input) {
          case "30above":
            if (formData.ulb == "muncipleCorp") {
              formData.roadDirection.left.margin = "6 m.";
            } else if (formData.ulb == "otherRp") {
              formData.roadDirection.left.margin = "4.5 m.";
            }
            break;
          case "regional":
            formData.roadDirection.left.margin =
              "4.5 m. or as specified by Highway rules whichever is more";
            break;
          case "18toBelow30":
            formData.roadDirection.left.margin = "4.5 m.";
            break;
          case "15toBelow18":
            formData.roadDirection.left.margin = "3 m.";
            break;
          case "lessThan15":
            formData.roadDirection.left.margin = "3 m.";
            break;
          case "rowHouse12andBelow":
            formData.roadDirection.left.margin = "2.25 m.";
            break;
          case "rowHousePublic":
            formData.roadDirection.left.margin =
              "0.9 m from pathway or 2.25 m. from road boundary";
            break;
          default:
            break;
        }
      }
      if (formData.roadDirection.back.radioInput == "road") {
        switch (formData.roadDirection.back.input) {
          case "30above":
            if (formData.ulb == "muncipleCorp") {
              formData.roadDirection.back.margin = "6 m.";
            } else if (formData.ulb == "otherRp") {
              formData.roadDirection.back.margin = "4.5 m.";
            }
            break;
          case "regional":
            formData.roadDirection.back.margin =
              "4.5 m. or as specified by Highway rules whichever is more";
            break;
          case "18toBelow30":
            formData.roadDirection.back.margin = "4.5 m.";
            break;
          case "15toBelow18":
            formData.roadDirection.back.margin = "3 m.";
            break;
          case "lessThan15":
            formData.roadDirection.back.margin = "3 m.";
            break;
          case "rowHouse12andBelow":
            formData.roadDirection.back.margin = "2.25 m.";
            break;
          case "rowHousePublic":
            formData.roadDirection.back.margin =
              "0.9 m from pathway or 2.25 m. from road boundary";
            break;
          default:
            break;
        }
      }
      if (formData.roadDirection.right.radioInput == "other") {
        let val =
          (formData.buildingHeight / 5).toFixed(2) > 12
            ? 12
            : (formData.buildingHeight / 5).toFixed(2);
        if (formData.buildingHeight >= 15 && formData.buildingHeight <= 24) {
          formData.roadDirection.right.margin = val + " m.";
        } else if (formData.buildingHeight > 24) {
          formData.roadDirection.right.margin =
            formData.buildingHeight < 30 ? "6 m." : val + " m.";
        } else {
          switch (formData.roadDirection.front.input) {
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
        }
      }
      if (formData.roadDirection.left.radioInput == "other") {
        let val =
          (formData.buildingHeight / 5).toFixed(2) > 12
            ? 12
            : (formData.buildingHeight / 5).toFixed(2);
        if (formData.buildingHeight >= 15 && formData.buildingHeight <= 24) {
          formData.roadDirection.left.margin = val + " m.";
        } else if (formData.buildingHeight > 24) {
          formData.roadDirection.left.margin =
            formData.buildingHeight < 30 ? "6 m." : val + " m.";
        } else {
          switch (formData.roadDirection.front.input) {
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
        }
      }
      if (formData.roadDirection.back.radioInput == "other") {
        let val =
          (formData.buildingHeight / 5).toFixed(2) > 12
            ? 12
            : (formData.buildingHeight / 5).toFixed(2);
        if (formData.buildingHeight >= 15 && formData.buildingHeight <= 24) {
          formData.roadDirection.back.margin = val + " m.";
        } else if (formData.buildingHeight > 24) {
          formData.roadDirection.back.margin =
            formData.buildingHeight < 30 ? "6 m." : val + " m.";
        } else {
          switch (formData.roadDirection.front.input) {
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
      }
    }
  } else if (formData.buildingType.input == "mix") {
    if (formData.areaType == "congested") {
      if (formData.plotArea > 1000 && formData.plotArea <= 4000) {
        if (formData.buildingHeight > 15) {
          if (formData.buildingHeight < 24) {
            formData.roadDirection.right.margin = "2 m.";
            formData.roadDirection.left.margin = "2 m.";
            formData.roadDirection.back.margin = "2 m.";
            switch (formData.roadDirection.front.input) {
              case "lessThan4o5":
                formData.roadDirection.front.margin =
                  "4.75 m. from the center of the street / lane";
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
          formData.roadDirection.right.margin = "1 m.";
          formData.roadDirection.left.margin = "1 m.";
          formData.roadDirection.back.margin = "1 m.";
          switch (formData.roadDirection.front.input) {
            case "lessThan4o5":
              formData.roadDirection.front.margin =
                "3.75 m. from the center of the street / lane";
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
      } else if (formData.plotArea <= 1000) {
        if (formData.buildingHeight > 15) {
          if (formData.buildingHeight < 24) {
            formData.roadDirection.right.margin = "0 m.";
            formData.roadDirection.left.margin = "0 m.";
            formData.roadDirection.back.margin = "0 m.";
            switch (formData.roadDirection.front.input) {
              case "lessThan4o5":
                formData.roadDirection.front.margin =
                  "3.75 m. from the center of the street / lane";
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
        } else {
          formData.roadDirection.right.margin = "1 m.";
          formData.roadDirection.left.margin = "1 m.";
          formData.roadDirection.back.margin = "1 m.";
          switch (formData.roadDirection.front.input) {
            case "lessThan4o5":
              formData.roadDirection.front.margin =
                "4.75 m. from the center of the street / lane";
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
      if (formData.roadDirection.right.radioInput == "road") {
        switch (formData.roadDirection.right.input) {
          case "30above":
            if (formData.ulb == "muncipleCorp") {
              formData.roadDirection.right.margin = "6 m.";
            } else if (formData.ulb == "otherRp") {
              formData.roadDirection.right.margin = "4.5 m.";
            }
            break;
          case "regional":
            formData.roadDirection.right.margin =
              "4.5 m. or as specified by Highway rules whichever is more";
            break;
          case "18toBelow30":
            formData.roadDirection.right.margin = "4.5 m.";
            break;
          case "15toBelow18":
            formData.roadDirection.right.margin = "3 m.";
            break;
          case "lessThan15":
            formData.roadDirection.right.margin = "3 m.";
            break;
          case "rowHouse12andBelow":
            formData.roadDirection.right.margin = "2.25 m.";
            break;
          case "rowHousePublic":
            formData.roadDirection.right.margin =
              "0.9 m from pathway or 2.25 m. from road boundary";
            break;
          default:
            break;
        }
      }
      if (formData.roadDirection.left.radioInput == "road") {
        switch (formData.roadDirection.left.input) {
          case "30above":
            if (formData.ulb == "muncipleCorp") {
              formData.roadDirection.left.margin = "6 m.";
            } else if (formData.ulb == "otherRp") {
              formData.roadDirection.left.margin = "4.5 m.";
            }
            break;
          case "regional":
            formData.roadDirection.left.margin =
              "4.5 m. or as specified by Highway rules whichever is more";
            break;
          case "18toBelow30":
            formData.roadDirection.left.margin = "4.5 m.";
            break;
          case "15toBelow18":
            formData.roadDirection.left.margin = "3 m.";
            break;
          case "lessThan15":
            formData.roadDirection.left.margin = "3 m.";
            break;
          case "rowHouse12andBelow":
            formData.roadDirection.left.margin = "2.25 m.";
            break;
          case "rowHousePublic":
            formData.roadDirection.left.margin =
              "0.9 m from pathway or 2.25 m. from road boundary";
            break;
          default:
            break;
        }
      }
      if (formData.roadDirection.back.radioInput == "road") {
        switch (formData.roadDirection.back.input) {
          case "30above":
            if (formData.ulb == "muncipleCorp") {
              formData.roadDirection.back.margin = "6 m.";
            } else if (formData.ulb == "otherRp") {
              formData.roadDirection.back.margin = "4.5 m.";
            }
            break;
          case "regional":
            formData.roadDirection.back.margin =
              "4.5 m. or as specified by Highway rules whichever is more";
            break;
          case "18toBelow30":
            formData.roadDirection.back.margin = "4.5 m.";
            break;
          case "15toBelow18":
            formData.roadDirection.back.margin = "3 m.";
            break;
          case "lessThan15":
            formData.roadDirection.back.margin = "3 m.";
            break;
          case "rowHouse12andBelow":
            formData.roadDirection.back.margin = "2.25 m.";
            break;
          case "rowHousePublic":
            formData.roadDirection.back.margin =
              "0.9 m from pathway or 2.25 m. from road boundary";
            break;
          default:
            break;
        }
      }
      if (formData.roadDirection.right.radioInput == "other") {
        let val =
          (formData.buildingHeight / 5).toFixed(2) > 12
            ? 12
            : (formData.buildingHeight / 5).toFixed(2);
        if (formData.buildingHeight >= 15 && formData.buildingHeight <= 24) {
          formData.roadDirection.right.margin = val + " m.";
        } else if (formData.buildingHeight > 24) {
          formData.roadDirection.right.margin =
            formData.buildingHeight < 30 ? "6 m." : val + " m.";
        } else {
          switch (formData.roadDirection.front.input) {
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
        }
      }
      if (formData.roadDirection.left.radioInput == "other") {
        let val =
          (formData.buildingHeight / 5).toFixed(2) > 12
            ? 12
            : (formData.buildingHeight / 5).toFixed(2);
        if (formData.buildingHeight >= 15 && formData.buildingHeight <= 24) {
          formData.roadDirection.left.margin = val + " m.";
        } else if (formData.buildingHeight > 24) {
          formData.roadDirection.left.margin =
            formData.buildingHeight < 30 ? "6 m." : val + " m.";
        } else {
          switch (formData.roadDirection.front.input) {
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
        }
      }
      if (formData.roadDirection.back.radioInput == "other") {
        let val =
          (formData.buildingHeight / 5).toFixed(2) > 12
            ? 12
            : (formData.buildingHeight / 5).toFixed(2);
        if (formData.buildingHeight >= 15 && formData.buildingHeight <= 24) {
          formData.roadDirection.back.margin = val + " m.";
        } else if (formData.buildingHeight > 24) {
          formData.roadDirection.back.margin =
            formData.buildingHeight < 30 ? "6 m." : val + " m.";
        } else {
          switch (formData.roadDirection.front.input) {
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
      }
    }
  } else if (formData.buildingType.input == "commercial") {
    // if (formData.areaType == "non-congested") {
    if (formData.buildingType?.commercial?.input == "cinema") {
      formData.roadDirection.front.margin = "12 m.";
    } else if (formData.buildingType?.commercial?.input == "fuel") {
      formData.roadDirection.front.margin = "4.5 m.";
    } else if (
      formData.buildingType?.commercial?.input == "mercantile" &&
      formData.buildingType?.commercial?.subInput == "a"
    ) {
      formData.roadDirection.front.margin = "6 m.";
    } else {
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
    }
    if (formData.roadDirection.right.radioInput == "road") {
      // let val =
      //   (formData.buildingHeight / 5).toFixed(2) > 12
      //     ? 12
      //     : (formData.buildingHeight / 5).toFixed(2);
      // if (formData.buildingHeight > 24) {
      //   formData.roadDirection.left.margin =
      //     formData.buildingHeight < 30 ? "6 m." : val + " m.";
      // } else {
      switch (formData.roadDirection.right.input) {
        case "30above":
          if (formData.ulb == "muncipleCorp") {
            formData.roadDirection.right.margin = "6 m.";
          } else if (formData.ulb == "otherRp") {
            formData.roadDirection.right.margin = "4.5 m.";
          }
          break;
        case "regional":
          formData.roadDirection.right.margin =
            "4.5 m. or as specified by Highway rules whichever is more";
          break;
        case "18toBelow30":
          formData.roadDirection.right.margin = "4.5 m.";
          break;
        case "15toBelow18":
          formData.roadDirection.right.margin = "3 m.";
          break;
        case "lessThan15":
          formData.roadDirection.right.margin = "3 m.";
          break;
        default:
          break;
      }
      // }
    }
    if (formData.roadDirection.left.radioInput == "road") {
      // let val =
      //   (formData.buildingHeight / 5).toFixed(2) > 12
      //     ? 12
      //     : (formData.buildingHeight / 5).toFixed(2);
      // if (formData.buildingHeight > 24) {
      //   formData.roadDirection.left.margin =
      //     formData.buildingHeight < 30 ? "6 m." : val + " m.";
      // } else {
      switch (formData.roadDirection.left.input) {
        case "30above":
          if (formData.ulb == "muncipleCorp") {
            formData.roadDirection.left.margin = "6 m.";
          } else if (formData.ulb == "otherRp") {
            formData.roadDirection.left.margin = "4.5 m.";
          }
          break;
        case "regional":
          formData.roadDirection.left.margin =
            "4.5 m. or as specified by Highway rules whichever is more";
          break;
        case "18toBelow30":
          formData.roadDirection.left.margin = "4.5 m.";
          break;
        case "15toBelow18":
          formData.roadDirection.left.margin = "3 m.";
          break;
        case "lessThan15":
          formData.roadDirection.left.margin = "3 m.";
          break;
        default:
          break;
      }
      // }
    }
    if (formData.roadDirection.back.radioInput == "road") {
      // let val =
      //   (formData.buildingHeight / 5).toFixed(2) > 12
      //     ? 12
      //     : (formData.buildingHeight / 5).toFixed(2);
      // if (formData.buildingHeight > 24) {
      //   formData.roadDirection.back.margin =
      //     formData.buildingHeight < 30 ? "6 m." : val + " m.";
      // } else {
      switch (formData.roadDirection.back.input) {
        case "30above":
          if (formData.ulb == "muncipleCorp") {
            formData.roadDirection.back.margin = "6 m.";
          } else if (formData.ulb == "otherRp") {
            formData.roadDirection.back.margin = "4.5 m.";
          }
          break;
        case "regional":
          formData.roadDirection.back.margin =
            "4.5 m. or as specified by Highway rules whichever is more";
          break;
        case "18toBelow30":
          formData.roadDirection.back.margin = "4.5 m.";
          break;
        case "15toBelow18":
          formData.roadDirection.back.margin = "3 m.";
          break;
        case "lessThan15":
          formData.roadDirection.back.margin = "3 m.";
          break;
        default:
          break;
      }
      // }
    }
    if (formData.roadDirection.right.radioInput == "other") {
      let val =
        (formData.buildingHeight / 5).toFixed(2) > 12
          ? 12
          : (formData.buildingHeight / 5).toFixed(2);
      if (formData.buildingHeight > 24) {
        formData.roadDirection.right.margin =
          formData.buildingHeight < 30 ? "6 m." : val + " m.";
      } else if (
        (formData.buildingType?.commercial?.input == "medical" &&
          formData.buildingType?.commercial?.subInput == "b") ||
        (formData.buildingType?.commercial?.input == "public" &&
          formData.buildingType?.commercial?.subInput == "b") ||
        (formData.buildingType?.commercial?.input == "mangalKaryalay" &&
          formData.buildingType?.commercial?.subInput == "b") ||
        (formData.buildingType?.commercial?.input == "mercantile" &&
          formData.buildingType?.commercial?.subInput == "a") ||
        (formData.buildingType?.commercial?.input == "educational" &&
          formData.buildingType?.commercial?.subInput == "d") ||
        formData.buildingType?.commercial?.input == "stadium" ||
        formData.buildingType?.commercial?.input == "cinema"
      ) {
        formData.roadDirection.right.margin = "6 m.";
      } else if (formData.buildingType?.commercial?.input == "fuel") {
        formData.roadDirection.right.margin = "4.5 m.";
      } else if (
        formData.buildingHeight >= 15 &&
        formData.buildingHeight <= 24
      ) {
        formData.roadDirection.right.margin = val + " m.";
      } else {
        if (
          (formData.buildingType?.commercial?.input == "medical" &&
            formData.buildingType?.commercial?.subInput == "a") ||
          (formData.buildingType?.commercial?.input == "public" &&
            formData.buildingType?.commercial?.subInput == "a") ||
          (formData.buildingType?.commercial?.input == "mercantile" &&
            formData.buildingType?.commercial?.subInput == "b" &&
            formData.buildingType?.commercial?.input == "educational" &&
            formData.buildingType?.commercial?.subInput == "c") ||
          (formData.buildingType?.commercial?.input == "mangalKaryalay" &&
            formData.buildingType?.commercial?.subInput == "a")
        ) {
          formData.roadDirection.right.margin = "3 m.";
        }
        if (
          (formData.buildingType?.commercial?.input == "educational" &&
            (formData.buildingType?.commercial?.subInput == "a" ||
              formData.buildingType?.commercial?.subInput == "b")) ||
          (formData.buildingType?.commercial?.input == "mercantile" &&
            formData.buildingType?.commercial?.subInput == "c")
        ) {
          switch (formData.roadDirection.front.input) {
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
        }
        // if (
        //   (formData.buildingType?.commercial?.input == "medical" &&
        //     formData.buildingType?.commercial?.subInput == "b") ||
        //   (formData.buildingType?.commercial?.input == "public" &&
        //     formData.buildingType?.commercial?.subInput == "b") ||
        //   (formData.buildingType?.commercial?.input == "mangalKaryalay" &&
        //     formData.buildingType?.commercial?.subInput == "b") ||
        //   (formData.buildingType?.commercial?.input == "mercantile" &&
        //     formData.buildingType?.commercial?.subInput == "a") ||
        //   (formData.buildingType?.commercial?.input == "educational" &&
        //     formData.buildingType?.commercial?.subInput == "d") ||
        //   formData.buildingType?.commercial?.input == "stadium"
        // ) {
        //   formData.roadDirection.right.margin = "6 m.";
        // }
        // if (formData.buildingType?.commercial?.input == "cinema") {
        //   formData.roadDirection.right.margin = "6 m.";
        // }
        // if (formData.buildingType?.commercial?.input == "fuel") {
        //   formData.roadDirection.right.margin = "4.5 m.";
        // }
      }
    }
    if (formData.roadDirection.left.radioInput == "other") {
      let val =
        (formData.buildingHeight / 5).toFixed(2) > 12
          ? 12
          : (formData.buildingHeight / 5).toFixed(2);
      if (formData.buildingHeight > 24) {
        formData.roadDirection.left.margin =
          formData.buildingHeight < 30 ? "6 m." : val + " m.";
      } else if (
        (formData.buildingType?.commercial?.input == "medical" &&
          formData.buildingType?.commercial?.subInput == "b") ||
        (formData.buildingType?.commercial?.input == "public" &&
          formData.buildingType?.commercial?.subInput == "b") ||
        (formData.buildingType?.commercial?.input == "mangalKaryalay" &&
          formData.buildingType?.commercial?.subInput == "b") ||
        (formData.buildingType?.commercial?.input == "mercantile" &&
          formData.buildingType?.commercial?.subInput == "a") ||
        (formData.buildingType?.commercial?.input == "educational" &&
          formData.buildingType?.commercial?.subInput == "d") ||
        formData.buildingType?.commercial?.input == "stadium" ||
        formData.buildingType?.commercial?.input == "cinema"
      ) {
        formData.roadDirection.left.margin = "6 m.";
      } else if (formData.buildingType?.commercial?.input == "fuel") {
        formData.roadDirection.left.margin = "4.5 m.";
      } else if (
        formData.buildingHeight >= 15 &&
        formData.buildingHeight <= 24
      ) {
        formData.roadDirection.left.margin = val + " m.";
      } else {
        if (
          (formData.buildingType?.commercial?.input == "medical" &&
            formData.buildingType?.commercial?.subInput == "a") ||
          (formData.buildingType?.commercial?.input == "public" &&
            formData.buildingType?.commercial?.subInput == "a") ||
          (formData.buildingType?.commercial?.input == "mercantile" &&
            formData.buildingType?.commercial?.subInput == "b" &&
            formData.buildingType?.commercial?.input == "educational" &&
            formData.buildingType?.commercial?.subInput == "c") ||
          (formData.buildingType?.commercial?.input == "mangalKaryalay" &&
            formData.buildingType?.commercial?.subInput == "a")
        ) {
          formData.roadDirection.left.margin = "3 m.";
        }
        if (
          (formData.buildingType?.commercial?.input == "educational" &&
            (formData.buildingType?.commercial?.subInput == "a" ||
              formData.buildingType?.commercial?.subInput == "b")) ||
          (formData.buildingType?.commercial?.input == "mercantile" &&
            formData.buildingType?.commercial?.subInput == "c")
        ) {
          switch (formData.roadDirection.front.input) {
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
        }
      }
    }
    if (formData.roadDirection.back.radioInput == "other") {
      let val =
        (formData.buildingHeight / 5).toFixed(2) > 12
          ? 12
          : (formData.buildingHeight / 5).toFixed(2);
      if (formData.buildingHeight > 24) {
        formData.roadDirection.back.margin =
          formData.buildingHeight < 30 ? "6 m." : val + " m.";
      } else if (
        (formData.buildingType?.commercial?.input == "medical" &&
          formData.buildingType?.commercial?.subInput == "b") ||
        (formData.buildingType?.commercial?.input == "public" &&
          formData.buildingType?.commercial?.subInput == "b") ||
        (formData.buildingType?.commercial?.input == "mangalKaryalay" &&
          formData.buildingType?.commercial?.subInput == "b") ||
        (formData.buildingType?.commercial?.input == "mercantile" &&
          formData.buildingType?.commercial?.subInput == "a") ||
        (formData.buildingType?.commercial?.input == "educational" &&
          formData.buildingType?.commercial?.subInput == "d") ||
        formData.buildingType?.commercial?.input == "stadium" ||
        formData.buildingType?.commercial?.input == "cinema"
      ) {
        formData.roadDirection.back.margin = "6 m.";
      } else if (formData.buildingType?.commercial?.input == "fuel") {
        formData.roadDirection.back.margin = "4.5 m.";
      } else if (
        formData.buildingHeight >= 15 &&
        formData.buildingHeight <= 24
      ) {
        formData.roadDirection.back.margin = val + " m.";
      } else {
        if (
          (formData.buildingType?.commercial?.input == "medical" &&
            formData.buildingType?.commercial?.subInput == "a") ||
          (formData.buildingType?.commercial?.input == "public" &&
            formData.buildingType?.commercial?.subInput == "a") ||
          (formData.buildingType?.commercial?.input == "mercantile" &&
            formData.buildingType?.commercial?.subInput == "b" &&
            formData.buildingType?.commercial?.input == "educational" &&
            formData.buildingType?.commercial?.subInput == "c") ||
          (formData.buildingType?.commercial?.input == "mangalKaryalay" &&
            formData.buildingType?.commercial?.subInput == "a")
        ) {
          formData.roadDirection.back.margin = "3 m.";
        }
        if (
          (formData.buildingType?.commercial?.input == "educational" &&
            (formData.buildingType?.commercial?.subInput == "a" ||
              formData.buildingType?.commercial?.subInput == "b")) ||
          (formData.buildingType?.commercial?.input == "mercantile" &&
            formData.buildingType?.commercial?.subInput == "c")
        ) {
          switch (formData.roadDirection.front.input) {
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
      }
    }
  }

  useEffect(() => {
    if (
      formData.buildingType.input == "commercial" ||
      //  &&
      // ((formData.buildingType?.commercial?.input == "medical" &&
      //   formData.buildingType?.commercial?.subInput == "a") ||
      //   (formData.buildingType?.commercial?.input == "educational" &&
      //     (formData.buildingType?.commercial?.subInput == "a" ||
      //       formData.buildingType?.commercial?.subInput == "b")) ||
      //   (formData.buildingType?.commercial?.input == "public" &&
      //     formData.buildingType?.commercial?.subInput == "a") ||
      //   (formData.buildingType?.commercial?.input == "mercantile" &&
      //     (formData.buildingType?.commercial?.subInput == "b" ||
      //       formData.buildingType?.commercial?.subInput == "c")))
      parseFloat(formData.plotArea) > 4000 ||
      // (
      //   // formData.buildingType.input == "commercial" &&
      //   parseFloat(formData.buildingHeight) > 24) ||
      // formData.buildingType.input !== "commercial" &&
      parseFloat(formData.buildingHeight) >= 24
    ) {
      formData.areaType = "non-congested";
      setIsNonCongested(true);
      if (formData.buildingHeight > 24) {
        if (
          formData.buildingType?.commercial?.input == "medical" &&
          formData.buildingType?.commercial?.subInput == "a"
        ) {
          formData.buildingType.commercial.subInput = "b";
        }
        if (
          formData.buildingType?.commercial?.input == "educational" &&
          (formData.buildingType?.commercial?.subInput == "a" ||
            formData.buildingType?.commercial?.subInput == "b" ||
            formData.buildingType?.commercial?.subInput == "c")
        ) {
          formData.buildingType.commercial.subInput = "d";
        }
        if (
          formData.buildingType?.commercial?.input == "public" &&
          formData.buildingType?.commercial?.subInput == "a"
        ) {
          formData.buildingType.commercial.subInput = "b";
        }
        if (
          formData.buildingType?.commercial?.input == "mangalKaryalay" &&
          formData.buildingType?.commercial?.subInput == "a"
        ) {
          formData.buildingType.commercial.subInput = "b";
        }
        if (
          formData.buildingType?.commercial?.input == "mercantile" &&
          (formData.buildingType?.commercial?.subInput == "b" ||
            formData.buildingType?.commercial?.subInput == "c")
        ) {
          formData.buildingType.commercial.subInput = "a";
        }
      }
      //  else {
      //   if (
      //     formData.buildingType?.commercial?.input == "medical" &&
      //     formData.buildingType?.commercial?.subInput == "b"
      //   ) {
      //     formData.buildingType.commercial.subInput = "a";
      //   }
      //   if (
      //     formData.buildingType?.commercial?.input == "educational" &&
      //     formData.buildingType?.commercial?.subInput == "d"
      //   ) {
      //     formData.buildingType.commercial.subInput = "";
      //   }
      //   if (
      //     formData.buildingType?.commercial?.input == "public" &&
      //     formData.buildingType?.commercial?.subInput == "b"
      //   ) {
      //     formData.buildingType.commercial.subInput = "a";
      //   }
      //   if (
      //     formData.buildingType?.commercial?.input == "mangalKaryalay" &&
      //     formData.buildingType?.commercial?.subInput == "b"
      //   ) {
      //     formData.buildingType.commercial.subInput = "a";
      //   }
      //   if (
      //     formData.buildingType?.commercial?.input == "mercantile" &&
      //     formData.buildingType?.commercial?.subInput == "a"
      //   ) {
      //     formData.buildingType.commercial.subInput = "";
      //   }
      // }

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

      if (
        formData.buildingType?.commercial?.input == "mercantile" &&
        formData.buildingType?.commercial?.subInput == "b"
      ) {
        setRoadOptions(
          <option value="lessThan15">
            Roads of width 9.0 m. and above but below 12.0 m.
          </option>
        );
      }
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

  function shareViaLinkHelper(sectionRef) {
    shareViaLink(sectionRef);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000); // Reset after 2 seconds
  }

  return (
    <>
      <div className="p-4 lg:flex gap-x-5 ">
        <form onSubmit={handleSubmit}>
          <div className="w-full flex flex-col mb-2 gap-y-2">
            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">
                1. Proposed Project Name:
              </div>

              <div className="px-4 py-2 sm:w-1/2">
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  className="w-full p-2 border-2 rounded-lg border-slate-400 "
                  placeholder="Enter your project name"
                  required
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
                    required
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
                    required
                  />
                  <span className="ml-2 text-gray-700">Other / Rp</span>
                </label>
              </div>
            </div>

            <div className=" even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200 max-w-5xl">
              <div className="sm:flex">
                <div className="px-4 py-2 sm:w-1/2">3. Building Type:</div>
                <div className="px-4 py-2 sm:w-1/2">
                  <select
                    name="buildingType.input"
                    value={formData.buildingType.input}
                    onChange={handleNestedChange}
                    className="w-full p-2 border-2 border-slate-400 rounded-lg bg--bg-[#dededeac]"
                    required
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
                        required
                      >
                        <option value="">--Select Other Building Type--</option>
                        <option value="medical">Medical</option>
                        <option value="educational">Education</option>
                        <option value="public">
                          Public Semi-Public Building
                        </option>
                        <option value="cinema">Cenema Theatre</option>
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
                            required
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
                            required
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
                          Categories of Public Semi-Public Buildings:
                        </div>
                        <div className="px-4 py-2 sm:w-1/2">
                          <select
                            name="buildingType.commercial.subInput"
                            value={formData.buildingType.commercial.subInput}
                            onChange={handleMoreNestedChange}
                            className="w-full p-2 border-2 border-slate-400 rounded-lg bg--bg-[#dededeac]"
                            required
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
                          Categories of Mangal Karyalay Buildings:
                        </div>
                        <div className="px-4 py-2 sm:w-1/2">
                          <select
                            name="buildingType.commercial.subInput"
                            value={formData.buildingType.commercial.subInput}
                            onChange={handleMoreNestedChange}
                            className="w-full p-2 border-2 border-slate-400 rounded-lg bg--bg-[#dededeac]"
                            required
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
                          Categories of Mercantile Buildings:
                        </div>
                        <div className="px-4 py-2 sm:w-1/2">
                          <select
                            name="buildingType.commercial.subInput"
                            value={formData.buildingType.commercial.subInput}
                            onChange={handleMoreNestedChange}
                            className="w-full p-2 border-2 border-slate-400 rounded-lg bg--bg-[#dededeac]"
                            required
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

                  {formData.buildingType?.commercial?.input == "fuel" && (
                    <p className="p-3 text-slate-500 text-justify ">
                      In case the plot is located on any Classified road in
                      Regional Plan area, the distance from the junction of
                      roads as may be specified by Indian Road Congress/
                      Ministry of Road, Transport and Highway, shall be
                      followed. (IRC guideline 2009 and MORTH Letter
                      No.RW/NH-33023/19/99-DOIII, Dated 25.09.2003 as amended
                      from time to time)
                    </p>
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
                    required
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
                    required
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
                  onChange={(e) => {
                    const value = parseFloat(e.target.value);
                    if (
                      (!isNaN(value) && value >= 0) ||
                      e.target.value === ""
                    ) {
                      handleChange(e);
                    }
                  }}
                  min="0"
                  className="w-full p-2 border-2 rounded-lg border-slate-400"
                  placeholder="Enter Building Height"
                  required
                />
              </div>
            </div>

            {/* <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-3 sm:w-1/2">8. Plot width:</div>
              <div className="px-4 py-3 sm:w-1/2">
                {" "}
                <input
                  type="number"
                  name="plotWidth"
                  value={formData.plotWidth}
                  onChange={(e) => {
                    const value = parseFloat(e.target.value);
                    if (
                      (!isNaN(value) && value >= 0) ||
                      e.target.value === ""
                    ) {
                      handleChange(e);
                    }
                  }}
                  min="0"
                  className="w-full p-2 border-2 rounded-lg border-slate-400"
                  placeholder="Enter Plot width"
                />
              </div>
            </div> */}

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-3 sm:w-1/2">8. Plot Area:</div>
              <div className="px-4 py-3 sm:w-1/2">
                {" "}
                <input
                  type="number"
                  name="plotArea"
                  value={formData.plotArea}
                  onChange={(e) => {
                    const value = parseFloat(e.target.value);
                    if (
                      (!isNaN(value) && value >= 0) ||
                      e.target.value === ""
                    ) {
                      handleChange(e);
                    }
                  }}
                  min="0"
                  className="w-full p-2 border-2 rounded-lg border-slate-400"
                  placeholder="Enter Plot Area"
                  required
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
                    required
                  >
                    <option value="">--Select Plot Type--</option>
                    <option value="rowHouse">Row House (Attached)</option>
                    <option value="twinHouse">
                      Twin Row House (Semi detached)
                    </option>
                    <option value="individualPlot">Individual Plot</option>
                  </select>
                </div>
              </div>
            )}

            {/* <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-3 sm:w-1/2">
                7. Single floor plate B/Up area:
              </div>
              <div className="px-4 py-3 sm:w-1/2">
                {" "}
                <input
                  type="number"
                  name="moreThan500"
                  value={formData.moreThan500}
                  onChange={(e) => {
                    const value = parseFloat(e.target.value);
                    if (
                      (!isNaN(value) && value >= 0) ||
                      e.target.value === ""
                    ) {
                      handleChange(e);
                    }
                  }}
                  min="0"
                  className="w-full p-2 border-2 rounded-lg border-slate-400"
                  placeholder="Enter B/Up area"
                  required
                />
              </div>
            </div> */}
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
                        required
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
                                checked={
                                  formData.roadDirection.right.radioInput ==
                                  "other"
                                }
                                required
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
                                checked={
                                  formData.roadDirection.right.radioInput ==
                                  "road"
                                }
                                required
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
                              required
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
                                        For streets 6.0 m. to less than 12.0 m.
                                        in width
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
                                        For streets / lane less than 4.5 m.
                                        width
                                      </option>
                                      <option value="9toBelow12">
                                        For streets 4.5 m. to less than 6.0 m.
                                        in width
                                      </option>

                                      <option value="12toBelow15">
                                        For streets 6.0 m. to less than 12.0 m.
                                        in width
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
                                checked={
                                  formData.roadDirection.left.radioInput ==
                                  "other"
                                }
                                required
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
                                checked={
                                  formData.roadDirection.left.radioInput ==
                                  "road"
                                }
                                required
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
                              required
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
                                        For streets 6.0 m. to less than 12.0 m.
                                        in width
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
                                        For streets / lane less than 4.5 m.
                                        width
                                      </option>
                                      <option value="9toBelow12">
                                        For streets 4.5 m. to less than 6.0 m.
                                        in width
                                      </option>

                                      <option value="12toBelow15">
                                        For streets 6.0 m. to less than 12.0 m.
                                        in width
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
                                checked={
                                  formData.roadDirection.back.radioInput ==
                                  "other"
                                }
                                required
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
                                checked={
                                  formData.roadDirection.back.radioInput ==
                                  "road"
                                }
                                required
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
                              required
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
                                        For streets 6.0 m. to less than 12.0 m.
                                        in width
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
                                        For streets / lane less than 4.5 m.
                                        width
                                      </option>
                                      <option value="9toBelow12">
                                        For streets 4.5 m. to less than 6.0 m.
                                        in width
                                      </option>

                                      <option value="12toBelow15">
                                        For streets 6.0 m. to less than 12.0 m.
                                        in width
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

            <div className="flex justify-center p-2 space-x-5">
              <button
                type="submit"
                className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </div>
          </div>
        </form>

        <div className=" w-full lg:w-[70%] p-5 mb-2 bg-slate-100 rounded-xl">
          <div ref={sectionRef} className=" text-md text-center">
            <div className="border-2  rounded-xl mb-4 bg-white">
              <div className="flex justify-evenly rounded-t-xl bg-yellow-400 py-2">
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

            <div className="border-2  rounded-xl mb-4 bg-white">
              <div className="flex justify-evenly rounded-t-xl bg-yellow-400 py-2">
                <p>Right Margin</p>
                <p>Adjacent Plot</p>
              </div>
              <div className="  ">
                <p className="p-4 text-2xl">
                  {formData.roadDirection.right.margin ||
                    "Enter data in required field"}
                </p>
              </div>
            </div>

            <div className="border-2  rounded-xl mb-4 bg-white">
              <div className="flex justify-evenly rounded-t-xl bg-yellow-400 py-2">
                <p>Left Margin</p>
                <p>Adjacent Plot</p>
              </div>
              <div className="  ">
                <p className="p-4 text-2xl">
                  {formData.roadDirection.left.margin ||
                    "Enter data in required field"}
                </p>
              </div>
            </div>

            <div className="border-2  rounded-xl mb-4 bg-white">
              <div className="flex justify-evenly rounded-t-xl bg-yellow-400 py-2">
                <p>Rear Margin</p>
                <p>Adjacent Plot</p>
              </div>
              <div className="  ">
                <p className="p-4 text-2xl">
                  {formData.roadDirection.back.margin ||
                    "Enter data in required field"}
                </p>
              </div>
            </div>
          </div>

          {formData.roadDirection.front.margin ? (
            <div className="mb-2 sm:px-10  p-2 rounded-2xl bg-slate-100 flex flex-col space-y-2">
              <button
                className="flex items-center gap-2  border-2 border-gray-300 rounded-xl"
                onClick={() => {
                  if (formData.maxPotential > 0) shareWhatsApp(sectionRef);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#fff"
                    d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                  ></path>
                  <path
                    fill="#cfd8dc"
                    d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                  ></path>
                  <path
                    fill="#40c351"
                    d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                  ></path>
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p>Share on WhatsApp</p>
              </button>
              <hr />
              <button
                className="flex items-center gap-2  border-2 border-gray-300 rounded-xl"
                onClick={() => {
                  if (formData.maxPotential > 0) shareViaEmail(sectionRef);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="35"
                  height="35"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#e0e0e0"
                    d="M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11v26C2,38.933,3.567,40.5,5.5,40.5z"
                  ></path>
                  <path
                    fill="#d9d9d9"
                    d="M26,40.5h16.5c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11L26,40.5z"
                  ></path>
                  <path
                    fill="#eee"
                    d="M6.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L6.745,40.5z"
                  ></path>
                  <path
                    fill="#e0e0e0"
                    d="M25.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L18.771,31.616L25.745,40.5z"
                  ></path>
                  <path
                    fill="#ca3737"
                    d="M42.5,9.5h-37C3.567,9.5,2,9.067,2,11v26c0,1.933,1.567,3.5,3.5,3.5H7V12h34v28.5h1.5c1.933,0,3.5-1.567,3.5-3.5V11C46,9.067,44.433,9.5,42.5,9.5z"
                  ></path>
                  <path
                    fill="#f5f5f5"
                    d="M42.5,7.5H24H5.5C3.567,7.5,2,9.036,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.036,44.433,7.5,42.5,7.5z"
                  ></path>
                  <path
                    fill="#e84f4b"
                    d="M43.246,7.582L24,21L4.754,7.582C3.18,7.919,2,9.297,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.297,44.82,7.919,43.246,7.582z"
                  ></path>
                </svg>
                <p>Share on Email</p>
              </button>
              <hr />
              <button
                className="flex items-center  border-2 border-gray-300 rounded-xl"
                onClick={() => {
                  if (formData.roadDirection.front.margin)
                    shareViaLinkHelper(sectionRef);
                }}
              >
                <img
                      width="40"
                      height="40"
                      src="https://img.icons8.com/fluency/48/copy.png"
                      alt="copy"
                    />
                {copied ? (
                  <h4 className="font-bold">Copied</h4>
                ) : (
                  <div className="flex items-center gap-2">
                    
                    <p>Copy link of your result.</p>
                  </div>
                )}
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
