import React from "react";
import icon1 from "@/assets/images/i1.webp";
import icon2 from "@/assets/images/i2.webp";
import icon3 from "@/assets/images/i3.webp";
import icon4 from "@/assets/images/i4.webp";
import icon5 from "@/assets/images/i5.webp";
import icon6 from "@/assets/images/i6.webp";
import icon7 from "@/assets/images/i7.webp";
import icon8 from "@/assets/images/i8.webp";
import icon9 from "@/assets/images/i9.webp";
import icon10 from "@/assets/images/i10.webp";
import icon11 from "@/assets/images/i11.webp";
import icon12 from "@/assets/images/i12.webp";
import icon13 from "@/assets/images/i13.webp";
import icon14 from "@/assets/images/i14.webp";
import icon15 from "@/assets/images/i15.webp";
import Image from "next/image";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const IconAds = () => {
  const icons = [
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10,
    icon11,
    icon12,
    icon13,
    icon14,
    icon15,
  ];

  return (
    <div className="px-6">
      {/* Large screens grid */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
          {icons.map((icon, index) => (
            <div key={index} className="w-44 h-44">
              <Image
                width={500}
                height={500}
                src={icon}
                alt={`Icon ${index + 1}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Small screens swiper */}
      <div className="md:hidden">
        <Swiper
          spaceBetween={50} // Adjust this value for the gap between images
          slidesPerView={2} // Show 3 slides at once
          loop={true} // Infinite loop
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 slides for small screens
              spaceBetween: 15, // Adjust the gap for medium-sized screens
            },
            480: {
              slidesPerView: 1, // 1 slide for very small screens
              spaceBetween: 10, // Adjust the gap for very small screens
            },
          }}
        >
          {icons.map((icon, index) => (
            <SwiperSlide key={index}>
              <div className=" flex justify-center w-48 h-48">
                <Image
                  width={500}
                  height={500}
                  src={icon}
                  alt={`Icon ${index + 1}`}
                  className="object-contain "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default IconAds;
