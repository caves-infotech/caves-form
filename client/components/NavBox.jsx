import style from "@/app/style.module.css";

export default function NavBox() {
  return (
    // <div className=" m-8 sm:flex items-center justify-center sm:space-x-4">
    //     <Box />
    //     <Box />
    //     <Box />
    //     <Box />

    // </div>
    <div className=" sm:m-20 sm:mx-60 m-12 grid grid-flow-row gap-12 text-gray-700 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Box
        text={
          "10+ Pro Tips how to Miximize Saleable Built-Up Area in any Plot or Project"
        }
        svg={
          //   <svg
          //     xmlns="http://www.w3.org/2000/svg"
          //     height="30px"
          //     viewBox="0 -960 960 960"
          //     width="30px"
          //   >
          //     <path d="M80-120v-720h400v160h400v320h-80v-240H480v80h80v80h-80v80h80v80h-80v80h160v80H80Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80ZM800-40v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM640-440v-80h80v80h-80Zm0 160v-80h80v80h-80Z" />
          //   </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
          >
            <path d="M480-80q-26 0-47-12.5T400-126q-33 0-56.5-23.5T320-206v-142q-59-39-94.5-103T190-590q0-121 84.5-205.5T480-880q121 0 205.5 84.5T770-590q0 77-35.5 140T640-348v142q0 33-23.5 56.5T560-126q-12 21-33 33.5T480-80Zm-80-126h160v-36H400v36Zm0-76h160v-38H400v38Zm-8-118h58v-108l-88-88 42-42 76 76 76-76 42 42-88 88v108h58q54-26 88-76.5T690-590q0-88-61-149t-149-61q-88 0-149 61t-61 149q0 63 34 113.5t88 76.5Zm88-162Zm0-38Z" />
          </svg>
        }
      />
      <Box
        text={
          "Access 24/7 Free Online Support for All Your Questions on Maharashtra UDCPR 2022 Bye-laws & BPMS Building Permissions!"
        }
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
          >
            <path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
          </svg>
        }
      />
      <Box
        text={
          "Get your project approved for BPMS online building permission with the guidance of our expert team!"
        }
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
          >
            <path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm179-80h442L480-830 259-720ZM80-120v-80h482q2 21 5 40.5t9 39.5H80Zm600-310v-130h80v90l-80 40ZM800 0q-69-17-114.5-79.5T640-218v-102l160-80 160 80v102q0 76-45.5 138.5T800 0Zm-29-120 139-138-42-42-97 95-39-39-42 43 81 81ZM259-720h442-442Z" />
          </svg>
        }
      />
      <Box
        text={
          "Discover how our expert team can help you unlock the full potential of your project's saleable built-up area!"
        }
        svg={
          //   <svg
          //     xmlns="http://www.w3.org/2000/svg"
          //     height="35px"
          //     viewBox="0 -960 960 960"
          //     width="35px"
          //   >
          //     <path d="M480-600 340-740l140-140 140 140-140 140ZM40-160v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-200q-43 0-84-13.5T320-252v92H40Zm120-280q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-560q0 50-34.5 85T160-440Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-560q0 50-34.5 85T800-440Z" />
          //   </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
          >
            <path d="M760-400v-260L560-800 360-660v60h-80v-100l280-200 280 200v300h-80ZM560-800Zm20 160h40v-40h-40v40Zm-80 0h40v-40h-40v40Zm80 80h40v-40h-40v40Zm-80 0h40v-40h-40v40ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Z" />
          </svg>
        }
      />
    </div>
  );
}
function Box({ text, svg }) {
  return (
    //   <div className="bg-red-500 p-5 sm:w-[15%] rounded-md text-wrap">
    //     10 tips how to achive maximum scalable are for any plot
    //   </div>
    <div
      className={
        style.colorSeven +
        "  my-4 p-5 hover:text-white  text-center fill-orange-500 rounded-lg shadow-md duration-300 hover:bg-[#F0A500] hover:-translate-y-1"
      }
    >
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto bg-amber-100 mb-4">
        {svg}
      </div>
      <h4 className="text-md">{text}</h4>
    </div>
  );
}
