const Topbar = ({ step, setStep }) => {
  return (
    // <div className="w-1/5 p-4 text-white bg-gray-800 max-h-fit">
    <div className="flex justify-between px-4 pt-4 -mb-px bg-white border-b-2 rounded-t-xl">
      <ul className="flex ">
        
        <li
          className={`sm:text-nowrap  transition-transform duration-200 font-bold cursor-pointer mx-1 p-2 hover:text-black hover:border-slate-400 hover:border-b-2 ${step === 2 ? 'text-black border-slate-900 border-b-2' : 'text-gray-500'}`}
        >
          Plot Details & FSI
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
