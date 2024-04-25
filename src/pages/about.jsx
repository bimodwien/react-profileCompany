import React from "react";
import office_1 from "../assets/office1.jpg";
import ourJourney1 from "../assets/calendar.jpg";
import historic from "../assets/historic1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <section>
        <div className="relative flex justify-center items-center h-full w-full">
          <img
            src={office_1}
            alt="office 1"
            className="object-cover h-screen w-full"
          />
          <div className="absolute font-semibold text-xl italic md:text-5xl lg:font-bold lg:text-8xl text-[#DEDEDE]">
            About Us
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-10">
        <div className="pt-16 flex gap-5 items-center uppercase text-lg font-semibold w-auto text-[#DEDEDE] leading-5 tracking-[0.5px]">
          <FontAwesomeIcon icon={faArrowDown} /> company history
        </div>
        <div>
          <div className="text-base text-gray-500 uppercase leading-4 tracking-[1.5px] pt-20">
            about us - explore our stories
          </div>
          <div className="text-3xl leading-10 tracking-[-0.5px] font-bold pt-4 pb-10 text-[#DEDEDE]">
            Welcome to Harmony Interior, where inspiration meets expertise, and
            creativity knows no bounds. Our About Us page is a window into the
            heart and soul of our company, offering a glimpse into our journey,
            our team, and our culture.
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-10 py-10 ">
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-2/4 lg:flex lg:flex-col lg:justify-center">
            <div className="uppercase text-gray-500 text-base w-auto leading-4 tracking-[1.5px] pb-5">
              Our Journey
            </div>
            <div className="font-medium text-[30px] leading-10 tracking-[-0.5px] pt-5 pb-10 text-left align-top">
              Since our establishment in 2014, Harmony Interior has been
              determined to redefine the standards of interior design. What
              started as a simple idea has blossomed into a rapidly growing
              enterprise, thanks to the dedication and perseverance of our team.
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={ourJourney1}
              alt="journey1"
              className="w-[400px] h-[570px] "
            />
          </div>
        </div>

        <div className="py-10 lg:flex lg:flex-row-reverse lg:justify-between">
          <div className="lg:w-2/4 lg:flex lg:flex-col lg:justify-center">
            <div className="uppercase text-gray-500 text-base w-auto leading-4 tracking-[1.5px] pb-5">
              company history
            </div>
            <div className="font-medium text-[30px] leading-10 tracking-[-0.5px] pt-5 pb-10 text-left align-top">
              Our journey began with a simple idea: Harmony Interior was
              established in 2005 by John Smith, a passionate interior designer
              with a vision to redefine how people experience their living
              spaces. From those early days, we embarked on a path of growth and
              exploration, achieving numerous milestones along the way. Today,
              Harmony Interior stands as a testament to our commitment to
              excellence and innovation in interior design.
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={historic}
              alt="historic office"
              className="w-[400px] h-[570px] "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
