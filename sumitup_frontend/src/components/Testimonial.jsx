import React from 'react';
import Masonry from 'react-masonry-css';
import { TestimonyCard } from '../components';


const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
}

const Testimonial = ({ cover, title, testimonies }) => {
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
          <TestimonyCard />
        </Masonry>
    </div>
  )
}

export default Testimonial;