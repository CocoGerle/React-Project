import React from "react";
import { useNavigate } from "react-router-dom";
const WhoAreWe = () => {
  const navigate = useNavigate();
  const route = (value) => {
    navigate(`/${value}`);
  };
  return (
    <div>
      <button onClick={() => route("about")}>Who are we?</button>
    </div>
  );
};

export default WhoAreWe;
