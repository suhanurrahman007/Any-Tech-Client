"use client";
import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronDown, Globe, Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";

const Navbar = () => {
  const t = useTranslations("Navbar");

  // State Management
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isSolutionsOpen, setSolutionsOpen] = useState(false);
  const [isLanguageOpen, setLanguageOpen] = useState(false);

  // Toggle functions using useCallback for optimization
  const toggleDrawer = useCallback(() => setDrawerOpen((prev) => !prev), []);
  const toggleSolutions = useCallback(
    () => setSolutionsOpen((prev) => !prev),
    []
  );
  const toggleLanguage = useCallback(
    () => setLanguageOpen((prev) => !prev),
    []
  );

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "auto";
  }, [isDrawerOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center lg:bg-opacity-0 justify-between px-6 py-4 bg-[#1F80F0] lg:bg-white">
        <Link href={"/"}>
          <Image
            width={170}
            height={170}
            src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=400&auto=format"
            alt="Hero Section"
            className="rounded-lg shadow-lg"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Solutions Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center text-lg space-x-2 text-white"
              aria-haspopup="true"
              aria-expanded={isSolutionsOpen}
              onClick={toggleSolutions}
            >
              <span>{t("solutions")}</span>
              <ChevronDown size={16} />
            </button>
            <div className="absolute hidden group-hover:block bg-white border rounded-md shadow-lg">
              <ul className="py-2" role="menu">
                <li className="px-4 py-2 text-black hover:underline">
                  <Link href={"/anycaas"}>{t("anycaas")}</Link>
                </li>
                <li className="px-4 py-2 text-black hover:underline">
                  <Link href={"/anybaas"}>{t("anybaas")}</Link>
                </li>
                <li className="px-4 py-2 text-black hover:underline">
                  <Link href={"/anypaas"}>{t("anypaas")}</Link>
                </li>
              </ul>
            </div>
          </div>
          <Link
            href={"/services"}
            className="text-white text-lg hover:underline hover:shadow-lg transition-all duration-300"
          >
            {t("services")}
          </Link>
          <Link
            href="/about"
            className="text-white text-lg hover:underline hover:shadow-lg transition-all duration-300"
          >
            {t("about_us")}
          </Link>
        </div>

        {/* Desktop Language & Contact */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="relative group">
            <button className="flex items-center border px-3 py-3 font-bold rounded-full space-x-2 text-white hover:text-blue-300">
              <Globe size={20} />
              <span>{t("language")}</span>
              <ChevronDown size={16} />
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black border rounded-md shadow-lg">
              <ul className="py-2">
                {["en", "th", "id", "tw"].map((locale) => (
                  <li
                    key={locale}
                    className="px-4 py-2 text-black text-md w-32 hover:bg-blue-400"
                  >
                    <Link href="/" locale={locale}>
                      {t(`language_options.${locale}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href={"/contactUs"}
            className="px-6 py-3 flex items-center gap-1 text-white border rounded-md font-bold transition-all duration-300 hover:text-blue-600 hover:bg-white"
          >
            {t("contact_us")}
            <FaAngleRight />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden block text-white hover:text-blue-300"
          onClick={toggleDrawer}
          aria-label="Toggle menu"
        >
          {isDrawerOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Drawer Background */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-0 z-50 transition-opacity"
          onMouseDown={toggleDrawer}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-14 left-0 w-full h-full bg-[#1B76E9] shadow-lg z-50 transform transition-transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="p-4 space-y-4">
          {/* Solutions Dropdown */}
          <li>
            <button
              className="flex items-center w-full text-white hover:text-blue-300 justify-between"
              onClick={toggleSolutions}
              aria-haspopup="true"
              aria-expanded={isSolutionsOpen}
            >
              <span>{t("solutions")}</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  isSolutionsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {isSolutionsOpen && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="pl-4 mt-2 space-y-2 text-white overflow-hidden"
                  role="menu"
                >
                  <li>
                    <Link href={"/anycaas"}>{t("anycaas")}</Link>
                  </li>
                  <li>
                    <Link href={"/anybaas"}>{t("anybaas")}</Link>
                  </li>
                  <li>
                    <Link href={"/anypaas"}>{t("anypaas")}</Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li>
            <button className="text-white hover:text-blue-300">
              <Link href={"/services"}>{t("services")}</Link>
            </button>
          </li>
          <li>
            <button className="text-white hover:text-blue-300">
              <Link href={"/about"}>{t("about_us")}</Link>
            </button>
          </li>

          {/* Language Selector with Smooth Animation */}
          <li className="pt-4">
            <button
              className="flex items-center gap-2 w-full text-white hover:text-blue-300 justify-center"
              onClick={toggleLanguage}
            >
              <Globe size={20} />
              <span>{t("languageName")}</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  isLanguageOpen ? "rotate-180 ml-2" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isLanguageOpen && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="pl-[173px] mt-2 space-y-2 text-white overflow-hidden"
                >
                  {["en", "th", "id", "tw"].map((locale) => (
                    <li key={locale}>
                      <Link href="/" locale={locale}>
                        {t(`language_options.${locale}`)}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        </ul>

        <div className="p-4">
          <button className="w-full px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600">
            <Link href={"/contactUs"}>{t("contact_us")}</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
