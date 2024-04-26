import React from "react";
import Heroes from "../components/heroes.jsx";
import office_1 from "../assets/office1.jpg";
import ourJourney1 from "../assets/calendar.jpg";
import historic from "../assets/historic1.jpg";
import personal from "../personel.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Heroes imgData={office_1} imgBanner={"About Us"} />

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
        <div className="lg:flex lg:justify-between lg:gap-5">
          <div className="lg:w-2/4 lg:flex lg:flex-col lg:justify-center">
            <div className="uppercase text-gray-500 text-base w-auto leading-4 tracking-[1.5px] pb-5">
              Our Journey
            </div>
            <div className="font-medium text-[30px] leading-10 tracking-[-0.5px] pt-5 pb-10 text-left align-top text-[#DEDEDE]">
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
              className="w-[400px] h-[570px] lg:w-[506px] lg:h-[763px]"
            />
          </div>
        </div>

        <div className="py-10 lg:flex lg:flex-row-reverse lg:gap-5 lg:justify-between">
          <div className="lg:w-2/4 lg:flex lg:flex-col lg:justify-center">
            <div className="uppercase text-gray-500 text-base w-auto leading-4 tracking-[1.5px] pb-5">
              company history
            </div>
            <div className="font-medium text-[30px] leading-10 tracking-[-0.5px] pt-5 pb-10 text-left align-top text-[#DEDEDE]">
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
              className="w-[400px] h-[570px] lg:w-[506px] lg:h-[763px]"
            />
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-10">
        <div className="pb-16 flex gap-5 items-center uppercase text-lg font-semibold w-auto text-[#DEDEDE] leading-5 tracking-[0.5px]">
          <FontAwesomeIcon icon={faArrowDown} /> our team
        </div>

        <div>
          <div className="uppercase text-gray-500 text-base w-auto leading-4 tracking-[1.5px] pb-5">
            meet our team
          </div>
          <div className="font-medium text-[30px] leading-10 tracking-[-0.5px] pt-5 pb-10 text-left align-top text-[#DEDEDE]">
            At Harmony Interior, we believe that our greatest asset is our team.
            Our team is comprised of passionate individuals who bring diverse
            talents and perspectives to the table. Get to know the faces behind
            our success:
          </div>
        </div>

        <div className="lg:flex lg:flex-row gap-10 lg:py-10 lg:flex-wrap lg:justify-between flex flex-col justify-center items-center">
          {personal.map((person) => {
            return (
              <>
                <div key={person.id} className="py-2 relative">
                  <img
                    src={person.photo}
                    alt=""
                    className="w-[400px] h-[570px] rounded-lg"
                  />
                  <div className="absolute bottom-2 bg-gradient-to-r from-gray-800 w-full pl-2 rounded-bl-lg">
                    <div className="text-[#DEDEDE] tracking-[-0.5px] font-medium">
                      {person.name}
                    </div>
                    <div className="text-[#DEDEDE] tracking-[-0.5px] font-semibold">
                      {person.position}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>

      <section className="px-4 lg:px-10">
        <div className="py-16 flex gap-5 items-center uppercase text-lg font-semibold w-auto text-[#DEDEDE] leading-5 tracking-[0.5px]">
          <FontAwesomeIcon icon={faArrowDown} /> our culture
        </div>

        <div>
          <div className="uppercase text-gray-500 text-base w-auto leading-4 tracking-[1.5px] pb-5">
            Our Culture
          </div>
          <div className="font-medium text-[30px] leading-10 tracking-[-0.5px] pt-5 pb-10 text-left align-top text-[#DEDEDE]">
            At the heart of Harmony Interior lies a diverse and inclusive
            culture. We are driven by our core values, such as <b>Creativity</b>
            , <b>Collaboration</b>, <b>Integrity</b>, <b>Excellence</b>,{" "}
            <b>Innovation</b>, and <b>Sustainability</b>, which guide every
            action we take. From fostering creativity to promoting
            collaboration, we strive to create an environment where every team
            member feels empowered to thrive.
          </div>
          <div className="font-medium text-[30px] leading-10 tracking-[-0.5px] pt-5 pb-10 text-left align-top text-[#DEDEDE]">
            Join us on our journey as we continue to push the boundaries of
            interior design and make a positive impact on the world around us.
          </div>
        </div>

        <button></button>
      </section>
    </>
  );
};

export default About;
