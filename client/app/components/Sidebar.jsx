const Sidebar = ({ step, setStep }) => {
    return (
      // <div className=" max-h-fit w-1/5 bg-gray-800 text-white p-4">
      <div className="w-64 h-screen bg-gray-800 text-white fixed top-0 left-0 flex flex-col">

        <ul className="space-y-4">
          <li
            className={`cursor-pointer ${step === 2 ? 'font-bold' : ''}`}
            onClick={() => setStep(1)}
          >
            1: Location Details
          </li>
          <li
            className={`cursor-pointer ${step === 3 ? 'font-bold' : ''}`}
            onClick={() => setStep(2)}
          >
            2: Plot Details
          </li>
          <li
            className={`cursor-pointer ${step === 3 ? 'font-bold' : ''}`}
            onClick={() => setStep(3)}
          >
            3: FSI Details
          </li>
        </ul>
        <div className="mt-8">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4 w-full"
            onClick={() => setStep(4)}
          >
            Preview
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded mt-4 w-full"
            onClick={() => alert('Form submitted')}
          >
            Submit
          </button>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  