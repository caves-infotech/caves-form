import style from "../app/style.module.css";
import { useGetContext } from "@/services/formStateContext";
import List from "./verticalNavbar/List";

const VerticalNavbar = () => {
  const {
    setIsSidebarOpen,
    isSidebarOpen,
    isVerticalNavbarOpen,
    setIsVerticalNavbarOpen,
    setState,
    state,
  } = useGetContext();

  const setStateAndSetIsSidebarOpen = (s) => {
    if(isSidebarOpen && state !== s){
      setIsSidebarOpen(false);
      setTimeout(() => {
        setIsSidebarOpen(true);

      }, 5);
    } else {
      setIsSidebarOpen(!isSidebarOpen);
    }
    setState(s);
  };
  return (
    <div
      className={
        style.colorFive +
        ` fixed ${
          isVerticalNavbarOpen ? "w-64 " : "w-24 "
        }  h-svh pt-4  top-16 sm:flex flex-col hidden transition-all duration-500 ease-in-out z-20`
      }
      // className={`fixed top-0 left-0 h-full bg-gray-800 text-white transform ${
      //   isVerticalNavbarOpen ? 'translate-x-0 w-60' : 'w-20'
      // } transition-all duration-300 ease-in-out z-50`}
    >
      <ul className={"  mx-5 "}>
        <li
        onClick={() =>
          isVerticalNavbarOpen
            ? setIsVerticalNavbarOpen(false)
            : setIsVerticalNavbarOpen(true)
        }
          className={
            " py-3 bg-opacity-30 bg-blue-300 hover:shadow-xl shadow-md font-medium transition duration-500 rounded-xl my-4 mb-4 flex items-center justify-center "
          }
        >
          <div 
            className=" flex items-center "
          >
            {isVerticalNavbarOpen ? (
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#000000"
                >
                  <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
                </svg>

                <p className={ style.typingEffect + " pl-3 text-lg "}>Close Sidebar</p>
              </div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="#000000"
              >
                <path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" />
              </svg>
            )}
          </div>
        </li>

        <List
          state={state}
          setStateAndSetIsSidebarOpen={setStateAndSetIsSidebarOpen}
          isVerticalNavbarOpen={isVerticalNavbarOpen}
          stateNo={1}
          stateName={"Create Performa-I"}
        />
        <List
          state={state}
          setStateAndSetIsSidebarOpen={setStateAndSetIsSidebarOpen}
          isVerticalNavbarOpen={isVerticalNavbarOpen}
          stateNo={2}
          stateName={"Potential FSI"}
        />
        <List
          state={state}
          setStateAndSetIsSidebarOpen={setStateAndSetIsSidebarOpen}
          isVerticalNavbarOpen={isVerticalNavbarOpen}
          stateNo={3}
          stateName={"Parking"}
        />
        <List
          state={state}
          setStateAndSetIsSidebarOpen={setStateAndSetIsSidebarOpen}
          isVerticalNavbarOpen={isVerticalNavbarOpen}
          stateNo={4}
          stateName={" Building Height "}
        />
        <List
          state={state}
          setStateAndSetIsSidebarOpen={setStateAndSetIsSidebarOpen}
          isVerticalNavbarOpen={isVerticalNavbarOpen}
          stateNo={5}
          stateName={"B/Up Area "}
        />
        <List
          state={state}
          setStateAndSetIsSidebarOpen={setStateAndSetIsSidebarOpen}
          isVerticalNavbarOpen={isVerticalNavbarOpen}
          stateNo={6}
          stateName={"Forms"}
        />
      </ul>
    </div>
  );
};

export default VerticalNavbar;
