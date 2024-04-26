import React from "react";
import Heroes from "../components/heroes.jsx";
import office2 from "../assets/office2.jpg";
import CardService from "../components/card-service";
import Testimonial from "../components/testimonial";

const Service = () => {
  return (
    <>
      <Heroes imgData={office2} imgBanner={"Our Service"} />

      <section className="px-4 lg:px-10">
        <div>
          <div className="text-base text-gray-500 uppercase leading-4 tracking-[1.5px] pt-20">
            Explore Our Products and Services
          </div>
          <div className="text-3xl leading-10 tracking-[-0.5px] font-bold pt-4 pb-20 text-[#DEDEDE]">
            Welcome to our Product / Services page, where you'll discover a wide
            range of offerings tailored to meet your interior design needs. Dive
            into the world of creativity and functionality with our
            comprehensive selection of products and services:
          </div>
        </div>
        <CardService />
      </section>
      <Testimonial />

      <section className="px-4 lg:px-10">
        <div>
          <div className="text-base text-gray-500 uppercase leading-4 tracking-[1.5px] pt-10 pb-5">
            Ready to Elevate Your Space
          </div>
          <div className="text-3xl leading-10 tracking-[-0.5px] font-bold pt-4 pb-10 text-[#DEDEDE]">
            Explore our full reange of products and services and take the step
            towards creating the home of your dreams. Contact us today to learn
            more and schedule a consultation with our team of experts.
          </div>
        </div>
        <div className="flex justify-center align-center pt-3 pb-10">
          <button className="bg-[#9D9D9D] px-10 py-3 rounded-sm font-medium text-xl hover:bg-gray-700 hover:border-white ">
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
};

export default Service;
