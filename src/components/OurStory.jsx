import React from "react";
import video from "../assets/video.mp4";

const OurStory = () => {
  return (
    <div className="w-full min-h-[86vh] bg-[#070707] text-[#E0CCBB] px-8 sm:px-32 py-[21.33vw] sm:py-[4vw]">
      <div className=" w-full flex items-center ">
        <h1 className="text-6xl sm:text-9xl">
          Our <br /> Story
        </h1>
        <video
          autoPlay
          muted
          loop
          className="w-[75%] h-[100%]   object-cover object-center"
          src={video}
        ></video>
      </div>

      <p className="text-lg mt-8  sm:w-[35%]">
        The story behind Exo Ape is one of exploration, creativity and
        curiosity.
      </p>

      <p className="text-md mt-6 border-b-[1px] w-fit block sm:hidden">
        Our Story
      </p>
      <div className="w-full border-b-[0.8px] my-8"></div>

      <div className="w-full flex items-center justify-start ">
        <div className="hidden sm:block">
          <div className="w-[20vw] text-sm flex flex-col gap-2">
            <h1>Willem II Singel 8</h1>
            <h1>6041 HS, Roermond</h1>
            <h1>The Netherlands</h1>
            <a
              href="mailto:hello@exoape.com"
              class="footer-link"
              data-v-fde92388=""
            >
              hello@exoape.com
            </a>
          </div>
        </div>
        <div className="w-[50%] sm:w-[20%] text-sm flex flex-col gap-2">
          <h1>Work</h1>
          <h1>Studio</h1>
          <h1>News</h1>
          <h1>Contact</h1>
        </div>
        <div className="w-[50%] sm:w-[20%] text-sm flex flex-col gap-2">
          <h1>Behance</h1>
          <h1>Dribble</h1>
          <h1>Twitter</h1>
          <h1>Instagram</h1>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
