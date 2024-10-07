export default function ParkingDetails({
  formData,
  handleChange,
  handleNestedChange,
  handleSubmit,
  setFormData,
  handleMoreNestedChange
}) {

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
          parseInt(formData.residential.multi.area40To80 || 0)*2 +
          parseInt(formData.residential.multi.area30To40 || 0) +
          parseInt(formData.residential.multi.areaLess30 || 0)*2) *
        1.05;

      formData.residential.multi.ulbForAboveScooter =
        parseFloat(formData.residential.multi.above5PercentScooter) *
        parseFloat(formData.ulb);
    } else {
      formData.residential.multi.above5PercentScooter =
        (parseInt(formData.residential.multi.area150above || 0) +
          parseInt(formData.residential.multi.area80To150 || 0) +
          parseInt(formData.residential.multi.area40To80 || 0)*2 +
          parseInt(formData.residential.multi.area30To40 || 0)*2 +
          parseInt(formData.residential.multi.areaLess30 || 0)*2) *
        1.05;

      formData.residential.multi.ulbForAboveScooter =
        parseFloat(formData.residential.multi.above5PercentScooter) *
        parseFloat(formData.ulb);
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

      <div className="hidden p-5 sm:flex">
      <div className="flex gap-x-5">
        <div>
          <h2 className="mb-4 text-2xl">Parking Details</h2>
          <table className="table-auto w-[530px] mb-8 text-sm">
            <tbody>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  1. Project Name:
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded-lg border-slate-400 "
                    placeholder="Enter your project name"
                  />
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">1. ULB:</td>
                <td
                  className="px-4 py-2 border border-slate-400"
                  name="ulb"
                >
                  <select
                    name="ulb"
                    value={formData.ulb}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
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
                      'D' Class Municipal Corporation area except at Sr. No.3
                    </option>
                    <option value={0.6}>
                      'A' Class Municipal Council area.
                    </option>
                    <option value={0.5}>
                      'B' and 'C' Class Municipal Council area.
                    </option>
                    <option value={0.4}>
                      Nagar Panchayat, Non Municipal Town Development Plan area
                      and areas in Regional Plan
                    </option>
                  </select>
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-3 border border-slate-400">
                  2. Area Type:
                </td>
                <td className="flex px-4 py-3 border-r border-slate-400">
                  <label className="flex-[50%] items-center ">
                    <input
                      type="radio"
                      name="areaType"
                      value="congested"
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleAreaTypeRadioChange}
                    />
                    <span className="ml-2 text-gray-700">Congested</span>
                  </label>
                  <label className="flex-[50%] ">
                    <input
                      type="radio"
                      name="areaType"
                      value="non-congested"
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleAreaTypeRadioChange}
                    />
                    <span className="ml-2 text-gray-700">Non-congested</span>
                  </label>
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-3 border border-slate-400">3. Zone:</td>
                <td className="flex px-4 py-3 border-t border-r border-slate-400">
                  <label className="flex-[50%] items-center ">
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
                    <label className="flex-[50%] ">
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
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  4. Building Type:
                </td>
                <td
                  className="px-4 py-2 border border-slate-400"
                  name="buildingType"
                >
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
                </td>
              </tr>

              {formData.buildingType == "residential" && (
                <>
                  <tr className="even:bg-white  odd:bg-[#dededeac] ">
                    <td className="px-4 py-2 border border-slate-400">
                      5. Occupancy:
                    </td>
                    <td
                      className="px-4 py-2 border border-slate-400"
                      name="residential.input"
                    >
                      <select
                        name="residential.input"
                        value={formData.residential.input}
                        onChange={handleNestedChange}
                        className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                      >
                        <option value="">--Select Residential Area--</option>
                        <option value="multi">Multi- Family residential</option>
                        <option value="lodge">
                          Lodging establishment's tourist homes, hotels with
                          lodging accommodation, Star Category Hotels
                        </option>
                        <option value="restaurants">Restaurants</option>
                      </select>
                    </td>
                  </tr>

                  {formData.residential?.input == "multi" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] ">
                        <td className="px-8 border-l border-slate-400 ">
                          a. For every tenement having carpet area of 150sq.m.
                          and above:
                        </td>
                        <td className="flex px-4 border-r border-slate-400">
                          <input
                            type="number"
                            name="residential.multi.area150above"
                            value={
                              formData.residential.multi.area150above

                            }
                            onChange={handleMoreNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            <b>
                              Car(s):{"0"}
                              {2 *
                                formData.residential.multi.area150above
                                || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {formData.residential.multi.area150above
                                || "0"}
                            </b>
                          </div>
                        </td>
                      </tr>

                      <tr className="even:bg-white  odd:bg-[#dededeac] ">
                        <td className="px-8 border-l border-slate-400">
                          b. For every tenement having carpet area equal to or
                          above 80 sq.m. but less than 150 sq.m.:
                        </td>
                        <td className="flex px-4 border-r border-slate-400">
                          <input
                            type="number"
                            name="residential.multi.area80To150"
                            value={
                              formData.residential.multi.area80To150

                            }
                            onChange={handleMoreNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            <b>
                              Car(s):{"0"}
                              {formData.residential.multi.area80To150
                                || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {formData.residential.multi.area80To150
                                || "0"}
                            </b>
                          </div>
                        </td>
                      </tr>

                      <tr className="even:bg-white  odd:bg-[#dededeac] ">
                        <td className="px-8 border-l border-slate-400">
                          c. For every two tenements with each tenement having
                          carpet area equal to or above 40 sq.m. but less than
                          80 sq.m.:
                        </td>
                        <td className="flex px-4 border-r border-slate-400">
                          <input
                            type="number"
                            name="residential.multi.area40To80"
                            value={
                              formData.residential.multi.area40To80

                            }
                            onChange={handleMoreNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            <b>
                              Car(s):{"0"}
                              {formData.residential.multi.area40To80
                                || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {2 *
                                formData.residential.multi.area40To80
                                || "0"}
                            </b>
                          </div>
                        </td>
                      </tr>

                      <tr className="even:bg-white  odd:bg-[#dededeac] ">
                        <td className="px-8 border-l border-slate-400">
                          d. For every two tenements with each tenement having
                          carpet area less than 40 Sq.m. but more than 30 sq.m.:
                        </td>
                        <td className="flex px-4 border-r border-slate-400">
                          <input
                            type="number"
                            name="residential.multi.area30To40"
                            value={
                              formData.residential.multi.area30To40

                            }
                            onChange={handleMoreNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            {formData.areaType === "congested" ? (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {formData.residential.multi.area30To40
                                    || "0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {formData.residential.multi.area30To40
                                    || "0"}
                                </b>
                              </>
                            ) : (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {formData.residential.multi.area30To40
                                    || "0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {2 *
                                    formData.residential.multi
                                      .area30To40 || "0"}
                                </b>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>

                      <tr className="even:bg-white  odd:bg-[#dededeac] ">
                        <td className="px-8 border-l border-slate-400">
                          e. For every two tenements with each tenement having
                          carpet area less than 30 Sq.m:
                        </td>
                        <td className="flex px-4 border-r border-slate-400">
                          <input
                            type="number"
                            name="residential.multi.areaLess30"
                            value={
                              formData.residential.multi.areaLess30

                            }
                            onChange={handleMoreNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            <b>Car(s): {"00"}</b>
                            <b>
                              Scooter(s):{"0"}
                              {2 *
                                formData.residential.multi.areaLess30
                                || "0"}
                            </b>
                          </div>
                        </td>
                      </tr>

                      <tr className="even:bg-white  odd:bg-[#dededeac] ">
                        <td className="px-8 border-b border-l border-slate-400">
                          f. After 5% calculation:
                        </td>
                        <td
                          className="px-4 border-b border-slate-400 py- 2"
                          name="residential.multi.above5Percent"
                        >
                          <div className="flex items-center px-4 space-x-10 ">
                            <b>
                              Car(s):
                              {Math.ceil(formData.residential.multi.above5PercentCar)
                                || "Enter data in required field"}
                            </b>
                            <b>
                              Scooter(s):
                              {Math.ceil(formData.residential.multi.above5PercentScooter)
                                || "Enter data in required field"}
                            </b>
                          </div>
                        </td>
                      </tr>

                      <tr className="even:bg-white  odd:bg-[#dededeac] ">
                        <td className="px-4 border-b border-l border-slate-400">
                          5. ULB for above choosen option after 5% calculation:
                        </td>
                        <td
                          className="px-4 py-2 border-b border-slate-400"
                          name="residential.multi.ulbForAbove"
                        >
                          <div className="flex items-center px-4 space-x-10 ">
                            <b>
                              Car(s):
                              {Math.ceil(formData.residential.multi.ulbForAboveCar)
                                || "Enter data in required field"}
                            </b>
                            <b>
                              Scooter(s):
                              {Math.ceil(formData.residential.multi.ulbForAboveScooter)
                                || "Enter data in required field"}
                            </b>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}

                  {formData.residential?.input == "lodge" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] ">
                        <td className="px-8 border-b border-l border-slate-400 ">
                          For every five guest rooms:
                        </td>
                        <td className="flex px-4 border-b border-r border-slate-400">
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
                                  {formData.residential.lodge ||
                                    "0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {4 *
                                    formData.residential.lodge ||
                                    "0"}
                                </b>
                              </>
                            ) : (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {formData.residential.lodge ||
                                    "0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {6 *
                                    formData.residential.lodge ||
                                    "0"}
                                </b>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    </>
                  )}

                  {formData.residential?.input == "restaurants" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                        <td className="px-8 border-l border-slate-400 ">
                          For every 50 sq.m. of carpet area of restaurant
                          including kitchen, pantry hall, dining room etc.:
                        </td>
                        <td className="flex px-4 border-r border-slate-400">
                          <input
                            type="number"
                            name="residential.restaurants"
                            value={
                              formData.residential.restaurants
                            }
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
                                  {8 *
                                    formData.residential.restaurants
                                    || "0"}
                                </b>
                              </>
                            ) : (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {formData.residential.restaurants
                                    || "0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {8 *
                                    formData.residential.restaurants
                                    || "0"}
                                </b>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    </>
                  )}
                </>
              )}

              {formData.buildingType == "institutional" && (
                <>
                  <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                    <td className="px-4 border-l border-slate-400 ">
                      For every 10 beds :
                    </td>
                    <td className="flex px-4 border-r border-slate-400">
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
                    </td>
                  </tr>
                </>
              )}

              {formData.buildingType == "publicGathering" && (
                <>
                  <tr className="even:bg-white  odd:bg-[#dededeac] ">
                    <td className="px-4 py-2 border border-slate-400">
                      5. Occupancy:
                    </td>
                    <td
                      className="px-4 py-2 border border-slate-400"
                      name="publicGathering.input"
                    >
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
                    </td>
                  </tr>

                  {formData.publicGathering?.input == "assembly" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                        <td className="px-8 border-l border-slate-400 ">
                          For every 40 seats :
                        </td>
                        <td className="flex px-4 border-r border-slate-400">
                          <input
                            type="number"
                            name="publicGathering.assembly"
                            value={
                              formData.publicGathering.assembly
                            }
                            onChange={handleNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            <b>
                              Car(s):{"0"}
                              {4 *
                                formData.publicGathering.assembly
                                || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {16 *
                                formData.publicGathering.assembly
                                || "0"}
                            </b>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}

                  {formData.publicGathering?.input == "multiplex" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                        <td className="px-8 border-l border-slate-400 ">
                          For every 40 seats :
                        </td>
                        <td className="flex px-4 border-r border-slate-400">
                          <input
                            type="number"
                            name="publicGathering.multiplex"
                            value={
                              formData.publicGathering.multiplex
                            }
                            onChange={handleNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            <b>
                              Car(s):{"0"}
                              {5 *
                                formData.publicGathering.multiplex
                                || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {14 *
                                formData.publicGathering.multiplex
                                || "0"}
                            </b>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}

                  {formData.publicGathering?.input ==
                    "mangalKaryalaya" && (
                      <>
                        <tr className="odd:bg-white  even:bg-[#dededeac] ">
                          <td className="px-8 border-l border-slate-400 ">
                            For every 100 sq.m. carpet area / lawn area of
                            fraction thereof :
                          </td>
                          <td className="flex px-4 border-r border-slate-400">
                            <input
                              type="number"
                              name="publicGathering.mangalKaryalaya"
                              value={
                                formData.publicGathering.mangalKaryalaya

                              }
                              onChange={handleNestedChange}
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              <b>
                                Car(s):{"0"}
                                {formData.publicGathering.mangalKaryalaya
                                  || "0"}
                              </b>
                              <b>
                                Scooter(s):{"0"}
                                {5 *
                                  formData.publicGathering.mangalKaryalaya
                                  || "0"}
                              </b>
                            </div>
                          </td>
                        </tr>
                      </>
                    )}

                  {formData.publicGathering?.input ==
                    "communityHall" && (
                      <>
                        <tr className="odd:bg-white  even:bg-[#dededeac] ">
                          <td className="px-8 border-l border-slate-400 ">
                            For every 200 sq.m. carpet area :
                          </td>
                          <td className="flex px-4 border-r border-slate-400">
                            <input
                              type="number"
                              name="publicGathering.communityHall"
                              value={
                                formData.publicGathering.communityHall

                              }
                              onChange={handleNestedChange}
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              <b>
                                Car(s):{"0"}
                                {formData.publicGathering.communityHall
                                  || "0"}
                              </b>
                              <b>
                                Scooter(s):{"0"}
                                {5 *
                                  formData.publicGathering.communityHall
                                  || "0"}
                              </b>
                            </div>
                          </td>
                        </tr>
                      </>
                    )}
                </>
              )}

              {formData.buildingType == "educational" && (
                <>
                  <tr className="even:bg-white  odd:bg-[#dededeac] ">
                    <td className="px-4 py-2 border border-slate-400">
                      5. Occupancy:
                    </td>
                    <td
                      className="px-4 py-2 border border-slate-400"
                      name="educational.input"
                    >
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
                    </td>
                  </tr>

                  {formData.educational?.input == "schools" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] ">
                        <td className="px-8 border-l border-slate-400 ">
                          For every 100 sq.m. carpet area of the administrative
                          as well as public service area of the school :
                        </td>
                        <td className="flex px-4 border-r border-slate-400">
                          <input
                            type="number"
                            name="educational.schools.forEvery100sqm"
                            value={
                              formData.educational.schools
                                .forEvery100sqm
                            }
                            onChange={handleMoreNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            {formData.areaType === "congested" ? (
                              <b>
                                Car(s):{"0"}
                                {formData.educational.schools
                                  .forEvery100sqm || "0"}
                              </b>
                            ) : (
                              <b>
                                Car(s):{"0"}
                                {2 *
                                  formData.educational.schools
                                    .forEvery100sqm || "0"}
                              </b>
                            )}
                            <b>
                              Scooter(s):{"0"}
                              {4 *
                                formData.educational.schools
                                  .forEvery100sqm || "0"}
                            </b>
                          </div>
                        </td>
                      </tr>

                      <tr className="odd:bg-white  even:bg-[#dededeac] ">
                        <td className="px-8 border-l border-slate-400 ">
                          For every 3 class rooms :
                        </td>
                        <td className="flex px-4 border-r border-slate-400">
                          <input
                            type="number"
                            name="educational.schools.forEvery3Classroom"
                            value={
                              formData.educational.schools
                                .forEvery3Classroom
                            }
                            onChange={handleMoreNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <b className="px-4 ">
                            Scooter(s):{"0"}
                            {5 *
                              formData.educational.schools
                                .forEvery3Classroom || "0"}
                          </b>
                        </td>
                      </tr>
                    </>
                  )}

                  {formData.educational?.input == "college" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] ">
                        <td className="px-8 border-l border-slate-400 ">
                          For every 100 sq.m. carpet area of the administrative
                          as well as public service area of the school :
                        </td>
                        <td className="flex px-4 border-r border-slate-400">
                          <input
                            type="number"
                            name="educational.college.forEvery100sqm"
                            value={
                              formData.educational.college
                                .forEvery100sqm
                            }
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
                        </td>
                      </tr>
                      <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                        <td className="px-8 border-l border-slate-400 ">
                          For every 3 class rooms :
                        </td>
                        <td className="flex px-4 border-r border-slate-400">
                          <input
                            type="number"
                            name="educational.college.forEvery3Classroom"
                            value={
                              formData.educational.college
                                .forEvery3Classroom
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
                        </td>
                      </tr>
                    </>
                  )}

                  {formData.educational?.input == "coaching" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                        <td className="px-8 border-l border-slate-400 ">
                          For every 20 students :
                        </td>
                        <td className="flex px-4 border-r border-slate-400">
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
                              {9 *
                                formData.educational.coaching ||
                                "0"}
                            </b>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}
                </>
              )}

              {formData.buildingType == "govOrPublicOrPrivate" && (
                <>
                  <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                    <td className="px-4 border-l border-slate-400 ">
                      Government or semi public or private business buildings.
                      For every 100 sq.m. carpet area or fraction thereof :
                    </td>
                    <td className="flex px-4 border-r border-slate-400">
                      <input
                        type="number"
                        name="govOrPublicOrPrivate"
                        value={formData.govOrPublicOrPrivate}
                        onChange={handleNestedChange}
                        className="w-full p-2 border-2 rounded border-slate-400"
                      />
                      <div className="flex items-center px-4 space-x-10 ">
                        {formData.areaType === "congested" ? (
                          <b>
                            Car(s):{"0"}
                            {formData.govOrPublicOrPrivate || "0"}
                          </b>
                        ) : (
                          <b>
                            Car(s):{"0"}
                            {2 * formData.govOrPublicOrPrivate ||
                              "0"}
                          </b>
                        )}
                        <b>
                          Scooter(s):{"0"}
                          {12 * formData.govOrPublicOrPrivate ||
                            "0"}
                        </b>
                      </div>
                    </td>
                  </tr>
                </>
              )}

              {formData.buildingType == "mercantile" && (
                <>
                  <tr className="even:bg-white  odd:bg-[#dededeac] ">
                    <td className="px-4 py-2 border border-slate-400">
                      5. Occupancy:
                    </td>
                    <td
                      className="px-4 py-2 border border-slate-400"
                      name="mercantile.input"
                    >
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
                    </td>
                  </tr>

                  {formData.mercantile?.input ==
                    "marketStoresShops" && (
                      <>
                        <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                          <td className="px-8 border-l border-slate-400 ">
                            For every 100 sq.m. carpet area or fraction thereof:
                          </td>
                          <td className="flex px-4 border-r border-slate-400">
                            <input
                              type="number"
                              name="mercantile.marketStoresShops"
                              value={
                                formData.mercantile.marketStoresShops

                              }
                              onChange={handleNestedChange}
                              className="p-2 border-2 rounded border-slate-400"
                            />
                            <div className="flex items-center px-4 space-x-10 ">
                              {formData.areaType === "congested" ? (
                                <b>
                                  Car(s):{"0"}
                                  {formData.mercantile.marketStoresShops
                                    || "0"}
                                </b>
                              ) : (
                                <b>
                                  Car(s):{"0"}
                                  {2 *
                                    formData.mercantile.marketStoresShops
                                    || "0"}
                                </b>
                              )}
                              <b>
                                Scooter(s):{"0"}
                                {6 *
                                  formData.mercantile.marketStoresShops
                                  || "0"}
                              </b>
                            </div>
                          </td>
                        </tr>
                      </>
                    )}

                  {formData.mercantile?.input == "wholeSale" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                        <td className="px-8 border-l border-slate-400 ">
                          For every 100 sq.m. carpet area or fraction thereof:
                        </td>
                        <td className="flex px-4 border-r border-slate-400">
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
                                {4 *
                                  formData.mercantile.wholeSale ||
                                  "0"}
                              </b>
                            ) : (
                              <b>
                                Scooter(s):{"0"}
                                {5 *
                                  formData.mercantile.wholeSale ||
                                  "0"}
                              </b>
                            )}
                          </div>
                        </td>
                      </tr>
                    </>
                  )}

                  {formData.mercantile?.input ==
                    "hazardousBuilding" && (
                      <>
                        <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400 ">
                          <td className="px-8 border-l border-slate-400 ">
                            For every 100 sq.m. carpet area :
                          </td>
                          <td className="flex px-4 border-r border-slate-400">
                            <input
                              type="number"
                              name="mercantile.hazardousBuilding"
                              value={
                                formData.mercantile.hazardousBuilding

                              }
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
                                    {4 *
                                      formData.mercantile
                                        .hazardousBuilding || "0"}
                                  </b>
                                </>
                              ) : (
                                <>
                                  <b>
                                    Car(s):{"0"}
                                    {formData.mercantile.hazardousBuilding
                                      || "0"}
                                  </b>
                                  <b>
                                    Scooter(s):{"0"}
                                    {3 *
                                      formData.mercantile
                                        .hazardousBuilding || "0"}
                                  </b>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      </>
                    )}

                  {formData.mercantile?.input == "officeItBuilding" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                        <td className="px-8 border-l border-slate-400 ">
                          For every 200 sq.m. carpet area or fraction thereof:
                        </td>
                        <td className="flex px-4 border-r border-slate-400">
                          <input
                            type="number"
                            name="mercantile.officeItBuilding"
                            value={
                              formData.mercantile.officeItBuilding
                            }
                            onChange={handleNestedChange}
                            className="p-2 border-2 rounded border-slate-400"
                          />
                          <div className="flex items-center px-4 space-x-10 ">
                            <b>
                              Car(s):{"0"}
                              {3 *
                                formData.mercantile.officeItBuilding
                                || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {11 *
                                formData.mercantile.officeItBuilding
                                || "0"}
                            </b>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}
                </>
              )}

              {formData.buildingType == "industrial" && (
                <>
                  <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                    <td className="px-4 border-l border-slate-400 ">
                      5. Industrial (For every 300 sq.m. carpet area or fraction
                      thereof):
                    </td>
                    <td className="flex px-4 border-r border-slate-400">
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
                    </td>
                  </tr>
                </>
              )}

              {formData.buildingType == "storage" && (
                <>
                  <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                    <td className="px-4 border-l border-slate-400 ">
                      5. Storage (any type) For every 300 sq.m. carpet area or
                      fraction thereof:
                    </td>
                    <td className="flex px-4 border-r border-slate-400">
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
                    </td>
                  </tr>
                </>
              )}

              {formData.buildingType == "dataCentre" && (
                <>
                  <tr className="odd:bg-white  even:bg-[#dededeac] ">
                    <td className="px-4 border-l border-slate-400 ">
                      5. Data centre Per 400 sq.m.:
                    </td>
                    <td className="flex px-4 border-r border-slate-400">
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
                    </td>
                  </tr>
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
                    <p>
                      Front Margin
                    </p>
                  </td>
                  <td>
                    Road Side
                  </td>
                </tr>
                <tr className="border-b odd:bg-[#dededeac] even:bg-white border-x border-slate-400 h-20">
                  <td colSpan={2}>
                    <p className="my-4 text-2xl">
                      {/* {formData.roadDirection.front.roadWidth} */}
                    </p>
                  </td>
                </tr>
                
                <hr className="my-5 border-white"/>
                
                <tr className="odd:bg-white  even:bg-[#dededeac] border border-slate-400 ">
                  <td className="border-r border-slate-400">
                    <p>
                      Right Side Margin
                    </p>
                  </td>
                  <td>
                    Adjacent Other Plot
                  </td>
                </tr>
                <tr className="border-b odd:bg-white  even:bg-[#dededeac] border-x border-slate-400 h-20">
                  <td colSpan={2}>
                    <p className="my-4 text-2xl">
                      {/* {formData.roadDirection.right.roadWidth} */}
                    </p>
                  </td>
                </tr>
                
                <hr className="my-5 border-white"/>

                <tr className="odd:bg-[#dededeac] even:bg-white border border-slate-400">
                  <td className="border-r border-slate-400">
                    <p>
                      Left Side Margin
                    </p>
                  </td>
                  <td>
                    Adjacent Other Plot
                  </td>
                </tr>
                <tr className="border-b odd:bg-[#dededeac] even:bg-white border-x border-slate-400 h-20">
                  <td colSpan={2}>
                    <p className="my-4 text-2xl">
                      {/* {formData.roadDirection.left.roadWidth} */}
                    </p>
                  </td>
                </tr>
                
                <hr className="my-5 border-white"/>

                <tr className="odd:bg-white  even:bg-[#dededeac] border border-slate-400">
                  <td className="border-r border-slate-400">
                    <p>
                      Rear (Back) Margin
                    </p>
                  </td>
                  <td>
                    Adjacent Other Plot
                  </td>
                </tr>
                <tr className="border-b odd:bg-white  even:bg-[#dededeac] border-x border-slate-400 h-20">
                  <td colSpan={2}>
                    <p className="my-4 text-2xl">
                      {/* {formData.roadDirection.back.roadWidth} */}
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
