"use client";
import Navbar from "@/components/Home/Navbar/Navbar";
import Image from "next/image";
import bannerBg from "@/assets/images/WaveLinesDesktop3.svg";
import bannerBg3 from "@/assets/images/WaveLinesDesktop1.svg";
import { motion } from "framer-motion";
import ContentBanner from "@/components/ContactUs/ContactBanner/ContactBanner";
import ContentForm from "@/components/ContactUs/ContactForm/ContactForm";
import { Helmet } from "react-helmet";

export default function ContentUs() {
  return (
    <div className="">
      <Helmet>
        <title>Contact Us | Any Tech</title>
      </Helmet>
      {/* Background Wrapper */}
      <div className="relative w-full h-screen text-white">
        {/* Background Images with Layering & Opacity */}
        <div className="absolute inset-0 w-full h-full">
          {/* Main Banner Image with Opacity in Top-Left */}
          <div className="relative w-full h-screen">
            {/* Top-Left Gradient Effect */}
            <div className="absolute top-[-150px] left-[-220px] w-full h-screen opacity-80 bg-gradient-to-b from-[#005cc4da] to-[#3b84dd] rotate-[-45deg] pointer-events-none"></div>
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
        </div>

        {/* Content on top of Background */}
        <div className="relative z-10">
          <Navbar />
          <ContentBanner />
          {/* <div>
            <ContentForm />
          </div> */}
        </div>
      </div>
    </div>
  );
}
