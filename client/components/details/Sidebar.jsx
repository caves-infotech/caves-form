import style from "@/app/style.module.css";
import { useGetContext } from "@/services/formStateContext";
import { useEffect, useState } from "react";
import DeleteConfirmationPopup from "./DeleteConfirmationPopup";
function Sidebar({
  isSignedIn,
  forms,
  handleDelete,
  setInd,
  ind,
  setStep,
  loc,
}) {
  const { isSidebarOpen, setIsSidebarOpen, isVerticalNavbarOpen } =
    useGetContext();
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleShowForm(index, isMobile) {
    setInd(index);
    if(loc === 0){
      setStep(1);
    }
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  }

  function handleDeleteForm(index) {
    setInd(index);
    setIsModalVisible(true);
  }

  function handleCreateNewForm() {
    setInd(undefined);
    if(loc === 0){
      setStep(1);
    }
  }
  // useEffect(()=>{
  //   if(forms.length > 0){
  //     setIsSidebarOpen(true);
  //   }else{
  //     setIsSidebarOpen(false);
  //   }
  // }, [forms]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {isSignedIn && (
        <>
          <DeleteConfirmationPopup
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            handleDelete={handleDelete}
          />
          <button
              onClick={toggleSidebar}
              className="p-1 fixed top-[135px] left-4 fill-black "
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
          <div className="fixed  sm:hidden z-20">
            
            <div
              className={`fixed inset-0 z-40  ${
                isSidebarOpen
                  ? "opacity-100 translate-x-0"
                  : " -translate-x-full "
              }`}
              onClick={() => setIsSidebarOpen(false)}
            ></div>

            <div
              className={`fixed mt-12 left-0 w-64 top-20 bottom-0 bg-white overflow-y-auto shadow-lg transform transition-transform duration-300 z-50 ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex items-center justify-end p-3">
                {ind !== undefined && (
                  <button
                    onClick={handleCreateNewForm}
                    className={
                      style.colorThree +
                      " sm:mr-12 flex items-center justify-center text-white fill-white hover:bg-slate-700 hover:shadow-2xl font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center"
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

                <div className="flex items-center justify-center">
                  <button onClick={() => setIsSidebarOpen(false)}>
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
              </div>
              <div className="px-2 list-disc ">
                {forms.length > 0 ? (
                  forms.map((form, index) => (
                    <div
                      key={index}
                      className={` flex items-center justify-between  fill-gray-400 text-slate-500  px-2 my-1 rounded-md 
${ind == index ? style.colorThree + " text-white fill-white" : " "}`}
                    >
                      <div
                        onClick={() => handleShowForm(index, false)}
                        className="flex flex-1 items-center justify-between "
                      >
                        <p key={index} className="py-1 text-sm font-medium">
                          {index + 1 + ". "}
                          {loc === 0 && form.project.projectName}
                          {loc === 1 && form.projectName}
                          {loc === 2 && form.name}
                          {loc === 3 && form.projectName}
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
                      <button
                        onClick={() => handleDeleteForm(index)}
                        className={" fill-red-500 "}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                        >
                          <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                        </svg>
                      </button>
                    </div>
                  ))
                ) : (
                  <div className=" text-slate-500 text-center">
                    You don&apos;t have any form
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex-col hidden sm:flex">
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
                } fixed rounded-xl top-40 h-[80vh] w-48 transform ml-2  
          transition-transform duration-500 ease-in-out z-10 shadow-xl overflow-y-auto`
              }
            >
              <div className="flex items-center justify-end pt-3 space-x-2 ">
                {ind !== undefined && (
                  <button
                    onClick={handleCreateNewForm}
                    className={
                      style.colorThree +
                      " flex items-center text-white fill-white hover:bg-slate-700 hover:shadow-2xl font-medium rounded-lg text-md w-full sm:w-auto px-3 py-2 text-center"
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

                <div>
                  <button onClick={() => setIsSidebarOpen(false)}>
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
              </div>

              <div className="px-3 list-disc ">
                {forms.length > 0 ? (
                  forms.map((form, index) => (
                    <div
                      key={index}
                      className={` flex items-center justify-between hover:bg-gray-400 hover:text-white hover:fill-red-300 fill-white text-slate-500 px-2 my-2 rounded-md 
                ${ind == index ? style.colorThree + " text-white  " : "  "}`}
                    >
                      <div
                        onClick={() => handleShowForm(index, false)}
                        className="flex flex-1 items-center justify-between fill-white"
                      >
                        <p key={index} className="py-1 text-sm font-medium">
                          {index + 1 + ". "}
                          {loc === 0 && form.project.projectName}
                          {loc === 1 && form.projectName}
                          {loc === 2 && form.name}
                          {loc === 3 && form.projectName}
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

                      <button
                        onClick={() => handleDeleteForm(index)}
                        className={ind == index ? " fill-red-500 " : ""}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                        >
                          <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                        </svg>
                      </button>
                    </div>
                  ))
                ) : (
                  <div className=" text-slate-500 text-center">
                    You don&apos;t have any form
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Sidebar;
