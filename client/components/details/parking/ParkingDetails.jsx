import { useEffect, useRef } from "react";

export default function ParkingDetails({
  formData,
  handleChange,
  handleNestedChange,
  handleSubmit,
  setFormData,
  handleMoreNestedChange,
  shareViaEmail,
  shareWhatsApp,
}) {
  const sectionRef = useRef(); // Reference to the section to convert to PDF

  if (formData.residential?.multi) {
    formData.residential.multi.above5PercentCar =
      (parseInt(formData.residential.multi.area150above || 0) * 2 +
        parseInt(formData.residential.multi.area80To150 || 0) +
        parseInt(formData.residential.multi.area40To80 || 0) +
        parseInt(formData.residential.multi.area30To40 || 0)) *
      1.05;

    formData.residential.multi.ulbForAboveCar =
      parseFloat(formData.residential.multi.above5PercentCar) *
      parseFloat(formData.ulb);

    if (formData.areaType == "congested") {
      formData.residential.multi.above5PercentScooter =
        (parseInt(formData.residential.multi.area150above || 0) +
          parseInt(formData.residential.multi.area80To150 || 0) +
          parseInt(formData.residential.multi.area40To80 || 0) * 2 +
          parseInt(formData.residential.multi.area30To40 || 0) +
          parseInt(formData.residential.multi.areaLess30 || 0) * 2) *
        1.05;

      formData.residential.multi.ulbForAboveScooter = parseFloat(
        formData.residential.multi.above5PercentScooter
      );
    } else {
      formData.residential.multi.above5PercentScooter =
        (parseInt(formData.residential.multi.area150above || 0) +
          parseInt(formData.residential.multi.area80To150 || 0) +
          parseInt(formData.residential.multi.area40To80 || 0) * 2 +
          parseInt(formData.residential.multi.area30To40 || 0) * 2 +
          parseInt(formData.residential.multi.areaLess30 || 0) * 2) *
        1.05;

      formData.residential.multi.ulbForAboveScooter = parseFloat(
        formData.residential.multi.above5PercentScooter
      );
    }
  }

  if (formData.buildingType == "govOrPublicOrPrivate") {
    formData.govOrPublicOrPrivate.visitor.scooter =
      (parseFloat(formData.govOrPublicOrPrivate.input) / 100) * 12 * 0.2;

    if (formData.areaType == "congested") {
      formData.govOrPublicOrPrivate.visitor.car =
        (parseFloat(formData.govOrPublicOrPrivate.input) / 100) * 0.2;
    } else if (formData.areaType == "non-congested") {
      formData.govOrPublicOrPrivate.visitor.car =
        (parseFloat(formData.govOrPublicOrPrivate.input) / 100) * 2 * 0.2;
    }
  }

  const handleAreaTypeRadioChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      areaType: e.target.value,
    }));
  };

  const handleZoneRadioChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      zone: e.target.value,
    }));
  };

  return (
    <>
      <div ref={sectionRef} className="p-2">
        <form onSubmit={handleSubmit}>
          <div className="lg:flex gap-x-2  p-2">
            <div className="flex flex-col mb-2 gap-y-2">
              <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2">1. Project Name:</div>
                <div className="px-4 py-2 sm:w-1/2">
                  {" "}
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded-lg border-slate-400 "
                    placeholder="Enter your project name"
                    required
                  />
                </div>
              </div>

              <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2">1. ULB:</div>
                <div className="px-4 py-2 sm:w-1/2">
                  <select
                    name="ulb"
                    value={formData.ulb}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                    required
                  >
                    <option value="">--Select ULB--</option>
                    <option value={1}>
                      Pune, Pimpri-Chinchwad and Thane Municipal Corporation
                      area and PCNTDA area
                    </option>
                    <option value={0.9}>
                      Nagpur, Nashik Municipal Corporation area
                    </option>
                    <option value={0.8}>
                      Other Municipal Corporations in MMR area except Thane M.C.
                    </option>
                    <option value={0.7}>
                      Remaining Municipal Corporations not covered at Sr. No. 1
                      to 3 and 5, Metropolitan Area Development Authority / Area
                      Development Authority/ SPA area
                    </option>
                    <option value={0.6}>
                      &apos;D&apos; Class Municipal Corporation area except at
                      Sr. No.3 OR &apos;A&apos; Class Municipal Council area.
                    </option>
                    <option value={0.5}>
                      &apos;B&apos; and &apos;C&apos; Class Municipal Council
                      area.
                    </option>
                    <option value={0.4}>
                      Nagar Panchayat, Non Municipal Town Development Plan area
                      and areas in Regional Plan
                    </option>
                  </select>
                </div>
              </div>

              <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2"> 2. Area Type:</div>
                <div className="flex px-4 py-3 lg:flex-col sm:w-1/2">
                  <label className="flex-1">
                    <input
                      type="radio"
                      name="areaType"
                      value="congested"
                      checked={formData.areaType === "congested"}
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleAreaTypeRadioChange}
                    />
                    <span className="ml-2 text-gray-700">Congested</span>
                  </label>
                  <label className="flex-1 ">
                    <input
                      type="radio"
                      name="areaType"
                      value="non-congested"
                      checked={formData.areaType === "non-congested"}
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleAreaTypeRadioChange}
                    />
                    <span className="ml-2 text-gray-700">Non-congested</span>
                  </label>
                </div>
              </div>

              <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2">3. Zone:</div>
                <div className="flex px-4 py-3 lg:flex-col sm:w-1/2">
                  <label className="flex-1 ">
                    <input
                      type="radio"
                      name="zone"
                      value="yellow"
                      checked={formData.zone === "yellow"}
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleZoneRadioChange}
                    />
                    <span className="ml-2 text-gray-700">Yellow</span>
                  </label>
                  {formData.areaType !== "congested" && (
                    <label className="flex-1 ">
                      <input
                        type="radio"
                        name="zone"
                        value="green"
                        checked={formData.zone === "green"}
                        className="w-4 h-4 text-blue-600 form-radio"
                        onChange={handleZoneRadioChange}
                      />
                      <span className="ml-2 text-gray-700">Green</span>
                    </label>
                  )}
                </div>
              </div>

              <div className=" even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="sm:flex">
                  <div className="px-4 py-3 sm:w-1/2">4. Building Type:</div>
                  <div className="px-4 py-3 sm:w-1/2">
                    <select
                      name="buildingType"
                      value={formData.buildingType}
                      onChange={handleChange}
                      className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                    >
                      <option value="">--Select Building Type--</option>
                      <option value="residential">Residential</option>
                      <option value="institutional">Institutional</option>
                      <option value="publicGathering">Public Gathering</option>
                      <option value="educational">Educational</option>
                      <option value="govOrPublicOrPrivate">
                        Government or semi-public or private business buildings
                      </option>
                      <option value="mercantile">Mercantile</option>
                      <option value="industrial">Industrial</option>
                      <option value="storage">Storage</option>
                      <option value="dataCentre"> Data Centre</option>
                    </select>
                  </div>
                </div>

                {formData.buildingType == "residential" && (
                  <>
                    <div className="sm:flex ">
                      <div className="px-4 py-3 sm:w-1/2"> 5. Occupancy:</div>
                      <div className="px-4 py-3 sm:w-1/2">
                        <select
                          name="residential.input"
                          value={formData.residential.input}
                          onChange={handleNestedChange}
                          className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                        >
                          <option value="">--Select Residential Area--</option>
                          <option value="multi">
                            Multi- Family residential
                          </option>
                          <option value="lodge">
                            Lodging establishment&apos;s tourist homes, hotels
                            with lodging accommodation, Star Category Hotels
                          </option>
                          <option value="restaurants">Restaurants</option>
                        </select>
                      </div>
                    </div>

                    {formData.residential?.input == "multi" && (
                      <>
                        <div className="sm:flex">
                          <div className="px-4 py-3 sm:w-1/2">
                            a. For every tenement having carpet area of 150sq.m.
                            and above:
                          </div>
                          <div className="flex px-4 py-3 flex-col sm:w-1/2">
                            <input
                              type="number"
                              name="residential.multi.area150above"
                              value={formData.residential.multi.area150above}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (
                                  (!isNaN(value) && value >= 0) ||
                                  e.target.value === ""
                                ) {
                                  handleMoreNestedChange(e);
                                }
                              }}
                              min="0"
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              <b>
                                Car(s):{"0"}
                                {2 * formData.residential.multi.area150above ||
                                  "0"}
                              </b>
                              <b>
                                Scooter(s):{"0"}
                                {formData.residential.multi.area150above || "0"}
                              </b>
                            </div>
                          </div>
                        </div>

                        <div className="sm:flex">
                          <div className="px-4 py-3 sm:w-1/2">
                            b. For every tenement having carpet area equal to or
                            above 80 sq.m. but less than 150 sq.m.:
                          </div>
                          <div className="flex px-4 py-3 flex-col sm:w-1/2">
                            <input
                              type="number"
                              name="residential.multi.area80To150"
                              value={formData.residential.multi.area80To150}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (
                                  (!isNaN(value) && value >= 0) ||
                                  e.target.value === ""
                                ) {
                                  handleMoreNestedChange(e);
                                }
                              }}
                              min="0"
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              <b>
                                Car(s):{"0"}
                                {formData.residential.multi.area80To150 || "0"}
                              </b>
                              <b>
                                Scooter(s):{"0"}
                                {formData.residential.multi.area80To150 || "0"}
                              </b>
                            </div>
                          </div>
                        </div>

                        <div className="sm:flex">
                          <div className="px-4 py-3 sm:w-1/2">
                            c. For every two tenements with each tenement having
                            carpet area equal to or above 40 sq.m. but less than
                            80 sq.m.:
                          </div>
                          <div className="flex px-4 py-3 flex-col sm:w-1/2">
                            <input
                              type="number"
                              name="residential.multi.area40To80"
                              value={formData.residential.multi.area40To80}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (
                                  (!isNaN(value) && value >= 0) ||
                                  e.target.value === ""
                                ) {
                                  handleMoreNestedChange(e);
                                }
                              }}
                              min="0"
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              <b>
                                Car(s):{"0"}
                                {formData.residential.multi.area40To80 || "0"}
                              </b>
                              <b>
                                Scooter(s):{"0"}
                                {2 * formData.residential.multi.area40To80 ||
                                  "0"}
                              </b>
                            </div>
                          </div>
                        </div>

                        <div className="sm:flex">
                          <div className="px-4 py-3 sm:w-1/2">
                            d. For every two tenements with each tenement having
                            carpet area less than 40 Sq.m. but more than 30
                            sq.m.:
                          </div>
                          <div className="flex px-4 py-3 flex-col sm:w-1/2">
                            <input
                              type="number"
                              name="residential.multi.area30To40"
                              value={formData.residential.multi.area30To40}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (
                                  (!isNaN(value) && value >= 0) ||
                                  e.target.value === ""
                                ) {
                                  handleMoreNestedChange(e);
                                }
                              }}
                              min="0"
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              {formData.areaType === "congested" ? (
                                <>
                                  <b>
                                    Car(s):{"0"}
                                    {formData.residential.multi.area30To40 ||
                                      "0"}
                                  </b>
                                  <b>
                                    Scooter(s):{"0"}
                                    {formData.residential.multi.area30To40 ||
                                      "0"}
                                  </b>
                                </>
                              ) : (
                                <>
                                  <b>
                                    Car(s):{"0"}
                                    {formData.residential.multi.area30To40 ||
                                      "0"}
                                  </b>
                                  <b>
                                    Scooter(s):{"0"}
                                    {2 *
                                      formData.residential.multi.area30To40 ||
                                      "0"}
                                  </b>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="sm:flex">
                          <div className="px-4 py-3 sm:w-1/2">
                            e. For every two tenements with each tenement having
                            carpet area less than 30 Sq.m:
                          </div>
                          <div className="flex px-4 py-3 flex-col sm:w-1/2">
                            <input
                              type="number"
                              name="residential.multi.areaLess30"
                              value={formData.residential.multi.areaLess30}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (
                                  (!isNaN(value) && value >= 0) ||
                                  e.target.value === ""
                                ) {
                                  handleMoreNestedChange(e);
                                }
                              }}
                              min="0"
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              <b>Car(s): {"00"}</b>
                              <b>
                                Scooter(s):{"0"}
                                {2 * formData.residential.multi.areaLess30 ||
                                  "0"}
                              </b>
                            </div>
                          </div>
                        </div>

                        <div className="sm:flex">
                          <div className="px-4 py-3 sm:w-1/2">
                            f. After 5% calculation:
                          </div>
                          <div className="flex px-4 py-3 space-x-8 sm:w-1/2">
                            <b className="w-[50%] flex items-center">
                              Car(s):
                              <span className="text-2xl px-2">
                                {Math.ceil(
                                  formData.residential.multi.above5PercentCar
                                ) || "Enter data in required field"}
                              </span>
                            </b>
                            <b className="w-[50%] flex items-center">
                              Scooter(s):
                              <span className="text-2xl px-2">
                                {Math.ceil(
                                  formData.residential.multi
                                    .above5PercentScooter
                                ) || "Enter data in required field"}
                              </span>
                            </b>
                          </div>
                        </div>

                        <div className="sm:flex">
                          <div className="px-4 py-3 sm:w-1/2">
                            5. ULB for above choosen option after 5%
                            calculation:
                          </div>
                          <div className="flex px-4 py-3 space-y-2 sm:w-1/2">
                            <b className="w-[50%] flex items-center">
                              Car(s):
                              <span className="text-2xl px-2">
                                {Math.ceil(
                                  formData.residential.multi.ulbForAboveCar
                                ) || "Enter data in required field"}
                              </span>
                            </b>
                            <b className="w-[50%] flex items-center">
                              Scooter(s):
                              <span className="text-2xl px-2">
                                {Math.ceil(
                                  formData.residential.multi.ulbForAboveScooter
                                ) || "Enter data in required field"}
                              </span>
                            </b>
                          </div>
                        </div>
                      </>
                    )}

                    {formData.residential?.input == "lodge" && (
                      <>
                        <div className="sm:flex">
                          <div className="px-4 py-3 sm:w-1/2">
                            Number of Guest rooms:
                          </div>
                          <div className="flex px-4 py-3 flex-col sm:w-1/2">
                            <input
                              type="number"
                              name="residential.lodge"
                              value={formData.residential.lodge}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (
                                  (!isNaN(value) && value >= 0) ||
                                  e.target.value === ""
                                ) {
                                  handleNestedChange(e);
                                }
                              }}
                              min="0"
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              {formData.areaType === "congested" ? (
                                <>
                                  <b>
                                    Car(s):{"0"}
                                    {Math.round(
                                      formData.residential.lodge / 5
                                    ) || "0"}
                                  </b>
                                  <b>
                                    Scooter(s):{"0"}
                                    {Math.round(
                                      (4 * formData.residential.lodge) / 5
                                    ) || "0"}
                                  </b>
                                </>
                              ) : (
                                <>
                                  <b>
                                    Car(s):{"0"}
                                    {Math.round(
                                      formData.residential.lodge / 5
                                    ) || "0"}
                                  </b>
                                  <b>
                                    Scooter(s):{"0"}
                                    {Math.round(
                                      (6 * formData.residential.lodge) / 5
                                    ) || "0"}
                                  </b>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {formData.residential?.input == "restaurants" && (
                      <>
                        <div className="sm:flex">
                          <div className="px-4 py-3 sm:w-1/2">
                            For every 50 sq.m. of carpet area of restaurant
                            including kitchen, pantry hall, dining room etc.:
                          </div>
                          <div className="flex px-4 py-3 flex-col sm:w-1/2">
                            <input
                              type="number"
                              name="residential.restaurants"
                              value={formData.residential.restaurants}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (
                                  (!isNaN(value) && value >= 0) ||
                                  e.target.value === ""
                                ) {
                                  handleNestedChange(e);
                                }
                              }}
                              min="0"
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              {formData.areaType === "congested" ? (
                                <>
                                  <b>
                                    Car(s):{"0"}
                                    {"0"}
                                  </b>
                                  <b>
                                    Scooter(s):{"0"}
                                    {Math.round(
                                      (8 * formData.residential.restaurants) /
                                        50
                                    ) || "0"}
                                  </b>
                                </>
                              ) : (
                                <>
                                  <b>
                                    Car(s):{"0"}
                                    {Math.round(
                                      formData.residential.restaurants / 50
                                    ) || "0"}
                                  </b>
                                  <b>
                                    Scooter(s):{"0"}
                                    {Math.round(
                                      (8 * formData.residential.restaurants) /
                                        50
                                    ) || "0"}
                                  </b>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}

                {formData.buildingType == "institutional" && (
                  <>
                    <div className="sm:flex ">
                      <div className="px-4 py-3 sm:w-1/2">
                        For every 10 beds :
                      </div>
                      <div className="flex px-4 py-3 flex-col sm:w-1/2">
                        <input
                          type="number"
                          name="institutional"
                          value={formData.institutional}
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
                          className="w-full p-2 border-2 rounded border-slate-400"
                        />
                        <div className="flex items-center px-4 space-x-10 ">
                          {formData.areaType === "congested" ? (
                            <>
                              <b>
                                Car(s):{"0"}
                                {Math.round(
                                  (2 * formData.institutional) / 10
                                ) || "0"}
                              </b>
                              <b>
                                Scooter(s):{"0"}
                                {Math.round(
                                  (12 * formData.institutional) / 10
                                ) || "0"}
                              </b>
                            </>
                          ) : (
                            <>
                              <b>
                                Car(s):{"0"}
                                {Math.round(
                                  (3 * formData.institutional) / 10
                                ) || "0"}
                              </b>
                              <b>
                                Scooter(s):{"0"}
                                {Math.round(
                                  (10 * formData.institutional) / 10
                                ) || "0"}
                              </b>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {formData.buildingType == "publicGathering" && (
                  <>
                    <div className="sm:flex">
                      <div className="px-4 py-3 sm:w-1/2">5. Occupancy:</div>
                      <div className="px-4 py-3 sm:w-1/2">
                        <select
                          name="publicGathering.input"
                          value={formData.publicGathering.input}
                          onChange={handleNestedChange}
                          className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                        >
                          <option value="">--Select Public Gathering--</option>
                          <option value="assembly">
                            Assembly (theatres, cinema houses, concert halls,
                            auditoria, assembly halls including those of college
                            and hostels)
                          </option>
                          <option value="multiplex">Multiplexes</option>
                          <option value="mangalKaryalaya">
                            Mangal karyalaya / Marriage Halls, Cultural Halls
                            and Banquet Hall
                          </option>
                          <option value="communityHall">
                            Community hall and club house in layout open
                            space(applicable only for open spaces having area
                            4000 sq.m. and more)
                          </option>
                        </select>
                      </div>
                    </div>

                    {formData.publicGathering?.input == "assembly" && (
                      <>
                        <div className="sm:flex">
                          <div className="px-4 py-3 sm:w-1/2">
                            {" "}
                            For every 40 seats :
                          </div>
                          <div className="flex px-4 py-3 flex-col sm:w-1/2">
                            <input
                              type="number"
                              name="publicGathering.assembly"
                              value={formData.publicGathering.assembly}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (
                                  (!isNaN(value) && value >= 0) ||
                                  e.target.value === ""
                                ) {
                                  handleNestedChange(e);
                                }
                              }}
                              min="0"
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              <b>
                                Car(s):{"0"}
                                {Math.round(
                                  (4 * formData.publicGathering.assembly) / 40
                                ) || "0"}
                              </b>
                              <b>
                                Scooter(s):{"0"}
                                {Math.round(
                                  (16 * formData.publicGathering.assembly) / 40
                                ) || "0"}
                              </b>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {formData.publicGathering?.input == "multiplex" && (
                      <>
                        <div className="sm:flex">
                          <div className="px-4 py-3 sm:w-1/2">
                            For every 40 seats :
                          </div>
                          <div className="flex px-4 py-3 flex-col sm:w-1/2">
                            <input
                              type="number"
                              name="publicGathering.multiplex"
                              value={formData.publicGathering.multiplex}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (
                                  (!isNaN(value) && value >= 0) ||
                                  e.target.value === ""
                                ) {
                                  handleNestedChange(e);
                                }
                              }}
                              min="0"
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              <b>
                                Car(s):{"0"}
                                {Math.round(
                                  (5 * formData.publicGathering.multiplex) / 40
                                ) || "0"}
                              </b>
                              <b>
                                Scooter(s):{"0"}
                                {Math.round(
                                  (14 * formData.publicGathering.multiplex) / 40
                                ) || "0"}
                              </b>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {formData.publicGathering?.input == "mangalKaryalaya" && (
                      <>
                        <div className="sm:flex">
                          <div className="px-4 py-3 sm:w-1/2">
                            For every 100 sq.m. carpet area / lawn area of
                            fraction thereof :
                          </div>
                          <div className="flex px-4 py-3 flex-col sm:w-1/2">
                            <input
                              type="number"
                              name="publicGathering.mangalKaryalaya"
                              value={formData.publicGathering.mangalKaryalaya}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (
                                  (!isNaN(value) && value >= 0) ||
                                  e.target.value === ""
                                ) {
                                  handleNestedChange(e);
                                }
                              }}
                              min="0"
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              <b>
                                Car(s):{"0"}
                                {Math.round(
                                  formData.publicGathering.mangalKaryalaya / 100
                                ) || "0"}
                              </b>
                              <b>
                                Scooter(s):{"0"}
                                {Math.round(
                                  (5 *
                                    formData.publicGathering.mangalKaryalaya) /
                                    100
                                ) || "0"}
                              </b>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {formData.publicGathering?.input == "communityHall" && (
                      <>
                        <div className="sm:flex">
                          <div className="px-4 py-3 sm:w-1/2">
                            For every 200 sq.m. carpet area :
                          </div>
                          <div className="flex px-4 py-3 flex-col sm:w-1/2">
                            <input
                              type="number"
                              name="publicGathering.communityHall"
                              value={formData.publicGathering.communityHall}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (
                                  (!isNaN(value) && value >= 0) ||
                                  e.target.value === ""
                                ) {
                                  handleNestedChange(e);
                                }
                              }}
                              min="0"
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              <b>
                                Car(s):{"0"}
                                {Math.round(
                                  formData.publicGathering.communityHall / 200
                                ) || "0"}
                              </b>
                              <b>
                                Scooter(s):{"0"}
                                {Math.round(
                                  (5 * formData.publicGathering.communityHall) /
                                    200
                                ) || "0"}
                              </b>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}

                {formData.buildingType == "educational" && (
                  <>
                    <div className="sm:flex ">
                      <div className="px-4 py-3 sm:w-1/2">5. Occupancy:</div>
                      <div className="flex px-4 py-3 flex-col sm:w-1/2">
                        <select
                          name="educational.input"
                          value={formData.educational.input}
                          onChange={handleNestedChange}
                          className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                        >
                          <option value="">--Select Educational Area--</option>
                          <option value="schools">
                            Educational Schools and the administrative as well
                            as public service areas therein
                          </option>
                          <option value="college">
                            College and administrative as well as public service
                            area therein
                          </option>
                          <option value="coaching">
                            Coaching Classes / Tuition Classes / Hobby Classes
                          </option>
                        </select>
                      </div>
                    </div>

                    {formData.educational?.input == "schools" && (
                      <>
                        <div className="sm:flex ">
                          <div className="px-4 py-3 sm:w-1/2">
                            For every 100 sq.m. carpet area of the
                            administrative as well as public service area of the
                            school :
                          </div>
                          <div className="flex px-4 py-3 flex-col sm:w-1/2">
                            <input
                              type="number"
                              name="educational.schools.forEvery100sqm"
                              value={
                                formData.educational.schools.forEvery100sqm
                              }
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (
                                  (!isNaN(value) && value >= 0) ||
                                  e.target.value === ""
                                ) {
                                  handleMoreNestedChange(e);
                                }
                              }}
                              min="0"
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              {formData.areaType === "congested" ? (
                                <b>
                                  Car(s):{"0"}
                                  {Math.round(
                                    formData.educational.schools
                                      .forEvery100sqm / 100
                                  ) || "0"}
                                </b>
                              ) : (
                                <b>
                                  Car(s):{"0"}
                                  {Math.round(
                                    (2 *
                                      formData.educational.schools
                                        .forEvery100sqm) /
                                      100
                                  ) || "0"}
                                </b>
                              )}
                              <b>
                                Scooter(s):{"0"}
                                {Math.round(
                                  (4 *
                                    formData.educational.schools
                                      .forEvery100sqm) /
                                    100
                                ) || "0"}
                              </b>
                            </div>
                          </div>
                        </div>

                        <div className="sm:flex ">
                          <div className="px-4 py-3 sm:w-1/2">
                            Number of class rooms :
                          </div>
                          <div className="flex px-4 py-3 flex-col sm:w-1/2">
                            <input
                              type="number"
                              name="educational.schools.classRooms"
                              value={formData.educational.schools.classRooms}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (
                                  (!isNaN(value) && value >= 0) ||
                                  e.target.value === ""
                                ) {
                                  handleMoreNestedChange(e);
                                }
                              }}
                              min="0"
                              className="p-2 border-2 rounded border-slate-400"
                            />

                            <b className="px-4 ">
                              Scooter(s):{"0"}
                              {Math.round(
                                (5 * formData.educational.schools.classRooms) /
                                  3
                              ) || "0"}
                            </b>
                          </div>
                        </div>

                        <div className="sm:flex ">
                          <div className="px-4 py-3 sm:w-1/2">
                            Number of students :
                          </div>
                          <div className="flex px-4 py-3 flex-col sm:w-1/2">
                            <input
                              type="number"
                              name="educational.schools.students"
                              value={formData.educational.schools.students}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (
                                  (!isNaN(value) && value >= 0) ||
                                  e.target.value === ""
                                ) {
                                  handleMoreNestedChange(e);
                                }
                              }}
                              min="0"
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <b className="px-4 ">
                              Mini Bus(es):{"0"}
                              {Math.round(
                                formData.educational.schools.students / 40
                              ) || "0"}
                            </b>
                          </div>
                        </div>
                      </>
                    )}

                    {formData.educational?.input == "college" && (
                      <>
                        <div className="sm:flex ">
                          <div className="px-4 py-3 sm:w-1/2">
                            For every 100 sq.m. carpet area of the
                            administrative as well as public service area of the
                            school :
                          </div>
                          <div className="flex px-4 py-3 flex-col sm:w-1/2">
                            <input
                              type="number"
                              name="educational.college.forEvery100sqm"
                              value={
                                formData.educational.college.forEvery100sqm
                              }
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (
                                  (!isNaN(value) && value >= 0) ||
                                  e.target.value === ""
                                ) {
                                  handleMoreNestedChange(e);
                                }
                              }}
                              min="0"
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              {formData.areaType === "congested" ? (
                                <>
                                  <b>
                                    Car(s):{"0"}
                                    {Math.round(
                                      formData.educational.college
                                        .forEvery100sqm / 100
                                    ) || "0"}
                                  </b>
                                  <b>
                                    Scooter(s):{"0"}
                                    {Math.round(
                                      (12 *
                                        formData.educational.college
                                          .forEvery100sqm) /
                                        100
                                    ) || "0"}
                                  </b>
                                </>
                              ) : (
                                <>
                                  <b>
                                    Car(s):{"0"}
                                    {Math.round(
                                      (2 *
                                        formData.educational.college
                                          .forEvery100sqm) /
                                        100
                                    ) || "0"}
                                  </b>
                                  <b>
                                    Scooter(s):{"0"}
                                    {Math.round(
                                      (17 *
                                        formData.educational.college
                                          .forEvery100sqm) /
                                        100
                                    ) || "0"}
                                  </b>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="sm:flex ">
                          <div className="px-4 py-3 sm:w-1/2">
                            Number of class rooms :
                          </div>
                          <div className="flex px-4 py-3 flex-col sm:w-1/2">
                            <input
                              type="number"
                              name="educational.college.forEvery3Classroom"
                              value={
                                formData.educational.college.forEvery3Classroom
                              }
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (
                                  (!isNaN(value) && value >= 0) ||
                                  e.target.value === ""
                                ) {
                                  handleMoreNestedChange(e);
                                }
                              }}
                              min="0"
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              {formData.areaType === "congested" ? (
                                <b>
                                  Car(s):{"0"}
                                  {Math.round(
                                    formData.educational.college
                                      .forEvery3Classroom / 3
                                  ) || "0"}
                                </b>
                              ) : (
                                <b>
                                  Car(s):{"0"}
                                  {Math.round(
                                    (2 *
                                      formData.educational.college
                                        .forEvery3Classroom) /
                                      3
                                  ) || "0"}
                                </b>
                              )}
                              <b>
                                Scooter(s):{"0"}
                                {Math.round(
                                  (24 *
                                    formData.educational.college
                                      .forEvery3Classroom) /
                                    3
                                ) || "0"}
                              </b>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {formData.educational?.input == "coaching" && (
                      <>
                        <div className="sm:flex ">
                          <div className="px-4 py-3 sm:w-1/2">
                            Number of students :
                          </div>
                          <div className="flex px-4 py-3 flex-col sm:w-1/2">
                            <input
                              type="number"
                              name="educational.coaching"
                              value={formData.educational.coaching}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (
                                  (!isNaN(value) && value >= 0) ||
                                  e.target.value === ""
                                ) {
                                  handleNestedChange(e);
                                }
                              }}
                              min="0"
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              <b>
                                Car(s):{"0"}
                                {Math.round(
                                  formData.educational.coaching / 20
                                ) || "0"}
                              </b>
                              <b>
                                Scooter(s):{"0"}
                                {Math.round(
                                  (9 * formData.educational.coaching) / 20
                                ) || "0"}
                              </b>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}

                {formData.buildingType == "govOrPublicOrPrivate" && (
                  <>
                    <div className="sm:flex ">
                      <div className="px-4 py-3 sm:w-1/2">
                        Government or semi public or private business buildings.
                        For every 100 sq.m. carpet area or fraction thereof :
                      </div>
                      <div className="flex px-4 py-3 flex-col sm:w-1/2">
                        <input
                          type="number"
                          name="govOrPublicOrPrivate.input"
                          value={formData.govOrPublicOrPrivate.input}
                          onChange={(e) => {
                            const value = parseFloat(e.target.value);
                            if (
                              (!isNaN(value) && value >= 0) ||
                              e.target.value === ""
                            ) {
                              handleNestedChange(e);
                            }
                          }}
                          min="0"
                          className="w-full p-2 border-2 rounded border-slate-400"
                        />
                        <div className="flex items-center px-4 space-x-10 ">
                          {formData.areaType === "congested" ? (
                            <b>
                              Car(s):{"0"}
                              {Math.round(
                                formData.govOrPublicOrPrivate.input / 100
                              ) || "0"}
                            </b>
                          ) : (
                            <b>
                              Car(s):{"0"}
                              {Math.round(
                                (2 * formData.govOrPublicOrPrivate.input) / 100
                              ) || "0"}
                            </b>
                          )}
                          <b>
                            Scooter(s):{"0"}
                            {Math.round(
                              (12 * formData.govOrPublicOrPrivate.input) / 100
                            ) || "0"}
                          </b>
                        </div>
                      </div>
                    </div>

                    <div className="sm:flex ">
                      <div className="px-4 py-3 sm:w-1/2">
                        20% visitor parking:
                      </div>
                      <div className="flex px-4 py-3 flex-col sm:w-1/2">
                        <b>
                          Car(s):
                          {Math.ceil(
                            formData.govOrPublicOrPrivate.visitor.car
                          ) || "Enter data in required field"}
                        </b>
                        <b>
                          Scooter(s):
                          {Math.ceil(
                            formData.govOrPublicOrPrivate.visitor.scooter
                          ) || "Enter data in required field"}
                        </b>
                      </div>
                    </div>

                    <div className="sm:flex ">
                      <div className="px-4 py-3 sm:w-1/2">Total parking:</div>
                      <div className="flex px-4 py-3 flex-col sm:w-1/2">
                        {formData.areaType === "congested" ? (
                          <b>
                            Car(s):{"0"}
                            {Math.round(
                              formData.govOrPublicOrPrivate.input / 100 +
                                Math.ceil(
                                  formData.govOrPublicOrPrivate.visitor.car
                                )
                            ) || "0"}
                          </b>
                        ) : (
                          <b>
                            Car(s):{"0"}
                            {Math.round(
                              (2 * formData.govOrPublicOrPrivate.input) / 100 +
                              Math.ceil(
                                formData.govOrPublicOrPrivate.visitor.car
                              )
                            ) || "0"}
                          </b>
                        )}
                        <b>
                          Scooter(s):{"0"}
                          {Math.round(
                            (12 * formData.govOrPublicOrPrivate.input) / 100 +
                            Math.ceil(
                              formData.govOrPublicOrPrivate.visitor.scooter
                            )
                          ) || "0"}
                        </b>
                      </div>
                    </div>
                  </>
                )}

                {formData.buildingType == "mercantile" && (
                  <>
                    <div className="sm:flex ">
                      <div className="px-4 py-3 sm:w-1/2">5. Occupancy:</div>
                      <div className="flex px-4 py-3 flex-col sm:w-1/2">
                        <select
                          name="mercantile.input"
                          value={formData.mercantile.input}
                          onChange={handleNestedChange}
                          className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                        >
                          <option value="">--Select Mercantile Area--</option>
                          <option value="marketStoresShops">
                            Markets, departmental stores, shops and other
                            Commercials users
                          </option>
                          <option value="wholeSale">
                            Whole sale shops not being used for retail trading.
                          </option>
                          <option value="hazardousBuilding">
                            Hazardous building
                          </option>
                          <option value="officeItBuilding">
                            Office and I.T. building
                          </option>
                        </select>
                      </div>
                    </div>

                    {formData.mercantile?.input == "marketStoresShops" && (
                      <>
                        <div className="sm:flex ">
                          <div className="px-4 py-3 sm:w-1/2">
                            For every 100 sq.m. carpet area or fraction thereof:
                          </div>
                          <div className="flex px-4 py-3 flex-col sm:w-1/2">
                            <input
                              type="number"
                              name="mercantile.marketStoresShops"
                              value={formData.mercantile.marketStoresShops}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (
                                  (!isNaN(value) && value >= 0) ||
                                  e.target.value === ""
                                ) {
                                  handleNestedChange(e);
                                }
                              }}
                              min="0"
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              {formData.areaType === "congested" ? (
                                <b>
                                  Car(s):{"0"}
                                  {Math.round(
                                    formData.mercantile.marketStoresShops / 100
                                  ) || "0"}
                                </b>
                              ) : (
                                <b>
                                  Car(s):{"0"}
                                  {Math.round(
                                    (2 *
                                      formData.mercantile.marketStoresShops) /
                                      100
                                  ) || "0"}
                                </b>
                              )}
                              <b>
                                Scooter(s):{"0"}
                                {Math.round(
                                  (6 * formData.mercantile.marketStoresShops) /
                                    100
                                ) || "0"}
                              </b>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {formData.mercantile?.input == "wholeSale" && (
                      <>
                        <div className="sm:flex ">
                          <div className="px-4 py-3 sm:w-1/2">
                            For every 100 sq.m. carpet area or fraction thereof:
                          </div>
                          <div className="flex px-4 py-3 flex-col sm:w-1/2">
                            <input
                              type="number"
                              name="mercantile.wholeSale"
                              value={formData.mercantile.wholeSale}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (
                                  (!isNaN(value) && value >= 0) ||
                                  e.target.value === ""
                                ) {
                                  handleNestedChange(e);
                                }
                              }}
                              min="0"
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              <b>
                                Car(s):{"0"}
                                {Math.round(
                                  formData.mercantile.wholeSale / 100
                                ) || "0"}
                              </b>
                              {formData.areaType === "congested" ? (
                                <b>
                                  Scooter(s):{"0"}
                                  {Math.round(
                                    (4 * formData.mercantile.wholeSale) / 100
                                  ) || "0"}
                                </b>
                              ) : (
                                <b>
                                  Scooter(s):{"0"}
                                  {Math.round(
                                    (5 * formData.mercantile.wholeSale) / 100
                                  ) || "0"}
                                </b>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {formData.mercantile?.input == "hazardousBuilding" && (
                      <>
                        <div className="sm:flex ">
                          <div className="px-4 py-3 sm:w-1/2">
                            For every 100 sq.m. carpet area :
                          </div>
                          <div className="flex px-4 py-3 flex-col sm:w-1/2">
                            <input
                              type="number"
                              name="mercantile.hazardousBuilding"
                              value={formData.mercantile.hazardousBuilding}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (
                                  (!isNaN(value) && value >= 0) ||
                                  e.target.value === ""
                                ) {
                                  handleNestedChange(e);
                                }
                              }}
                              min="0"
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              {formData.areaType === "congested" ? (
                                <>
                                  <b>
                                    Car(s):{"0"}
                                    {0}
                                  </b>
                                  <b>
                                    Scooter(s):{"0"}
                                    {Math.round(
                                      (4 *
                                        formData.mercantile.hazardousBuilding) /
                                        100
                                    ) || "0"}
                                  </b>
                                </>
                              ) : (
                                <>
                                  <b>
                                    Car(s):{"0"}
                                    {Math.round(
                                      formData.mercantile.hazardousBuilding /
                                        100
                                    ) || "0"}
                                  </b>
                                  <b>
                                    Scooter(s):{"0"}
                                    {Math.round(
                                      (3 *
                                        formData.mercantile.hazardousBuilding) /
                                        100
                                    ) || "0"}
                                  </b>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {formData.mercantile?.input == "officeItBuilding" && (
                      <>
                        <div className="sm:flex ">
                          <div className="px-4 py-3 sm:w-1/2">
                            For every 200 sq.m. carpet area or fraction thereof:
                          </div>
                          <div className="flex px-4 py-3 flex-col sm:w-1/2">
                            <input
                              type="number"
                              name="mercantile.officeItBuilding"
                              value={formData.mercantile.officeItBuilding}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (
                                  (!isNaN(value) && value >= 0) ||
                                  e.target.value === ""
                                ) {
                                  handleNestedChange(e);
                                }
                              }}
                              min="0"
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              <b>
                                Car(s):{"0"}
                                {Math.round(
                                  (3 * formData.mercantile.officeItBuilding) /
                                    200
                                ) || "0"}
                              </b>
                              <b>
                                Scooter(s):{"0"}
                                {Math.round(
                                  (11 * formData.mercantile.officeItBuilding) /
                                    200
                                ) || "0"}
                              </b>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}

                {formData.buildingType == "industrial" && (
                  <>
                    <div className="sm:flex ">
                      <div className="px-4 py-3 sm:w-1/2">
                        5. Industrial (For every 300 sq.m. carpet area or
                        fraction thereof):
                      </div>
                      <div className="flex px-4 py-3 flex-col sm:w-1/2">
                        <input
                          type="number"
                          name="industrial"
                          value={formData.industrial}
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
                          className="p-2 border-2 rounded border-slate-400"
                        />
                        <div className="flex items-center px-4 space-x-10 ">
                          {formData.areaType === "congested" ? (
                            <b>
                              Car(s):{"0"}
                              {Math.round((2 * formData.industrial) / 300) ||
                                "0"}
                            </b>
                          ) : (
                            <b>
                              Car(s):{"0"}
                              {Math.round((3 * formData.industrial) / 300) ||
                                "0"}
                            </b>
                          )}
                          <b>
                            Scooter(s):{"0"}
                            {Math.round((9 * formData.industrial) / 300) || "0"}
                          </b>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {formData.buildingType == "storage" && (
                  <>
                    <div className="sm:flex ">
                      <div className="px-4 py-3 sm:w-1/2">
                        5. Storage (any type) For every 300 sq.m. carpet area or
                        fraction thereof:
                      </div>
                      <div className="flex px-4 py-3 flex-col sm:w-1/2">
                        <input
                          type="number"
                          name="storage"
                          value={formData.storage}
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
                          className="p-2 border-2 rounded border-slate-400"
                        />
                        <div className="flex items-center px-4 space-x-10 ">
                          {formData.areaType === "congested" ? (
                            <>
                              <b>
                                Car(s):{"0"}
                                {0}
                              </b>
                              <b>
                                Scooter(s):{"0"}
                                {Math.round((4 * formData.storage) / 300) ||
                                  "0"}
                              </b>
                            </>
                          ) : (
                            <>
                              <b>
                                Car(s):{"0"}
                                {Math.round(formData.storage / 300) || "0"}
                              </b>
                              <b>
                                Scooter(s):{"0"}
                                {Math.round((3 * formData.storage) / 300) ||
                                  "0"}
                              </b>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {formData.buildingType == "dataCentre" && (
                  <>
                    <div className="sm:flex ">
                      <div className="px-4 py-3 sm:w-1/2">
                        5. Data centre Per 400 sq.m.:
                      </div>
                      <div className="flex px-4 py-3 flex-col sm:w-1/2">
                        <input
                          type="number"
                          name="dataCentre"
                          value={formData.dataCentre}
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
                          className="p-2 border-2 rounded border-slate-400"
                        />
                        <div className="flex items-center px-4 space-x-10 ">
                          <b>
                            Car(s):{"0"}
                            {Math.round(formData.dataCentre / 400) || "0"}
                          </b>
                          <b>
                            Scooter(s):{"0"}
                            {0}
                          </b>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center p-2 space-x-5">
            <button
              type="submit"
              // onClick={handleSubmit}
              className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
