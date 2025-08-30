import React from 'react';
import { Typewriter } from "react-simple-typewriter";

const Videos = () => {
  return (
    <div className="bg-black py-10 flex flex-col items-center text-white">
      <h2 className="text-3xl font-bold mb-6 hover:text-amber-300 transition-colors">
        <Typewriter
                words={['Watch The Lowkeys in Action']}
                loop={3} // or true for infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
      </h2>

      <div className="relative pb-[56.25%] w-full max-w-[800px] mb-8">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
          src="https://www.youtube.com/embed/9GJzfzlwicg?si=Vx0-j9L0SdSQE3yW"
          title="Lowkeys Official Video"
          width="90%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Videos;
