import Link from "next/link";
import style from "../app/style.module.css";
import { Marck_Script } from "next/font/google";

const marckScript = Marck_Script({
  weight: "400", // This font only has 400 weight
  subsets: ["latin"], // Define the subset you want to use
  display: "swap", // Optional: adds swap behavior for better performance
});

export default function Footer() {
  return (
    // <footer className={style.colorThree + " text-white z-40"}>
    //   <div className=" text-center sm:flex justify-center sm:justify-between items-center mx-5">
    //     <p>&copy; 2024 UDCPR Calc. All rights reserved.</p>
    //     <div className="flex pt-2 ">
    //       <Link href="privacy" className="px-3">
    //         Privacy Policy
    //       </Link>
    //       <Link href="terms" className="px-3">
    //         Terms of Service
    //       </Link>
    //       <Link href="refund" className="px-3">
    //         Refund Policy
    //       </Link>
    //     </div>
    //   </div>
    // </footer>

    <footer className={style.colorThree}>
      <div className="mx-auto w-full max-w-screen px-[5%] p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 space-y-4 md:mb-0">
            <Link href="/" className="flex items-center ">
              <h1 className=" text-3xl font-bold text-white mr-1">UDCPR</h1>
              <span
                className={
                  marckScript.className + " text-xl -mb-2 text-[#ffca57]"
                }
              >
                simplified
              </span>
            </Link>
            <p className="text-gray-300">
              Simplifying the UDCPR calculation process with easy-to-use tools
              and resources.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Flowbite
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Tailwind CSS
                  </Link>
                </li>
              </ul>
            </div> */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow Us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Instagram
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="terms" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="shipping" className="hover:underline">
                    Shipping and delivery
                  </Link>
                </li>
                <li>
                  <Link href="refund" className="hover:underline">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact Us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  College Rd, D'souza <br />
                  Colony, Nashik.
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    udcprsimplified@gmail.com
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    +91 9209905101
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex block justify-between">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link href="/" className="hover:underline mr-1">
            UDCPRsimplified™
          </Link>
            | All Rights Reserved
        </span>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <Link href="/" className="hover:underline">
            Designed and developed by - Caves Infotech
          </Link>
        </span> 
        </div>
       
      </div>
    </footer>
  );
}
