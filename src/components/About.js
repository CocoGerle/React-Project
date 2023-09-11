import React from "react";
import NavBar from "./NavBar/NavBar";
const About = () => {
  return (
    <div>
      <NavBar />
      <h1 className=" text-5xl font-serif py-8 px-20">ABOUT US</h1>
      <div className="h-1 bg-yellow-400 w-5/6 ms-14"></div>
      <div className=" w-full h-screen my-6 ">
        <img
          className="top-0 left-0 w-full h-screen object-cover"
          src="https://lkhamgallery.com/wp-content/uploads/2023/05/NIM_6961-1-2048x1365.jpg"
          alt=""
        />
        <div className="bg-black/30 absolute top-56 left-0 w-full h-screen">
          <div className="md-left-[10%] max-w-[1100px] m-auto absolute p-4 mt-11">
            <h1 className="font-bold text-2xl font-serif md:text-5xl drop-shadow-2xl text-white">
              Yellow Room is a contemporary art club located in Ulaanbaatar and
              specialized in the promotion of artists of Central Asia and
              Eastern Europe.
            </h1>
            <p className="max-w-[600px] font-serif drop-shadow-2xl py-2 text-xl text-white">
              Based in Ulaanbaatar, Mongolia, Yellow room strives to promote
              contemporary art and culture of the Mongolian-speaking world and
              the broader Central Asian region.Yellow room represents both emerging
              and mid-career artists working in a wide range of media.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
