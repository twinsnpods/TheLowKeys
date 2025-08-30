import React from "react";
import Typewriter from "typewriter-effect";

const MyMusic = () => {
  return (
    <div className="bg-black text-white py-10 flex flex-col items-center ">
      <h2 className="text-3xl font-bold mb-6 hover:text-amber-300 transition-colors">
        <Typewriter
          options={{
            strings: ['Listen to Lowkeys on Spotify'],
            autoStart: true,
            loop: true,
          }}
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
