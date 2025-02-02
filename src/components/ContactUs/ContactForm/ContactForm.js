"use client";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const ContentForm = () => {
  const t = useTranslations("contactUs"); // Fetch translations from JSON
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    companyName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    router.push("/success");
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-white text-black">
      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-3xl mx-auto p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                {t("firstName")}
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder={t("firstName")}
                className="p-3 rounded-md border border-gray-400 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                {t("lastName")}
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder={t("lastName")}
                className="p-3 rounded-md border border-gray-400 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                {t("jobTitle")}
              </label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder={t("jobTitle")}
                className="p-3 rounded-md border border-gray-400 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                {t("companyName")}
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder={t("companyName")}
                className="p-3 rounded-md border border-gray-400 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">
              {t("email")}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("email")}
              className="p-3 rounded-md border border-gray-400 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">
              {t("message")}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder={t("message")}
              className="p-3 rounded-md border border-gray-400 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="text-gray-600 text-sm mt-2">
            {t("privacyPolicy")}{" "}
            <a href="/privacy-policy" className="text-blue-500 hover:underline">
              {t("privacyLink")}
            </a>
            .
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="lg:px-12 px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-sm text-white font-bold"
            >
              <span className="hover:scale-105 flex items-center gap-1 transition-transform duration-300">
                {t("submit")} <FaAngleRight />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContentForm;
