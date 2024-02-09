import React from "react";


const BuyButtons = ({ data }) => {
  const buttons = Object.keys(data).map(key => data[key]);

  return (
    <div className="flex flex-col w-full mx-auto p-4 space-y-3 justify-center items-center">
      <div className="flex mx-auto justify-around items-center space-x-2 p-2 w-full">
      {buttons.map((btn, index) => (
          <a key={index} href={btn.link} className="bg-orange-50 border-2 border-[#F2A746] rounded-lg p-2 px-3 transition-transform hover:duration-300 hover:transform hover:translate-y-1">
            <img src={btn.image.asset.url} alt={btn.name} className="w-20 h-6 " />
          </a>
      ))}
      </div>
    </div>
  );
};

export default BuyButtons;
