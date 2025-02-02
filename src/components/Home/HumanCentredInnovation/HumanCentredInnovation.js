import Image from "next/image";
import React from "react";
import human from "@/assets/images/humen.avif";

const HumanCenteredInnovation = () => {
  return (
    <div className="flex flex-col items-center lg:px-16 px-5 py-5">
      <h2 className="lg:text-lg text-sm font-semibold text-blue-600 uppercase tracking-wider font-sans">
        Our Philosophy
      </h2>
      <h1 className="lg:text-6xl text-2xl font-bold text-blue-900 mt-2 mb-8 text-center font-sans">
        Human-centred innovation
      </h1>
      <div className="w-full">
        <Image
          width={1000}
          height={1000}
          src={human}
          alt="Hero Section"
          className="rounded-lg w-full"
        />
      </div>
    </div>
  );
};

export default HumanCenteredInnovation;
