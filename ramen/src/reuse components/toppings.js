import React from "react";

import fishCakes from "../asserts/fishCakes.png";

function Toppings() {
  return (
    <div className="bg-white w-[10vw] h-[20vh] rounded-xl relative mt-[70px]">
      <img
        src={fishCakes}
        className="absolute top-[-30%] left-[5%]"
        style={{
          filter: "drop-shadow(2px 4px 8px hsla(0deg, 0%, 0%, 0.5))",
        }}
        alt=""
      />
      <div className="relative top-[35%] left-[30%]">
        <div className="text-2xl">Fishcakes</div>
        <div className="ml-[20px] text-xl">+ 20</div>
        <span className="material-symbols-outlined text-[50px] ml-[20px] mt-[10px]">
          check_circle
        </span>
      </div>
    </div>
  );
}

export default Toppings;
