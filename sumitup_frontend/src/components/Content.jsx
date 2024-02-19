import React from "react";

const content = ({ content, learn }) => {
  function mapDataToArray(data) {
    try {
      return Object.keys(data).map((key) => data[key]);
    } catch (error) {
      console.error("An error occurred while mapping data:", error);
      return [];
    }
  }

  const Learn = mapDataToArray(learn);


  return (
    <div className="bg-[#6CCDE2] flex flex-col overflow-hidden max-w-[95%] mx-auto p-2 px-2 justify-center items-center rounded-lg my-20 md:p-8 md:w-3/5">
      {content && (
        <div className="w-full">
          {/* Title */}
          <h1 className="text-white text-2xl font-bold text-center w-full p-3 py-4 pt-16 mx-auto tracking-wider mb-8 md:text-4xl">
            {content[0].title}
          </h1>

          {/* Video */}
          <div className="flex justify-center items-center mx-auto p-2 rounded-lg w-full">
            <div className="w-full flex justify-center items-center">
              <iframe 
                className="rounded-lg aspect-video w-full h-full"
                src={content[0].video} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              >
                Your browser does not support the video tag.
              </iframe>
            </div>
          </div>
          
          {/* Items Data */}
          <div className="py-2 px-4 mx-auto max-w-screen-xl md:py-4 lg:px-6">
            <h2 className="w-full flex justify-center items-center mx-auto my-8 pt-8 text-4xl text-center tracking-wide font-extrabold text-white border-t border-blue-100 md:w-2/5">{content[0].content_title}</h2>
            <div className="grid pt-8 text-left md:gap-10 md:grid-cols-2">
              {Learn.slice(0, 5).map((item) => ( 
                <div>
                  <div className="mb-10">
                    <h3 className="flex items-center text-lg font-medium text-white">
                      <span className="text-white font-medium text-2xl text-start mr-3">{item.number}</span>
                      {item.learn}
                    </h3>
                  </div>
                </div>
              ))}
              {Learn.slice(5, 10).map((item) => (
                <div>
                  <div className="mb-10">
                    <h3 className="flex items-center text-lg font-medium text-white">
                      <span className="text-white font-medium text-2xl text-start mr-3">{item.number}</span>
                      {item.learn}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Much more */}
          <h1 className="text-white text-md font-normal text-center w-full p-3 py-4 pt-16 mx-auto tracking-wider mb-8">
            {content[0].ending_slug}
          </h1>
        </div>
      )
      }
    </div>
  );
};

export default content;
