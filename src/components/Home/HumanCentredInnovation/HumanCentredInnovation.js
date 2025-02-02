"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import human from "@/assets/images/humen.avif";

const HumanCenteredInnovation = () => {
  const t = useTranslations("human_centered_innovation");

  return (
    <div className="flex flex-col items-center lg:px-16 px-5 py-5">
      <h2 className="lg:text-lg text-sm font-semibold text-blue-600 uppercase tracking-wider font-sans">
        {t("title")}
      </h2>
      <h1 className="lg:text-6xl text-2xl font-bold text-blue-900 mt-2 mb-8 text-center font-sans">
        {t("subtitle")}
      </h1>
      <div className="w-full">
        <Image
          width={1000}
          height={1000}
          src={human}
          alt={t("image_alt")}
          className="rounded-lg w-full"
        />
      </div>
    </div>
  );
};

export default HumanCenteredInnovation;
