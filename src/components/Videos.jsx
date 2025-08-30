import React from 'react'
import Typewriter from "typewriter-effect";

const Videos = () => {
  return (
    <div className="bg-black py-10 flex flex-col items-center text-white">
      <h2 className="text-3xl font-bold mb-6 hover:text-amber-300 transition-colors">
        <Typewriter
          options={{
            strings: ['Watch The Lowkeys in Action'],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>

      <div className="relative pb-[56.25%] w-full max-w-[800px] mb-8">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
          src="https://www.youtube.com/embed/9GJzfzlwicg?si=Vx0-j9L0SdSQE3yW"
          title="Lowkeys Official Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Videos

