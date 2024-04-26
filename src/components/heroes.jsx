import React from "react";

const Heroes = ({ imgData, imgBanner }) => {
  return (
    <>
      <section>
        <div className="relative flex justify-center items-center">
          <img
            src={imgData}
            alt=""
            className="object-cover lg:h-screen lg:w-full"
          />
          <div className="absolute font-semibold text-xl italic md:text-5xl lg:font-bold lg:text-8xl text-[#DEDEDE] ">
            {imgBanner}
          </div>
        </div>
      </section>
    </>
  );
};

export default Heroes;
