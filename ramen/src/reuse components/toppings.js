import React from "react";



function Toppings(props) {

  return (
    <div className="bg-white w-[10vw] h-[13em] rounded-xl relative mt-[70px]">
      <img
        src={props.toppingDetails.image}
        className="absolute top-[-35%] left-[5%]"
        style={{
          filter: "drop-shadow(2px 4px 8px hsla(0deg, 0%, 0%, 0.5))",
        }}
        alt=""
      />
      <div className="relative top-[35%] left-[30%]">
        <div className="text-[1.5em]">{props.toppingDetails.name}</div>
        <div className="ml-[20px] text-xl">+ {props.toppingDetails.price}</div>
        <span className="material-symbols-outlined text-[50px] ml-[20px] mt-[10px]">
          check_circle
        </span>
      </div>
    </div>
  );
}

export default Toppings;
