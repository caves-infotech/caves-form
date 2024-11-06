import { useRef } from "react";
import html2canvas from "html2canvas";
import api from "@/services/axios";
import { useAuth } from "@/services/authContext";

export default function ParkingDetails({
  formData,
  handleChange,
  handleNestedChange,
  handleSubmit,
  setFormData,
  handleMoreNestedChange,
  setIssignedinWhenSubmit,
  shareViaEmail,
  shareWhatsApp,
}) {
  const sectionRef = useRef(); // Reference to the section to convert to PDF
  const { isSignedIn } = useAuth();

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
      parseFloat(formData.govOrPublicOrPrivate.input) * 14.4;

    if (formData.areaType == "congested") {
      formData.govOrPublicOrPrivate.visitor.car =
        parseFloat(formData.govOrPublicOrPrivate.input) * 1.2;
    } else if (formData.areaType == "non-congested") {
      formData.govOrPublicOrPrivate.visitor.car =
        parseFloat(formData.govOrPublicOrPrivate.input) * 2.4;
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
                >
                  <option value="">--Select ULB--</option>
                  <option value={1}>
                    Pune, Pimpri-Chinchwad and Thane Municipal Corporation area
                    and PCNTDA area
                  </option>
                  <option value={0.9}>
                    Nagpur, Nashik Municipal Corporation area
                  </option>
                  <option value={0.8}>
                    Other Municipal Corporations in MMR area except Thane M.C.
                  </option>
                  <option value={0.7}>
                    Remaining Municipal Corporations not covered at Sr. No. 1 to
                    3 and 5, Metropolitan Area Development Authority / Area
                    Development Authority/ SPA area
                  </option>
                  <option value={0.6}>
                    &apos;D&apos; Class Municipal Corporation area except at Sr. No.3
                  </option>
                  <option value={0.6}>&apos;A&apos; Class Municipal Council area.</option>
                  <option value={0.5}>
                    &apos;B&apos; and &apos;C&apos; Class Municipal Council area.
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
                      Government or semi public or private business buildings
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
                        <option value="multi">Multi- Family residential</option>
                        <option value="lodge">
                          Lodging establishment&apos;s tourist homes, hotels with
                          lodging accommodation, Star Category Hotels
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
                            onChange={handleMoreNestedChange}
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
                            onChange={handleMoreNestedChange}
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
                            onChange={handleMoreNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            <b>
                              Car(s):{"0"}
                              {formData.residential.multi.area40To80 || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {2 * formData.residential.multi.area40To80 || "0"}
                            </b>
                          </div>
                        </div>
                      </div>

                      <div className="sm:flex">
                        <div className="px-4 py-3 sm:w-1/2">
                          d. For every two tenements with each tenement having
                          carpet area less than 40 Sq.m. but more than 30 sq.m.:
                        </div>
                        <div className="flex px-4 py-3 flex-col sm:w-1/2">
                          <input
                            type="number"
                            name="residential.multi.area30To40"
                            value={formData.residential.multi.area30To40}
                            onChange={handleMoreNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            {formData.areaType === "congested" ? (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {formData.residential.multi.area30To40 || "0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {formData.residential.multi.area30To40 || "0"}
                                </b>
                              </>
                            ) : (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {formData.residential.multi.area30To40 || "0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {2 * formData.residential.multi.area30To40 ||
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
                            onChange={handleMoreNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            <b>Car(s): {"00"}</b>
                            <b>
                              Scooter(s):{"0"}
                              {2 * formData.residential.multi.areaLess30 || "0"}
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
                                formData.residential.multi.above5PercentScooter
                              ) || "Enter data in required field"}
                            </span>
                          </b>
                        </div>
                      </div>

                      <div className="sm:flex">
                        <div className="px-4 py-3 sm:w-1/2">
                          5. ULB for above choosen option after 5% calculation:
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
                          For every five guest rooms:
                        </div>
                        <div className="flex px-4 py-3 flex-col sm:w-1/2">
                          <input
                            type="number"
                            name="residential.lodge"
                            value={formData.residential.lodge}
                            onChange={handleNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            {formData.areaType === "congested" ? (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {formData.residential.lodge || "0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {4 * formData.residential.lodge || "0"}
                                </b>
                              </>
                            ) : (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {formData.residential.lodge || "0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {6 * formData.residential.lodge || "0"}
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
                            onChange={handleNestedChange}
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
                                  {8 * formData.residential.restaurants || "0"}
                                </b>
                              </>
                            ) : (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {formData.residential.restaurants || "0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {8 * formData.residential.restaurants || "0"}
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
                        onChange={handleChange}
                        className="w-full p-2 border-2 rounded border-slate-400"
                      />
                      <div className="flex items-center px-4 space-x-10 ">
                        {formData.areaType === "congested" ? (
                          <>
                            <b>
                              Car(s):{"0"}
                              {2 * formData.institutional || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {12 * formData.institutional || "0"}
                            </b>
                          </>
                        ) : (
                          <>
                            <b>
                              Car(s):{"0"}
                              {3 * formData.institutional || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {10 * formData.institutional || "0"}
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
                          Mangal karyalaya / Marriage Halls, Cultural Halls and
                          Banquet Hall
                        </option>
                        <option value="communityHall">
                          Community hall and club house in layout open
                          space(applicable only for open spaces having area 4000
                          sq.m. and more)
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
                            onChange={handleNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            <b>
                              Car(s):{"0"}
                              {4 * formData.publicGathering.assembly || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {16 * formData.publicGathering.assembly || "0"}
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
                            onChange={handleNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            <b>
                              Car(s):{"0"}
                              {5 * formData.publicGathering.multiplex || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {14 * formData.publicGathering.multiplex || "0"}
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
                            onChange={handleNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            <b>
                              Car(s):{"0"}
                              {formData.publicGathering.mangalKaryalaya || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {5 * formData.publicGathering.mangalKaryalaya ||
                                "0"}
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
                            onChange={handleNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            <b>
                              Car(s):{"0"}
                              {formData.publicGathering.communityHall || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {5 * formData.publicGathering.communityHall ||
                                "0"}
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
                          Educational Schools and the administrative as well as
                          public service areas therein
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
                          For every 100 sq.m. carpet area of the administrative
                          as well as public service area of the school :
                        </div>
                        <div className="flex px-4 py-3 flex-col sm:w-1/2">
                          <input
                            type="number"
                            name="educational.schools.forEvery100sqm"
                            value={formData.educational.schools.forEvery100sqm}
                            onChange={handleMoreNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            {formData.areaType === "congested" ? (
                              <b>
                                Car(s):{"0"}
                                {formData.educational.schools.forEvery100sqm ||
                                  "0"}
                              </b>
                            ) : (
                              <b>
                                Car(s):{"0"}
                                {2 *
                                  formData.educational.schools.forEvery100sqm ||
                                  "0"}
                              </b>
                            )}
                            <b>
                              Scooter(s):{"0"}
                              {4 *
                                formData.educational.schools.forEvery100sqm ||
                                "0"}
                            </b>
                          </div>
                        </div>
                      </div>

                      <div className="sm:flex ">
                        <div className="px-4 py-3 sm:w-1/2">
                          For every 3 class rooms :
                        </div>
                        <div className="flex px-4 py-3 flex-col sm:w-1/2">
                          <input
                            type="number"
                            name="educational.schools.forEvery3Classroom"
                            value={
                              formData.educational.schools.forEvery3Classroom
                            }
                            onChange={handleMoreNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <b className="px-4 ">
                            Scooter(s):{"0"}
                            {5 *
                              formData.educational.schools.forEvery3Classroom ||
                              "0"}
                          </b>
                        </div>
                      </div>
                    </>
                  )}

                  {formData.educational?.input == "college" && (
                    <>
                      <div className="sm:flex ">
                        <div className="px-4 py-3 sm:w-1/2">
                          For every 100 sq.m. carpet area of the administrative
                          as well as public service area of the school :
                        </div>
                        <div className="flex px-4 py-3 flex-col sm:w-1/2">
                          <input
                            type="number"
                            name="educational.college.forEvery100sqm"
                            value={formData.educational.college.forEvery100sqm}
                            onChange={handleMoreNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            {formData.areaType === "congested" ? (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {formData.educational.college
                                    .forEvery100sqm || "0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {12 *
                                    formData.educational.college
                                      .forEvery100sqm || "0"}
                                </b>
                              </>
                            ) : (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {2 *
                                    formData.educational.college
                                      .forEvery100sqm || "0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {17 *
                                    formData.educational.college
                                      .forEvery100sqm || "0"}
                                </b>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="sm:flex ">
                        <div className="px-4 py-3 sm:w-1/2">
                          For every 3 class rooms :
                        </div>
                        <div className="flex px-4 py-3 flex-col sm:w-1/2">
                          <input
                            type="number"
                            name="educational.college.forEvery3Classroom"
                            value={
                              formData.educational.college.forEvery3Classroom
                            }
                            onChange={handleMoreNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            {formData.areaType === "congested" ? (
                              <b>
                                Car(s):{"0"}
                                {formData.educational.college
                                  .forEvery3Classroom || "0"}
                              </b>
                            ) : (
                              <b>
                                Car(s):{"0"}
                                {2 *
                                  formData.educational.college
                                    .forEvery3Classroom || "0"}
                              </b>
                            )}
                            <b>
                              Scooter(s):{"0"}
                              {24 *
                                formData.educational.college
                                  .forEvery3Classroom || "0"}
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
                          For every 20 students :
                        </div>
                        <div className="flex px-4 py-3 flex-col sm:w-1/2">
                          <input
                            type="number"
                            name="educational.coaching"
                            value={formData.educational.coaching}
                            onChange={handleNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            <b>
                              Car(s):{"0"}
                              {formData.educational.coaching || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {9 * formData.educational.coaching || "0"}
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
                        onChange={handleNestedChange}
                        className="w-full p-2 border-2 rounded border-slate-400"
                      />
                      <div className="flex items-center px-4 space-x-10 ">
                        {formData.areaType === "congested" ? (
                          <b>
                            Car(s):{"0"}
                            {formData.govOrPublicOrPrivate.input || "0"}
                          </b>
                        ) : (
                          <b>
                            Car(s):{"0"}
                            {2 * formData.govOrPublicOrPrivate.input || "0"}
                          </b>
                        )}
                        <b>
                          Scooter(s):{"0"}
                          {12 * formData.govOrPublicOrPrivate.input || "0"}
                        </b>
                      </div>
                    </div>
                  </div>

                  <div className="sm:flex ">
                    <div className="px-4 py-3 sm:w-1/2">
                      After 20% calculation:
                    </div>
                    <div className="flex px-4 py-3 flex-col sm:w-1/2">
                      <b>
                        Car(s):
                        {Math.ceil(formData.govOrPublicOrPrivate.visitor.car) ||
                          "Enter data in required field"}
                      </b>
                      <b>
                        Scooter(s):
                        {Math.ceil(
                          formData.govOrPublicOrPrivate.visitor.scooter
                        ) || "Enter data in required field"}
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
                            onChange={handleNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            {formData.areaType === "congested" ? (
                              <b>
                                Car(s):{"0"}
                                {formData.mercantile.marketStoresShops || "0"}
                              </b>
                            ) : (
                              <b>
                                Car(s):{"0"}
                                {2 * formData.mercantile.marketStoresShops ||
                                  "0"}
                              </b>
                            )}
                            <b>
                              Scooter(s):{"0"}
                              {6 * formData.mercantile.marketStoresShops || "0"}
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
                            onChange={handleNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            <b>
                              Car(s):{"0"}
                              {formData.mercantile.wholeSale || "0"}
                            </b>
                            {formData.areaType === "congested" ? (
                              <b>
                                Scooter(s):{"0"}
                                {4 * formData.mercantile.wholeSale || "0"}
                              </b>
                            ) : (
                              <b>
                                Scooter(s):{"0"}
                                {5 * formData.mercantile.wholeSale || "0"}
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
                            onChange={handleNestedChange}
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
                                  {4 * formData.mercantile.hazardousBuilding ||
                                    "0"}
                                </b>
                              </>
                            ) : (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {formData.mercantile.hazardousBuilding || "0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {3 * formData.mercantile.hazardousBuilding ||
                                    "0"}
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
                            onChange={handleNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            <b>
                              Car(s):{"0"}
                              {3 * formData.mercantile.officeItBuilding || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {11 * formData.mercantile.officeItBuilding || "0"}
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
                      5. Industrial (For every 300 sq.m. carpet area or fraction
                      thereof):
                    </div>
                    <div className="flex px-4 py-3 flex-col sm:w-1/2">
                      <input
                        type="number"
                        name="industrial"
                        value={formData.industrial}
                        onChange={handleChange}
                        className="p-2 border-2 rounded border-slate-400"
                      />
                      <div className="flex items-center px-4 space-x-10 ">
                        {formData.areaType === "congested" ? (
                          <b>
                            Car(s):{"0"}
                            {2 * formData.industrial || "0"}
                          </b>
                        ) : (
                          <b>
                            Car(s):{"0"}
                            {3 * formData.industrial || "0"}
                          </b>
                        )}
                        <b>
                          Scooter(s):{"0"}
                          {9 * formData.industrial || "0"}
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
                        onChange={handleChange}
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
                              {4 * formData.storage || "0"}
                            </b>
                          </>
                        ) : (
                          <>
                            <b>
                              Car(s):{"0"}
                              {formData.storage || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {3 * formData.storage || "0"}
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
                      5. Data cendtre Per 400 sq.m.:
                    </div>
                    <div className="flex px-4 py-3 flex-col sm:w-1/2">
                      <input
                        type="number"
                        name="dataCentre"
                        value={formData.dataCentre}
                        onChange={handleChange}
                        className="p-2 border-2 rounded border-slate-400"
                      />
                      <div className="flex items-center px-4 space-x-10 ">
                        <b>
                          Car(s):{"0"}
                          {formData.dataCentre || "0"}
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

          {/* <div className="sm:w-[60%] mb-2 p-auto border rounded-2xl bg-slate-100">
            <div className=" text-center text-2xl p-5">
              <h3 className=" font-extrabold">Required Parking</h3>
              <p className="mt-10 p-5">
                {(formData.maxPotential &&
                  formData.maxPotential + " Sq. Meter") ||
                  "Enter data in required field"}
              </p>
            </div>
          </div> */}
        </div>

        <div className="flex justify-center p-2 space-x-5">
          <button
            onClick={handleSubmit}
            className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
          <button onClick={() => { if (formData.maxPotential > 0) shareWhatsApp(sectionRef) }}>
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
          <button onClick={() => { if (formData.maxPotential > 0) shareViaEmail(sectionRef) }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#000000"
            >
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
