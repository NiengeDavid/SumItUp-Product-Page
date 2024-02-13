import React from "react";

const BuyButtons = ({ data, benue, abuja, jos }) => {
  const buttons = Object.keys(data).map((key) => data[key]);
  const Benue = Object.keys(benue).map((key) => benue[key]);
  const Abuja = Object.keys(abuja).map((key) => abuja[key]);
  const Jos = Object.keys(jos).map((key) => jos[key]);

  return (
    <div className="flex flex-col w-full mx-auto p-4 space-y-3 justify-center items-center">
      {/* Online Btns */}
      <div className="flex mx-auto justify-center items-center space-x-2 p-2 w-full">
        {buttons.map((btn, index) => (
          <a
            key={index}
            href={btn.link}
            style={{
              borderColor: btn.color,
              borderStyle: "solid",
              borderWidth: "2px",
            }}
            className="bg-orange-50 rounded-lg p-2 px-3 transition-transform hover:duration-300 hover:transform hover:translate-y-1"
          >
            <img
              src={btn.image.asset.url}
              alt={btn.alt}
              className="w-20 h-6 "
            />
          </a>
        ))}
      </div>
      {/* Physical Stores */}
      <div className="w-full flex flex-col mx-auto p-2 justify-between items-center space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        {/* Benue */}
        <div className="flex mx-auto justify-between items-center space-x-2 p-2">
          <span className="bg-[#EBEBE8] text-[#47C0DB] p-2 text-sm font-normal leading-normal border border-[#47C0DB] rounded-[15px]">
            <span className="text-[10px]">NG</span> Benue
          </span>
          {Benue.map((btn, index) => (
        
            <a
              key={index}
              href={btn.link}
              style={{
                borderColor: btn.color,
                borderStyle: "solid",
                borderWidth: "2px",
              }}
              className="bg-white rounded-lg p-2 px-3 transition-transform hover:duration-300 hover:transform hover:translate-y-1"
            >
              <img
                src={btn.image.asset.url}
                alt={btn.alt}
                className="w-20 h-6 "
              />
            </a>
          ))}
        </div>
        {/* ABuja */}
        <div className="flex mx-auto justify-between items-center space-x-2 p-2">
          <span className="bg-[#EBEBE8] text-[#47C0DB] p-2 text-sm font-normal leading-normal border border-[#47C0DB] rounded-[15px]">
            <span className="text-[10px]">NG</span> Abuja
          </span>
          {Abuja.map((btn, index) => (
        
            <a
              key={index}
              href={btn.link}
              style={{
                borderColor: btn.color,
                borderStyle: "solid",
                borderWidth: "2px",
              }}
              className="bg-white rounded-lg p-2 px-3 transition-transform hover:duration-300 hover:transform hover:translate-y-1"
            >
              <img
                src={btn.image.asset.url}
                alt={btn.alt}
                className="w-20 h-6 "
              />
            </a>
          ))}
        </div>
        {/* Jos */}
        <div className="flex mx-auto justify-between items-center space-x-2 p-2">
          <span className="bg-[#EBEBE8] text-[#47C0DB] p-2 text-sm font-normal leading-normal border border-[#47C0DB] rounded-[15px]">
            <span className="text-[10px]">NG</span> Jos
          </span>
          {Jos.map((btn, index) => (
        
            <a
              key={index}
              href={btn.link}
              style={{
                borderColor: btn.color,
                borderStyle: "solid",
                borderWidth: "2px",
              }}
              className="bg-white rounded-lg p-2 px-3 transition-transform hover:duration-300 hover:transform hover:translate-y-1"
            >
              <img
                src={btn.image.asset.url}
                alt={btn.alt}
                className="w-20 h-6 "
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyButtons;


