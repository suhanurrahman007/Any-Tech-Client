import Banner from "@/components/Home/Banner/Banner";
import Navbar from "@/components/Home/Navbar/Navbar";
import bannerBg from "@/assets/images/WaveLinesDesktop1.jpg";
import banner from "@/assets/images/banner.jpg";
import Future from "@/components/Home/Future/Future";

export default function Home() {
  return (
    <div>
      <div
        className="relative h-screen text-white"
        style={{
          backgroundImage: `url(${bannerBg.src})`, // Set banner background
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for banner image */}
        <div
          className="absolute inset-0 "
          style={{
            backgroundImage: `url(${banner.src})`,
            backgroundSize: "contain",
            backgroundPosition: "right bottom",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Background gradient overlay (Top-left opacity 80%) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B76E9] to-transparent opacity-100" />

        {/* Content wrapper */}
        <div className="relative z-10">
          {/* Navbar */}
          <Navbar />

          {/* Hero Section */}
          <Banner />
        </div>
      </div>
      <Future />
    </div>
  );
}
