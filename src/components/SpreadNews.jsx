import React from "react";

const SpreadNews = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full h-[90vw] sm:h-[60vw] sm:w-[70vw] sm:mx-auto sm:my-[12vw]  my-[21vw] flex items-center justify-center">
        <div className="relative w-[38%] h-[68%] ">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
            alt=""
          />

          <video
            muted
            autoPlay
            loop
            className="absolute w-[80%] h-[30%]  top-[30%] -left-[60%]"
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
            alt=""
          />
          <img
            className="absolute w-[42%] h-[34%]  top-[10%] -right-[20%] object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
          <img
            className="absolute w-[85%] h-[35%]  -bottom-[25%] -left-[75%] object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
          <video
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

        <div className="text-6xl sm:text-9xl text-center sm:tracking-tight">
          <h1>Spread</h1>
          <h1>the News</h1>
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
