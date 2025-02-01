"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import future from "@/assets/images/future.avif";
import futureIcon1 from "@/assets/images/futureIcon1.svg";
import futureIcon2 from "@/assets/images/futureIcon2.svg";
import futureIcon3 from "@/assets/images/futureIcon3.svg";
import bannerBg from "@/assets/images/WaveLinesDesktop1.jpg";

export default function Future() {
  return (
    <div className="relative flex flex-wrap justify-between items-center px-6 sm:px-8 md:px-12 lg:px-16 py-16 bg-white">
      {/* Left Content */}
      <div className="max-w-lg sm:w-full md:w-1/2 order-2 lg:order-1 mb-8 lg:mb-0 z-10">
        <p className="lg:text-2xl text-xl md:text-lg font-medium text-blue-500 uppercase mb-4">
          POWERING THE FUTURE OF FINANCE
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-3xl text-justify lg:text-6xl font-bold text-[#0B305B] leading-tight mb-6">
          Uncovering new ways to delight customers
        </h1>
        <p className="lg:text-lg font-bold text-gray-700 text-justify mb-4">
          AnyTech is revolutionising financial technology by introducing
          innovative and real-time transaction account processing capabilities,
          specifically designed for retail financial services.
        </p>
        <p className="text-lg text-gray-800 text-justify">
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </div>

      {/* Right Image with Background */}
      <div
        className="relative w-full sm:w-full md:w-1/2 mt-10 lg:mt-0 p-8 lg:p-20 order-1 lg:order-2"
        style={{
          backgroundImage: `url(${bannerBg.src})`, // Set banner background
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Main Image */}
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl z-10 mx-auto">
          <Image
            width={500}
            height={500}
            src={future} // Replace with the actual path to your image
            alt="Hero Section"
            className="relative w-full rounded-sm z-10"
          />
        </div>

        {/* Floating Icons with Up-and-Down Animation */}
        <motion.div
          className="absolute top-1/4 lg:left-12 left-0 w-16 h-16 rounded-full flex items-center justify-center z-20"
          initial={{ y: -10 }} // Start from y: -10
          animate={{ y: [-10, 10, -10] }} // Moves up and down
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} // Duration set to 5 seconds
        >
          <Image
            width={500}
            height={500}
            src={futureIcon2} // Replace with icon 1
            alt="Icon 1"
          />
        </motion.div>

        <motion.div
          className="absolute lg:bottom-2/4 md:bottom-1/4 bottom-1/4 left-1/4 w-20 h-20 shadow-md rounded-full flex items-center justify-center z-20"
          initial={{ y: -10 }} // Start from y: -10
          animate={{ y: [-10, 10, -10] }} // Moves up and down
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} // Duration set to 5 seconds
        >
          <Image
            width={500}
            height={500}
            src={futureIcon1} // Replace with icon 2
            alt="Icon 2"
          />
        </motion.div>

        <motion.div
          className="absolute top-1/4 lg:right-7 right-0 w-24 h-24 shadow-md rounded-full flex items-center justify-center z-20"
          initial={{ y: -10 }} // Start from y: -10
          animate={{ y: [-10, 10, -10] }} // Moves up and down
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} // Duration set to 5 seconds
        >
          <Image
            width={500}
            height={500}
            src={futureIcon3} // Replace with icon 3
            alt="Icon 3"
          />
        </motion.div>
      </div>
    </div>
  );
}
