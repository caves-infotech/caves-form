import style from "../app/style.module.css";
import { useGetContext } from "@/services/formStateContext";
import List from "./verticalNavbar/List";
import EnquiryForm from "./verticalNavbar/EnquiryForm";

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
    if (isSidebarOpen) {
      if (state !== s) {
        setIsSidebarOpen(false);
        setTimeout(() => {
          setIsSidebarOpen(true);
        }, 1);
      }
    } else {
      setIsSidebarOpen(true);
    }
    setIsSidebarOpen(!isSidebarOpen);

    setState(s);
  };
  return (
    <div
      className={
        style.colorFive +
        ` fixed ${
          isVerticalNavbarOpen ? "w-64 " : "w-24 "
        } shadow-xl h-svh pt-4  top-16 sm:flex hidden flex-col transition-all duration-500 ease-in-out z-20`
      }
    >
      <ul className={" mx-5 "}>
        <li
          onClick={() =>
            isVerticalNavbarOpen
              ? setIsVerticalNavbarOpen(false)
              : setIsVerticalNavbarOpen(true)
          }
          className={
            style.colorSix +
            " py-3 w-14 flex items-center justify-center hover:shadow-xl shadow-md font-medium transition duration-500 rounded-xl my-4 mb-4"
          }
        >
          <div>
            {isVerticalNavbarOpen ? (
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#000000"
                >
                  <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
                </svg>
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
          stateNo={6}
          stateName={"UDCPR Index"}
        />
        <List
          state={state}
          setStateAndSetIsSidebarOpen={setStateAndSetIsSidebarOpen}
          isVerticalNavbarOpen={isVerticalNavbarOpen}
          stateNo={5}
          stateName={"Appendix"}
        />
        
        <hr />
        {/* <div class="relative my-4">
          <hr  />
          <span
            class={style.colorFive + " absolute  -top-3 px-2 font-extralight"}
          >
            Tools
          </span>
        </div> */}
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
        {/* <List
          state={state}
          setStateAndSetIsSidebarOpen={setStateAndSetIsSidebarOpen}
          isVerticalNavbarOpen={isVerticalNavbarOpen}
          stateNo={4}
          stateName={" Building Height "}
        /> */}
        <List
          state={state}
          setStateAndSetIsSidebarOpen={setStateAndSetIsSidebarOpen}
          isVerticalNavbarOpen={isVerticalNavbarOpen}
          stateNo={4}
          stateName={"Building Margin "}
        />
        <hr />
        {/* <div class="relative my-4">
          <hr />
          <span class={style.colorFive + " absolute  -top-3 px-2"}>More</span>
        </div> */}
        <List
          state={state}
          setStateAndSetIsSidebarOpen={setStateAndSetIsSidebarOpen}
          isVerticalNavbarOpen={isVerticalNavbarOpen}
          stateNo={1}
          stateName={"Create Performa-I"}
        />
        {/* <List
          state={state}
          setStateAndSetIsSidebarOpen={setStateAndSetIsSidebarOpen}
          isVerticalNavbarOpen={isVerticalNavbarOpen}
          stateNo={7}
          stateName={"FAQ"}
        /> */}
        <EnquiryForm isVerticalNavbarOpen={isVerticalNavbarOpen} />
        
      </ul>
    </div>
  );
};

export default VerticalNavbar;
