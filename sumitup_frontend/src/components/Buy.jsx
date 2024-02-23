import React from 'react'

const Buy = ({ title, buttons }) => {
    function mapDataToArray(data) {
        try {
          return Object.keys(data).map((key) => data[key]);
        } catch (error) {
          console.error('An error occurred while mapping data:', error);
          return [];
        }
    }
    
    const Button = mapDataToArray(buttons);

  return (
    <div className='max-w-screen-xl py-6 px-4 m-4 my-20 flex flex-col mx-auto justify-center items-center p-2 space-y-6 border border-[#D9D9D9] shadow-sm shadow-black/50 rounded-2xl'>
        {title && (
            <div className="w-full text-center mx-auto flex flex-col justify-center items-center space-y-2">
                <span className="text-4xl w-full font-medium">{title[3].emoji}</span>
                <h1 className="text-3xl w-full font-semibold text-[#000314] text-center tracking-wide">
                    {title[3].title}
                </h1>
            </div>
        )}

        <div className="flex mx-auto justify-center items-center space-x-2 p-2 w-full">
            {Button.map((btn, index) => (
                <a
                    key={index}
                    href={btn.link}
                    style={{
                    borderColor: btn.color,
                    borderStyle: "solid",
                    borderWidth: "2px",
                    }}
                    className="bg-white/90 rounded-lg p-2 px-3 transition-transform hover:duration-300 hover:transform hover:translate-y-1"
                >
                    <img
                        src={btn.image.asset.url}
                        alt={btn.alt}
                        className="w-10 h-3 md:w-20 md:h-6"
                    />
                </a>
            ))}
      </div>
    </div>
  )
}

export default Buy;