import React, { useState } from "react";

const Work = () => {
  const [info, setinfo] = useState([
    {
      url: "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
      img: "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
      title: "Columbia Pictures",
      subtitle: "Celebrating a Century of Cinema",
    },
    {
      url: "https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0",
      img: "https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)",
      title: "Cambium",
      subtitle: "Pioneering Sustainable Solutions",
    },
    {
      url: "https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076",
      img: "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",
      title: "Pixelflakes",
      subtitle: "Architectural marketing agency",
    },
    {
      url: "https://player.vimeo.com/progressive_redirect/playback/914798702/rendition/720p/file.mp4?loc=external&log_user=0&signature=b76cb0994de6beca7f6ba29e7eb52db1750d34600352dab2566c6ca16fcd817f",
      img: "https://a.storyblok.com/f/133769/2400x2990/8f08135741/studio-d-hero.jpg/m/1300x1620/filters:quality(90)",
      title: "Studio D",
      subtitle: "Urban and Landscape Design",
    },
  ]);

  return (
    <div className="w-full min-h-[200vh]  py-20 px-8 sm:px-40">
      <div className="flex gap-1 items-center sm:hidden">
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
        <h1 className="text-sm font-medium">Featured Projects</h1>
      </div>
      <h1 className="text-[16vw] sm:font-medium mt-6 font-[TWKLausanne]">Work</h1>

      <p className="mt-6 text-lg block sm:hidden">
        Highlights of cases that we passionately built with forward-thinking
        clients and friends over the years.
      </p>

      <div className="sm:flex w-full min-h-screen gap-44">
        {/* left */}
        <div className="left mt-10">
          <div className="w-full sm:w-[38vw] sm:h-[55vw] h-[104vw]">
            <img
              className="w-[100%] h-[100%] object-cover hidden sm:block"
              src={info[0].img}
              alt=""
            />
            <video
              autoPlay
              muted
              loop
              className=" block sm:hidden"
              src={info[0].url}
            ></video>
          </div>
          <div className="text-sm mt-4">
            <h1 className="text-black font-semibold tracking-wide">
              {info[0].title}
            </h1>
            <p className="text-[#89898B]">{info[0].subtitle}</p>
          </div>
        </div>

        {/* right */}
        <div className="right">
          <div className=" sm:block hidden mt-20">
            <div className="flex gap-1 items-center">
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
              <h1 className="text-sm font-medium">Featured Projects</h1>
            </div>
          </div>

          <p className="mt-6 sm:w-[20vw] text-xl font-medium tracking-wide hidden sm:block">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>

          <div className="mt-10 sm:mt-48">
            <div className="w-full h-[104vw] sm:w-[25vw] sm:h-[35vw]">
              <img
                className="w-[100%] h-[100%] object-cover hidden sm:block"
                src={info[1].img}
                alt=""
              />
              <video
                autoPlay
                muted
                loop
                className=" block sm:hidden"
                src={info[1].url}
              ></video>
            </div>
            <div className="text-sm mt-4">
              <h1 className="text-black font-semibold tracking-wide">
                {info[1].title}
              </h1>
              <p className="text-[#89898B]">{info[1].subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:mt-40 sm:w-[70vw] sm:flex sm:justify-between min-h-screen ">

        {/* down left */}
        <div className="left mt-10">
          <div className="w-full sm:w-[20vw] sm:mt-96 sm:h-[26vw] h-[104vw]">
            <img
              className="w-[100%] h-[100%] object-cover hidden sm:block"
              src={info[2].img}
              alt=""
            />
            <video
              autoPlay
              muted
              loop
              className=" block sm:hidden"
              src={info[2].url}
            ></video>
          </div>
          <div className="text-sm mt-4">
            <h1 className="text-black font-semibold tracking-wide">
              {info[2].title}
            </h1>
            <p className="text-[#89898B]">{info[2].subtitle}</p>
          </div>
        </div>

        {/* down right */}
        <div className="left mt-10">
          <div className="w-full sm:w-[34vw] sm:h-[40vw] h-[104vw]">
            <img
              className="w-[100%] h-[100%] object-cover hidden sm:block"
              src={info[3].img}
              alt=""
            />
            <video
              autoPlay
              muted
              loop
              className=" block sm:hidden"
              src={info[3].url}
            ></video>
          </div>
          <div className="text-sm mt-4">
            <h1 className="text-black font-semibold tracking-wide">
              {info[3].title}
            </h1>
            <p className="text-[#89898B]">{info[3].subtitle}</p>
          </div>
        </div>
      </div>

      <div className=" w-full flex justify-center sm:justify-end mt-24">
        <a className="text-md border-b-[1px] border-gray-500" href="#">
          Browse all work
        </a>
      </div>
    </div>
  );
};

export default Work;
