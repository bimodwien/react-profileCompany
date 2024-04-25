import React from "react";

import services from "../service.js";

const CardService = () => {
  return (
    <>
      {services.map((srv) => {
        return (
          <div
            key={srv.id}
            className="lg:flex lg:even:flex-row-reverse lg:justify-between lg:gap-5 pb-10"
          >
            <div className="flex justify-center items-center">
              <img
                src={srv.photo}
                alt="service1"
                className="pb-10 w-[400px] h-[570px] lg:w-[506px] lg:h-[763px]"
              />
            </div>
            <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
              <div className="uppercase text-gray-500 text-base w-auto leading-4 tracking-[1.5px] pb-5">
                {srv.title}
              </div>
              <div className="font-medium text-[30px] leading-10 tracking-[-0.5px] pt-5 pb-10 text-left align-top text-[#DEDEDE]">
                {srv.description}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardService;
