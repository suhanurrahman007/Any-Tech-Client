"use client";
import Navbar from "@/components/Home/Navbar/Navbar";
import Image from "next/image";
import bannerBg from "@/assets/images/WaveLinesDesktop3.svg";
import bannerBg3 from "@/assets/images/WaveLinesDesktop1.svg";
import bannerBg4 from "@/assets/images/WaveLinesDesktop2.svg";
import { motion } from "framer-motion";
import Footer from "@/components/Home/Footer/Footer";
import Legacy from "@/components/Home/Legacy/Legacy";
import IconAds from "@/components/Services/IconAds/IconAds";
import Banner from "@/components/About/Banner/Banner";
import Consult from "@/components/About/Consult/Consult";
import NewSetup from "@/components/About/NewSetup/NewSetup";
import Mission from "@/components/About/OurMission/OurMission";
import Empowering from "@/components/About/Empowering/Empowering";
import FeaturesSection from "@/components/About/FeaturesSection/FeaturesSection";
import Future from "@/components/About/Future/Future";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="">
      <Helmet>
        <title>About | Any Tech</title>
      </Helmet>
      {/* Background Wrapper */}
      <div className="relative w-full h-screen text-white">
        {/* Background Images with Layering & Opacity */}
        <div className="absolute inset-0 w-full h-full">
          {/* Main Banner Image with Opacity in Top-Left */}
          <div className="relative w-full h-screen">
            {/* Top-Left Gradient Effect */}
            <div className="absolute top-[-150px] left-[-220px] w-full h-full opacity-80 bg-gradient-to-b from-[#005cc4] to-[#2a7ce0] rotate-[-45deg] pointer-events-none"></div>

            <div className="absolute top-[-150px] left-[-220px] w-full h-full opacity-80 bg-gradient-to-b from-[#005cc4] to-[#2a7ce0] rotate-[-45deg] pointer-events-none"></div>

            <div className="absolute w-full h-full opacity-80 bg-gradient-to-b from-blue-700 pointer-events-none"></div>
            <div className="absolute w-full h-full opacity-80 bg-gradient-to-b from-blue-700 pointer-events-none"></div>
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
      <Consult />
      <NewSetup />
      <Empowering />
      <IconAds />
      <Mission />
      <FeaturesSection />
      <Future />
      <Legacy />
      <Footer />
    </div>
  );
}
