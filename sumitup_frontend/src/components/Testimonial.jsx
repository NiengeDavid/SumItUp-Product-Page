import React from 'react';
import Masonry from 'react-masonry-css';


const breakpointColumnsObj = {
  default: 3,
  3000: 4,
  2000: 3,
  1200: 2,
  500: 1,
}

const Testimonial = ({ cover, title, testimonies }) => {
  function mapDataToArray(data) {
    try {
      return Object.keys(data).map((key) => data[key]);
    } catch (error) {
      console.error('An error occurred while mapping data:', error);
      return [];
    }
  }

  const Details = mapDataToArray(testimonies);

  return (
    <div className='max-w-screen-xl py-10 flex flex-col mx-auto justify-center items-center p-2 space-y-6'>
        {title && (
          <div className="w-full text-center mx-auto flex flex-col justify-center items-center space-y-2">
            <span className="text-4xl w-full font-medium">{title[0].emoji}</span>
            <h1 className="text-3xl w-full font-semibold text-white text-center tracking-wide">
              {title[0].title}
            </h1>
          </div>
        )}

        {/* Masonry */}
        <Masonry className='flex animate-slide-fwd pt-10' breakpointCols={breakpointColumnsObj}>
          
            {Details.map((pin) => (
              <div className='m-2'>
                <div className="relative bg-[#EDF9FB] w-auto flex flex-col mx-auto justify-center items-center space-y-3 p-2 rounded-xl border border-[#5F3546] shadow-black shadow-sm">
                  <div className="w-full flex justify-center items-center rounded-full p-2">
                    <img src={pin.image.asset.url} alt={pin.name} className="w-10 h-10 rounded-full shadow-sm" />
                  </div>

                  <div className="w-full flex justify-center items-center mx-auto p-2">
                    <p className="text-sm text-black text-center font-light tracking-normal">
                      {pin.testimony}
                    </p>
                  </div>

                  <div className="w-full flex flex-col justify-center items-center mx-auto p-2 space-y-3">
                    <h1 className="text-xl text-black font-bold tracking-normal text-center">
                      {pin.name}
                    </h1>

                    <span className="bg-[#F6F8FA] text-sm font-normal tracking-normal text-center rounded-xl border p-1 px-2 border-[#D9DFE4]">
                      {pin.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          
        </Masonry>
    </div>
  )
}

export default Testimonial;