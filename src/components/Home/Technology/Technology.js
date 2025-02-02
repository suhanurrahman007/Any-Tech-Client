"use client";
import { useState, useEffect } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Default styles
import Image from "next/image"; // Optimized Next.js images
import { useTranslations } from "next-intl";
import img1 from "@/assets/images/c1.avif";
import img2 from "@/assets/images/c2.avif";
import img3 from "@/assets/images/c3.avif";
import img4 from "@/assets/images/c4.avif";

const images = [img1, img2, img3, img4];

const Technology = () => {
  const t = useTranslations("technology");
  const tabsData = t.raw("tabs").map((tab, index) => ({
    ...tab,
    image: images[index],
  }));

  const [activeIndex, setActiveIndex] = useState(0);
  const tabCount = tabsData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabCount);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-6 lg:px-10 my-7">
      <div className="text-center mb-12">
        <h2 className="lg:text-lg text-sm font-semibold text-blue-600 uppercase tracking-wider font-sans">
          {t("title")}
        </h2>
        <h1 className="lg:text-6xl text-2xl font-semibold text-blue-900 mt-2 mb-8 text-center font-sans">
          {t("subtitle")}
        </h1>
      </div>
      <Tabs
        selectedIndex={activeIndex}
        onSelect={(index) => setActiveIndex(index)}
      >
        {/* Tab Navigation */}
        <TabList className="flex lg:space-x-16 space-x-2 lg:px-14">
          {tabsData.map((tab, index) => (
            <Tab
              key={index}
              className={`lg:px-8 px-3 py-3 rounded-3xl text-xs lg:font-semibold transition-all duration-300 cursor-pointer 
                ${
                  activeIndex === index
                    ? "bg-red-600 text-white shadow-xl shadow-blue-950"
                    : "bg-white text-blue-700 lg:text-xl font-bold hover:bg-blue-100"
                }`}
            >
              {tab.title}
            </Tab>
          ))}
        </TabList>

        {/* Tab Panels */}
        <div className="lg:p-6">
          {tabsData.map((tab, index) => (
            <TabPanel key={index}>
              <div className="flex flex-col md:flex-row bg-[#FFFFFF] shadow-lg rounded-3xl items-center py-6 lg:px-12 px-5 text-left gap-7">
                {/* Text Section (Left) */}
                <div className="md:w-1/2 space-y-8">
                  <h3 className="text-2xl font-semibold text-blue-600">
                    {tab.title}
                  </h3>
                  <h3 className="text-5xl text-justify font-semibold text-[#0b305b]">
                    {tab.titleBg}
                  </h3>
                  <p className="text-[#0b305b] font-bold text-lg">
                    {tab.description1}
                  </p>
                  <p className="text-gray-600 text-lg">{tab.description2}</p>
                </div>

                {/* Image Section (Right) */}
                <div className="md:w-1/2 flex justify-end">
                  <Image
                    src={tab.image}
                    alt={tab.title}
                    width={500}
                    height={500}
                    className="rounded-xl shadow-md w-full lg:h-[25rem] h-80 object-cover"
                  />
                </div>
              </div>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default Technology;
