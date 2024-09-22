import { motion } from "framer-motion";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const SpreadNews = () => {
  const parent = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: parent.current,
          start: "top 0%",
          end: "top -100%",
          scrub: 1,
        },
      })
      .to(
        img1.current,
        {
          x: "-30%",
          y: "-10%",
        },
        "a"
      )
      .to(
        img2.current,
        {
          x: "50%",
          y: "10%",
        },
        "a"
      )
      .to(
        img3.current,
        {
          x: "-30%",
          y: "-10%",
        },
        "a"
      )
      .to(
        img4.current,
        {
          x: "40%",
          y: "28%",
        },
        "a"
      );
  });

  return (
    <div ref={parent} className="w-full min-h-screen pt-[5vw]">
      <div className="w-full h-[90vw] sm:h-[60vw] sm:w-[70vw] sm:mx-auto pb-[8vw] flex items-center justify-center">
        <div className="relative w-[38%] h-[68%]">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
            alt=""
          />

          <video
            ref={img1}
            muted
            autoPlay
            loop
            className="absolute w-[80%] h-[30%]  top-[30%] -left-[60%]"
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
            alt=""
          />
          <img
            ref={img2}
            className="absolute w-[42%] h-[34%]  top-[10%] -right-[20%] object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
          <img
            ref={img3}
            className="absolute w-[85%] h-[35%]  -bottom-[25%] -left-[75%] object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
          <video
            ref={img4}
            muted
            autoPlay
            loop
            className="absolute w-[80%] h-[60%]  -bottom-[50%] -right-[60%]"
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
            alt=""
          />
        </div>
      </div>

      <div className="w-[78vw] mx-auto flex flex-col gap-8 mb-16">
        <div className="flex mt-4 w-full gap-1 items-center justify-center">
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
          <h1 className="text-sm font-medium">In the media</h1>
        </div>

        <div className="text-6xl sm:text-9xl flex flex-col items-center sm:tracking-tight">
          <h1 className="w-fit h-fit overflow-hidden ">
            <motion.span
              initial={{ y: "89%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ ease: [0, 0.55, 0.45, 1], duration: 1 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              Spread
            </motion.span>
          </h1>
          <h1 className="w-fit h-fit overflow-hidden ">
            <motion.span
              initial={{ y: "89%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ ease: [0, 0.55, 0.45, 1], duration: 1 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              the News
            </motion.span>
          </h1>
        </div>

        <p className="text-lg text-center font-medium sm:w-[29vw] sm:text-xl sm:mx-auto">
          Find out more about our work on these leading design and technology
          platforms.
        </p>

        <div className=" w-full flex justify-center ">
          <a className="text-md border-b-[1px] border-gray-500" href="#">
            Browse all news
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpreadNews;
