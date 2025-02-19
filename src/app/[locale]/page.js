"use client";
import Banner from "@/components/Home/Banner/Banner";
import Navbar from "@/components/Home/Navbar/Navbar";
import Future from "@/components/Home/Future/Future";
import HumanCentredInnovation from "@/components/Home/HumanCentredInnovation/HumanCentredInnovation";
import Image from "next/image";
import bannerBg from "@/assets/images/WaveLinesDesktop3.svg";
import bannerBg3 from "@/assets/images/WaveLinesDesktop1.svg";
import bannerBg4 from "@/assets/images/WaveLinesDesktop2.svg";
import banner from "@/assets/images/banner.jpg";
import { motion } from "framer-motion";
import FeaturesSection from "@/components/Home/FeaturesSection/FeaturesSection";
import Technology from "@/components/Home/Technology/Technology";
import IconAds from "@/components/Home/IconAds/IconAds";
import Stats from "@/components/Home/Stats/Stats";
import Footer from "@/components/Home/Footer/Footer";
import Legacy from "@/components/Home/Legacy/Legacy";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="">
      <Helmet>
        <title>Home Page | Any Tech</title>
      </Helmet>
      {/* Background Wrapper */}
      <div className="relative w-full h-screen text-white">
        {/* Background Images with Layering & Opacity */}
        <div className="absolute inset-0 w-full h-full">
          {/* Main Banner Image with Opacity in Top-Left */}
          <div className="relative w-full h-screen">
            <Image
              src={banner}
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="absolute inset-0"
            />

            {/* Top-Left Gradient Effect */}
            <div className="absolute top-[-150px] left-[-220px] w-full h-full opacity-80 bg-gradient-to-b from-[#005cc4] to-[#2a7ce0] rotate-[-45deg] pointer-events-none"></div>
            {/* Top-Left Gradient Effect */}
            <div className="absolute top-[-150px] left-[-220px] w-full h-full opacity-80 bg-gradient-to-b from-[#005cc4] to-[#2a7ce0] rotate-[-45deg] pointer-events-none"></div>

            <div className="absolute w-full h-72 opacity-80 bg-gradient-to-b from-blue-700 pointer-events-none"></div>
            <div className="absolute w-full h-72 opacity-80 bg-gradient-to-b from-blue-700 pointer-events-none"></div>
          </div>

          {/* Background Layer 2 - Hover to Float Up */}
          <motion.div
            className="absolute inset-0"
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

          <motion.div className="absolute inset-0 -left-48">
            <Image
              src={bannerBg3}
              alt="Background Layer 2"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </motion.div>

          {/* Background Layer 3 - Hover to Shift Sideways */}
          <motion.div
            className="absolute inset-0"
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
        </div>

        {/* Content on top of Background */}
        <div className="relative z-10">
          <Navbar />
          <Banner />
        </div>
      </div>

      {/* Additional Sections */}
      <Future />
      <HumanCentredInnovation />
      <FeaturesSection />
      <Technology />
      <Stats />
      <IconAds />
      <Legacy />
      <Footer />
    </div>
  );
}
