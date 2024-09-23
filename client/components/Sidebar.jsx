import style from "../app/style.module.css";

const Sidebar = ({ forms, setInd, setStep, isSidebarOpen }) => {

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
    <div className={ style.colorFive + ` ${isSidebarOpen ? " left-64 " : " left-20"} overflow-y-auto fixed p-5  mt-3 rounded-lg w-64 h-[820px]  top-16 sm:flex flex-col hidden`}>

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
      <hr className="my-10"/><hr className="my-10"/><hr className="my-10"/><hr className="my-10"/><hr className="my-10"/><hr className="my-10"/><hr className="my-10"/><hr className="my-10"/>

    </div>
  );
};

export default Sidebar;
