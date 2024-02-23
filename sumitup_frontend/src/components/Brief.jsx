import React from 'react';

const Brief = ({ cover, title, brief }) => {
    function mapDataToArray(data) {
        try {
          return Object.keys(data).map((key) => data[key]);
        } catch (error) {
          console.error('An error occurred while mapping data:', error);
          return [];
        }
    }
    
    const Summary = mapDataToArray(brief);

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

        <div className="pt-10 w-full flex flex-col-reverse justify-center items-center mx-auto space-y-4 md:items-start md:justify-between md:flex-row md:space-y-0 md:space-x-0 md:pt-24">
            {cover && (
                <div className="sticky top-0 flex w-full justify-center items-center mt-16 md:py-10">
                    <img src={cover.image.asset.url} alt={cover.name} className="w-48 h-full shadow-md border border-[#ECE7E7] rounded-md" />
                </div>
            )}
            
            <div className="flex flex-col justify-center items-center mx-auto space-y-12 p-2 w-full overflow-y-auto">
                {Summary.map((sum) => (
                    <div className="w-full flex flex-col justify-center items-center mx-auto p-2 space-y-6">
                        <div className="w-full">
                            <span className="text-start text-sm text-black p-2 bg-[#ECE7E7] w-fit shadow-sm border border-[#ECE7E7] rounded-full">
                                {sum.chapter}
                            </span>
                        </div>
                        <div className="w-full">
                            <h1 className="text-2xl text-[#ECE7E7] font-bold text-start tracking-wide">
                                {sum.title}
                            </h1>
                        </div>
                        <div className="w-full">
                            <p className="text-lg text-[#ECE7E7] font-normal text-start">
                                {sum.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Brief;