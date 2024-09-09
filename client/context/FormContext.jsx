// "use client";

// import { createContext, useState, useContext } from "react";

// const FormContext = createContext();

// export function FormProvider({ children }) {
//   const [formData, setFormData] = useState({
//     owner: {
//       name: "",
//       email: "",
//       phone: "",
//     },
//     location: {
//       village: "",
//       taluka: "",
//       district: "",
//       ulb: "",
//       zone: "",
//     },
//     plot: {
//       sizex: null,
//       sizey: null,
//       area: null,
//       roadWidth: null,
//     },
//     fsi: {
//       area: null,
//       deductions: {
//         proposedDp: null,
//         anyDp: null,
//       },
//       aminitySpace: {
//         required: null,
//         adj2b: null,
//         balanceProposed: null,
//       },
//       recreationOpenSpace: {
//         required: null,
//         proposed: null,
//       },
//       internalRoadArea: null,
//       plotableArea: null,
//       paymentOfPremium: {
//         maxPremium: null,
//         proposedPremium: null,
//       },
//       inSituLoading: {
//         tdrArea: null,
//       },
//       additinalFsi: null,
//       totalEntitlementProposed: {
//         ancillaryArea: null,
//       },
//       maxUtilizationLimit: null,
//       totalBuiltUpAreaProposal: {
//         existingBuiltUpArea: null,
//         proposedBuiltUpAreaPLine: null,
//       },
//       FSIConsumed: null,
//       areOfInclusiveHousing: {
//         proposed: null,
//       },
//     },
//   });

//   const updateFormData = (step, data) => {
//     setFormData((prev) => ({
//       ...prev,
//       [step]: {
//         ...prev[step],
//         ...data,
//       },
//     }));
//   };

//   return (
//     <FormContext.Provider value={{ formData, updateFormData }}>
//       {children}
//     </FormContext.Provider>
//   );
// }

// export function useFormData() {
//   return useContext(FormContext);
// }
