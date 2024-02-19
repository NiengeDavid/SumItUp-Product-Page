import React from "react";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  3000: 4,
  2000: 4,
  1200: 4,
  500: 3,
};

const Footer = ({ title, socials, countries, details }) => {
  function mapDataToArray(data) {
    try {
      return Object.keys(data).map((key) => data[key]);
    } catch (error) {
      console.error("An error occurred while mapping data:", error);
      return [];
    }
  }

  const Social = mapDataToArray(socials);
  const Country = mapDataToArray(countries);
  //const Detail = mapDataToArray(details);

  return (
    <div className="max-w-screen-md flex flex-col mx-auto justify-start items-center py-10 space-y-6">
      {title && (
        <div className="w-full text-center mx-auto flex flex-col justify-center items-center space-y-2">
          <span className="text-4xl w-full font-medium">{title[4].emoji}</span>
          <h1 className="text-3xl w-full font-semibold text-white text-center tracking-wide">
            {title[4].title}
          </h1>
        </div>
      )}

      {details && (
        <div className="w-full flex flex-col justify-start items-center mx-auto py-2 space-y-4 pt-10">
          <div className="w-full">
            <h3 className="w-full text-start text-lg font-normal tracking-wide text-[#EBE6E8] p-2">
                {details[0].countryin}
            </h3>

            <Masonry
                className="inline-flex animate-slide-fwd pt-5 items-center w-full"
                breakpointCols={breakpointColumnsObj}
            >
                {Country.map((count, index) => (
                    <div className="w-full flex justify-center items-center mx-auto py-2">
                        <a
                        href={count.link}
                        className="flex w-fit space-x-2 justify-center mx-auto items-end bg-white rounded-full p-2 border border-[#F6F8FA] text-black text-[16px] text-center whitespace-nowrap hover:border-[#DD1B36]"
                        >
                        <span className="text-gray-500 font-normal text-center text-[10px] tracking-tight pr-2">
                            {count.short}
                        </span>
                        {count.country}
                        </a>
                    </div>
                ))}
            </Masonry>
          </div>
          

          <div className="w-full pt-10 p-2">
            <h3 className="text-[#EBE6E8] text-xl font-semibold tracking-wide text-start">
                {details[0].countryout}
            </h3>
            <p className="text-sm pt-5 text-[#EBE6E8] text-start tracking-wide font-normal">
                {details[0].reason}
            </p>
          </div>

          <div className="w-full pt-10">
            <h3 className="w-full text-start text-lg font-normal tracking-wide text-[#EBE6E8] p-2">
                {details[0].links}
            </h3>

            <Masonry
                className="inline-flex animate-slide-fwd pt-5 items-center w-full"
                breakpointCols={breakpointColumnsObj}
            >
                {Social.map((count, index) => (
                    <div className="w-full flex justify-center items-center mx-auto py-2">
                        <a
                        href={count.link}
                        className="flex w-fit space-x-2 justify-center mx-auto items-center bg-white rounded-full p-2 border border-[#F6F8FA] text-black text-[16px] text-center whitespace-nowrap hover:border-[#DD1B36]"
                        >
                        <span className="font-semibold text-center text-sm tracking-tight pr-2">
                            {count.icon}
                        </span>
                        {count.media}
                        </a>
                    </div>
                ))}
            </Masonry>
          </div>

          <div className="flex flex-col justify-center items-center w-full space-y-2 p-2 pt-48">
            <div>
                <img src={details[0].image.asset.url} alt="" className="w-full h-full " />
            </div>
            <span class="text-sm text-[#EBE6E8] text-center pt-3">© {new Date().getFullYear()}. All rights reserved.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
