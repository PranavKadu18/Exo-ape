import React from "react";

const LandingPage = () => {
  return (
    <div className="relative w-full h-[180vh] bg-zinc-600 sm:h-[250vh]">
      <img
        className="w-[100%] h-[100%] object-cover object-top"
        src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
        alt=""
      />
      <div className="text-white absolute top-0 left-0 py-8 px-8 mt-60 sm:pt-12 sm:px-24 sm:mt-80">
        <div className="text-lg  tracking-tight">
            <p>Global digital design studio artnering</p>
            <p>with brands and businesses that create</p>
            <p>exceptional experiences where people</p>
            <p>live, work, and unwind. </p>
        </div>
        <div className="text-[15vw] mt-6 sm:mt-8  leading-none ">
          <h1>
            Digital <br /> Design <br /> Experience
          </h1>
        </div>
        <p className="mt-48 text-lg  tracking-tight sm:w-[40%]">
          We help experience-driven companies thrive by making their audience
          feel the refined intricacies of their brand and product in the digital
          space. Unforgettable journeys start with a click.
        </p>
        <a className="border-b-[1px] mt-4 inline-block" href="#">The Studio</a>
      </div>
    </div>
  );
};

export default LandingPage;
