import React from 'react';

const Author = ({ feed, title }) => {
  return (
    <div className='max-w-screen-xl py-10 pb-20 flex flex-col mx-auto justify-center items-center p-2 space-y-6'>
        {title && (
            <div className="w-full text-center mx-auto flex flex-col justify-center items-center space-y-2">
                <span className="text-4xl w-full font-medium">{title[2].emoji}</span>
                <h1 className="text-3xl w-full font-semibold text-white text-center tracking-wide">
                    {title[2].title}
                </h1>
            </div>
        )}

        {feed && (
            <div className="max-w-screen-md flex justify-center items-center mx-auto">
                <div className="pt-10 px-2 w-full flex flex-col justify-center items-center mx-auto space-y-0 py-0 md:px-0">
                    <div className="w-full rounded-t-[30px] p-0 border border-b-0 border-[#ABAFB4] shadow-black shadow-sm">
                        <img src={feed[0].image.asset.url} alt={feed[0].name} className="w-full h-full rounded-t-[30px] p-0" />
                    </div>

                    <div className="bg-white py-8 w-full flex flex-col justify-center items-center mx-auto px-5 space-y-6 shadow-black shadow-sm rounded-b-[30px] border border-t-0 border-[#ABAFB4] md:px-10">
                        <div className="w-full">
                            <h1 className="text-[#00031A] text-2xl p-3 text-center font-extrabold tracking-wide md:text-4xl">
                                {feed[0].name}
                            </h1>
                        </div>

                        <div className="w-full">
                            <h2 className="text-[#343434] text-lg font-semibold text-center tracking-wide">
                                {feed[0].bio}
                            </h2>
                        </div>

                        <div className="w-full">
                            <p className="text-sm text-[#343434] font-normal text-center tracking-wide">
                                {feed[0].about}
                            </p>
                        </div>

                        <div className="w-full">
                            <p className="text-sm text-[#343434] font-normal text-center tracking-wide">
                                {feed[0].info}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Author;