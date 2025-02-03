import React from "react";
import bannerBg from "@/assets/images/WaveLinesDesktop3.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Start = () => {
  const t = useTranslations("start"); // Fetch translations from JSON

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-16 lg:mb-16">
      <div className="mx-auto text-center space-y-9">
        <div className="mt-6 relative bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl p-6 lg:py-14 lg:px-14 sm:p-8 shadow-lg">
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
          <div className="lg:flex justify-between items-center w-full space-y-5 lg:space-y-0">
            <div className="relative z-10 lg:w-1/2">
              <h3 className="text-lg lg:text-3xl font-medium text-left text-cyan-300 uppercase">
                {t("title")}
              </h3>
              <p className="mt-4 text-md text-left text-white">
                {t("description")}
              </p>
            </div>
            <div className="lg:w-1/2 lg:ml-20">
              <Link
                href={"/contactUs"}
                className="px-10 sm:px-12 md:px-16 py-3 text-base sm:text-lg font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600 transition"
              >
                {t("button")} &rsaquo;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
