
export default function NavBox1({isHome = false}) {
  return (
    <div className={` ${isHome ? " pb-10 ":"py-10"} text-center justify-center items-center bg-gray-100`}>
      <div className=" sm:mx-[16%] m-5 grid grid-flow-row gap-12 font-bold sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <div
          className={
            "  p-5 text-center duration-300 hover:shadow-2xl border-4 rounded-2xl hover:border-gray-500 border-yellow-400"
          }
        >
          <h4 className="text-xl my-2 mb-5">Why Use UDCPRS.com?</h4>
          <p className="text-md font-medium hover:text-gray-500 text-gray-600">
            At UDCPRS.com, the &apos;S&apos; in UDCPRS stands for
            &apos;Simplified&apos;. Our website provides easy-to-use tools that
            decode complex building byelaws into user-friendly calculators for
            FSI (Floor Space Index), TDR (Transfer of Development Rights), and
            other redevelopment considerations. The website is designed for
            private, commercial use to support developers, architects, and
            planners in understanding and applying these critical regulations.
          </p>
        </div>

        <div
          className={
            "  p-5 text-center duration-300 hover:shadow-2xl border-4 rounded-2xl hover:border-gray-500 border-yellow-400"
          }
        >
          <h4 className="text-xl my-2 mb-5">
            FSI Calculation Tool for Maharashtra
          </h4>
          <p className="text-md font-medium hover:text-gray-500 text-gray-600">
            Our FSI calculator simplifies the intricate aspects of Floor Space
            Index calculation according to UDCPR 2024. Whether you&apos;re
            planning residential or commercial development, the FSI calculator
            helps you determine your building&apos;s allowable floor area, ensuring
            compliance with Maharashtra&apos;s latest building regulations.
          </p>
        </div>

        <div
          className={
            "  p-5 text-center duration-300 hover:shadow-2xl border-4 rounded-2xl hover:border-gray-500 border-yellow-400"
          }
        >
          <h4 className="text-xl my-2 mb-5">TDR and Redevelopment Guidance</h4>
          <p className="text-md font-medium hover:text-gray-500 text-gray-600">
            Transfer of Development Rights (TDR) plays a key role in urban
            redevelopment under UDCPR 2024. UDCPRS.com offers a straightforward
            tool that helps landowners and developers leverage TDR for increased
            construction potential while adhering to Maharashtra&apos;s
            guidelines for congested and non-congested areas.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
