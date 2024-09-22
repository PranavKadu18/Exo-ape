import { motion } from "framer-motion";
import React from "react";

const LandingPage = () => {
  return (
    <div className="relative w-full h-[180vh] bg-zinc-600 sm:h-[250vh] overflow-hidden">
      <img
        data-scroll data-scroll-speed="-1" className="w-[100%] h-[100%] object-cover object-top"
        src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
        alt=""
      />
      <div className="text-white absolute top-0 left-0 py-8 px-8 mt-60 sm:pt-12 sm:px-24 sm:mt-80">
        <div className="text-lg sm:text-2xl  tracking-tight">
          {[
            "Global digital design studio artnering",
            "with brands and businesses that create",
            "exceptional experiences where people",
            "live, work, and unwind. ",
          ].map((elem, idx) => {
            return (
              <p className="w-fit h-fit overflow-hidden">
                <motion.span
                  key={idx}
                  initial={{ translateY: "70%", rotate: "45deg" }}
                  animate={{ translateY: 0, rotate: 0 }}
                  transition={{
                    ease: [0, 0.55, 0.45, 1],
                    duration: 1.5,
                    delay: 0.1 * idx,
                  }}
                  className="block origin-left"
                >
                  {elem}
                </motion.span>
              </p>
            );
          })}
        </div>
        <div className="text-[15vw] mt-6 sm:mt-8  leading-none">
          {["Digital", "Design", "Experience"].map((elem, idx) => (
            <h1 key={idx} className="w-fit h-[16vw] overflow-hidden">
              <motion.span
                initial={{ translateY: "50%", rotate: "90deg" }}
                animate={{ translateY: 0, rotate: 0 }}
                transition={{
                  ease: [0, 0.55, 0.45, 1],
                  duration: 0.5,
                  delay:1 + 0.1 * idx,
                }}
                className="block origin-left"
              >
                {elem}
              </motion.span>
            </h1>
          ))}
        </div>
        <p className="mt-48 text-lg  tracking-tight sm:w-[40%]">
          We help experience-driven companies thrive by making their audience
          feel the refined intricacies of their brand and product in the digital
          space. Unforgettable journeys start with a click.
        </p>
        <a className="border-b-[1px] mt-4 inline-block" href="#">
          The Studio
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
