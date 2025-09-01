import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

function SocialFeed() {
  useEffect(() => {
    const loadSocialScripts = () => {
      const scripts = [
        {
          src: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0",
          id: "facebook-jssdk"
        },
        {
          src: "https://platform.twitter.com/widgets.js",
          id: "twitter-script"
        },
        {
          src: "https://www.instagram.com/embed.js",
          id: "instagram-script"
        },
        {
          src: "https://www.tiktok.com/embed.js",
          id: "tiktok-script"
        }
      ];

      scripts.forEach(({ src, id }) => {
        if (!document.getElementById(id)) {
          const script = document.createElement("script");
          script.src = src;
          script.id = id;
          script.async = true;
          document.body.appendChild(script);
        }
      });
    };

    loadSocialScripts();
    return () => {
      // Cleanup scripts on unmount
      const scriptIds = ["facebook-jssdk", "twitter-script", "instagram-script", "tiktok-script"];
      scriptIds.forEach(id => {
        const script = document.getElementById(id);
        if (script) script.remove();
      });
    };
  }, []);

  return (
    <section id="social-feed" className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <Typewriter
              words={['Stay Connected with The Lowkeys!', 'Follow Our Journey!', 'Join The Community!']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>
          <p className="text-gray-400 text-lg">Check out our latest updates across social media</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Facebook */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900 p-6 rounded-2xl shadow-xl"
          >
            <h3 className="font-semibold text-xl mb-4 text-amber-300">Facebook</h3>
            <div
              className="fb-page"
              data-href="https://www.facebook.com/YourPageHere"
              data-tabs="timeline"
              data-width="500"
              data-height="600"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            ></div>
          </motion.div>

          {/* Instagram */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900 p-6 rounded-2xl shadow-xl"
          >
            <h3 className="font-semibold text-xl mb-4 text-amber-300">Instagram</h3>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/YourHandleHere/"
              data-instgrm-version="14"
              style={{ minWidth: '100%', width: '100%' }}
            ></blockquote>
          </motion.div>

          {/* TikTok */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900 p-6 rounded-2xl shadow-xl"
          >
            <h3 className="font-semibold text-xl mb-4 text-amber-300">TikTok</h3>
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@YourHandleHere"
              data-unique-id="YourHandleHere"
              style={{ maxWidth: '100%', minWidth: '100%' }}
            >
              <section></section>
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default SocialFeed;
