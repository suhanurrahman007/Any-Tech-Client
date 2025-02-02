"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import banner from "@/assets/images/banner.jpg";
import { FaAngleRight } from "react-icons/fa";

const Banner = () => {
  const t = useTranslations("Banner"); // Fetch translations from JSON

  return (
    <div>
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 text-black">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-2xl lg:text-6xl text-white font-extrabold">
            {t("title")}
          </h1>
          <p className="text-sm md:w-1/2 lg:w-full w-full text-gray-200 lg:text-xl">{t("description")}</p>
          <button className="lg:px-12 px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-sm text-white font-bold">
            <span className="hover:scale-105 flex items-center gap-1 transition-transform duration-300">
              {t("button")}
              <FaAngleRight />
            </span>
          </button>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 relative"></div>
      </section>
    </div>
  );
};

export default Banner;
