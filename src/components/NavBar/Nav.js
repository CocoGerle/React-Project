import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const route = (value) => {
    navigate(`/${value}`);
  };
  return (
    <div className="absolute w-full flex justify-between p-4 items-center ">
      {/* <h1 className='text-white font-bold text-2xl z-20'></h1> */}
      <HiMenuAlt3
        size={25}
        className="z-20 ml-20 text-black cursor-pointer"
        onClick={handleNav}
      />
      <div
        className={
          nav
            ? "fixed text-black left-0 top-0  w-full h-screen bg-white py-2 flex-col z-10"
            : "  top-0 h-screen left-[100%] ease-in duration-300 z-10"
        }
      >
        <ul className="flex flex-col fixed h-full text-black justify-center">
          <li
            className="font-bold text-7xl p-8 cursor-pointer hover:text-sky-600 py-1"
            onClick={() => route("store")}
          >
            STORE
          </li>
          <li
            className="font-bold text-7xl p-8 cursor-pointer hover:text-yellow-400 py-1"
            onClick={() => route("news")}
          >
            NEWS
          </li>
          <li
            className="font-bold text-7xl p-8 cursor-pointer hover:text-sky-600 py-1"
            onClick={() => route("events")}
          >
            EVENTS
          </li>
          <li
            className="font-bold text-7xl p-8 cursor-pointer hover:text-yellow-400 py-1"
            onClick={() => route("artist")}
          >
            ARTIST
          </li>
          <li
            className="font-bold text-7xl p-8 cursor-pointer hover:text-sky-600 py-1"
            onClick={() => route("about")}
          >
            ABOUT
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
