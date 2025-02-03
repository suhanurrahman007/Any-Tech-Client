import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const t = useTranslations("footer"); // Fetch translations from JSON

  return (
    <footer className="bg-[#0B2545] text-white">
      {/* Top Section */}
      <div className="lg:flex lg:justify-between justify-center items-center py-4 border-b border-[#12385C]">
        <div className="text-2xl font-bold p-5 lg:px-14 lg:py-10">
          <Link href={"/"}>
            <Image
              width={170}
              height={170}
              src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=400&auto=format"
              alt="Hero Section"
              className="rounded-lg shadow-lg"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-5 lg:space-x-8 text-[#0ACFFE] px-7">
          <span>{t("title")}</span>
          <hr className="h-14 w-[1px] bg-blue-700 border opacity-30" />
          <Link href={"/anycaas"} className="hover:text-blue-600 lg:font-bold">
            AnyCaaS
          </Link>
          <Link href={"/anybaas"} className="hover:text-blue-600 lg:font-bold">
            AnyBaaS
          </Link>
          <Link href={"/anypaas"} className="hover:text-blue-600 lg:font-bold">
            AnyPaaS
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="lg:flex lg:justify-between justify-center items-center gap-2 p-5 lg:px-14 py-4 text-xs lg:text-sm bg-[#081C33]">
        <span className="text-[#0ACFFE]">{t("description")}</span>
        <span className="text-[#0ACFFE]">{t("title1")}</span>
      </div>
    </footer>
  );
};

export default Footer;
