import React from "react";
import bannerBg from "@/assets/images/WaveLinesDesktop3.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Mission = () => {
  const t = useTranslations("Mission"); // Fetch translations from JSON

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-16">
      <div className="mx-auto text-center space-y-9">
        <h2 className="text-lg font-semibold tracking-wide text-blue-600 uppercase">
          {t("minTitle")}
        </h2>
        <h1 className="mt-4 text-2xl font-bold text-[#0B305B] lg:text-5xl">
          {t("title")}
        </h1>
        <div className="mt-6 relative bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-6 lg:py-20 lg:px-14 sm:p-8 shadow-lg">
          {/* Background Layer 2 - Hover to Float Up (restricted to the card) */}
          <motion.div
            className="absolute inset-0 z-0" // Set z-index to make sure it's behind the content
            initial={{ y: -10 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <Image
              src={bannerBg}
              alt="Background Layer 2"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </motion.div>

          {/* Mission Content */}
          <div className="relative z-10">
            <h3 className="text-lg lg:text-2xl font-medium text-left text-cyan-300 uppercase">
              {t("minTitle")}
            </h3>
            <p className="mt-4 text-2xl lg:text-5xl text-left font-semibold text-white">
              {t("description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
