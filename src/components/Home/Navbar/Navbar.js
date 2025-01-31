"use client";
import React, { useState } from "react";
import { X, ChevronDown, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-[#1F80F0] lg:bg-white shadow-md">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">{t("logo")}</div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Solutions Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <span>{t("solutions")}</span>
              <ChevronDown size={16} />
            </button>
            <div className="absolute hidden group-hover:block bg-white border rounded-md shadow-lg">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">{t("anycaas")}</li>
                <li className="px-4 py-2 hover:bg-gray-100">{t("anybaas")}</li>
                <li className="px-4 py-2 hover:bg-gray-100">{t("anypaas")}</li>
              </ul>
            </div>
          </div>
          <button className="text-gray-700 hover:text-blue-600">
            {t("services")}
          </button>
          <button className="text-gray-700 hover:text-blue-600">
            {t("about_us")}
          </button>
        </div>

        {/* Desktop Language & Contact */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Language Selector */}
          <div className="relative group">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <Globe size={20} />
              <span>{t("language")}</span>
              <ChevronDown size={16} />
            </button>
            <div className="absolute hidden group-hover:block bg-white border rounded-md shadow-lg">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/" locale="en">
                    {t("language_options.en")}
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/" locale="th">
                    {t("language_options.th")}
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/" locale="id">
                    {t("language_options.id")}
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/" locale="tw">
                    {t("language_options.tw")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <button className="px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600">
            {t("contact_us")}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden block text-white hover:text-blue-600"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          {isDrawerOpen ? (
            <X size={28} />
          ) : (
            <span className="text-2xl font-bold">≡</span>
          )}
        </button>
      </nav>

      {/* Mobile Drawer Background */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-0 z-50 transition-opacity ${
          isDrawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsDrawerOpen(false)}
      ></div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-16 left-0 w-full h-full bg-[#1B76E9] shadow-lg z-50 transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform`}
      >
        {/* Drawer Links */}
        <ul className="p-4 space-y-4">
          {/* Solutions Dropdown */}
          <li>
            <button
              className="flex items-center w-full text-white hover:text-blue-600 justify-between"
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
            >
              <span>{t("solutions")}</span>
              <ChevronDown
                size={16}
                className={isSolutionsOpen ? "rotate-180" : ""}
                style={{ transition: "transform 0.3s" }}
              />
            </button>
            {isSolutionsOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                <li className="text-white hover:text-blue-600">
                  {t("anycaas")}
                </li>
                <li className="text-white hover:text-blue-600">
                  {t("anybaas")}
                </li>
                <li className="text-white hover:text-blue-600">
                  {t("anypaas")}
                </li>
              </ul>
            )}
          </li>

          <li className="text-left">
            <button className="text-white hover:text-blue-600">
              {t("services")}
            </button>
          </li>
          <li>
            <button className="text-white hover:text-blue-600">
              {t("about_us")}
            </button>
          </li>

          {/* Language Selector */}
          <li className="pt-4">
            <div className="p-2">
              <button
                className="flex items-center w-full text-white hover:text-blue-600 justify-center"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <div className="flex items-center space-x-2">
                  <Globe size={20} />
                  <span>{t("languageName")}</span>
                </div>
                <ChevronDown
                  size={16}
                  className={isLanguageOpen ? "rotate-180" : ""}
                  style={{ transition: "transform 0.3s" }}
                />
              </button>
            </div>
            <div
              className={`overflow-hidden text-white transition-max-h duration-300 ${
                isLanguageOpen ? "max-h-72" : "max-h-0"
              }`}
            >
              {isLanguageOpen && (
                <ul className="pl-4  mt-2 space-y-2 py-2">
                  <li>
                    <Link href="/" locale="en">
                      {t("language_options.en")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/" locale="th">
                      {t("language_options.th")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/" locale="id">
                      {t("language_options.id")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/" locale="tw">
                      {t("language_options.tw")}
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
        </ul>

        {/* Contact Button */}
        <div className="p-4">
          <button className="w-full px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600">
            {t("contact_us")}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
