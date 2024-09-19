import style from "../app/style.module.css";

const Sidebar = ({ forms, setInd, setStep }) => {


  function handleShowForm(index) {
    setInd(index);
    setStep(4);
  }

  function handleCreateNewForm() {
    setInd(undefined);
    setStep(1);
  }

  return (
    // <div className=" max-h-fit w-1/5 bg-gray-800 text-white p-4">
    <div className={ style.colorTwo + " m-5 p-5 rounded-lg w-64 h-[820px] text-white  top-16 sm:flex flex-col hidden"}>

      <div className="px-12 pt-5 mb-10">
        <button onClick={handleCreateNewForm} className=' text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700'>Create New</button>
      </div>

      <div className="list-disc pl-5">
        {forms.map((form, index) => (
          <p onClick={() => handleShowForm(index)} key={index} className="text-lg font-medium hover:bg-blue-800 ">
            {index + 1}. {form.location.village}
          </p>
        ))}
      </div>

    </div>
  );
};

export default Sidebar;
