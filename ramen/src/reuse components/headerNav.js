import React from "react";

//routes
import { Link } from "react-router-dom";

function HeaderNav() {
  return (
    <div className="text-white absolute z-10 flex flex-row w-[100vw] justify-between">
      <div className="m-[20px] text-2xl ml-[6vw] font-bold ">
        Itadakimasu 🍜
      </div>
      <div className="flex flex-row w-[30vw] justify-evenly m-[20px] text-md">
        <div className="flex">
          <div className="mr-[3px]">About</div>
          <span className="material-symbols-outlined">info</span>
        </div>
        <div className="flex">
          <div className="mr-[3px]"><Link to="/menu">Menu</Link></div>
          <span className="material-symbols-outlined">soup_kitchen</span>
        </div>
        <div className="flex">
          <div className="mr-[3px]">Ingredients</div>
          <span class="material-symbols-outlined">note</span>
        </div>
      </div>
      <div className="flex flex-row w-[8vw] justify-evenly mt-[15px] h-[35px]">
        <div className="p-[6px] bg-[#009EFF] rounded-md"><Link to="/login">Login</Link> </div>
        <div className="p-[6px] bg-[#5BC0F8] rounded-md"><Link to="/signup">Signup</Link></div>
      </div>
    </div>
  );
}

export default HeaderNav;
