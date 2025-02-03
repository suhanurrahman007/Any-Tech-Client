import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Import your images
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
import { useTranslations } from "next-intl";

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
  const t = useTranslations("Ads");

  return (
    <div className="px-6 lg:px-16 pt-8">
      <h2 className="lg:text-lg text-sm text-center font-semibold text-blue-600 uppercase tracking-wider font-sans">
        {t("title")}
      </h2>
      <Swiper
        modules={[Autoplay]} // Enable Autoplay
        spaceBetween={10} // Adjust spacing for smooth transition
        loop={true} // Infinite loop
        autoplay={{
          delay: 0, // No delay for continuous movement
          disableOnInteraction: false, // Keeps autoplay running after interaction
        }}
        speed={3000} // Controls smooth scrolling speed
        allowTouchMove={false} // Disable manual swiping
        breakpoints={{
          1024: { slidesPerView: 5, spaceBetween: 20 }, // Large screens (5 images)
          768: { slidesPerView: 3, spaceBetween: 5 }, // Medium screens (3 images)
          640: { slidesPerView: 3, spaceBetween: 5 }, // Small screens (2 images)
          480: { slidesPerView: 3, spaceBetween: 5 }, // Very small screens (1 image)
        }}
      >
        {icons.map((icon, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
              <Image
                width={200}
                height={200}
                src={icon}
                alt={`Icon ${index + 1}`}
                className="object-contain w-20 h-20 lg:w-44 lg:h-44"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IconAds;
