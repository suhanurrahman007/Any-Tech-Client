"use client";
import { useTranslations } from "next-intl";
import ContentForm from "../ContactForm/ContactForm";

const ContentBanner = () => {
  const t = useTranslations("contactUs"); // Fetch translations from JSON

  return (
    <div>
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 text-black">
        <div className="lg:w-2/6 lg:-mt-96 w-full space-y-6">
          <p className="text-xl font-bold text-[#01DCE1] lg:text-xl">
            {t("title")}
          </p>
          <h1 className="text-2xl lg:text-7xl w-1/2 text-white font-extrabold">
            {t("subtitle")}
          </h1>
          <p className="text-xs pr-5 font-bold text-justify text-gray-200 lg:text-xl">
            {t("description")}
          </p>
        </div>
        {/* Right Content (Form) */}
        <div className="lg:w-4/6 w-full mt-8 lg:mt-0">
          <div className="p-8 bg-[#F8FCFF] shadow-xl rounded-3xl border border-gray-200">
            <ContentForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentBanner;
