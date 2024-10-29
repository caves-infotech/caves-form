import Image from "next/image";
import React from "react";

const AboutUs = ({ isHome = false }) => {
  return (
    <div className={`${isHome ? "  justify-between" : " flex-col justify-center"} text-center  flex  max-w-7xl mx-auto items-center  p-5 my-5`}>
        <h2 className=" mb-8 font-extrabold tracking-tight text-gray-900  text-3xl sm:text-5xl">
          About Us...
        </h2>{" "}
        <p className="text-lg max-w-3xl leading-relaxed text-gray-600">
          Welcome to UDCPR Simplified! We are dedicated to providing the best service
          and quality in the industry. Our team works tirelessly to ensure that
          every customer is satisfied, and we are proud to have built a
          reputation based on trust, innovation, and excellence. Join us on our
          journey as we continue to grow and make a positive impact in the
          world.
        </p>
      {/* <div className="mt-6 md:w-1/2 sm:flex justify-center">
        <div className="relative md:w-full w-60 h-60  rounded-xl overflow-hidden">
          <Image
            src="/home.png"
            alt="About Us"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
