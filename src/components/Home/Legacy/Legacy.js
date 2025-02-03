import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bannerBg from "@/assets/images/WaveLinesDesktop3.svg";
import bannerBg3 from "@/assets/images/WaveLinesDesktop1.svg";
import bannerBg4 from "@/assets/images/WaveLinesDesktop2.svg";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Legacy = () => {
    const t = useTranslations("legacy"); // Fetch translations from JSON
  
  return (
    <div className="relative bg-gradient-to-r from-blue-700 to-blue-500 overflow-hidden">
      {/* Background Layer 1 - Floating Animation */}
      <motion.div
        className="absolute inset-0 hidden md:block"
        initial={{ y: -10 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <Image
          src={bannerBg}
          alt="Background Layer 1"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </motion.div>

      {/* Background Layer 2 - Static Image */}
      <motion.div className="absolute inset-0 -left-48 hidden md:block">
        <Image
          src={bannerBg3}
          alt="Background Layer 2"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </motion.div>

      {/* Background Layer 3 - Gentle Vertical Shift */}
      <motion.div
        className="absolute inset-0 hidden md:block"
        initial={{ y: -10 }}
        animate={{ y: [-20, 20, -20] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <Image
          src={bannerBg4}
          alt="Background Layer 3"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </motion.div>

      {/* Background Wave Animation */}
      <div className="absolute inset-0">
        <motion.svg
          className="absolute top-24 left-0 h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1440 320"
          animate={{
            scaleY: [1, 1.15, 1], // More dynamic wave movement
            y: [0, 4, 0], // Slight floating effect
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
        >
          <path
            fill="#ffffff"
            d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,101.3C672,107,768,85,864,80C960,75,1056,85,1152,106.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </motion.svg>
      </div>

      {/* Content Section */}
      <div className="relative px-4 py-10 sm:px-6 sm:py-14 md:px-10 lg:px-16">
        <div className="mx-auto lg:py-20 space-y-7 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            {t("title")}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white text-center md:text-left">
            {t("description")}
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <Link
              href={"/contactUs"}
              className="px-10 sm:px-12 md:px-16 py-3 text-base sm:text-lg font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600 transition"
            >
              {t("button")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legacy;
