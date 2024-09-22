import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const PlayReel = () => {
  const vid = useRef(null);
  const vidparent = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);
  const p = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: vidparent.current,
        start: "top 0%",
        end: "top -100%",
        pin: true,
        scrub: 1,
        
      },
    })
    .to(vid.current, {
      scale:1.2
    },'a')
    .to(play.current, {
      x: "80%",
    },'a')
    .to(reel.current, {
      x: "-80%",
    },'a');
  });

  return (
    <div ref={vidparent} className="relative bg-[#0D0E13] w-full h-screen">
      <div
        ref={vid}
        className="absolute w-[80vw] h-[50vw] sm:w-[60vw] sm:h-[30vw] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-50"
      >
        <video
          muted
          autoPlay
          loop
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
        ></video>
      </div>

      <div
        ref={p}
        className="overlay absolute w-[100%] h-[100%] text-white py-28 sm:py-10 flex flex-col items-center justify-between sm:gap-[14vw]"
      >
        <div className="flex w-full gap-1 items-center justify-center">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon w-[12px]"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h1 className="text-sm font-medium">Work in motion</h1>
        </div>

        <div className="flex gap-24 sm:gap-[50vw] text-6xl sm:text-9xl">
          <h1 ref={play}>Play</h1>
          <h1 ref={reel}>reel</h1>
        </div>

        <p className="text-center text-md w-[88%] sm:w-[30%]">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
};

export default PlayReel;
