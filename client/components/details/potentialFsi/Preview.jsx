"use client";

import React from "react";

export default function PreviewPage({ formData }) {
  return (
    <div className="  p-6">
      <div className=" shadow-md rounded-lg md:flex mx-auto">
        <div className="bg-white p-6">
          <h1 className="text-2xl flex justify-center font-bold text-gray-800 mb-6">
            Form Preview
          </h1>

          <div className="w-full mb-2 flex flex-col gap-y-2">
            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">
                1. Proposed Project Name:
              </div>
              <div className="px-4 py-2 sm:w-1/2">
                {formData.projectName || "N/A"}
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">2. Building Type:</div>
              <div className="px-4 py-2 sm:w-1/2">
                {formData.buildingType.input || "N/A"}
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">3. Area Type:</div>
              <div className="px-4 py-2 sm:w-1/2">
                {formData.areaType || "N/A"}
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">4. ULB:</div>
              <div className="px-4 py-2 sm:w-1/2">{formData.ulb || "N/A"}</div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">5. Plot Area:</div>
              <div className="px-4 py-2 sm:w-1/2">
                {formData.area ? `${formData.area} Sq. Meter` : "N/A"}
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">6. Pro-Rata Factor:</div>
              <div className="px-4 py-2 sm:w-1/2">
                {formData.proRata || "N/A"}
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">
                7. {formData.proRata ? "Notional" : "Net"} Plot Area (Sq.
                Meter):
              </div>
              <div className="px-4 py-2 sm:w-1/2">
                {formData.builtUp ? `${formData.builtUp} Sq. Meter` : "N/A"}
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">8. Road Width:</div>
              <div className="px-4 py-2 sm:w-1/2">
                {formData.roadWidth || "N/A"}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Maximum Potential FSI
          </h1>
          <div className="flex items-center justify-center">
            <h1 className=" font-bold text-4xl">
              {formData.maxPotential + "Sq. Meter"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
