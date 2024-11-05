import style from "@/app/style.module.css";
import Link from "next/link";

export default function NavBox({}) {
  return (
    <div className=" sm:m-20 sm:mx-[16%] m-12 grid grid-flow-row gap-12 text-gray-600 font-bold sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div
        className={
          style.colorSeven +
          " relative flex-col items-center flex  my-4 p-5 pb-10 hover:text-white text-center fill-orange-500 rounded-lg shadow-md duration-300 hover:bg-[#F0A500] hover:-translate-y-1"
        }
      >
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto bg-white mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
          >
            <path d="M480-80q-26 0-47-12.5T400-126q-33 0-56.5-23.5T320-206v-142q-59-39-94.5-103T190-590q0-121 84.5-205.5T480-880q121 0 205.5 84.5T770-590q0 77-35.5 140T640-348v142q0 33-23.5 56.5T560-126q-12 21-33 33.5T480-80Zm-80-126h160v-36H400v36Zm0-76h160v-38H400v38Zm-8-118h58v-108l-88-88 42-42 76 76 76-76 42 42-88 88v108h58q54-26 88-76.5T690-590q0-88-61-149t-149-61q-88 0-149 61t-61 149q0 63 34 113.5t88 76.5Zm88-162Zm0-38Z" />
          </svg>
        </div>
        <h4 className="text-md">
          <b>10+ Pro Tips how to </b> Miximize Saleable Built-Up Area in any
          Plot or Project
        </h4>
        <Link
          href="/blogs"
          className="bottom-2 absolute flex items-center text-orange-500 stroke-orange-500 fill-orange-500 gap-1"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0,0,256,256"
          >
            {/* <g
              // fill="#ffffff"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="none"
              stroke-linecap="butt"
              stroke-linejoin="none"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              // style={{"mix-blend-mode: normal"}}
            > */}
              <path
                transform="scale(4,4)"
                d="M52,10c1.104,0 2,0.896 2,2v12c0,1.104 -0.896,2 -2,2c-1.104,0 -2,-0.896 -2,-2v-7.17187l-16.58594,16.58594c-0.391,0.391 -0.90206,0.58594 -1.41406,0.58594c-0.512,0 -1.02306,-0.19494 -1.41406,-0.58594c-0.781,-0.781 -0.781,-2.04712 0,-2.82812l16.58594,-16.58594h-7.17187c-1.104,0 -2,-0.896 -2,-2c0,-1.104 0.896,-2 2,-2zM30,12c1.104,0 2,0.896 2,2c0,1.104 -0.896,2 -2,2h-12c-1.103,0 -2,0.897 -2,2v28c0,1.103 0.897,2 2,2h28c1.103,0 2,-0.897 2,-2v-12c0,-1.104 0.896,-2 2,-2c1.104,0 2,0.896 2,2v12c0,3.309 -2.691,6 -6,6h-28c-3.309,0 -6,-2.691 -6,-6v-28c0,-3.309 2.691,-6 6,-6z"
                id="strokeMainSVG"
                stroke-width="2"
                stroke-linejoin="round"
              ></path>
              {/* <g
                transform="scale(4,4)"
                stroke="none"
                stroke-width="1"
                stroke-linejoin="miter"
              > */}
                <path d="M40,10c-1.104,0 -2,0.896 -2,2c0,1.104 0.896,2 2,2h7.17188l-16.58594,16.58594c-0.781,0.781 -0.781,2.04713 0,2.82812c0.391,0.391 0.90206,0.58594 1.41406,0.58594c0.512,0 1.02306,-0.19494 1.41406,-0.58594l16.58594,-16.58594v7.17188c0,1.104 0.896,2 2,2c1.104,0 2,-0.896 2,-2v-12c0,-1.104 -0.896,-2 -2,-2zM18,12c-3.309,0 -6,2.691 -6,6v28c0,3.309 2.691,6 6,6h28c3.309,0 6,-2.691 6,-6v-12c0,-1.104 -0.896,-2 -2,-2c-1.104,0 -2,0.896 -2,2v12c0,1.103 -0.897,2 -2,2h-28c-1.103,0 -2,-0.897 -2,-2v-28c0,-1.103 0.897,-2 2,-2h12c1.104,0 2,-0.896 2,-2c0,-1.104 -0.896,-2 -2,-2z"></path>
              {/* </g> */}
            {/* </g> */}
          </svg>
        </Link>
      </div>

      <div
        className={
          style.colorSeven +
          " relative flex-col items-center flex  my-4 p-5 pb-10 hover:text-white text-center fill-orange-500 rounded-lg shadow-md duration-300 hover:bg-[#F0A500] hover:-translate-y-1"
        }
      >
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto bg-white mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
          >
            <path d="M760-400v-260L560-800 360-660v60h-80v-100l280-200 280 200v300h-80ZM560-800Zm20 160h40v-40h-40v40Zm-80 0h40v-40h-40v40Zm80 80h40v-40h-40v40Zm-80 0h40v-40h-40v40ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Z" />
          </svg>
        </div>
        <h4 className="text-md">
          <b>Access 24/7 Free Online</b> Support for All Your Questions on
          Maharashtra UDCPR 2022 Bye-laws & BPMS Building Permissions!
        </h4>
        <Link
          href="mailto:cavesinfotech@gmail.com"
          className="bottom-2 absolute flex items-center text-orange-500 stroke-orange-500 fill-orange-500 gap-1"
        >
          Mail Us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
          >
            <path d="M480.39-96q-79.52 0-149.45-30Q261-156 208.5-208.5T126-330.96q-30-69.96-30-149.5t30-149.04q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5t82.5 122Q864-560 864-480v60q0 54.85-38.5 93.42Q787-288 732-288q-34 0-62.5-17t-48.66-45Q593-321 556.5-304.5T480-288q-79.68 0-135.84-56.23-56.16-56.22-56.16-136Q288-560 344.23-616q56.22-56 136-56Q560-672 616-615.84q56 56.16 56 135.84v60q0 25.16 17.5 42.58Q707-360 732-360t42.5-17.42Q792-394.84 792-420v-60q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91h192v72H480.39ZM480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
          </svg>{" "}
        </Link>
      </div>

      <div
        className={
          style.colorSeven +
          " relative flex-col items-center flex  my-4 p-5 pb-10 hover:text-white text-center fill-orange-500 rounded-lg shadow-md duration-300 hover:bg-[#F0A500] hover:-translate-y-1"
        }
      >
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto bg-white mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
          >
            <path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm179-80h442L480-830 259-720ZM80-120v-80h482q2 21 5 40.5t9 39.5H80Zm600-310v-130h80v90l-80 40ZM800 0q-69-17-114.5-79.5T640-218v-102l160-80 160 80v102q0 76-45.5 138.5T800 0Zm-29-120 139-138-42-42-97 95-39-39-42 43 81 81ZM259-720h442-442Z" />
          </svg>
        </div>
        <h4 className="text-md">
          <b> Get your project approved</b> for BPMS online building permission
          with the guidance of our expert team!
        </h4>
        <Link
          href="/contact"
          className="bottom-2 absolute flex items-center text-orange-500 stroke-orange-500 fill-orange-500 gap-1"
        >
          Contact Us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
          >
            <path d="m480-240 24-73q62-9 103-56.5T648-480q0-70-49-119t-119-49q-63 0-110.5 41T313-504l-73 24q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70ZM140-72l-68-68 167-167-143-53 384-120L360-96l-54-143L140-72Z" />
          </svg>
        </Link>
      </div>

      <div
        className={
          style.colorSeven +
          " relative flex-col items-center flex  my-4 p-5 pb-10 hover:text-white text-center fill-orange-500 rounded-lg shadow-md duration-300 hover:bg-[#F0A500] hover:-translate-y-1"
        }
      >
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto bg-white mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
          >
            <path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
          </svg>
        </div>
        <h4 className="text-md">
          <b>Discover how our expert</b> team can help you unlock the full
          potential of your project&apos;s saleable built-up area!
        </h4>
        <Link
          href="tel:+919209905101"
          className="bottom-2 absolute flex items-center text-orange-500 stroke-orange-500 fill-orange-500 gap-1"
        >
          Call Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
          >
            <path d="M744-481q0-109-77.5-186.5T480-745v-72q70 0 131.13 26.6 61.14 26.6 106.4 71.87 45.27 45.26 71.87 106.4Q816-551 816-481h-72Zm-144 0q0-50-35-85t-85-35v-72q80 0 136 56.16T672-481h-72Zm163 336q-121-9-229.5-59.5T339-341q-86-86-136-194.5T144-765q-2-21 12.29-36.5Q170.57-817 192-817h136q17 0 29.5 10.5T374-780l24 107q2 13-1.5 25T385-628l-97 98q20 38 46 73t57.97 65.98Q422-361 456-335.5q34 25.5 72 45.5l99-96q8-8 20-11.5t25-1.5l107 23q17 5 27 17.5t10 29.5v136q0 21.43-16 35.71Q784-143 763-145ZM255-600l70-70-17.16-75H218q5 38 14 74t23 71Zm344 344q35.1 14.24 71.55 22.62Q707-225 744-220v-90l-75-16-70 70ZM255-600Zm344 344Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
