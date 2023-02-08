import React from "react";

//images
import misoRamen from "../asserts/misoRamen.png";

function CartItem() {
  const items = [1, 2, 3, 4];
  return (
    <div className="bg-[#8B9A46] w-[24vw] rounded-xl flex justify-evenly h-[10vh]">
      {items.map((item) => (
        <div className="border-l-[0.1px]">
          <div className="pl-[20px]">300</div>
          <img src={misoRamen} className="w-[80px] pr-[5px]" alt="" />
        </div>
      ))}
    </div>
  );
}

export default CartItem;
