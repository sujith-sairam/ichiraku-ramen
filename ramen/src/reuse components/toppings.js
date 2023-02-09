import React from "react";

import fishCakes from "../asserts/fishCakes.png";
import chicken from "../asserts/chicken.png";
import vegetables from "../asserts/vegetables.png";
import egg from "../asserts/eggs.png";
import soySauce from '../asserts/soySauce.png'

function Toppings(props) {
  const toppings=[{name:"Fish cakes",image:fishCakes},{name:"Chicken",image:chicken},{name:"Vegetables",image:vegetables},{name:"Eggs",image:egg},{name:"Soy Sauce",image:soySauce}]
  return (
    <div className="bg-white w-[10vw] h-[13em] rounded-xl relative mt-[70px]">
      <img
        src={toppings[props.toppingIndex].image}
        className="absolute top-[-35%] left-[5%]"
        style={{
          filter: "drop-shadow(2px 4px 8px hsla(0deg, 0%, 0%, 0.5))",
        }}
        alt=""
      />
      <div className="relative top-[35%] left-[30%]">
        <div className="text-[1.5em]">{toppings[props.toppingIndex].name}</div>
        <div className="ml-[20px] text-xl">+ 20</div>
        <span className="material-symbols-outlined text-[50px] ml-[20px] mt-[10px]">
          check_circle
        </span>
      </div>
    </div>
  );
}

export default Toppings;
