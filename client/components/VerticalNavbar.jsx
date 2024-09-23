import style from "../app/style.module.css";
import { useGetContext } from "@/services/formStateContext";

const VerticalNavbar = ({ setState }) => {
  const { isSidebarOpen, setIsSidebarOpen, state } = useGetContext();
  return (
    // <div className=" max-h-fit w-1/5 bg-gray-800 text-white p-4">
    <div
      className={
        style.colorFive +
        ` fixed ${
          isSidebarOpen ? "w-60 " : "w-16 "
        }  h-svh pt-4  top-16 sm:flex flex-col hidden`
      }
    >
      <ul className={"  mx-5 "}>
        <li className={"p-1 hover:bg-gray-300 transition-all duration-700 rounded-xl my-2 "}>
          <button
            onClick={() =>
              isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true)
            }
            className="hover:text-blue-500 flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 4l-1.41 1.41L15.17 10H4v2h11.17l-4.58 4.59L12 18l8-8z" />
            </svg>
            {isSidebarOpen ? "Close Sidebar" : ""}
          </button>
        </li>

        <li className={" transition-all p-1 hover:bg-gray-300 duration-700 rounded-xl my-2 "}>
          <button
            onClick={() => setState(1)}
            className="hover:text-blue-500 flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 4l-1.41 1.41L15.17 10H4v2h11.17l-4.58 4.59L12 18l8-8z" />
            </svg>
            {isSidebarOpen ? (
              <div className=" flex justify-between">
                <p>Create Performa-I</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 4l-1.41 1.41L15.17 10H4v2h11.17l-4.58 4.59L12 18l8-8z" />
                </svg>
              </div>
            ) : (
              ""
            )}
          </button>
        </li>

        <li className={"p-1 hover:bg-gray-300  transition-all duration-700 rounded-xl my-2 "}>
          
          <button onClick={() => setState(2)} className="hover:text-blue-500 flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 4l-1.41 1.41L15.17 10H4v2h11.17l-4.58 4.59L12 18l8-8z" />
          </svg>
          {isSidebarOpen ? (
            <div className="flex">
            <p>Potential FSI</p>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 4l-1.41 1.41L15.17 10H4v2h11.17l-4.58 4.59L12 18l8-8z" />
          </svg>
            </div>
          ) : ""}
          </button>
        </li>

        <li className={"p-1 hover:bg-gray-300  transition-all duration-700 rounded-xl my-2 "}>
          
          <button onClick={() => setState(3)} className="hover:text-blue-500 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 4l-1.41 1.41L15.17 10H4v2h11.17l-4.58 4.59L12 18l8-8z" />
          </svg>
          {isSidebarOpen ? (
            <div className="flex">
              <p> Parking </p>
              <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 4l-1.41 1.41L15.17 10H4v2h11.17l-4.58 4.59L12 18l8-8z" />
          </svg>
            </div>
          ) : ""}
          </button>
        </li>

        <li className={"p-1 hover:bg-gray-300  transition-all duration-700 rounded-xl my-2 "}>
          
          <button onClick={() => setState(4)} className="hover:text-blue-500 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 4l-1.41 1.41L15.17 10H4v2h11.17l-4.58 4.59L12 18l8-8z" />
          </svg>
          {isSidebarOpen ? (
            <div className="flex">
              <p> Building Height </p>
              <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 4l-1.41 1.41L15.17 10H4v2h11.17l-4.58 4.59L12 18l8-8z" />
          </svg>
            </div>
          ) : ""}
          </button>
        </li>

        <li className={"p-1 hover:bg-gray-300  transition-all duration-700 rounded-xl my-2 "}>
          
          <button onClick={() => setState(5)} className="hover:text-blue-500 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 4l-1.41 1.41L15.17 10H4v2h11.17l-4.58 4.59L12 18l8-8z" />
          </svg>
          {isSidebarOpen ? (
            <div className="flex">
              <p>  B/Up Area </p>
              <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 4l-1.41 1.41L15.17 10H4v2h11.17l-4.58 4.59L12 18l8-8z" />
          </svg>
            </div>
          ) : ""}
          </button>
        </li>

        <li className={"p-1 hover:bg-gray-300  transition-all duration-700 rounded-xl my-2 "}>
          
          <button onClick={() => setState(6)} className="hover:text-blue-500 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 4l-1.41 1.41L15.17 10H4v2h11.17l-4.58 4.59L12 18l8-8z" />
          </svg>
          {isSidebarOpen ? (
            <div className="flex">
              <p> Forms </p>
              <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 4l-1.41 1.41L15.17 10H4v2h11.17l-4.58 4.59L12 18l8-8z" />
          </svg>
            </div>
          ) : ""}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default VerticalNavbar;
