import React from "react";

//images
import misoRamen from "../asserts/misoRamen.png";
import fishCakes from "../asserts/fishCakes.png";

function MarketPage() {
  const iterator = [1, 2, 3, 4, 5];
  return (
    <div className="flex">
      <div className="bg-black w-[80vw] h-auto">
        <div className="text-white text-center  text-4xl font-extrabold">
          Eat what u like , And
          <br />
          How u like it.
        </div>
        <div className="m-[100px]">
          {iterator.map((item) => (
            <div>
              <div className="bg-white w-[60vw] h-[100px] rounded-xl relative mt-[100px]">
                <img
                  src={misoRamen}
                  className="absolute h-[200px] w-[200px] filter drop-shadow-2xl bottom-[1vh] left-[-2vw]"
                  style={{
                    filter: "drop-shadow(2px 4px 8px hsla(0deg, 0%, 0%, 0.5))",
                  }}
                />
                <div className="relative top-[25%] left-[15%] flex justify-between w-[50vw] items-center">
                  <h1 className="text-2xl">Miso ramen</h1>
                  <div>Available 20</div>
                  <div>
                    <button className="px-[20px] bg-slate-700 rounded-md m-[10px]">
                      +
                    </button>
                    <button className="px-[20px] bg-slate-700 rounded-md m-[10px]">
                      -
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-[60vw]">
                {iterator.map((items) => (
                  <div className="bg-white w-[10vw] h-[20vh] rounded-xl relative mt-[70px]">
                    <img
                      src={fishCakes}
                      className="absolute top-[-30%] left-[5%]"
                      style={{
                        filter:
                          "drop-shadow(2px 4px 8px hsla(0deg, 0%, 0%, 0.5))",
                      }}
                    />
                    <div className="relative top-[35%] left-[30%]">
                      <div className="text-xl">Fishcakes</div>
                      <button className="w-[50px] p-[10px] bg-stone-600 rounded-2xl mt-[15%] ml-[5%]">
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>Your Orders</div>
    </div>
  );
}

export default MarketPage;
