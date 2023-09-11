import React from "react";
import NavBar from "./NavBar/NavBar";
const Events = () => {
  return (
    <div>
      <NavBar />
      <h1 className=" text-5xl font-serif py-8 px-20">EVENTS</h1>
      <div className="h-1 bg-yellow-400 w-5/6 ms-14"></div>
      <div className="max-w-[1400px] m-auto py-18 px-4 grid lg:grid-cols-2 gap-4 w-full h-[450px] bg-yellow-500 w-screen mt-5">
        {/* left side */}
        <div className="flex flex-col h-full py-5 ">
          <h1 className=" text-4xl font-serif font-bold">WORKSHOP</h1>
          <p className="text-base py-3">
            Contemporary art gallery located in Ulaanbaatar and specialized in
            the promotion of artists of Central Asia.
          </p>
          <p>Date: 20.12.22 Time: 20:00</p>
        </div>
        {/* right side */}
        <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
          <img
            className="row-span-3 object-cover w-full h-full p-1 "
            src="https://images.unsplash.com/photo-1456086272160-b28b0645b729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
            alt=""
          />
          <img
            className="row-span-6 object-cover w-full h-full p-1 "
            src="https://images.unsplash.com/photo-1526389157-6a5cc2bb4afa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80"
            alt=""
          />
          <img
            className="row-span-3 object-cover w-full h-full p-1 "
            src="https://images.unsplash.com/photo-1512413914633-b5043f4041ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
            alt=""
          />
        </div>
        
      </div>
    </div>
  );
};

export default Events;
