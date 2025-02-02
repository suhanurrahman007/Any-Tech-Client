import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaAngleRight, FaPlus } from "react-icons/fa";

const Stats = () => {
  const statsData = [
    { icon: <FaAngleRight />, value: 20, label: "Years of Experience" },
    { icon: <FaPlus />, value: 20, label: "Financial Institutions" },
    {
      icon: <FaAngleRight />,
      value: 200,
      suffix: "M",
      label: "Customers Each",
    },
  ];

  // State for animated numbers
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [isHovered, setIsHovered] = useState(false);

  // Start the counter when hovered
  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setCounts((prevCounts) =>
          prevCounts.map((count, i) =>
            count < statsData[i].value ? count + 1 : statsData[i].value
          )
        );
      }, 30); // Adjust speed

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div
      className="py-10"
      onMouseEnter={() => setIsHovered(true)} // Trigger on hover
      onMouseLeave={() => setIsHovered(false)} // Stop on hover out
    >
      <h2 className="lg:text-lg text-sm font-semibold text-blue-600 text-center uppercase tracking-wider font-sans">
        TRUSTED BY THE BEST
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
