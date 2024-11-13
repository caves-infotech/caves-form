const formDataSchema = {
  project: {
    projectName: "",
    plotNo: "",
    village: "",
    taluka: "",
    district: "",
  },
  plot: {
    groupHousing: "",
    buildingType: {
      input: "",
      other: "",
      residential: "",
      commercial: "",
    },
    areaType: "",
    ulb: "",
    zone: "",
    plotType: "",
    proRata: "",
    builtUp: "",
    area: "",
    roadWidth: "",
  },
  fsi: {
    area: "",
    deductions: {
      proposedDp: "",
      anyDp: "",
      total: "",
    },
    balanceArea: "",
    aminitySpace: {
      required: "",
      adj2b: "",
      balanceProposed: "",
    },
    netPlotArea: "",
    recreationOpenSpace: {
      required: "",
      proposed: "",
    },
    internalRoadArea: "",
    plotableArea: "",
    builtUpArea: "",
    paymentOfPremium: {
      maxPremium: "",
      proposedPremium: "",
    },
    inSituLoading: {
      areaAgainstDpRoad: "",
      areaAgainstAminitySpace: "",
      tdrArea: "",
      toatlInSitu: "",
    },
    additinalFsi: "",
    totalEntitlementProposed: {
      whicheverApplicable: "",
      ancillaryArea: "",
      totalEntitlement: "",
    },
    maxUtilizationLimit: "",
    totalBuiltUpAreaProposal: {
      existingBuiltUpArea: "",
      proposedBuiltUpArea: "",
      totalBuiltUp: "",
    },
    FSIConsumed: "",
    areOfInclusiveHousing: {
      required: "",
      proposed: "",
    },
  },
};

