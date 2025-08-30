import React from "react";
import { Typewriter } from "react-simple-typewriter";

const MyMusic = () => {
  return (
    <div className="bg-black py-10 flex flex-col items-center text-white">
      <h2 className="text-3xl font-bold mb-6 hover:text-amber-300 transition-colors">
        <Typewriter
          words={['Listen to The Lowkeys Music']}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>

      {/* Artist Embed */}
      <iframe
        src="https://open.spotify.com/embed/artist/7FlhY1KXkExO3TcdSsJUjQ"
        width="90%"
        height="600"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="max-w-[800px] rounded-2xl shadow-lg mb-8"
      ></iframe>
    </div>
  );
};

export default MyMusic;
