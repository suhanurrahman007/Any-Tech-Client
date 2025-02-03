"use client";
import { useTranslations } from "next-intl";
import { FaAngleRight } from "react-icons/fa";

const Banner = () => {
  const t = useTranslations("BannerAbout"); // Fetch translations from JSON

  return (
    <div>
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 text-black">
        <div className="lg:w-1/2 space-y-6">
          <h3 className="lg:text-xl text-green-300 font-extrabold">
            {t("minTitle")}
          </h3>
          <h1 className="text-2xl lg:text-6xl text-white font-extrabold">
            {t("title")}
          </h1>
          <p className="text-sm md:w-1/2 lg:w-full w-full text-gray-200 lg:text-xl">
            {t("description")}
          </p>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 relative"></div>
      </section>
    </div>
  );
};

export default Banner;
