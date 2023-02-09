//react
import React from "react";
//reusable comps
import FoodItem from "../reuse components/foodItem";
import CartItem from "../reuse components/cartItem";
// ramen images
import misoRamen from "../asserts/misoRamen.png";
import itchikaruRamen from "../asserts/ItchikaruRamen.png";
import shioRamen from "../asserts/shioRamen.png";
import shoyuRamen from "../asserts/shoyuRamen.png";
import toknkotsuRamen from "../asserts/toknkotsuRamen.png";
//toppings images
import fishCakes from "../asserts/fishCakes.png";
import chicken from "../asserts/chicken.png";
import vegetables from "../asserts/vegetables.png";
import egg from "../asserts/eggs.png";
import soySauce from "../asserts/soySauce.png";

function MarketPage() {
  const ramens = [
    { name: "Miso Ramen", image: misoRamen },
    { name: "Itchikaru Ramen", image: itchikaruRamen },
    { name: "Shio Ramen", image: shioRamen },
    { name: "Shoyu Ramen", image: shoyuRamen },
    { name: "Toknkotsu Ramen", image: toknkotsuRamen },
  ];
  const toppingsAvailable = [
    { name: "Fish cakes", image: fishCakes, price: 60 },
    { name: "Chicken", image: chicken, price: 70 },
    { name: "Vegetables", image: vegetables, price: 20 },
    { name: "Eggs", image: egg, price: 10 },
    { name: "Soy Sauce", image: soySauce, price: 5 },
  ];

  return (
    <div className="flex">
      <div
        className="bg-black w-[80vw] h-[100vh] overflow-y-scroll"
        style={{ scrollbarColor: "#FFFFFF" }}
      >
        <div className="text-white text-center  text-4xl font-extrabold text-[5em] mt-[40px]">
          <div className="mb-[50px] text-green-700">Eat what u like , And</div>
          <div>How u like it.</div>
        </div>
        <div className="m-[100px]">
          {ramens.map((items) => (
            <FoodItem
              reamenDetails={{ ...items, toppings: toppingsAvailable }}
            />
          ))}
        </div>
      </div>
      <div className="bg-[#EEEEEE] w-[20vw]">
        <div className="text-[50px] pl-[3vw] text-green-700 font-extrabold">
          Your Orders
        </div>
        <div className="flex flex-col">
          {[1, 2, 3, 4, 5].map((items) => (
            <div className="flex items-center m-[10px]">
              <div className="border-[#FF8303] border-[0.01em] w-[5em] text-center rounded-md m-[10px] h-[3em] pt-[0.7em]">
                1000
              </div>
              <CartItem />
              <span className="material-symbols-outlined text-2xl  w-[2em] h-[2em] m-[10px]  text-center font-medium">
                close
              </span>
            </div>
          ))}
        </div>
        <div className="w-[18vw] flex bg-blue-500 justify-between rounded-xl p-[10px] ml-[2vh]">
          <div>
            <span>&#8377;</span> 15000
          </div>
          <div>Pay Now</div>
        </div>
      </div>
    </div>
  );
}

export default MarketPage;
