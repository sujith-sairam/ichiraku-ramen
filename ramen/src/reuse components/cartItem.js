import React from "react";

//images
import misoRamen from "../asserts/misoRamen.png";

function CartItem() {
  const items = [1, 2, 3, 4];
  return (
    <div className=" w-[24vw] rounded-xl flex justify-evenly h-[6em]">
      {items.map((item) => (
        <div className="border-l-[1px] bg-[#8B9A46] rounded-xl mr-[2px]">
          <div className="pl-[20px]">300</div>
          <img src={misoRamen} className="w-[80px] pr-[5px]" alt="" />
        </div>
      ))}
    </div>
  );
}

export default CartItem;
