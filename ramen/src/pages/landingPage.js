import React from "react";

//particles
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

//reusable comps
import HeaderNav from "../reuse components/headerNav";

//images
import sasuke from "../asserts/sasuke.png";

//lottie
import Lottie from "lottie-react";
import ramen from "../asserts/ramen.json";

function LandingPage() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await {};
  }, []);

  const particleCongif = {
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 220,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: false,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 200,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#4ff5f7",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: false,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        enable: true,
        speed: 4,
        direction: "bottom",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 200,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <div>
      <HeaderNav />
      <div className="absolute z-10 flex top-[8vh] justify-between w-[90vw] left-[5vw]">
        <div className="text-white text-[3vw] relative top-[20vh] h-[400px]">
          <div className="m-[10px]">I AM GONO BECOME A HOKAGE</div>
          <div className="m-[10px]">But First ,</div>
          <div className="flex">
            <div className="font-extrabold mt-[70px] ml-[10px]">RAMEN</div>
            <Lottie
              animationData={ramen}
              loop={true}
              className="w-[300px] relative ml-[70px] top-[-100px]"
            />
          </div>
        </div>
        <img
          src={sasuke}
          alt=""
          className="w-[30vw] h-[90vh] skew-y-3 skew-x-3"
          styles="transform: scaleX(-1);"
        />
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleCongif}
      />
    </div>
  );
}

export default LandingPage;