const districts = [
  {
    name: "Ahmednagar",
    tahasil: [
      "Akola",
      "Jamkhed",
      "Karjat",
      "Kopargaon",
      "Nagar",
      "Nevasa",
      "Parner",
      "Pathardi",
      "Rahta",
      "Rahuri",
      "Sangamner",
      "Shevgaon",
      "Shrigonda",
      "Shrirampur",
    ],
  },

  {
    name: "Akola",
    tahasil: [
      "Akola",
      "Akot",
      "Balapur",
      "Barshitakli",
      "Murtijapur",
      "Patur",
      "Telhara",
    ],
  },
  {
    name: "Amravati",
    tahasil: [
      "Achalpur",
      "Amravati",
      "Anjangaon Surji",
      "Bhatkuli",
      "Chandur Railway",
      "Chandurbazar",
      "Chikhaldara",
      "Daryapur",
      "Dhamangaon Railway",
      "Dharni",
      "Morshi",
      "Nandgaon-Khandeshwar",
      "Teosa",
      "Warud",
    ],
  },

  {
    name: "Aurangabad",
    tahasil: [
      "Aurangabad",
      "Gangapur",
      "Kannad",
      "Khuldabad",
      "Paithan",
      "Phulambri",
      "Sillod",
      "Soegaon",
      "Vaijapur",
    ],
  },

  {
    name: "Beed",
    tahasil: [
      "Ambejogai",
      "Ashti",
      "Bid",
      "Dharur",
      "Georai",
      "Kaij",
      "Manjlegaon",
      "Parli",
      "Patoda",
      "Shirur (Kasar)",
      "Wadwani",
    ],
  },

  {
    name: "Bhandara",
    tahasil: ["Bhandara", "Mohadi", "Pauni", "Tumsar"],
  },

  {
    name: "Buldhana",
    tahasil: [
      "Buldana",
      "Chikhli",
      "Deolgaon Raja",
      "Jalgaon (Jamod)",
      "Khamgaon",
      "Lonar",
      "Malkapur",
      "Mehkar",
      "Motala",
      "Nandura",
      "Sangrampur",
      "Shegaon",
      "Sindkhed Raja",
    ],
  },

  {
    name: "Chandrapur",
    tahasil: [
      "Ballarpur",
      "Bhadravati",
      "Brahmapuri",
      "Chandrapur",
      "Chimur",
      "Gondpipri",
      "Jiwati",
      "Korpana",
      "Mul",
      "Nagbhir",
      "Pombhurna",
      "Rajura",
      "Sawali",
      "Sindewahi",
      "Warora",
    ],
  },

  {
    name: "Dhule",
    tahasil: ["Dhule", "Sakri", "Shirpur", "Sindkhede"],
  },

  {
    name: "Gadchiroli",
    tahasil: [
      "Aheri",
      "Armori",
      "Bhamragad",
      "Chamorshi",
      "Desaiganj (Vadasa)",
      "Dhanora",
      "Etapalli",
      "Gadchiroli",
      "Korchi",
      "Kurkheda",
      "Mulchera",
      "Sironcha",
    ],
  },

  {
    name: "Gondia",
    tahasil: [
      "Amgaon",
      "Arjuni Morgaon",
      "Deori",
      "Gondiya",
      "Goregaon",
      "Sadak-Arjuni",
      "Salekasa",
      "Tirora",
    ],
  },

  {
    name: "Hingoli",
    tahasil: ["Aundha (Nagnath)", "Basmath", "Hingoli", "Kalamnuri", "Sengaon"],
  },

  {
    name: "Jalgaon",
    tahasil: [
      "Amalner",
      "Bhadgaon",
      "Bhusawal",
      "Bodvad",
      "Chalisgaon",
      "Chopda",
      "Dharangaon",
      "Erandol",
      "Jalgaon",
      "Jamner",
      "Muktainagar",
      "Pachora",
      "Parola",
      "Raver",
      "Yawal",
    ],
  },

  {
    name: "Jalna",
    tahasil: [
      "Ambad",
      "Badnapur",
      "Bhokardan",
      "Ghansawangi",
      "Jafferabad",
      "Jalna",
      "Mantha",
      "Partur",
    ],
  },

  {
    name: "Kolhapur",
    tahasil: [
      "Ajra",
      "Bavda",
      "Bhudargad",
      "Chandgad",
      "Gadhinglaj",
      "Hatkanangle",
      "Kagal",
      "Karvir",
      "Panhala",
      "Radhanagari",
      "Shahuwadi",
      "Shirol",
    ],
  },

  {
    name: "Latur",
    tahasil: [
      "Ahmadpur",
      "Ausa",
      "Chakur",
      "Deoni",
      "Jalkot",
      "Latur",
      "Nilanga",
      "Renapur",
      "Shirur-Anantpal",
      "Udgir",
    ],
  },

  {
    name: "Mumbai Suburban",
    tahasil: ["Andheri", "Borivali", "Kurla"],
  },

  {
    name: "Nagpur",
    tahasil: [
      "Bhiwapur",
      "Hingna",
      "Kalameshwar",
      "Kamptee",
      "Katol",
      "Kuhi",
      "Mauda",
      "Nagpur (Rural)",
      "Nagpur (Urban)",
      "Narkhed",
      "Parseoni",
      "Ramtek",
      "Savner",
      "Umred",
    ],
  },

  {
    name: "Nanded",
    tahasil: [
      "Ardhapur",
      "Bhokar",
      "Biloli",
      "Deglur",
      "Dharmabad",
      "Hadgaon",
      "Himayatnagar",
      "Kandhar",
      "Kinwat",
      "Loha",
      "Mahoor",
      "Mudkhed",
      "Mukhed",
      "Naigaon (Khairgaon)",
      "Nanded",
      "Umri",
    ],
  },

  {
    name: "Nandurbar",
    tahasil: [
      "Akkalkuwa",
      "Akrani",
      "Nandurbar",
      "Nawapur",
      "Shahade",
      "Talode",
    ],
  },

  {
    name: "Nashik",
    tahasil: [
      "Baglan",
      "Chandvad",
      "Deola",
      "Dindori",
      "Igatpuri",
      "Kalwan",
      "Malegaon",
      "Nandgaon",
      "Nashik",
      "Niphad",
      "Peint",
      "Sinnar",
      "Surgana",
      "Trimbakeshwar",
      "Yevla",
    ],
  },

  {
    name: "Osmanabad",
    tahasil: [
      "Bhum",
      "Kalamb",
      "Lohara",
      "Osmanabad",
      "Paranda",
      "Tuljapur",
      "Umarga",
      "Washi",
    ],
  },

  {
    name: "Parbhani",
    tahasil: [
      "Gangakhed",
      "Jintur",
      "Manwath",
      "Palam",
      "Parbhani",
      "Pathri",
      "Purna",
      "Sailu",
      "Sonpeth",
    ],
  },

  {
    name: "Pune",
    tahasil: [
      "Ambegaon",
      "Baramati",
      "Bhor",
      "Daund",
      "Haveli",
      "Indapur",
      "Junnar",
      "Khed",
      "Mawal",
      "Mulshi",
      "Pune City",
      "Purandhar",
      "Shirur",
      "Velhe",
    ],
  },

  {
    name: "Raigad",
    tahasil: [
      "Alibag",
      "Karjat",
      "Khalapur",
      "Mahad",
      "Mangaon",
      "Mhasla",
      "Murud",
      "Panvel",
      "Pen",
      "Poladpur",
      "Roha",
      "Shrivardhan",
      "Sudhagad",
      "Tala",
      "Uran",
    ],
  },

  {
    name: "Ratnagiri",
    tahasil: [
      "Chiplun",
      "Dapoli",
      "Guhagar",
      "Khed",
      "Lanja",
      "Mandangad",
      "Rajapur",
      "Ratnagiri",
      "Sangameshwar",
    ],
  },

  {
    name: "Sangli",
    tahasil: [
      "Atpadi",
      "Jat",
      "Kadegaon",
      "Kavathemahankal",
      "Khanapur",
      "Miraj",
      "Palus",
      "Shirala",
      "Tasgaon",
      "Walwa",
    ],
  },

  {
    name: "Satara",
    tahasil: [
      "Jaoli",
      "Karad",
      "Khandala",
      "Khatav",
      "Koregaon",
      "Mahabaleshwar",
      "Man",
      "Patan",
      "Phaltan",
      "Satara",
      "Wai",
    ],
  },

  {
    name: "Sindhudurg",
    tahasil: [
      "Devgad",
      "Dodamarg",
      "Kankavli",
      "Kudal",
      "Malwan",
      "Sawantwadi",
      "Vaibhavvadi",
      "Vengurla",
    ],
  },

  {
    name: "Solapur",
    tahasil: [
      "Akkalkot",
      "Barshi",
      "Karmala",
      "Madha",
      "Malshiras",
      "Mangalvedhe",
      "Mohol",
      "Pandharpur",
      "Sangole",
      "Solapur North",
      "Solapur South",
    ],
  },

  {
    name: "Thane",
    tahasil: [
      "Ambarnath",
      "Bhiwandi",
      "Dahanu",
      "Jawhar",
      "Kalyan",
      "Mokhada",
      "Murbad",
      "Palghar",
      "Shahapur",
      "Talasari",
      "Thane",
      "Ulhasnagar",
      "Vada",
      "Vasai",
      "Vikramgad",
    ],
  },

  {
    name: "Washim",
    tahasil: [
      "Arvi",
      "Ashti",
      "Deoli",
      "Hinganghat",
      "Karanja",
      "Samudrapur",
      "Seloo",
      "Wardha",
    ],
  },

  {
    name: "Washim",
    tahasil: ["Karanja", "Malegaon", "Mangrulpir", "Manora", "Risod", "Washim"],
  },

  {
    name: "Yavatmal",
    tahasil: [
      "Arni",
      "Babulgaon",
      "Darwha",
      "Digras",
      "Ghatanji",
      "Kalamb",
      "Kelapur",
      "Mahagaon",
      "Maregaon",
      "Ner",
      "Pusad",
      "Ralegaon",
      "Umarkhed",
      "Wani",
      "Yavatmal",
      "Zari-Jamani",
    ],
  },
];

const formParkingSchema = {
  name: "",
  ulb: "",
  areaType: "",
  zone: "",
  buildingType: "",
  residential: {
    input: "",
    multi: {
      area150above: "",
      area80To150: "",
      area40To80: "",
      area30To40: "",
      areaLess30: "",
      above5PercentCar: "",
      above5PercentScooter: "",
      ulbForAboveCar: "",
      ulbForAboveScooter: "",
    },
    lodge: "",
    restaurants: "",
  },
  institutional: "",
  publicGathering: {
    input: "",
    assembly: "",
    multiplex: "",
    mangalKaryalaya: "",
    communityHall: "",
  },
  educational: {
    input: "",
    schools: {
      forEvery100sqm: "",
      classRooms: "",
      students: "",
    },
    college: {
      forEvery100sqm: "",
      forEvery3Classroom: "",
    },
    coaching: "",
  },
  govOrPublicOrPrivate: {
    input: "",
    visitor: {
      car: "",
      scooter: "",
    },
  },
  mercantile: {
    input: "",
    marketStoresShops: "",
    wholeSale: "",
    hazardousBuilding: "",
    officeItBuilding: "",
  },
  industrial: "",
  storage: "",
  dataCentre: "",
};

