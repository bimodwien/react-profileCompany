import React from "react";
import ars1 from "../assets/banner.jpg";
import rec1 from "../assets/bw_interior1.jpg";
import rec2 from "../assets/interior2.jpg";
import Heroes from "../components/heroes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Testimonial from "../components/testimonial";
import services from "../service";

const Landing = () => {
  return (
    <>
      <section>
        <div className="">
          <Heroes imgData={ars1} imgBanner={"Harmony Interior"} />
          <div className="text-base leading-4 px-4 pt-20 tracking-[1.5px] text-gray-500 uppercase lg:px-10">
            Harmony Interior
          </div>
          <div className="text-3xl px-4 pt-6 leading-10 tacking-[-0.5px] font-bold w-auto text-[#DEDEDE] lg:pb-10 lg:px-10">
            Where Interior Dreams Come to Life.
          </div>
          <div className="px-4 pt-20 uppercase text-gray-500 text-base leading-5 tracking-[1.5px] lg:px-10">
            crafting homes, creating memories
          </div>
          <div className="px-4 pt-6 text-3xl font-bold leading-10 w-auto tracking-[-0.5px] text-[#DEDEDE] lg:px-10">
            At Harmony Interior, we don't just design interiors; we craft
            experiences that resonate with your soul.
          </div>
        </div>
      </section>

      <section className="lg:px-10">
        <div className="pt-16 px-4">
          <div className="flex flex-row gap-5 items-center uppercase text-lg font-semibold w-auto text-[#DEDEDE] leading-5 tracking-[0.5px]">
            <FontAwesomeIcon icon={faArrowDown} /> explore our world
          </div>
        </div>
        <div className="lg:flex lg:flex-row-reverse lg:pb-16 lg:pt-32 lg:gap-5 lg:items-center px-4 pt-12 lg:justify-between lg:w-full">
          <div className="lg:w-2/4">
            <div className="uppercase text-gray-500 text-base w-auto leading-4 tracking-[1.5px] pb-5">
              unvieling our legacy
            </div>
            <div className="text-[30px] leading-10 tracking-[-0.5px] font-medium pt-4 pb-14">
              Step into our world and discover the story behind Harmony
              Interior. From humble beginnings to a powerhouse of creativity,
              learn about our journey, our values, and the team that drives our
              vision forward.
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <img
              src={rec1}
              alt="rectangular_1"
              className="w-[400px] h-[570px] lg:w-[506px] lg:h-[763px]"
            />
          </div>
        </div>
        <div className="px-4 pt-12 lg:flex lg:flex-row lg:py-24 lg:gap-5 lg:items-center lg:justify-between pb-3">
          <div className="lg:w-2/4">
            <div className="uppercase text-gray-500 text-base w-auto leading-4 tracking-[1.5px] pb-5">
              Discover Our Masterpieces
            </div>
            <div className="text-[30px] leading-10 tracking-[-0.5px] font-medium pt-4 pb-14">
              Dive into our portfolio of exquisite designs and witness the magic
              of our craftsmanship. Whether it's revamping a cozy living room or
              transforming a corporate space, our creations speak volumes of
              style, elegance, and functionality.
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={rec2}
              alt="rectangular_2"
              className="w-[400px] h-[570px] lg:w-[506px] lg:h-[763px]"
            />
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-10">
        <div className="flex flex-row gap-5 items-center uppercase text-lg font-semibold w-auto text-[#DEDEDE] leading-5 tracking-[0.5px]">
          <FontAwesomeIcon icon={faArrowDown} /> explore our product and
          services
        </div>
        <div className="text-base text-gray-500 uppercase leading-4 tracking-[1.5px] pt-20 pb-10">
          Products and Services
        </div>
        <div className="lg:flex gap-5">
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className="py-10 relative flex justify-center items-center"
              >
                <img
                  src={service.photo}
                  className="w-[400px] h-[570px] lg:w-auto lg:h-auto"
                  alt=""
                />
                <div className="absolute font-semibold text-xl italic text-[#202020]">
                  {service.title}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Testimonial />

      <section>
        <div className="px-4 lg:px-10">
          <div className="uppercase text-gray-500 text-base w-auto leading-5 tracking-[1.5px] pb-5">
            experience excellence, embrace elegance.
          </div>
          <div className="text-[30px] leading-10 tracking-[-0.5px] font-medium pt-4 pb-14">
            With Harmony Interior, your dream space is just a step away. Let us
            be your partners in design, your companions in creativity, and
            together, we'll redefine the art of living.
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-10 pb-10">
        <div>
          <div className="uppercase text-gray-500 text-base w-auto leading-5 tracking-[1.5px] pb-5">
            ready to define your space?
          </div>
          <div className="text-[30px] leading-10 tracking-[-0.5px] font-medium pt-4 pb-8">
            Embark on a journey of inspiration and transformation with Harmony
            Interior. Click below to learn more about us or explore our
            services.
          </div>
          <div className="pb-10 flex justify-center items-center gap-8">
            <button className="bg-[#9D9D9D] px-10 py-3 rounded-sm font-medium text-xl hover:bg-gray-700 hover:border-white">
              About Us
            </button>
            <button className="bg-[#9D9D9D] px-10 py-3 rounded-sm font-medium text-xl hover:bg-gray-700 hover:border-white">
              Services
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
