import style from "@/app/style.module.css";
import { useState } from "react";
import { useGetContext } from "@/services/formStateContext";
import List from "./List";
import Link from "next/link";
import { useAuth } from "@/services/authContext";
import EnquiryPopup from "./EnquiryPopup";

const VerticalNavbar = () => {
  const {
    setIsSidebarOpen,
    isSidebarOpen,
    isVerticalNavbarOpen,
    setIsVerticalNavbarOpen,
    setState,
    state,
  } = useGetContext();
  const { isSignedIn } = useAuth();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const togglePopup = () => {
    setIsModalVisible(!isModalVisible);
  };

  const setStateAndSetIsSidebarOpen = (s) => {
    if (isSignedIn) {
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
    }
    setState(s);
  };

  return (
    <>
      <div
        className={
          style.colorFive +
          ` fixed ${
            isVerticalNavbarOpen ? "w-64 " : "w-24 "
          } shadow-xl h-svh pt-4  top-11 sm:flex hidden flex-col transition-all duration-500 ease-in-out z-20`
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

          <li>
            <Link
              href="faq"
              className={` font-semibold bg-gray-200 fixed bottom-20 ${
                isVerticalNavbarOpen ? "px-20" : ""
              } py-3 flex justify-center hover:shadow-xl shadow-md transition-all duration-500 rounded-xl hover:bg-[#949494] text-black fill-white `}
            >
              <p className="px-1">FAQs</p>
            </Link>
          </li>

          <li
            className={` ${
              isVerticalNavbarOpen ? "px-20" : ""
            } px-3 font-semibold bg-black fixed bottom-4 py-3 gap-1 flex justify-center hover:shadow-xl shadow-md transition-all duration-500 rounded-xl hover:bg-[#4b4e58] text-white fill-white `}
            onClick={togglePopup}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="M480-440 160-640v400h360v80H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v280h-80v-200L480-440Zm0-80 320-200H160l320 200ZM760-40l-56-56 63-64H600v-80h167l-64-64 57-56 160 160L760-40ZM160-640v440-240 3-283 80Z" />
            </svg>
            {isVerticalNavbarOpen ? (
                <p className={style.typingEffect}>Online BPMS Enquiry</p>
            ) : (
              ""
            )}
          </li>
        </ul>
      </div>
      {isModalVisible && (
        <EnquiryPopup togglePopup={togglePopup} isVisible={isModalVisible} />
      )}
    </>
  );
};

export default VerticalNavbar;
