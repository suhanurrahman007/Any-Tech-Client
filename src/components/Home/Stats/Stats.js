import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaAngleRight, FaPlus } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Stats = () => {
  const t = useTranslations("stats");

  const statsData = [
    {
      icon: <FaAngleRight aria-hidden="true" />,
      value: 20,
      label: t("yearsOfExperience"),
    },
    {
      icon: <FaPlus aria-hidden="true" />,
      value: 50,
      label: t("financialInstitutions"),
    },
    {
      icon: <FaAngleRight aria-hidden="true" />,
      value: 200,
      suffix: "M",
      label: t("customersEach"),
    },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    statsData.forEach((stat, index) => {
      let start = 0;
      const step = Math.ceil(stat.value / 50); // Adjust speed dynamically

      const timer = setInterval(() => {
        start += step;
        setCounts((prev) =>
          prev.map((c, i) =>
            i === index ? (start >= stat.value ? stat.value : start) : c
          )
        );

        if (start >= stat.value) clearInterval(timer);
      }, 30);
    });
  }, []);

  return (
    <div className="py-10">
      <h2 className="lg:text-lg text-sm font-semibold text-blue-600 text-center uppercase tracking-wider font-sans">
        {t("trustedBy")}
      </h2>
      <div className="lg:flex px-5 py-3 lg:px-16 justify-center items-center text-center">
        {statsData.map((stat, index) => (
          <div key={index} className="p-6 rounded-lg space-y-5 w-full">
            <motion.h1
              className="text-8xl font-semibold flex justify-center items-center text-[#1573DF]"
              animate={{ opacity: [0, 1], y: [10, 0] }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {stat.icon} {counts[index]}
              {stat.suffix || ""}
            </motion.h1>
            <p className="text-gray-600 font-semibold text-lg mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
