const Topbar = ({ step, setStep }) => {
    return (
      // <div className=" max-h-fit w-1/5 bg-gray-800 text-white p-4">
      <div className=" pt-4 rounded-lg flex justify-between items-center">

        <ul className="flex space-x-4">
          <li
            className={`text-white font-bold cursor-pointer p-2 ${step === 1 ? ' text-black bg-white rounded-t-xl' : ''}`}
            onClick={() => setStep(1)}
          >
            Location Details
          </li>
          <li
            className={`text-white font-bold cursor-pointer p-2 ${step === 2 ? 'text-black bg-white rounded-t-xl' : ''}`}
            onClick={() => setStep(2)}
          >
            Plot Details
          </li>
          <li
            className={`text-white font-bold cursor-pointer p-2 ${step === 3 ? 'text-black bg-white rounded-t-xl' : ''}`}
            onClick={() => setStep(3)}
          >
            FSI Details
          </li>
        </ul>
          <button
            className="bg-blue-500 text-white p-1 px-4 rounded-2xl"
            onClick={() => setStep(4)}
          >
            Preview
          </button>
      </div>
    );
  };
  
  export default Topbar;
  