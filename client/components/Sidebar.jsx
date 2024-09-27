import style from "../app/style.module.css";
import { useGetContext } from "@/services/formStateContext";
const Sidebar = ({ forms, setInd, ind, setStep }) => {
  const { isSidebarOpen, setIsSidebarOpen, isVerticalNavbarOpen } =
    useGetContext();

  function handleShowForm(index) {
    setInd(index);
    setStep(4);
  }

  function handleCreateNewForm() {
    setInd(undefined);
    setStep(1);
  }

  return (
    <>
      <div className="sm:flex flex-col hidden">
        <div
          className={
            style.colorFive +
            ` ${
              isVerticalNavbarOpen
                ? isSidebarOpen
                  ? "translate-x-0 left-64"
                  : "-translate-x-full left-20 "
                : isSidebarOpen
                ? "translate-x-0 left-24 "
                : "-translate-x-full left-20 "
            } fixed rounded-xl top-40 h-[750px] w-64 transform ml-2  
          transition-transform duration-500 ease-in-out z-10 shadow-xl`
          }
        >
          <div className="flex items-center justify-end p-5">
            {ind !== undefined && (
              <button
                onClick={handleCreateNewForm}
                className={
                  style.colorThree +
                  " mr-12 flex items-center justify-center text-white fill-white hover:bg-slate-700 hover:shadow-2xl font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center"
                }
              >
                <p className="mr-2">Create</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                >
                  <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
              </button>
            )}

            <button
              onClick={() => setIsSidebarOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="45px"
                viewBox="0 -960 960 960"
                width="45px"
              >
                <path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" />
              </svg>
            </button>
          </div>

          <div className="list-disc px-5">
            {forms.map((form, index) => (
              <div
                className={` flex items-center justify-between hover:bg-gray-400 hover:text-white fill-white text-slate-500 hover:fill-white px-2 my-1 rounded-md 
                ${ind == index ? style.colorThree + " text-white " : " "}`}
              >
                <p
                  onClick={() => handleShowForm(index)}
                  key={index}
                  className="text-lg font-medium py-1"
                >
                  {form.location.village}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                >
                  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                </svg>
              </div>
            ))}
          </div>
          <hr className="my-10" />
          <hr className="my-10" />
          <hr className="my-10" />
          <hr className="my-10" />
          <hr className="my-10" />
          <hr className="my-10" />
          <hr className="my-10" />
          <hr className="my-10" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
