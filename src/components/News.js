import React from "react";
import NavBar from "./NavBar/NavBar";
const News = () => {
  return (
    <>
      <NavBar />
      <h1 className=" text-5xl font-serif py-8 px-20">NEWS</h1>
      <div className="h-1 bg-yellow-400 w-5/6 ms-14"></div>
      <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 font-serif">
        <div className="h-[80vh]">
          {/* left side */}
          <img
            src="https://lkhamgallery.com/wp-content/uploads/2023/03/WhatsApp-Image-2022-11-21-at-22.42.07-720x634.jpeg"
            alt=""
          />
        </div>
        {/* right side */}
        <div className="flex flex-col h-full justify-center">
          <h3 className="text-5xl md:text-6xl font-bold ">LIVE PAINTING</h3>
          <p className="text-2xl py-6">
            Yellow room invites you to the Live Painting Masterclass by
            Otgontuvden Badam. During this masterclass, the artist will draw in
            front of the people, answer the questions and talk about his
            practice.
          </p>
          <p className="pb-6">The event is free and open to the public.</p>
        </div>
       
      </div>
      <div className="h-1 bg-yellow-400 w-5/6 ms-14"></div>
    </>
  );
};

export default News;
