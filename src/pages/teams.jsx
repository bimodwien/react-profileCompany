import React from "react";
import Heroes from "../components/heroes.jsx";
import personal from "../personel.js";
import teammate from "../assets/team-photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Teams = () => {
  return (
    <>
      <Heroes imgData={teammate} imgBanner={"Meet Our Team"} />

      <section className="px-4 lg:px-10">
        <div className="text-base text-gray-500 uppercase leading-4 tracking-[1.5px] pt-20">
          meet our team
        </div>
        <div className="text-3xl leading-10 tracking-[-0.5px] font-bold pt-4 pb-20 text-[#DEDEDE]">
          Welcome to our Teams page, where you can get to know the talented
          individuals behind our company. Explore the diverse skills, expertise,
          and passion that drive our team to success.
        </div>
      </section>

      <section className="px-4 lg:px-10">
        {personal.map((person) => {
          return (
            <div
              key={person.id}
              className="border border-white my-10 lg:border-none md:border-none lg:flex lg:justify-between lg:gap-5 lg:even:flex-row-reverse"
            >
              <div>
                <img
                  src={person.photo}
                  alt=""
                  className="mx-auto md:w-2/5 h-auto lg:w-[506px] lg:h-[763px]"
                />
              </div>
              <div className="pt-5 px-2 lg:px-0 lg:w-2/4 lg:flex lg:flex-col lg:justify-center">
                <div className="text-2xl text-gray-500 uppercase leading-4 tracking-[1.5px]">
                  {person.name}
                </div>
                <div className="text-3xl leading-10 tracking-[-0.5px] font-bold pt-4 pb-10 text-[#DEDEDE]">
                  {person.position}
                </div>
                <div className="text-2xl leading-10 tracking-[-0.5px] font-bold pt-4 pb-10 text-[#DEDEDE]">
                  "{person.description}"
                </div>
                <div className="py-4">
                  <span className="text-2xl pb-10 text-gray-500 uppercase leading-4 tracking-[1.5px]">
                    Contact info:
                  </span>
                  <div className="flex gap-2 items-center text-xl leading-10 tracking-[-0.5px] font-bold  text-[#DEDEDE]">
                    <FontAwesomeIcon icon={faEnvelope} />
                    {person.contactInformation.email}
                  </div>
                  <div className="flex gap-2 items-center text-xl leading-10 tracking-[-0.5px] font-bold  text-[#DEDEDE]">
                    <FontAwesomeIcon icon={faPhone} />
                    {person.contactInformation.phone}
                  </div>
                </div>
                <div>
                  <div className="text-2xl py-4 text-gray-500 uppercase leading-4 tracking-[1.5px]">
                    Expertise
                  </div>
                  <div className="flex flex-wrap gap-5 py-5 lg:py-1 text-center text-nowrap items-center">
                    {person.expertise.map((e) => {
                      return (
                        <div
                          className="bg-[#9D9D9D] rounded-full px-5 py-3 text-base font-semibold uppercase leading-4 tracking-[-0.5px]"
                          key={e}
                        >
                          {e}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Teams;
