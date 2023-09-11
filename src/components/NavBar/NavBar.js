import React from "react";
import WhoAreWe from "./WhoAreWe";
import Logo from "./Logo";
import Nav from "./Nav";
const NavBar = () => {
  return (
    <div className="w-full flex justify-evenly p-4 items-center border-b-4 border-sky-700 font-serif text-xl">
      <WhoAreWe />
      <Logo />
      <div className="flex flex-row items-center cursor-pointer">
        <Nav />
      </div>
    </div>
  );
};

export default NavBar;
