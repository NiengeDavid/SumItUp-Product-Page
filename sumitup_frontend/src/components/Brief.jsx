import React from 'react';

const Brief = ({ cover, title, brief }) => {
  return (
    <div className='max-w-screen-xl py-10 flex flex-col mx-auto justify-center items-center p-2 space-y-6'>
        {title && (
            <div className="w-full text-center mx-auto flex flex-col justify-center items-center space-y-2">
                <span className="text-4xl w-full font-medium">{title[1].emoji}</span>
                <h1 className="text-3xl w-full font-semibold text-white text-center tracking-wide">
                {title[1].title}
                </h1>
            </div>
        )}

        <div className="pt-24 w-full flex flex-col-reversed justify-between items-center mx-auto space-y-4 md:flex-row md:space-y-0 md:space-x-2">
            {cover && (
                <div className="flex w-full justify-center items-center">
                    <img src={cover.image.asset.url} alt={cover.name} className="w-full h-full shadow-md" />
                </div>
            )}
            
            <div className="flex flex-col justify-center items-center mx-auto space-y-6 p-2 w-full">
                
            </div>
        </div>
    </div>
  )
}

export default Brief;