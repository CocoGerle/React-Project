import React from "react";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";
const Store = () => {
  const navigate = useNavigate();
  const route = (value) => {
    navigate(`${value}`);
  };
  return (
    <div>
      <NavBar />
      <h1 className=" text-5xl font-serif py-8 px-20">STORE</h1>
      <div className="h-1 bg-yellow-400 w-5/6 ms-14"></div>
      <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 w-full h-[450px]  w-screen">
        {/* left side */}
        <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
          <img
            className=" row-span-3 object-cover w-full h-full p-1 "
            src={require("../../photos/store-1.jpg")}
            alt="store-1"
          />
          <img
            className=" row-span-6 object-cover w-full h-full p-1 "
            src={require("../../photos/store.jpg")}
            alt="store-1"
          />
          <img
            className=" row-span-3 object-cover w-full h-full p-1 "
            src={require("../../photos/store-2.jpg")}
            alt="store-1"
          />
        </div>
        {/* right side */}
        <div className="flex flex-col h-full py-5 font-serif justify-center  ">
          <h1 className=" md:text-5xl font-bold">T-SHIRT</h1>
          <p className="text-2xl py-3">
            Ut cillum dolore fugiat esse magna consequat dolor ullamco
            commodo.Do do nisi nulla nostrud labore aliquip incididunt
            reprehenderit culpa qui in dolor nisi.{" "}
          </p>
          <button
            className="rounded-full border-2 border-black text-black w-28 h-12 hover:bg-yellow-400 hover:border-transparent"
            onClick={() => route("showMore")}
          >
            Show More
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-6 h-[80vh]"></div>
      </div>
    </div>
  );
};

export default Store;
