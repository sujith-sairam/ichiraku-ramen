import React from "react";

//images
import loginImage from "../asserts/login.jpg";
import signupImage from '../asserts/signup.png'

function FormPage(props) {
  return (
    <div className="relative flex justify-between">
      <div>
        <img src={props.flag?signupImage:loginImage} className="w-[100vw] h-[100vh]" alt="" />
      </div>
      <div className="absolute flex flex-col justify-center items-center top-[10em] left-[50em]">
        <div className="text-5xl font-extrabold text-white">
          ITADAKIMASU
          <span className="material-symbols-outlined text-4xl font-semibold">
            ramen_dining
          </span>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100 border border-gray-100"></div>
            <div
              className="relative px-4 py-10  shadow-lg sm:rounded-3xl sm:p-20  bg-brown-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border  "
              style={{ backdropFilter: "blur(3.5px)" }}
            >
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-4xl font-semibold text-center text-white">
                    {props.flag ? "SIGNUP" : "LOGIN"}
                  </h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        autocomplete="off"
                        id="email"
                        name="email"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2  text-gray-900 focus:outline-none focus:borer-rose-600 rounded-md"
                        placeholder="Mobile Number"
                      />
                      <label
                        for="email"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm p-[2px]"
                      >
                        Mobile Number
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autocomplete="off"
                        id="password"
                        name="password"
                        type="password"
                        className="peer placeholder-transparent h-10 w-full border-b-2 ] text-gray-900 focus:outline-none focus:borer-rose-600 rounded-md"
                        placeholder="Password"
                      />
                      <label
                        for="password"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#FFC3A1] peer-focus:text-sm p-[2px]"
                      >
                        Password
                      </label>
                    </div>
                    {props.flag ? (
                      <div className="relative">
                        <input
                          autocomplete="off"
                          id="password"
                          name="password"
                          type="password"
                          className="peer placeholder-transparent h-10 w-full border-b-2 ] text-gray-900 focus:outline-none focus:borer-rose-600 rounded-md"
                          placeholder="Password"
                        />
                        <label
                          for="password"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#FFC3A1] peer-focus:text-sm p-[2px]"
                        >
                          Re Enter Password
                        </label>
                      </div>
                    ) : (
                      <></>
                    )}

                    <div className="relative">
                      <button className="bg-[#D3756B] text-white rounded-md px-2 py-1">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
