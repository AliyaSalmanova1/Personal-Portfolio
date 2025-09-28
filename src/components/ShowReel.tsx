
"use client";

import React, {useState, useRef} from "react";



const ShowReel = () => {

   

    return (
        <div id="showreel" className="pt-[90px] px-5 max-w-[1300px] mx-auto ">
  <p className="text-xl uppercase text-[#800020] mb-2">Video Samples With Music</p>
  <h1 className="text-3xl font-semibold mb-2">Video Reel</h1>
  <p className="text-2xl italic bold font-dancingScript text-[#800020] mb-2">
    Films - Video Games - Advertising - Trailers - Videos
  </p>

  {/* wrapper for the border/frame */}
  <div className="w-full md:w-2/3 transition-all duration-700 
  rounded-xl shadow-lg overflow-hidden aspect-video box-content">
    <iframe
      title="vimeo-player"
      src="https://player.vimeo.com/video/1122531487?h=5e627ee7a1"
      className="w-full h-full block border-none box-content"  // fill the wrapper completely
      frameBorder="0"
      referrerPolicy="strict-origin-when-cross-origin"
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
      allowFullScreen
    ></iframe>
  </div>
</div>
    );
};

export default ShowReel;