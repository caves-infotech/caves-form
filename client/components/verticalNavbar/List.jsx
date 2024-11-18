import style from "@/app/style.module.css";

function List({
  state,
  setStateAndSetIsSidebarOpen,
  stateNo,
  isVerticalNavbarOpen,
  stateName,
}) {
  return (
    <li
      onClick={() => setStateAndSetIsSidebarOpen(stateNo)}
      className={` font-semibold transition-all py-2 hover:bg-[#4b4e58] hover:text-white hover:fill-white stroke-slate-700 hover:stroke-white rounded-lg my-3 m-2  ${
        state == stateNo
          ? style.colorThree +
            " text-yellow-400 fill-yellow-400 stroke-yellow-400"
          : " fill-slate-700"
      }`}
    >
      <div className=" flex ">
        <div className=" flex items-center px-2">
          {stateNo == 1 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
            </svg>
          )}{" "}
          {stateNo == 2 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="M320-240h60v-80h80v-60h-80v-80h-60v80h-80v60h80v80Zm200-30h200v-60H520v60Zm0-100h200v-60H520v60Zm44-152 56-56 56 56 42-42-56-58 56-56-42-42-56 56-56-56-42 42 56 56-56 58 42 42Zm-314-70h200v-60H250v60Zm-50 472q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
            </svg>
          )}{" "}
          {stateNo == 3 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="M400-106v-228l56-160q5-11 14.5-18.5T494-520h292q14 0 24 7.5t14 18.5l56 160v228q0 11-7.5 18.5T854-80h-28q-11 0-18.5-7.5T800-106v-34H480v34q0 11-7.5 18.5T454-80h-28q-11 0-18.5-7.5T400-106Zm80-274h320l-28-80H508l-28 80Zm-20 60v120-120Zm60 100q17 0 28.5-11.5T560-260q0-17-11.5-28.5T520-300q-17 0-28.5 11.5T480-260q0 17 11.5 28.5T520-220Zm240 0q17 0 28.5-11.5T800-260q0-17-11.5-28.5T760-300q-17 0-28.5 11.5T720-260q0 17 11.5 28.5T760-220ZM240-400v-80h80v80h-80Zm200-240v-80h80v80h-80ZM240-240v-80h80v80h-80Zm0 160v-80h80v80h-80ZM80-80v-560h200v-240h400v280h-80v-200H360v240H160v480H80Zm380-120h360v-120H460v120Z" />
            </svg>
          )}{" "}
          {/* {stateNo == 4 && (
            <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="0.7">

              <path d="M2 2h10v19h11v1H1v-1h1zm1 19h8V3H3zM17.176 5L15.5 2.942 13.824 5H15v13h-1.176l1.676 2.058L17.176 18H16V5zM8 5h2v2H8zm-4 7h2v-2H4zm0-5h2V5H4zm0 10h2v-2H4zm4-5h2v-2H8zm0 5h2v-2H8z">
              </path>
            </svg>
          )}{" "} */}
          {stateNo == 4 && (
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth="0.7"
            >
              <path d="M12 21V4.242L18.17 16H19a.987.987 0 0 1 .093-.398L12 2H2v19H1v1h22v-1zm-1 0H3V3h8zm4-3h5v-1.176l2.058 1.676L20 20.176V19h-5v1.176L12.942 18.5 15 16.824zM8 5h2v2H8zm-4 7h2v-2H4zm0-5h2V5H4zm0 10h2v-2H4zm4-5h2v-2H8zm0 5h2v-2H8z" />
            </svg>
          )}{" "}
          {stateNo == 5 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="m720-120 160-160-56-56-64 64v-167h-80v167l-64-64-56 56 160 160ZM560 0v-80h320V0H560ZM240-160q-33 0-56.5-23.5T160-240v-560q0-33 23.5-56.5T240-880h280l240 240v121h-80v-81H480v-200H240v560h240v80H240Zm0-80v-560 560Z" />
            </svg>
          )}
          {stateNo == 6 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z" />
            </svg>
          )}
          {stateNo == 7 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="M320-80q-33 0-56.5-23.5T240-160v-480q0-33 23.5-56.5T320-720h480q33 0 56.5 23.5T880-640v480q0 33-23.5 56.5T800-80H320Zm0-80h200v-120H320v120Zm280 0h200v-120H600v120ZM80-240v-560q0-33 23.5-56.5T160-880h560v80H160v560H80Zm240-120h200v-120H320v120Zm280 0h200v-120H600v120ZM320-560h480v-80H320v80Z" />
            </svg>
          )}
          {stateNo == 8 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="M220-80v-300h-60v-220q0-33 23.5-56.5T240-680h120q33 0 56.5 23.5T440-600v220h-60v300H220Zm80-640q-33 0-56.5-23.5T220-800q0-33 23.5-56.5T300-880q33 0 56.5 23.5T380-800q0 33-23.5 56.5T300-720ZM600-80v-240H480l102-306q8-26 29.5-40t48.5-14q27 0 48.5 14t29.5 40l102 306H720v240H600Zm60-640q-33 0-56.5-23.5T580-800q0-33 23.5-56.5T660-880q33 0 56.5 23.5T740-800q0 33-23.5 56.5T660-720Z" />
            </svg>
          )}
        </div>

        {isVerticalNavbarOpen ? (
          <div
            className={style.typingEffect + " flex justify-between w-[155px]"}
          >
            <p className={style.typingEffect + " typingEffect"}>
              {" "}
              {stateName}{" "}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </div>
        ) : (
          ""
        )}
      </div>
    </li>
  );
}

export default List;
