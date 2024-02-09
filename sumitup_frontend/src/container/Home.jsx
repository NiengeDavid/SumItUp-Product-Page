import React, { useEffect, useState } from "react";
import bgElement from "../assets/bgElement.png";
import { client } from "../client";
import { coverImage } from "../utils/data";

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
        console.log(data[0]);
        setCover(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching cover image:", error);
      });
  }, []);

  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
      <main className="z-10">
        {cover && (
          <img 
            src={cover.image.asset.url}
            alt={cover.name}
            className="w-56 h-72 shadow-xl border-4 border-white rounded-lg"
          />
        )}
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
  );
};

export default Home;
