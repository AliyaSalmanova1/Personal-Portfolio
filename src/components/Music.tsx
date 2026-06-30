
"use client";

import React, {useState, useRef} from "react";


import Image from "next/image"
import Link from "next/link"

const Music = () => {

    const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
    const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

    const handlePlay = (index: number) => {
        // Pause previously playing audio
        if (currentAudio && currentAudio !== audioRefs.current[index]) {
            currentAudio.pause();
            
        }
        setCurrentAudio(audioRefs.current[index]);
    };

    const projectsInfo = [
        { trackName: "The Magic Garden", audioPath: "/music/coroline.mp3" },
        { trackName: "Futuristic Political Drama", audioPath: "/music/scifiDrama.mp3" },
        { trackName: "Spooky Sacrifice Ritual", audioPath: "/music/witch.mp3" },
        { trackName: "Ethereal Native-American Inspired Score", audioPath: "/music/motherEarth.mp3" },
        { trackName: "Cutesy Animation Track", audioPath: "/music/cutesyAnimation.mp3" },
        { trackName: "Love and Death", audioPath: "/music/grief.mp3" },
        { trackName: "Disney Inspired Dream Track", audioPath: "/music/trainDragon.mp3" },
        { trackName: "The Sea and Waterfall Crash", audioPath: "/music/waterfall.mp3" },
        { trackName: "The Calmness of Nature", audioPath: "/music/nature.mp3" },
        { trackName: "Advertisement Background Music", audioPath: "/music/ad.mp3" },
        { trackName: "Dystopian Movie Opening", audioPath: "/music/bladeRunner.mp3" },
        { trackName: "Lovecraftian Ambience Music", audioPath: "/music/lovecraftianAmbience.mp3" }
    ];

    return (
        <div id="music" className=" pt-[90px] px-5 max-w-[1300px] mx-auto !min-h-screen  
    my-16">
            <p className="text-xl uppercase text-[var(--pink-color)] mb-2">Music Reel</p>
            <h1 className="text-3xl font-semibold mb-2">Music for Multimedia</h1>
            <p className="text-2xl italic bold font-dancingScript text-[var(--pink-color)] mb-2">Films - Video Games - Advertising - Trailers - Videos</p>
            <iframe
                width="100%"
                scrolling="no"
                frameBorder="no"
                className="bg-[#fff6ec] w-full h-[1400px] md:h-[900px] lg:h-[950px]"
                src="https://play.reelcrafter.com/embed/2769aa4d-371d-40e8-8bbb-de6296c05372">
            </iframe>
            {/*<iframe
                src="https://play.reelcrafter.com/LlsLgOjvRSKH4Te3a1k5Qw"


                className="!min-h-screen !bg-[#fff6ec] w-full "
                scrolling="no"
                frameBorder="no"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="ReelCrafter Music Player"
            />*/}
            <br/>
            <div className="mt-4 border border-[#a64d63] rounded-xl p-4 text-sm text-[var(--text-color)] opacity-70 leading-relaxed">
                <p>
                    <span className="text-[var(--pink-color)]">♥</span> <span className="font-semibold">Usage Notice:</span> All tracks are protected by copyright. You may not use, reproduce, distribute, or sync any of these tracks without direct written permission from the composer (me!). Permission may be granted on a case-by-case basis for tracks that have not already been exclusively licensed or sold, provided that proper credit is given and, in most cases, appropriate compensation is arranged. To inquire about licensing, please get in touch directly. <span className="text-[var(--pink-color)]">♥</span>
                </p>
            </div>
            {/*<div className="!grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 px-5 pb-8 gap-4">
                
                {projectsInfo.map((projInfo, index) => {
                    return (
                        <div
                            className="w-full flex justify-between  flex-col gap-2
                            bg-gradient-to-r from-[#C7657E] to-[#D17D92]
              p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                            <h3>{projInfo.trackName}</h3>
                            
                            <audio controls
                                   controlsList="nodownload"
                                   ref={(el) => {audioRefs.current[index] = el}}
                                   onPlay={() => handlePlay(index)}
                                   onContextMenu={(e) => e.preventDefault()}
                                   className="w-full flex items-center justify-center"
                            >
                               
                                <source src={projInfo.audioPath} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                        
                    )

                })}


            </div>*/}


        </div>
    );
};

export default Music;