"use client";
import Navbar from "@/components/Home/Navbar/Navbar";
import Image from "next/image";
import bannerBg from "@/assets/images/WaveLinesDesktop3.svg";
import bannerBg3 from "@/assets/images/WaveLinesDesktop1.svg";
import bannerBg4 from "@/assets/images/WaveLinesDesktop2.svg";
import { motion } from "framer-motion";
import Footer from "@/components/Home/Footer/Footer";
import Legacy from "@/components/Home/Legacy/Legacy";
import Banner from "@/components/Services/Banner/Banner";
import Future from "@/components/Services/Future/Future";
import FeaturesSection from "@/components/Services/FeaturesSection/FeaturesSection";
import Consult from "@/components/Services/Consult/Consult";
import Implement from "@/components/Services/Implement/Implement";
import NewSetup from "@/components/Services/NewSetup/NewSetup";
import Operate from "@/components/Services/Operate/Operate";
import Support from "@/components/Services/Support/Support";
import IconAds from "@/components/Services/IconAds/IconAds";
import Start from "@/components/Services/Start/Start";
import OurSolution from "@/components/Services/OurSolution/OurSolution";
import { Helmet } from "react-helmet";

export default function Services() {
  return (
    <div className="">
      <Helmet>
        <title>Services | Any Tech</title>
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
      <Future />
      <FeaturesSection />
      <Consult />
      <Start />
      <Implement />
      <NewSetup />
      <Operate />
      <Support />
      <OurSolution />
      <IconAds />
      <Legacy />
      <Footer />
    </div>
  );
}
