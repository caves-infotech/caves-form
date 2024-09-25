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
            className={`sm:text-nowrap flex items-center rounded-xl bg-black transform transition-all duration-200 font-bold cursor-pointer mx-1 p-2 hover:text-white hover:border-white hover:border-b-2 ${step === 4 ? 'text-white border-white border-b-2' : 'text-white'}`}
            onClick={() => setStep(4)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
            <p className="pl-2">
              Preview
            </p>
          </button>
        </div>
        
      </div>
    );
  };
  
  export default Topbar;
  