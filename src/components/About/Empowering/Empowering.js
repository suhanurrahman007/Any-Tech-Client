import Image from "next/image";
import bannerBg from "@/assets/images/em.svg";
import { useTranslations } from "next-intl";

const Empowering = () => {
  const t = useTranslations("Empowering"); // Fetch translations from JSON
  return (
    <div className="p-5 lg:px-16   space-y-2">
      <div className="inline-block mb-4">
        <Image width={70} height={70} src={bannerBg} alt="Empowering image" />
      </div>
      <h1 className="text-3xl lg:text-5xl text-justify font-bold border-b pb-7 text-[#0B305B]">
        {t("title")} <span className="text-blue-500 ">{t("minTitle")}</span> {t("maxTitle")}
      </h1>
    </div>
  );
};

export default Empowering;
