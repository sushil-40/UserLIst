import React from "react";
import man from "../assets/boy.png";
import woman from "../assets/woman.png";
export const MaleAvatar = () => {
  return (
    <div>
      <img src={man} alt="" width="50px" />
    </div>
  );
};

export const FemaleAvatar = () => {
  return (
    <div>
      <img src={woman} alt="" width="50px" />
    </div>
  );
};
