import { Link } from "@/i18n/routing";
import Image from "next/image";
import React from "react";

const Footer = () => {
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
          <span>Our Solutions</span>
          <hr className="h-14 w-[1px] bg-blue-700 border opacity-30" />
          <Link href={"anyCaaS"} className="hover:text-blue-600 lg:font-bold">
            AnyCaaS
          </Link>
          <Link href={"anyCaaS"} className="hover:text-blue-600 lg:font-bold">
            AnyBaaS
          </Link>
          <Link href={"anyCaaS"} className="hover:text-blue-600 lg:font-bold">
            AnyPaaS
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="lg:flex lg:justify-between justify-center items-center gap-2 p-5 lg:px-14 py-4 text-xs lg:text-sm bg-[#081C33]">
        <span className="text-[#0ACFFE]">
          ©2023 All rights reserved. Any Technology Pte Ltd.
        </span>
        <span className="text-[#0ACFFE]">
          Privacy Policy
        </span>
      </div>
    </footer>
  );
};

export default Footer;
