const Topbar = ({ step, setStep }) => {
  return (
    // <div className=" max-h-fit w-1/5 bg-gray-800 text-white p-4">
    <div className="pt-4 px-4 flex justify-between rounded-t-3xl  bg-white -mb-px border-b-2">
      <ul className=" flex sm:flex-row flex-col">
        <li
          className={` sm:text-nowrap  font-bold cursor-pointer mx-1 p-2 hover:text-black hover:border-slate-400 hover:border-b-2 ${step === 1 ? ' text-black border-slate-900 border-b-2' : 'text-gray-500'}`}
          onClick={() => setStep(1)}
        >
          Project Details
        </li>
        <li
          className={`sm:text-nowrap  transition-transform duration-200 font-bold cursor-pointer mx-1 p-2 hover:text-black hover:border-slate-400 hover:border-b-2 ${step === 2 ? 'text-black border-slate-900 border-b-2' : 'text-gray-500'}`}
          onClick={() => setStep(2)}
        >
          Plot Details & FSI
        </li>
        <li
          className={`sm:text-nowrap  transition-transform duration-200 font-bold cursor-pointer mx-1 p-2 hover:text-black hover:border-slate-400 hover:border-b-2 ${step === 3 ? 'text-black border-slate-900 border-b-2' : 'text-gray-500'}`}
          onClick={() => setStep(3)}
        >
          Performa -I: Area Statement
        </li>
      </ul>
      <div className="flex items-center justify-end">
        <button
          className={`flex items-center rounded-xl text-white bg-black hover:bg-slate-600  transition-transform duration-200 font-bold cursor-pointer mx-1 p-2 mb-2 `}
          onClick={() => setStep(4)}
        >
          <p className="pr-2 sm:flex hidden">
            Preview
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#FFFFFF">
            <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Topbar;

// import { Steps } from 'antd';
// import "./cutomAntd.css";

// const { Step } = Steps;

// const Topbar = ({ step, setStep }) => {
//   const handleStepChange = (currentStep) => {
//     setStep(currentStep + 1); // Ant Design Steps are 0-indexed, so we add 1
//   };

//   return (
//     <div className="p-4 flex justify-between rounded-t-xl bg-white -mb-px border-b-2">
//       {/* Ant Design Steps Component */}
//       <div className="flex-1">
//         <Steps current={step - 1}  onChange={handleStepChange} >
//           <Step title="Project Details"/>
//           <Step title="Plot Details & FSI" />
//           <Step title="Performa -I: Area Statement" />
//           <Step title="Preview" />
//         </Steps>
//       </div>
      
//       {/* Preview Button is removed as the Preview step is now included inside Steps */}
//       {/* Optional: You can add custom content for the preview step below */}
//     </div>
//   );
// };

// export default Topbar;