const formPotentialFsiSchema = {
  projectName: "",
  buildingType: {
    input: "",
    other: "",
    residential: "",
    commercial: "",
  },
  areaType: "",
  ulb: "",
  proRata: "",
  builtUp: "",
  area: "",
  roadWidth: "",
  maxPotential: "",
};

const formBuildingMarginSchema = {
  projectName: "",
  buildingType: {
    input: "",
    commercial: {
      input: "",
      subInput: "",
    },
  },
  areaType: "",
  ulb: "",
  zone: "",
  moreThan500: "",
  buildingHeight: "",
  plotWidth: "",
  plotArea: "",
  plotType: "",
  roadDirection: {
    front: {
      input: "",
      margin: "",
    },
    back: {
      input: "",
      radioInput: "",
      margin: "",
    },
    left: {
      input: "",
      radioInput: "",
      margin: "",
    },
    right: {
      input: "",
      radioInput: "",
      margin: "",
    },
  },
};

const udcprIndex = [
  {
    chapter: "CHAPTER - 1",
    title: "ADMINISTRATION",
    sections: [
      {
        subchapter: "1.0",
        title: "Short Title, Extent and Commencement",
        page: 1,
      },
      { subchapter: "1.1", title: "Extent and Jurisdiction", page: 1 },
      { subchapter: "1.2", title: "Commencement of Regulations", page: 1 },
      { subchapter: "1.3", title: "Definitions", page: 1 },
      { subchapter: "1.4", title: "Applicability of Regulations", page: 16 },
      { subchapter: "1.5", title: "Saving", page: 17 },
      {
        subchapter: "1.6",
        title: "Applicability of Other Regulations",
        page: 18,
      },
      {
        subchapter: "1.7",
        title: "Power to Prescribe the Proformas",
        page: 19,
      },
      { subchapter: "1.8", title: "Power to Decide Charges", page: 19 },
      {
        subchapter: "1.9",
        title: "Meanings as in Acts, Rules & Interpretations",
        page: 19,
      },
      { subchapter: "1.10", title: "Removal of Difficulties", page: 20 },
    ],
  },
  {
    chapter: "CHAPTER - 2",
    title: "DEVELOPMENT PERMISSION AND COMMENCEMENT CERTIFICATE",
    sections: [
      {
        subchapter: "2.1",
        title: "Permission from the Planning Authority is Mandatory",
        page: 21,
      },
      {
        subchapter: "2.1.1",
        title: "Necessity of Obtaining Permission",
        page: 21,
      },
      { subchapter: "2.1.2", title: "Permission Not Necessary", page: 21 },
      {
        subchapter: "2.1.3",
        title: "Development Undertaken on Behalf of Government",
        page: 22,
      },
      { subchapter: "2.1.4", title: "Operational Constructions", page: 22 },
      {
        subchapter: "2.1.5",
        title: "Constructions not Covered Under the Operational Constructions",
        page: 23,
      },
      { subchapter: "2.1.6", title: "Temporary Constructions", page: 23 },
      { subchapter: "2.1.7", title: "Repairs to Building", page: 24 },
      {
        subchapter: "2.2",
        title:
          "Procedure for Obtaining Development Permission / Building Permission / Commencement Certificate",
        page: 24,
      },
      { subchapter: "2.2.1", title: "Notice / Application", page: 24 },
      {
        subchapter: "2.2.2",
        title: "Information Accompanying Notice / Application",
        page: 24,
      },
      { subchapter: "2.2.3", title: "Ownership Title and Area", page: 24 },
      { subchapter: "2.2.4", title: "Key Plan or Location Plan", page: 25 },
      { subchapter: "2.2.5 (a)", title: "Sub-division Layout Plan", page: 25 },
      { subchapter: "2.2.5 (b)", title: "Amalgamation Plan", page: 25 },
      { subchapter: "2.2.6", title: "Site Plan", page: 26 },
      { subchapter: "2.2.7", title: "Building Plan", page: 26 },
      {
        subchapter: "2.2.8",
        title: "Building Plans for Special Buildings",
        page: 27,
      },
      { subchapter: "2.2.9", title: "Service Plan", page: 28 },
      { subchapter: "2.2.10", title: "Supervision", page: 28 },
      {
        subchapter: "2.2.11",
        title: "Clearance From Other Departments",
        page: 28,
      },
      {
        subchapter: "2.2.12",
        title: "Building / Layout Permission Scrutiny Fee",
        page: 29,
      },
      { subchapter: "2.2.13", title: "Development Charges", page: 29 },
      {
        subchapter: "2.2.14",
        title: "Premium Charges and Fire Infrastructure Charges",
        page: 30,
      },
      {
        subchapter: "2.2.15",
        title: "Structural Stability Certificate",
        page: 31,
      },
      { subchapter: "2.2.16", title: "Signing the Plan", page: 31 },
      { subchapter: "2.2.17", title: "Size of Drawing Sheets", page: 32 },
      {
        subchapter: "2.2.18",
        title: "Colouring Notations for Plans",
        page: 32,
      },
      {
        subchapter: "2.2.19",
        title:
          "Qualification and Competence of the Architect / Licensed Engineer / Structural Engineer / Town Planner / Supervisor",
        page: 33,
      },
      {
        subchapter: "2.3",
        title: "Discretionary Powers - Interpretation",
        page: 33,
      },
      {
        subchapter: "2.4",
        title: "Discretionary Powers - Relaxations in Specific Cases",
        page: 33,
      },
      { subchapter: "2.5", title: "Drafting Error", page: 34 },
      { subchapter: "2.6", title: "Grant or Refusal of Permission", page: 34 },
      { subchapter: "2.6.1", title: "General", page: 34 },
      { subchapter: "2.6.2", title: "Deemed Permission", page: 34 },
      {
        subchapter: "2.6.3",
        title: "Approval of Building Permission on Risk Based Classification",
        page: 35,
      },
      {
        subchapter: "2.6.4",
        title: "Display of Sanctioned Permissions on Authority's Website",
        page: 35,
      },
      { subchapter: "2.7", title: "Commencement of Work", page: 35 },
      { subchapter: "2.7.1", title: "Commencement", page: 35 },
      {
        subchapter: "2.7.2",
        title: "Development of Land Subdivision / Group Housing Schemes",
        page: 36,
      },
      { subchapter: "2.8", title: "Procedure During Construction", page: 36 },
      {
        subchapter: "2.8.1",
        title:
          "Owner / Developer / Architect / Town Planner / Engineer / Structural Engineer / Supervisor Responsibilities",
        page: 36,
      },
      { subchapter: "2.8.2", title: "Results of Test", page: 36 },
      { subchapter: "2.8.3", title: "Display Board", page: 36 },
      { subchapter: "2.8.4", title: "Plinth Checking", page: 37 },
      { subchapter: "2.8.5", title: "Deviation during Construction", page: 37 },
      { subchapter: "2.9", title: "Completion Certificate", page: 37 },
      { subchapter: "2.10", title: "Occupancy Certificate", page: 37 },
      { subchapter: "2.11", title: "Part Occupancy Certificate", page: 38 },
      { subchapter: "2.12", title: "Inspection", page: 38 },
      { subchapter: "2.13", title: "Unsafe Buildings", page: 38 },
      { subchapter: "2.14", title: "Offences and Penalties", page: 38 },
      { subchapter: "2.15", title: "Revocation of Permission", page: 39 },
    ],
  },
  {
    chapter: "CHAPTER - 3",
    title: "GENERAL LAND DEVELOPMENT REQUIREMENTS",
    sections: [
      { subchapter: "3.1", title: "Requirements of Site", page: 41 },
      {
        subchapter: "3.1.1",
        title: "Site Not Eligible For Construction of Building",
        page: 41,
      },
      {
        subchapter: "3.1.2",
        title: "Distance of Site From Electric Lines",
        page: 42,
      },
      {
        subchapter: "3.1.3",
        title: "Construction Within Blue and Red Flood Line",
        page: 42,
      },
      {
        subchapter: "3.1.4",
        title: "Development Within 30 m. Distance From Railway Boundary",
        page: 43,
      },
      { subchapter: "3.1.5", title: "Environmental Clearance", page: 43 },
      {
        subchapter: "3.1.6",
        title: "Development Along Highways / Classified Roads",
        page: 43,
      },
      {
        subchapter: "3.1.7",
        title: "Development Within Certain Distance from the Prison Premises",
        page: 43,
      },
      {
        subchapter: "3.1.8",
        title: "Distances from Land Fill Sites",
        page: 43,
      },
      {
        subchapter: "3.1.9",
        title: "Restrictions in the Vicinity of Airport",
        page: 43,
      },
      {
        subchapter: "3.1.10",
        title: "Restrictions in the Vicinity of Ancient Monuments",
        page: 44,
      },
      {
        subchapter: "3.1.11",
        title: "Restriction under the Works of Defense Act, 1903",
        page: 44,
      },
      {
        subchapter: "3.1.12",
        title: "Distance from Natural Lake and Dam",
        page: 44,
      },
      {
        subchapter: "3.1.13",
        title:
          "Authorities to Supply Complete Information about Restrictions to the Authority",
        page: 45,
      },
      { subchapter: "3.2", title: "Means of Access", page: 45 },
      {
        subchapter: "3.3",
        title: "Regulations for Land Sub-division and Layout",
        page: 45,
      },
      { subchapter: "3.3.1", title: "Obligation to Prepare Layout", page: 45 },
      {
        subchapter: "3.3.2",
        title: "Roads / Streets in Land Sub-division or Layout",
        page: 46,
      },
      {
        subchapter: "3.3.3",
        title: "Length of Internal Roads, How to be Measured",
        page: 47,
      },
      {
        subchapter: "3.3.4",
        title: "Co-ordination of Roads in Adjoining Lands",
        page: 47,
      },
      {
        subchapter: "3.3.5",
        title: "Narrow Roads in Congested Areas",
        page: 47,
      },
      { subchapter: "3.3.6", title: "Development of Street", page: 47 },
      {
        subchapter: "3.3.7",
        title: "Development of Private Street, if Neglected",
        page: 47,
      },
      {
        subchapter: "3.3.8",
        title: "Access from the Highways / Classified Roads",
        page: 47,
      },
      {
        subchapter: "3.3.9",
        title: "Access Provision for Special Buildings",
        page: 48,
      },
      { subchapter: "3.3.10", title: "Cul-de-sacs", page: 48 },
      { subchapter: "3.3.11", title: "Handing Over of Layout Roads", page: 49 },
      { subchapter: "3.3.12", title: "Intersection of Roads", page: 49 },
      { subchapter: "3.3.13", title: "Acute Angled Junctions", page: 49 },
      { subchapter: "3.3.14", title: "Land-locked Plot", page: 49 },
      {
        subchapter: "3.3.15",
        title: "Approach by Underpass or Over Bridge for Adjoining Properties",
        page: 50,
      },
      { subchapter: "3.4", title: "Recreational Open Spaces", page: 50 },
      { subchapter: "3.4.1", title: "Recreational Open Space", page: 50 },
      {
        subchapter: "3.4.2",
        title: "Recreational Open Space - Owner’s Undertaking",
        page: 51,
      },
      {
        subchapter: "3.4.3",
        title: "Recreational Open Space - Rearrangement",
        page: 52,
      },
      {
        subchapter: "3.4.4",
        title: "Recreational Open Space - Exclusive",
        page: 52,
      },
      {
        subchapter: "3.4.5",
        title: "Recreational Open Space in Green Belt",
        page: 52,
      },
      { subchapter: "3.4.6", title: "Minimum Dimensions", page: 52 },
      {
        subchapter: "3.4.7",
        title: "Structures Permitted in Open Space",
        page: 52,
      },
      {
        subchapter: "3.4.8",
        title: "Recreational Open Space and Means of Access",
        page: 53,
      },
      { subchapter: "3.5", title: "Provision for Amenity Space", page: 53 },
      {
        subchapter: "3.5.1",
        title:
          "Amenity Space in Local Authorities, Special Planning Authorities and Metropolitan Region Authorities",
        page: 53,
      },
      {
        subchapter: "3.5.2",
        title: "Amenity Space in Regional Plan Areas",
        page: 54,
      },
      {
        subchapter: "3.5.3",
        title: "Development of Amenity Spaces in Earlier Sanctioned Layout",
        page: 54,
      },
      {
        subchapter: "3.6",
        title: "Provision for Electric Sub-station",
        page: 55,
      },
      {
        subchapter: "3.7",
        title: "Minimum Plot Area for Various Uses",
        page: 55,
      },
      { subchapter: "3.8", title: "Provision for Inclusive Housing", page: 56 },
      {
        subchapter: "3.9",
        title: "Net Plot Area and Computation of FSI",
        page: 59,
      },
      {
        subchapter: "3.10",
        title: "Transfer of DP Sites (Other than DP Road) in Lieu of FSI",
        page: 59,
      },
      {
        subchapter: "3.11",
        title: "Relocation of DP-RP Sites / Roads",
        page: 59,
      },
      { subchapter: "3.12", title: "Amalgamation of Plots", page: 60 },
      {
        subchapter: "3.13",
        title: "Development of Cycle Track Along River and Nallah",
        page: 60,
      },
    ],
  },
  {
    chapter: "CHAPTER - 4",
    title: "LAND USE CLASSIFICATION AND PERMISSIBLE USES",
    sections: [
      { subchapter: "4.1", title: "General", page: 61 },
      {
        subchapter: "4.2",
        title: "Land Use Classification and Equivalency of Zones",
        page: 61,
      },
      { subchapter: "4.3", title: "Residential Zone - R-1", page: 63 },
      { subchapter: "4.4", title: "Residential Zone - R-2", page: 65 },
      { subchapter: "4.5", title: "Low Density Residential Zone", page: 67 },
      { subchapter: "4.6", title: "Future Urbanisable Zone", page: 67 },
      { subchapter: "4.7", title: "Commercial Zone", page: 67 },
      { subchapter: "4.8", title: "Industrial Zone", page: 67 },
      {
        subchapter: "4.8.1",
        title: "Allowing Residential / Commercial Uses in Industrial Zone",
        page: 68,
      },
      {
        subchapter: "4.9",
        title: "Loom Industry cum Residential Zone",
        page: 71,
      },
      { subchapter: "4.10", title: "Public / Semi Public Zone", page: 71 },
      { subchapter: "4.11", title: "Agricultural Zone", page: 72 },
      {
        subchapter: "4.12",
        title: "Green Belt Zone / River Protection Belt",
        page: 78,
      },
      {
        subchapter: "4.13",
        title: "Traffic and Transportation Zone",
        page: 78,
      },
      { subchapter: "4.14", title: "Regional Park Zone", page: 78 },
      { subchapter: "4.15", title: "Tourism Development Zone", page: 79 },
      { subchapter: "4.16", title: "Afforestation Zone", page: 79 },
      {
        subchapter: "4.17",
        title: "Hill Top - Hill Slope Zone / Hilly Area",
        page: 79,
      },
      { subchapter: "4.18", title: "Green Zone-2", page: 79 },
      { subchapter: "4.19", title: "Forest Zone", page: 79 },
      { subchapter: "4.20", title: "Defense Zone", page: 79 },
      { subchapter: "4.21", title: "Mines and Quarry Zone", page: 80 },
      { subchapter: "4.22", title: "Public Utility Zone", page: 80 },
      { subchapter: "4.23", title: "Woodland Corridor", page: 80 },
      { subchapter: "4.24", title: "Special Economic Zone", page: 80 },
      {
        subchapter: "4.25",
        title: "Airport and Allied Activities / Service Zone",
        page: 80,
      },
      { subchapter: "4.26", title: "Additional Uses", page: 81 },
      {
        subchapter: "4.27",
        title: "Uses Permissible in Development Plan Reservations",
        page: 81,
      },
    ],
  },
  {
    chapter: "CHAPTER - 5",
    title: "ADDITIONAL PROVISIONS FOR REGIONAL PLAN AREAS",
    sections: [
      { subchapter: "5.0", title: "General", page: 85 },
      { subchapter: "5.1", title: "For all Regional Plan Areas", page: 85 },
      {
        subchapter: "5.1.1",
        title: "Development Permissible Adjacent to Gaothan",
        page: 85,
      },
      {
        subchapter: "5.1.2",
        title:
          "Regulations for Development of Tourist Resorts / Holiday Homes / Township",
        page: 86,
      },
      { subchapter: "5.1.3", title: "Committed Development", page: 86 },
      {
        subchapter: "5.1.4",
        title: "Rectification of Draftsman's Error",
        page: 86,
      },
      {
        subchapter: "5.1.5",
        title: "Highways Notified by State / Central Government",
        page: 87,
      },
      { subchapter: "5.1.6", title: "Station Area Development", page: 87 },
      {
        subchapter: "5.1.7",
        title: "Modification Proposals Already Sanctioned",
        page: 87,
      },
      { subchapter: "5.1.8", title: "Provision of Amenity Space", page: 87 },
      {
        subchapter: "5.1.9",
        title: "Residential Zone with Payment of Premium",
        page: 88,
      },
      {
        subchapter: "5.2",
        title: "For Thane - Raigad - Palghar Regional Plan",
        page: 88,
      },
      {
        subchapter: "5.2.1",
        title: "Development in Tarapur - Boisar Area",
        page: 88,
      },
      {
        subchapter: "5.3",
        title: "For Ratnagiri - Sindhudurg Regional Plan",
        page: 89,
      },
      {
        subchapter: "5.3.1",
        title: "Area within Ratnagiri District",
        page: 89,
      },
      {
        subchapter: "5.3.2",
        title: "Area within Sindhudurg District",
        page: 89,
      },
      { subchapter: "5.4", title: "For Kolhapur Regional Plan", page: 91 },
      { subchapter: "5.5", title: "For Satara Regional Plan", page: 92 },
      {
        subchapter: "5.6",
        title: "For Hingoli, Buldhana, Washim, Yawatmal, Nanded Regional Plan",
        page: 101,
      },
      { subchapter: "5.7", title: "For Raigad Regional Plan", page: 102 },
      { subchapter: "5.8", title: "For Solapur Regional Plan", page: 102 },
      { subchapter: "5.9", title: "For Pune Regional Plan", page: 102 },
      {
        subchapter: "5.10",
        title: "Certain Regulations Cease to Operate in Future",
        page: 104,
      },
      { subchapter: "5.11", title: "Board of Appeals", page: 104 },
      { subchapter: "5.12", title: "Aurangabad Regional Plan", page: 105 },
    ],
  },
  {
    chapter: "CHAPTER - 6",
    title:
      "GENERAL BUILDING REQUIREMENTS - SETBACK, MARGINAL DISTANCE, HEIGHT AND PERMISSIBLE FSI",
    sections: [
      { subchapter: "6.0", title: "General", page: 107 },
      { subchapter: "6.1", title: "Regulations for Congested Area", page: 107 },
      {
        subchapter: "6.1.1",
        title: "Residential Buildings / Residential Buildings with Mixed-use",
        page: 107,
      },
      {
        subchapter: "6.1.2",
        title:
          "Other Buildings like Public / Semi-Public, Educational, Medical, Institutional, etc.",
        page: 109,
      },
      { subchapter: "6.1.3", title: "Width of Pathway", page: 109 },
      { subchapter: "6.1.4", title: "Front Setback", page: 109 },
      {
        subchapter: "6.2",
        title: "Regulations for Outside Congested Area (Non-Congested Area)",
        page: 109,
      },
      {
        subchapter: "6.2.1",
        title: "Marginal Distances and Set-back for Residential Buildings",
        page: 109,
      },
      { subchapter: "6.2.2", title: "Other Buildings", page: 112 },
      {
        subchapter: "6.2.3",
        title: "Marginal Distances for Buildings of Higher Heights",
        page: 116,
      },
      {
        subchapter: "6.2.4",
        title: "In the Cases of Layouts of Two or More Buildings in a Plot",
        page: 117,
      },
      {
        subchapter: "6.2.5",
        title: "In Case of Group Housing Scheme",
        page: 117,
      },
      {
        subchapter: "6.2.6",
        title: "Building Abutting Two or More Streets",
        page: 117,
      },
      { subchapter: "6.3", title: "Permissible FSI", page: 117 },
      { subchapter: "6.4", title: "Industrial Buildings", page: 121 },
      { subchapter: "6.5", title: "FSI of Green Belt", page: 121 },
      {
        subchapter: "6.6",
        title: "Calculation of Built-up Area for the Purposes of FSI",
        page: 122,
      },
      {
        subchapter: "6.7",
        title: "Permissible Projections in Marginal Open Spaces / Distances",
        page: 122,
      },
      {
        subchapter: "6.8",
        title: "Exclusion of Structures / Projections for FSI Calculation",
        page: 123,
      },
      { subchapter: "6.9", title: "Interior and Exterior Chowk", page: 124 },
      { subchapter: "6.10", title: "Height of Building", page: 124 },
      { subchapter: "6.11", title: "Height Exemptions", page: 125 },
      {
        subchapter: "6.12",
        title: "Requirements in Case of Building more than 70 m. Height",
        page: 125,
      },
      {
        subchapter: "6.13",
        title: "FSI of Lands Affected by HEMRL or Other Restrictions",
        page: 125,
      },
      {
        subchapter: "6.14",
        title: "Provision of Recreational Floor",
        page: 125,
      },
    ],
  },
  {
    chapter: "CHAPTER - 7",
    title: "HIGHER FSI FOR CERTAIN USES",
    sections: [
      { subchapter: "7.0", title: "General", page: 127 },
      { subchapter: "7.1", title: "Higher F.S.I.", page: 128 },
      {
        subchapter: "7.2",
        title:
          "Entitlement of FSI for Road Widening or Construction of New Roads",
        page: 131,
      },
      {
        subchapter: "7.3",
        title: "Development / Redevelopment of Staff Quarters",
        page: 131,
      },
      {
        subchapter: "7.4",
        title: "Development / Redevelopment of Housing Schemes of MHADA",
        page: 133,
      },
      {
        subchapter: "7.5",
        title: "Protection of FSI in Redevelopment of Existing Buildings",
        page: 136,
      },
      {
        subchapter: "7.6",
        title: "Redevelopment of Old Dilapidated / Dangerous Buildings",
        page: 136,
      },
      {
        subchapter: "7.6.1",
        title: "Redevelopment of Multi-dwelling Buildings of Owner / Owners",
        page: 137,
      },
      {
        subchapter: "7.6.2",
        title: "Redevelopment of Tenanted Buildings",
        page: 137,
      },
      {
        subchapter: "7.7",
        title: "Development of Housing for EWS / LIG",
        page: 138,
      },
      {
        subchapter: "7.8",
        title:
          "Regulations for Development of Information Technology Establishment",
        page: 139,
      },
      {
        subchapter: "7.8.1",
        title: "For Municipal Corporation, Area Development Authority",
        page: 139,
      },
      {
        subchapter: "7.8.2",
        title: "For Municipal Council, Nagar Panchayat",
        page: 141,
      },
      { subchapter: "7.8.3", title: "For Regional Plan Area", page: 141 },
      {
        subchapter: "7.9",
        title: "Regulation for Development of Biotechnology Parks",
        page: 142,
      },
      { subchapter: "7.10", title: "Incentive for Green Buildings", page: 143 },
      { subchapter: "7.11", title: "Development of Public Toilet", page: 144 },
      {
        subchapter: "7.12",
        title: "Buildings of Smart Fin-Tech Centre",
        page: 144,
      },
      {
        subchapter: "7.13",
        title: "Commercial Building in CBD, Commercial, Residential Zone",
        page: 145,
      },
    ],
  },
  {
    chapter: "CHAPTER - 8",
    title: "PARKING, LOADING AND UNLOADING SPACES",
    sections: [
      { subchapter: "8.1", title: "Parking Spaces", page: 147 },
      { subchapter: "8.2", title: "Off Street Parking Requirement", page: 148 },
      {
        subchapter: "8.2.1",
        title: "Off Street Parking Requirement",
        page: 148,
      },
      {
        subchapter: "8.2.2",
        title:
          "Off Street Parking Requirement for Various Planning Authorities",
        page: 154,
      },
    ],
  },
  {
    chapter: "CHAPTER - 9",
    title: "REQUIREMENTS OF PART OF BUILDING",
    sections: [
      {
        subchapter: "9.0",
        title: "Standard Requirement of Various Parts of Buildings",
        page: 155,
      },
      { subchapter: "9.1", title: "Plinth", page: 155 },
      { subchapter: "9.2", title: "Habitable Rooms", page: 155 },
      { subchapter: "9.3", title: "Kitchen", page: 156 },
      {
        subchapter: "9.4",
        title: "Bath Rooms, Water Closets, Combined Bath Room and Water Closet",
        page: 156,
      },
      { subchapter: "9.5", title: "Ledge or Tand / Loft", page: 156 },
      { subchapter: "9.6", title: "Cupboard", page: 157 },
      { subchapter: "9.7", title: "Mezzanine Floor", page: 157 },
      { subchapter: "9.8", title: "Store Room", page: 158 },
      { subchapter: "9.9", title: "Garage", page: 158 },
      { subchapter: "9.10", title: "Roofs", page: 158 },
      { subchapter: "9.11", title: "Basements", page: 159 },
      { subchapter: "9.12", title: "Ramp", page: 160 },
      { subchapter: "9.13", title: "Podium", page: 160 },
      { subchapter: "9.14", title: "Balcony", page: 161 },
      {
        subchapter: "9.15",
        title: "Supported Double Height Terraces",
        page: 161,
      },
      { subchapter: "9.16", title: "Stilt", page: 161 },
      { subchapter: "9.17", title: "Chimneys", page: 161 },
      { subchapter: "9.18", title: "Letter Box", page: 162 },
      { subchapter: "9.19", title: "Meter Room", page: 162 },
      {
        subchapter: "9.20",
        title: "Lighting and Ventilation of Room",
        page: 162,
      },
      { subchapter: "9.21", title: "Overhead Tanks", page: 163 },
      { subchapter: "9.22", title: "Parapet", page: 163 },
      { subchapter: "9.23", title: "Cabin", page: 163 },
      { subchapter: "9.24", title: "Wells", page: 163 },
      { subchapter: "9.25", title: "Septic Tanks", page: 163 },
      { subchapter: "9.26", title: "Boundary / Compound Wall", page: 163 },
      { subchapter: "9.27", title: "Provision of Lift", page: 164 },
      { subchapter: "9.28", title: "Exit Requirements", page: 164 },
      {
        subchapter: "9.29",
        title: "Other Requirements of Individual Exit at Each Floor",
        page: 167,
      },
      { subchapter: "9.30", title: "Architectural Projections", page: 171 },
      {
        subchapter: "9.31",
        title: "Additional Requirements in Case of Housing Schemes",
        page: 171,
      },
      { subchapter: "9.32", title: "Fire Protection Requirement", page: 171 },
      { subchapter: "9.33", title: "Service Floor", page: 172 },
    ],
  },
  {
    chapter: "CHAPTER - 10",
    title: "CITY SPECIFIC REGULATIONS",
    sections: [
      { subchapter: "10.0", title: "General", page: 173 },
      {
        subchapter: "10.1",
        title: "Pune City Municipal Corporation",
        page: 173,
      },
      {
        subchapter: "10.2",
        title: "Thane Municipal Corporation Area",
        page: 176,
      },
      { subchapter: "10.3", title: "Nagpur Municipal Corporation", page: 182 },
      {
        subchapter: "10.4",
        title: "Nagpur Metropolitan Region Development Authority",
        page: 183,
      },
      { subchapter: "10.5", title: "Nashik Municipal Corporation", page: 186 },
      {
        subchapter: "10.6",
        title: "Vasai-Virar City Municipal Corporation",
        page: 187,
      },
      {
        subchapter: "10.7",
        title: "Mira-Bhayandar Municipal Corporation",
        page: 187,
      },
      {
        subchapter: "10.8",
        title: "Ulhasnagar City Municipal Corporation",
        page: 187,
      },
      {
        subchapter: "10.9",
        title: "Kolhapur Municipal Corporation",
        page: 187,
      },
      {
        subchapter: "10.10",
        title: "Navi Mumbai Municipal Corporation",
        page: 193,
      },
      {
        subchapter: "10.11",
        title: "National Park and Tungareshwar Eco Sensitive Zone",
        page: 199,
      },
      {
        subchapter: "10.12",
        title: "Maharashtra Airport Development Company Notified Area",
        page: 199,
      },
      {
        subchapter: "10.13",
        title: "Bhiwandi Surrounding Notified Area",
        page: 199,
      },
      {
        subchapter: "10.14",
        title: "CIDCO Area Excluding NAINA Area",
        page: 203,
      },
      {
        subchapter: "10.14 A",
        title: "CIDCO Area within Panvel Municipal Corporation",
        page: 205,
      },
      {
        subchapter: "10.15",
        title: "Certain Regulations Cease to Operate in Future",
        page: 205,
      },
    ],
  },
  {
    chapter: "CHAPTER - 11",
    title: "ACQUISITION AND DEVELOPMENT OF RESERVED SITES IN DEVELOPMENT PLANS",
    sections: [
      { subchapter: "11.0", title: "General", page: 207 },
      {
        subchapter: "11.1",
        title: "Manner of Development of Reserved Site in Development Plan",
        page: 207,
      },
      {
        subchapter: "11.2",
        title: "Regulations for Grant of Transferable Development Rights",
        page: 221,
      },
      {
        subchapter: "11.2.1",
        title: "Transferable Development Rights",
        page: 221,
      },
      {
        subchapter: "11.2.2",
        title: "Cases Eligible for Transferable Development Rights",
        page: 221,
      },
      {
        subchapter: "11.2.3",
        title: "Cases Not Eligible for Transferable Development Rights",
        page: 221,
      },
      {
        subchapter: "11.2.4",
        title: "Generation of the Transferable Development Rights",
        page: 222,
      },
      {
        subchapter: "11.2.5",
        title:
          "Transferable Development Rights against Construction of Amenity",
        page: 223,
      },
      {
        subchapter: "11.2.6",
        title: "Utilisation of Transferable Development Rights",
        page: 224,
      },
      {
        subchapter: "11.2.7",
        title:
          "Utilisation of Transferable Development Rights and Road Width Relation",
        page: 224,
      },
      {
        subchapter: "11.2.8",
        title:
          "Areas Restricted from Utilisation of Transferable Development Rights",
        page: 224,
      },
      { subchapter: "11.2.9", title: "General Stipulation", page: 225 },
      { subchapter: "11.2.10", title: "Transfer of DRC", page: 225 },
      {
        subchapter: "11.2.11",
        title: "Infrastructure Improvement Charges",
        page: 226,
      },
      { subchapter: "11.2.12", title: "Vesting of Land", page: 226 },
      { subchapter: "11.2.13", title: "Effect of this Regulation", page: 226 },
      {
        subchapter: "11.3",
        title: "Reservation Credit Certificate (RCC)",
        page: 226,
      },
    ],
  },
  {
    chapter: "CHAPTER - 12",
    title:
      "STRUCTURAL SAFETY, WATER SUPPLY, DRAINAGE AND SANITARY REQUIREMENTS, OUTDOOR DISPLAY AND OTHER SERVICES",
    sections: [
      { subchapter: "12.1", title: "Structural Design", page: 229 },
      {
        subchapter: "12.2",
        title: "Quality of Materials and Workmanship",
        page: 229,
      },
      {
        subchapter: "12.3",
        title:
          "Alternative Materials, Methods of Design & Construction and Tests",
        page: 229,
      },
      { subchapter: "12.4", title: "Building Services", page: 230 },
      {
        subchapter: "12.5",
        title: "Water Supply, Drainage and Sanitary Requirements",
        page: 230,
      },
      {
        subchapter: "12.6",
        title: "Drainage and Sanitation Requirements",
        page: 232,
      },
      { subchapter: "12.6.1", title: "General", page: 232 },
      { subchapter: "12.6.2", title: "For Residences", page: 232 },
      {
        subchapter: "12.6.3",
        title: "For Buildings Other Than Residences",
        page: 232,
      },
      {
        subchapter: "12.7",
        title: "Signs and Outdoor Display Structures",
        page: 233,
      },
    ],
  },
  {
    chapter: "CHAPTER - 13",
    title: "SPECIAL PROVISIONS FOR CERTAIN BUILDINGS",
    sections: [
      { subchapter: "13.0", title: "General", page: 239 },
      {
        subchapter: "13.1",
        title: "Provisions for Barrier Free Access",
        page: 239,
      },
      { subchapter: "13.1.1", title: "Definitions", page: 239 },
      { subchapter: "13.1.2", title: "Scope", page: 239 },
      { subchapter: "13.1.3", title: "Site Development", page: 239 },
      { subchapter: "13.1.4", title: "Building Requirements", page: 240 },
      {
        subchapter: "13.2",
        title:
          "Installation of Solar Assisted Water Heating System / Roof Top Photovoltaic System",
        page: 242,
      },
      { subchapter: "13.3", title: "Rain Water Harvesting", page: 243 },
      {
        subchapter: "13.4",
        title: "Grey Water Recycling and Reuse",
        page: 244,
      },
      { subchapter: "13.5", title: "Solid Waste Management", page: 246 },
    ],
  },
  {
    chapter: "CHAPTER - 14",
    title: "SPECIAL SCHEMES",
    sections: [
      {
        subchapter: "14.1",
        title: "Integrated Township Project (ITP)",
        page: 247,
      },
      { subchapter: "14.1.1", title: "For Regional Plan Area", page: 247 },
      { subchapter: "14.1.2", title: "For Development Plan Area", page: 263 },
      {
        subchapter: "14.2",
        title: "Transit Oriented Development (TOD)",
        page: 264,
      },
      {
        subchapter: "14.2.1",
        title: "For Pune Municipal Corporation Area",
        page: 265,
      },
      {
        subchapter: "14.2.2",
        title: "Pune Metropolitan Region Development Authority Area",
        page: 269,
      },
      {
        subchapter: "14.2.3",
        title:
          "For Nagpur Municipal Corporation and Nagpur Metropolitan Region",
        page: 269,
      },
      {
        subchapter: "14.2.4",
        title:
          "For Other Municipal Corporations and Other Metropolitan Regions",
        page: 274,
      },
      {
        subchapter: "14.2.5",
        title: "Regulations for BRT Corridor in Pimpri-Chinchwad",
        page: 274,
      },
      { subchapter: "14.3", title: "Affordable Housing Scheme", page: 275 },
      { subchapter: "14.4", title: "Pradhan Mantri Awas Yojana", page: 278 },
      { subchapter: "14.4.1", title: "For Development Plan Area", page: 278 },
      { subchapter: "14.4.2", title: "For Regional Plan Area", page: 279 },
      {
        subchapter: "14.5",
        title:
          "Conservation of Heritage Buildings / Precincts / Natural Features",
        page: 279,
      },
      {
        subchapter: "14.6",
        title: "Slum Rehabilitation Scheme for Pune, PCMC, PCNTDA and Nagpur",
        page: 285,
      },
      {
        subchapter: "14.7",
        title: "Slum Rehabilitation Scheme for Other Municipal Corporations",
        page: 318,
      },
      { subchapter: "14.8", title: "Urban Renewal Scheme", page: 332 },
      {
        subchapter: "14.9",
        title:
          "Development of Tourism and Hospitality Services under Community Nature Conservancy",
        page: 349,
      },
      {
        subchapter: "14.10",
        title: "Integrated Information Technology Township (IITP)",
        page: 350,
      },
      {
        subchapter: "14.11",
        title: "Integrated Logistic Park (ILP)",
        page: 354,
      },
      {
        subchapter: "14.12",
        title:
          "Industrial Township Under Aerospace and Defense Manufacturing Policy",
        page: 357,
      },
      {
        subchapter: "14.13",
        title: "Development of Integrated Industrial Area",
        page: 357,
      },
    ],
  },
  {
    chapter: "CHAPTER - 15",
    title: "REGULATIONS FOR SPECIAL ACTIVITIES / PLANS",
    sections: [
      { subchapter: "15.1", title: "Quarrying Operations", page: 359 },
      { subchapter: "15.2", title: "Erection of Mobile Towers", page: 359 },
      {
        subchapter: "15.3",
        title: "Preparation of Local Area Plan",
        page: 360,
      },
      {
        subchapter: "15.4",
        title: "Guidelines for Street Design in City / Town",
        page: 360,
      },
    ],
  },
];

