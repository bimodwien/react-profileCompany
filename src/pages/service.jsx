import React from "react";
import office2 from "../assets/office2.jpg";

const Service = () => {
  return (
    <>
      <section>
        <div className="relative flex justify-center items-center">
          <img src={office2} alt="" className="object-cover h-screen w-full" />
          <div className="absolute font-semibold text-xl italic md:text-5xl lg:font-bold lg:text-8xl text-[#DEDEDE]">
            Our Service
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
