import React from "react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import logo from '@/assets/images/ll.svg'

const OurSolution = () => {
  const t = useTranslations("Solution"); // Fetch translations for features section

  const features = [
    {
      icon: "🔗",
      title: t("fullSuiteSolutions"),
      description: t("featureDescription1"),
    },
    {
      icon: "💡",
      title: t("simplifyTheComplex"),
      description: t("featureDescription2"),
    },
    {
      icon: "🔧",
      title: t("cuttingEdgeTech"),
      description: t("featureDescription3"),
    },
  ];

  return (
    <div className="bg-[#FFFFFF] py-4 px-4 sm:px-6 lg:px-16">
      <h2 className="text-4xl font-bold text-center lg:pt-10 text-gray-800 mb-10">
        Our Solutions
      </h2>
      {/* Large Screen Grid */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-6 pinter">
        {features.map((feature, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            key={index}
            className="p-10 bg-white shadow-md shadow-blue-800  hover:border border-blue-500 rounded-2xl space-y-4 transition-all duration-300 flex flex-col"
          >
            <h3 className="text-4xl font-semibold text-gray-800 mb-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              {feature.title}
            </h3>
            <div className="flex ">
              <span className="text-[10px] font-bold text-blue-400 mr-1">
                BY
              </span>
              <Image width={80} height={80} src={logo} alt="Hero Section" />
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Small Screen Swiper */}
      <div className="lg:hidden">
        <Swiper
          spaceBetween={10} // Space between slides
          slidesPerView={1} // Show 1 slide at a time
          loop={true} // Infinite loop
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="p-10 bg-white shadow-md shadow-blue-800  hover:border border-blue-500 rounded-2xl space-y-4 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-4xl font-semibold text-gray-800 mb-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                  {feature.title}
                </h3>
                <div className="flex ">
                  <span className="text-[10px] font-bold text-blue-400 mr-1">
                    BY
                  </span>
                  <Image width={80} height={80} src={logo} alt="Hero Section" />
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurSolution;
