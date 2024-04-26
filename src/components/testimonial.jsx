import React from "react";
import testimonials from "../testimony";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  return (
    <>
      <section className="px-4 lg:px-10">
        <div className="py-20">
          <div className="flex flex-row gap-5 items-center uppercase text-lg font-semibold w-auto text-[#DEDEDE] leading-5 tracking-[0.5px]">
            <FontAwesomeIcon icon={faArrowDown} /> Testimonials
          </div>
          <div className="text-base leading-4 pt-20 tracking-[1.5px] text-gray-500 uppercase">
            Words from Our Clients
          </div>
          <div className="pt-10 text-[30px] leading-10 tracking-[0.5px] font-medium">
            Don't just take our word for it; hear what our satisfied clients
            have to say.
          </div>
          <div className="lg:flex lg:gap-8">
            {testimonials.map((testimony) => {
              return (
                <div
                  key={testimony.id}
                  className="border-2 border-white mt-14 p-4 rounded-xl"
                >
                  <div className="py-4">
                    <img
                      className="mx-auto rounded-full"
                      src={testimony.photo}
                      alt=""
                    />
                  </div>
                  <div className="py-4 text-lg font-medium text-center">
                    "{testimony.testimony}"
                  </div>
                  <div className="py-1 text-medium text-center">
                    {testimony.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
