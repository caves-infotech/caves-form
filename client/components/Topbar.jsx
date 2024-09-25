const Topbar = ({ step, setStep }) => {
    return (
      // <div className=" max-h-fit w-1/5 bg-gray-800 text-white p-4">
      <div className=" flex justify-between rounded-t-xl bg-white  border-b-2">

        <ul className="flex ">
          <li
            className={` sm:text-nowrap transform transition-all duration-200 font-bold cursor-pointer mx-1 p-2 hover:text-black hover:border-slate-900 hover:border-b-2 ${step === 1 ? ' text-black border-slate-900 border-b-2' : 'text-gray-500'}`}
            onClick={() => setStep(1)}
          >
            Project Details
          </li>
          <li
            className={`sm:text-nowrap transform transition-all duration-200 font-bold cursor-pointer mx-1 p-2 hover:text-black hover:border-slate-900 hover:border-b-2 ${step === 2 ? 'text-black border-slate-900 border-b-2' : 'text-gray-500'}`}
            onClick={() => setStep(2)}
          >
            Plot Details & FSI
          </li>
          <li
            className={`sm:text-nowrap transform transition-all duration-200 font-bold cursor-pointer mx-1 p-2 hover:text-black hover:border-slate-900 hover:border-b-2 ${step === 3 ? 'text-black border-slate-900 border-b-2' : 'text-gray-500'}`}
            onClick={() => setStep(3)}
          >
            Performa -I: Area Statement
          </li>
        </ul>
        <div className=" justify-end">
        <button
            className={`sm:text-nowrap transform transition-all duration-200 font-bold cursor-pointer mx-1 p-2 hover:text-black hover:border-slate-900 hover:border-b-2 ${step === 4 ? 'text-black border-slate-900 border-b-2' : 'text-gray-500'}`}
            onClick={() => setStep(4)}
          >
            Preview
          </button>
        </div>
        
      </div>
    );
  };
  
  export default Topbar;
  