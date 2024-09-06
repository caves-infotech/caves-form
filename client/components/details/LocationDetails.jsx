export default function LocationDetails({ formData, handleChange, handleNext }) {
  const districts = [

    {
      "name": "Ahmednagar",
      "tahasil": ["Akola", "Jamkhed", "Karjat", "Kopargaon", "Nagar", "Nevasa", "Parner", "Pathardi", "Rahta", "Rahuri", "Sangamner", "Shevgaon", "Shrigonda", "Shrirampur"]
    },

    {
      "name": "Akola",
      "tahasil": ["Akola", "Akot", "Balapur", "Barshitakli", "Murtijapur", "Patur", "Telhara"]
    },
    {
      "name": "Amravati",
      "tahasil": ["Achalpur", "Amravati", "Anjangaon Surji", "Bhatkuli", "Chandur Railway", "Chandurbazar", "Chikhaldara", "Daryapur", "Dhamangaon Railway", "Dharni", "Morshi", "Nandgaon-Khandeshwar", "Teosa", "Warud"]
    },

    {
      "name": "Aurangabad",
      "tahasil": ["Aurangabad", "Gangapur", "Kannad", "Khuldabad", "Paithan", "Phulambri", "Sillod", "Soegaon", "Vaijapur"]
    },

    {
      "name": "Beed",
      "tahasil": ["Ambejogai", "Ashti", "Bid", "Dharur", "Georai", "Kaij", "Manjlegaon", "Parli", "Patoda", "Shirur (Kasar)", "Wadwani"]
    },

    {
      "name": "Bhandara",
      "tahasil": ["Bhandara", "Mohadi", "Pauni", "Tumsar"]
    },

    {
      "name": "Buldhana",
      "tahasil": ["Buldana", "Chikhli", "Deolgaon Raja", "Jalgaon (Jamod)", "Khamgaon", "Lonar", "Malkapur", "Mehkar", "Motala", "Nandura", "Sangrampur", "Shegaon", "Sindkhed Raja"]
    },

    {
      "name": "Chandrapur",
      "tahasil": ["Ballarpur", "Bhadravati", "Brahmapuri", "Chandrapur", "Chimur", "Gondpipri", "Jiwati", "Korpana", "Mul", "Nagbhir", "Pombhurna", "Rajura", "Sawali", "Sindewahi", "Warora"]
    },

    {
      "name": "Dhule",
      "tahasil": ["Dhule", "Sakri", "Shirpur", "Sindkhede"]
    },

    {
      "name": "Gadchiroli",
      "tahasil": ["Aheri", "Armori", "Bhamragad", "Chamorshi", "Desaiganj (Vadasa)", "Dhanora", "Etapalli", "Gadchiroli", "Korchi", "Kurkheda", "Mulchera", "Sironcha"]
    },

    {
      "name": "Gondia",
      "tahasil": ["Amgaon", "Arjuni Morgaon", "Deori", "Gondiya", "Goregaon", "Sadak-Arjuni", "Salekasa", "Tirora"]
    },

    {
      "name": "Hingoli",
      "tahasil": ["Aundha (Nagnath)", "Basmath", "Hingoli", "Kalamnuri", "Sengaon"]
    },

    {
      "name": "Jalgaon",
      "tahasil": ["Amalner", "Bhadgaon", "Bhusawal", "Bodvad", "Chalisgaon", "Chopda", "Dharangaon", "Erandol", "Jalgaon", "Jamner", "Muktainagar", "Pachora", "Parola", "Raver", "Yawal"]
    },

    {
      "name": "Jalna",
      "tahasil": ["Ambad", "Badnapur", "Bhokardan", "Ghansawangi", "Jafferabad", "Jalna", "Mantha", "Partur"]
    },

    {
      "name": "Kolhapur",
      "tahasil": ["Ajra", "Bavda", "Bhudargad", "Chandgad", "Gadhinglaj", "Hatkanangle", "Kagal", "Karvir", "Panhala", "Radhanagari", "Shahuwadi", "Shirol"]
    },

    {
      "name": "Latur",
      "tahasil": ["Ahmadpur", "Ausa", "Chakur", "Deoni", "Jalkot", "Latur", "Nilanga", "Renapur", "Shirur-Anantpal", "Udgir"]
    },

    {
      "name": "Mumbai Suburban",
      "tahasil": ["Andheri", "Borivali", "Kurla"]
    },

    {
      "name": "Nagpur",
      "tahasil": ["Bhiwapur", "Hingna", "Kalameshwar", "Kamptee", "Katol", "Kuhi", "Mauda", "Nagpur (Rural)", "Nagpur (Urban)", "Narkhed", "Parseoni", "Ramtek", "Savner", "Umred"]
    },

    {
      "name": "Nanded",
      "tahasil": ["Ardhapur", "Bhokar", "Biloli", "Deglur", "Dharmabad", "Hadgaon", "Himayatnagar", "Kandhar", "Kinwat", "Loha", "Mahoor", "Mudkhed", "Mukhed", "Naigaon (Khairgaon)", "Nanded", "Umri"]
    },

    {
      "name": "Nandurbar",
      "tahasil": ["Akkalkuwa", "Akrani", "Nandurbar", "Nawapur", "Shahade", "Talode"]

    },

    {
      "name": "Nashik",
      "tahasil": ["Baglan", "Chandvad", "Deola", "Dindori", "Igatpuri", "Kalwan", "Malegaon", "Nandgaon", "Nashik", "Niphad", "Peint", "Sinnar", "Surgana", "Trimbakeshwar", "Yevla"]

    },

    {
      "name": "Osmanabad",
      "tahasil": ["Bhum", "Kalamb", "Lohara", "Osmanabad", "Paranda", "Tuljapur", "Umarga", "Washi"]
    },

    {
      "name": "Parbhani",
      "tahasil": ["Gangakhed", "Jintur", "Manwath", "Palam", "Parbhani", "Pathri", "Purna", "Sailu", "Sonpeth"]
    },

    {
      "name": "Pune",
      "tahasil": ["Ambegaon", "Baramati", "Bhor", "Daund", "Haveli", "Indapur", "Junnar", "Khed", "Mawal", "Mulshi", "Pune City", "Purandhar", "Shirur", "Velhe"]
    },

    {
      "name": "Raigad",
      "tahasil": ["Alibag", "Karjat", "Khalapur", "Mahad", "Mangaon", "Mhasla", "Murud", "Panvel", "Pen", "Poladpur", "Roha", "Shrivardhan", "Sudhagad", "Tala", "Uran"]
    },

    {
      "name": "Ratnagiri",
      "tahasil": ["Chiplun", "Dapoli", "Guhagar", "Khed", "Lanja", "Mandangad", "Rajapur", "Ratnagiri", "Sangameshwar"]
    },

    {
      "name": "Sangli",
      "tahasil": ["Atpadi", "Jat", "Kadegaon", "Kavathemahankal", "Khanapur", "Miraj", "Palus", "Shirala", "Tasgaon", "Walwa"]
    },

    {
      "name": "Satara",
      "tahasil": ["Jaoli", "Karad", "Khandala", "Khatav", "Koregaon", "Mahabaleshwar", "Man", "Patan", "Phaltan", "Satara", "Wai"]
    },

    {
      "name": "Sindhudurg",
      "tahasil": ["Devgad", "Dodamarg", "Kankavli", "Kudal", "Malwan", "Sawantwadi", "Vaibhavvadi", "Vengurla"]
    },

    {
      "name": "Solapur",
      "tahasil": ["Akkalkot", "Barshi", "Karmala", "Madha", "Malshiras", "Mangalvedhe", "Mohol", "Pandharpur", "Sangole", "Solapur North", "Solapur South"]
    },

    {
      "name": "Thane",
      "tahasil": ["Ambarnath", "Bhiwandi", "Dahanu", "Jawhar", "Kalyan", "Mokhada", "Murbad", "Palghar", "Shahapur", "Talasari", "Thane", "Ulhasnagar", "Vada", "Vasai", "Vikramgad"]
    },

    {
      "name": "Washim",
      "tahasil": ["Arvi", "Ashti", "Deoli", "Hinganghat", "Karanja", "Samudrapur", "Seloo", "Wardha"]
    },

    {
      "name": "Washim",
      "tahasil": ["Karanja", "Malegaon", "Mangrulpir", "Manora", "Risod", "Washim"]
    },

    {
      "name": "Yavatmal",
      "tahasil": ["Arni",
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
        "Zari-Jamani"]
    }
  ]

  const getTalukas = () => {
    if (formData.location.district) {
      const district = districts.find(
        (district) => district.name === formData.location.district
      );
      return district ? district.tahasil : [];
    }
    return [];
  };

  return (
    <div className='p-10'>
      <h2 className="text-2xl mb-4">1. Project Details</h2>
      <table className=" table-auto w-full text-sm">
        <tbody>
          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border px-4 py-2">1. Proposed Project Name:</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="location.projectName"
                value={formData.location.projectName}
                onChange={handleChange}
                className="w-full p-2 border rounded "
                placeholder="Enter your project name"
              />
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border px-4 py-2">2. Building Type:</td>
            <td className="border px-4 py-2">
              <select
                name="location.buildingType"
                value={formData.location.buildingType}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-slate-100"
              >
                <option value="">--Select Building Type--</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="copmposite">Copmposite</option>
              </select>
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border px-4 py-2">3. Plot Number:</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="location.plotNo"
                value={formData.location.plotNo}
                onChange={handleChange}
                className="w-full p-2 border rounded "
                placeholder="Enter your plot number"
              />
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100">
            <td className="border px-4 py-2">4. District:</td>
            <td className="border px-4 py-2">
              <select
                name="location.district"
                value={formData.location.district}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-slate-100"
              >
                <option value="">--Select District--</option>
                {districts.map((district, index) => (
                  <option key={index} value={district.name}>
                    {district.name}
                  </option>
                ))}
              </select>
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100">
            <td className="border px-4 py-2">5. Taluka:</td>
            <td className="border px-4 py-2">
              <select
                name="location.taluka"
                value={formData.location.taluka}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-slate-100"
              >
                <option value="">--Select Taluka--</option>
                {getTalukas().map((taluka, index) => (
                  <option key={index} value={taluka}>
                    {taluka}
                  </option>
                ))}
              </select>
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border px-4 py-2">6. Village:</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="location.village"
                value={formData.location.village}
                onChange={handleChange}
                className="w-full p-2 border rounded "
                placeholder="Enter your village name"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className=" mt-4 flex justify-end">
        <button onClick={handleNext} className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Next
        </button>
      </div>
    </div>
  );
}
