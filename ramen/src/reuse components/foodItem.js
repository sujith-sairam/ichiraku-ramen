import React from "react";

//images
import misoRamen from "../asserts/misoRamen.png";
import Toppings from "./toppings";

function FoodItem() {
  const toppings = [1, 2, 3, 4, 5];
  return (
    <div>
      <div className="bg-white w-[60vw] h-[100px] rounded-xl relative mt-[100px]">
        <img
          src={misoRamen}
          className="absolute h-[200px] w-[200px] filter drop-shadow-2xl bottom-[1vh] left-[-2vw]"
          style={{
            filter: "drop-shadow(2px 4px 8px hsla(0deg, 0%, 0%, 0.5))",
          }}
          alt=""
        />
        <div className="relative top-[25%] left-[15%] flex justify-between w-[50vw] items-center">
          <h1 className="text-2xl font-extrabold">MISO RAMEN</h1>
          <div>20 left</div>
          <div>SUB-TOTAL : 50</div>
          <div>
            <span className="material-symbols-outlined text-[50px]">add</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-[60vw]">
        {toppings.map((items) => (
          <Toppings />
        ))}
      </div>
    </div>
  );
}

export default FoodItem;
