import React from "react";

//reuse comps
import Toppings from "./toppings";

function FoodItem(props) {
  console.log(props.reamenDetails.toppings);
  return (
    <div>
      <div className="bg-white w-[60vw] h-[100px] rounded-xl relative mt-[100px]">
        <img
          src={props.reamenDetails.image}
          className="absolute h-[200px] w-[200px] filter drop-shadow-2xl bottom-[1vh] left-[-2vw]"
          style={{
            filter: "drop-shadow(2px 4px 8px hsla(0deg, 0%, 0%, 0.5))",
          }}
          alt=""
        />
        <div className="relative top-[25%] left-[15%] flex justify-between w-[50vw] items-center">
          <h1 className="text-2xl font-extrabold">
            {props.reamenDetails.name}
          </h1>
          <div>20 left</div>
          <div>SUB-TOTAL : 0 </div>
          <div>
            <span className="material-symbols-outlined text-[50px]">add</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-[60vw]">
        {props.reamenDetails.toppings.map((items) => (
          <Toppings toppingDetails={items} />
        ))}
      </div>
    </div>
  );
}

export default FoodItem;
