import React, { useEffect, useState } from "react";
import bgElement from "../assets/bgElement.png";
import { client } from "../client";
import { coverImage } from "../utils/data";
import {
  Button,
  Expectation,
  ContentFeed,
  Testimony,
  BriefFeed,
  AuthorFeed,
  BuyFeed,
  FooterFeed,
} from "../components";

const Home = () => {
  const [cover, setCover] = useState(null);

  const spotlight = (e) => {
    document.documentElement.style.setProperty("--x", `${e.pageX}px`);
    document.documentElement.style.setProperty("--y", `${e.pageY}px`);
  };

  React.useEffect(() => {
    window.addEventListener("pointermove", spotlight);
    window.addEventListener("pointerdown", spotlight);

    return () => {
      window.removeEventListener("pointermove", spotlight);
      window.removeEventListener("pointerdown", spotlight);
    };
  }, []);

  useEffect(() => {
    const query = coverImage;

    client
      .fetch(query)
      .then((data) => {
        setCover(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching cover image:", error);
      });
  }, []);

  return (
    <div className="w-full">
      <div className="w-full h-screen bg-[#EBEBE8] flex flex-col justify-center items-center">
        {/* cover bg */}
        <main className="z-10 pt-5 w-full flex flex-col justify-center items-center md:pt-20 ">
          {cover && (
            <img
              src={cover.image.asset.url}
              alt={cover.name}
              className="w-36 h-48 shadow-black shadow-sm border-4 border-white rounded-lg md:w-56 md:h-72"
            />
          )}
          {/* Buy Buttons */}
          <div className="bg-[#A3DFED] bg-blend-darken overflow-y-hidden my-10 mb-5 w-[95%] mx-auto p-2 flex justify-center items-center rounded-lg shadow-black shadow-sm md:my-20 md:mb-28 md:w-4/5">
            <Button />
          </div>
        </main>
        <div className="absolute top-0 left-0 w-full h-full" id="bg">
          <div
            id="bg_pixelate"
            className="absolute bg-[#EBEBE8] top-0 left-0 w-full h-full object-cover pointer-events-none select-none"
            alt="Pixelated background"
          />
          <img
            src={bgElement}
            id="bg_focus"
            className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none"
            alt="Pixelated background"
            style={{
              maskImage:
                "radial-gradient(circle 50vmin at var(--x) var(--y), black var(--radius), transparent calc(var(--radius) + var(--blur)), transparent)",
            }}
          />
        </div>
      </div>
      {/* Expectations */}
      <div className="bg-[#EDF9FB] mt-0 w-full flex justify-center items-center mx-auto">
        <Expectation />         
      </div>
      {/* Content */}
      <div className="bg-white mt-0 w-full flex justify-center items-center mx-auto">
        <ContentFeed />
      </div>
      {/* Testimonial */}
      <div className="bg-[#6CCDE2] mt-0 w-full flex justify-center items-center mx-auto">
        <Testimony />
      </div>
      {/* Brief */}
      <div className="bg-gradient-to-b from-[#4B1C2F] to-[#1E1F23] p-5 mt-0 w-full flex justify-center items-center mx-auto border-4 border-white">
        <BriefFeed />
      </div>
      {/* Author */}
      <div className="bg-[#6CCDE2] mt-0 w-full flex justify-center items-center mx-auto">
        <AuthorFeed />
      </div>
      {/* Buy */}
      <div className="bg-white mt-0 w-full flex justify-center items-center mx-auto">
        <BuyFeed />
      </div>
      {/* Footer */}
      <div className="bg-gradient-to-b from-[#1E1F23] to-[#4B1C2F] p-5 mt-0 w-full flex justify-center items-center mx-auto">
        <FooterFeed /> 
      </div>
    </div>
  );
};

export default Home;
