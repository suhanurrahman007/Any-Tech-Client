"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl"; // Import useTranslations
import future from "@/assets/images/t1.avif";
import futureIcon1 from "@/assets/images/futureIcon1.svg";
import futureIcon3 from "@/assets/images/futureIcon3.svg";
import bannerBg from "@/assets/images/ctaMobileWaveLines.svg";

export default function Future() {
  const t = useTranslations("FutureService"); // Get translations

  return (
    <div className="relative flex flex-wrap gap-5 md:gap-0 justify-between items-center px-6 sm:px-8 md:px-12 lg:px-16 py-6 bg-white">
      {/* Left Content */}
      <div className="max-w-lg sm:w-full md:w-1/2 order-2 lg:order-1 mb-8 lg:mb-0 z-10 p-5">
        <p className="lg:text-2xl text-xl md:text-lg font-medium text-blue-500 uppercase mb-4">
          {t("title")}
        </p>
        <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold text-[#0B305B] leading-tight mb-6">
          {t("headline")}
        </h1>
        <p className="lg:text-lg font-bold text-gray-700 text-justify mb-4">
          {t("description1")}
        </p>
        <p className="text-lg text-gray-800 text-justify">
          {t("description2")}
        </p>
      </div>

      {/* Right Image with Background */}
      <div
        className="relative w-full sm:w-full md:w-1/2 mt-10 lg:mt-0 p-6 lg:p-18 order-1 lg:order-2"
        style={{
          backgroundImage: `url(${bannerBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl z-10 mx-auto">
          <Image
            width={500}
            height={500}
            src={future}
            alt="Hero Section"
            className="relative w-full rounded-sm z-10"
          />
        </div>
      </div>
    </div>
  );
}
