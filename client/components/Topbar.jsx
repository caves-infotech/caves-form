const Topbar = ({ step, setStep }) => {
    return (
      // <div className=" max-h-fit w-1/5 bg-gray-800 text-white p-4">
      <div className=" rounded-lg flex justify-between items-center">

        <ul className="flex space-x-4">
          <li
            className={`  font-bold cursor-pointer p-2 ${step === 1 ? ' text-black bg-white rounded-t-xl' : 'text-white'}`}
            onClick={() => setStep(1)}
          >
            Project Details
          </li>
          <li
            className={` font-bold cursor-pointer p-2 ${step === 2 ? 'text-black bg-white rounded-t-xl' : 'text-white'}`}
            onClick={() => setStep(2)}
          >
            Plot Details & FSI
          </li>
          <li
            className={` font-bold cursor-pointer p-2 ${step === 3 ? 'text-black bg-white rounded-t-xl' : 'text-white'}`}
            onClick={() => setStep(3)}
          >
            Performa -I: Area Statement
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
  