const appendix = [
  {
    no: "01",
    title: "Appendix A-1",
  },
  {
    no: "02",
    title: "Appendix A-2",
  },
  {
    no: "03",
    title: "Appendix B",
  },
  {
    no: "04",
    title: "Appendix C",
  },
  {
    no: "05",
    title: "Appendix D-1",
  },
  {
    no: "06",
    title: "Appendix D-2",
  },
  {
    no: "07",
    title: "Appendix D-3",
  },
  {
    no: "08",
    title: "Appendix E-1",
  },
  {
    no: "09",
    title: "Appendix E-2",
  },
  {
    no: "10",
    title: "Appendix F",
  },
  {
    no: "11",
    title: "Appendix G",
  },
  {
    no: "12",
    title: "Appendix H",
  },
  {
    no: "13",
    title: "Appendix I",
  },
  {
    no: "14",
    title: "Appendix J",
  },
  {
    no: "15",
    title: "Appendix K",
  },
  {
    no: "16",
    title: "Appendix K-1",
  },
  {
    no: "17",
    title: "Appendix K-2",
  },
  {
    no: "18",
    title: "Appendix L",
  },
  {
    no: "19",
    title: "Appendix M",
  },
  {
    no: "20",
    title: "Form giving Particulars of Development (Item iv of Appendix A -1)",
  },
  {
    no: "21",
    title:
      "Form giving Particulars of Development (Part of Appendix A -2, Item 6)",
  },
  {
    no: "22",
    title: "Form of Statement 1+2+3",
  },
  {
    no: "23",
    title: "Proforma - I Area Statement",
  },
];

export {
  formDataSchema,
  districts,
  formParkingSchema,
  formPotentialFsiSchema,
  formBuildingMarginSchema,
  udcprIndex,
  appendix,
};
