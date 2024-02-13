import React, { useState, useEffect } from "react";
import { client } from "../client";
import { intro, overview } from "../utils/data";
import actor from "../assets/actor.png"

const Expectation = () => {
    const [introd, setIntrod] = useState(null);
    const [introduction, setIntroduction] = useState(null);

    useEffect(() => {
      const query = intro;

      client
        .fetch(query)
        .then((data) => {
            console.log(data);
            setIntrod(data);
        })
        .catch((error) => {
            console.log('Error fetching intro data:', error);
        })
    }, [])

    useEffect(() => {
      const query = overview;

      client
        .fetch(query)
        .then((data) => {
            console.log(data);
            setIntroduction(data);
        })
        .catch((error) => {
            console.log('Error fetching overview data:', error);
        })
    }, [])
    
    

  return (
    <div className="my-10 flex flex-col max-w-screen-xl mx-auto p-3 space-y-6 justify-center items-center">
        {introd && (
            <div className="w-full flex flex-col p-2 text-center justify-center items-center space-y-0 md:flex-row md:space-y-0 md:space-x-0">
                <div className="flex space-x-3 justify-center items-center p-2">
                    <h1 className="text-3xl font-semibold text-[#370317]">
                        {introd[0].firstpart}
                    </h1>
                    
                    <span className="bg-green-50 p-3 text-2xl leading-2 tracking-wider font-semibold text-[#47C0DB] rounded-full border border-[#47C0DB]">
                        {introd[0].greenpart}
                    </span>
                
                </div>
                <div className="flex space-x-3 justify-center items-center p-2">
                    <h1 className="text-3xl font-semibold text-[#370317]">
                        {introd[0].secondpart}
                    </h1>
                
                    <span className="bg-red-50 p-3 text-2xl leading-2 tracking-wider font-semibold text-[#F41465] rounded-full border border-[#F41465]">
                        {introd[0].redpart}
                    </span>
                
                </div>
            </div>
        )}
        
        {introduction && (
            <div className="bg-[#A3DFED] z-10 max-w-screen-lg flex flex-col mx-auto hover:z-0 justify-center my-10 px-10 py-10 text-start text-black items-center space-y-6 rounded-lg border-2 border-[#47c0db] shadow-md hover:border-[#f41466ab] hover:text-[#f41466ab] md:space-y-6 md:h-[400px] md:px-16">
                <p className="text-xl w-full text-black font-normal ">
                    {introduction[0].p1}
                </p>
                <p className="text-xl text-black font-normal ">
                    {introduction[0].p2}
                </p>
                <p className="text-xl font-normal ">
                    {introduction[0].red}<span className="text-black"> {introduction[0].p3}</span>
                </p>
            </div>
        )}
        <img src={actor} alt="Manga Actor" className="w-24 absolute right-1 md:right-5 xl:right-[254px]" />  
    </div>
  )
}

export default Expectation;