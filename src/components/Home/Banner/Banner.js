import banner from "@/assets/images/banner.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <section
        className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 text-black"
        
      >
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Embrace the future of finance
          </h1>
          <p className="text-lg lg:text-xl">
            Reimagine financial services with AnyTech's open platform,
            distributed banking solution that powers transformation.
          </p>
          <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-semibold">
            Reach Out to Us
          </button>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          {/* <Image
            width={1000}
            height={1000}
            src={banner}
            alt="Hero Section"
            className="rounded-lg shadow-lg"
          /> */}
        </div>
      </section>
    </div>
  );
};

export default Banner;
