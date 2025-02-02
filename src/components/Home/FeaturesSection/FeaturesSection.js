import React from "react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const FeaturesSection = () => {
  const t = useTranslations("features"); // Fetch translations for features section

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
    <div className="bg-white py-4 px-4 sm:px-6 lg:px-16">
      {/* Large Screen Grid */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-10 bg-[#F8FCFF] rounded-2xl space-y-4 flex flex-col"
          >
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl mb-4"
              aria-hidden="true"
            >
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
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
              <div className="p-6 bg-[#F8FCFF] rounded-2xl space-y-4 flex flex-col">
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl mb-4"
                  aria-hidden="true"
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturesSection;
