import React from "react";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  const route = (value) => {
    navigate(`/${value}`);
  };
  return (
    <div className="flex flex-row items-center">
      <img className="w-12" src={logo} alt="Logo" />
      <button className="text-4xl text-sky-700" onClick={() => route("home")}>
        Yellow Room art club
      </button>
    </div>
  );
};

export default Logo;
