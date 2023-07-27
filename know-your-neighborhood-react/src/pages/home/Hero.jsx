import React from "react";
import { hero } from "../../assets";
import SearchForm from "../../components/form/SearchForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="grid md:grid-cols-1 mt-10 h-max">
      <div className="flex flex-col justify-center items-center mr-0 md:mr-8">
        <div className="text-center">
          <h2 className="font-bold text-3xl md:text-4xl">
            Welcome to
          </h2>
          <h1 className="font-extrabold text-3xl md:text-4xl">
            Know Your Neighborhood
          </h1>
          <p className="max-w-[1000px] text-gray-500 font-medium mt-1">
            We strive to provide you with a user-friendly and comprehensive platform that caters to your needs.
            Explore our website and unlock the full potential of our neighborhood by accessing all the valuable
            information and resources we have to offer.
          </p>
          <div className="flex my-5 max-w-[1000px]">
            <a
              href="#about"
              className="px-2 py-3 bg-red-300 rounded mr-3 w-full max-w-[250px] text-center focus:ring-1 
              focus:ring-offset-black-200"
            >
              Browse Now <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <SearchForm />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={hero}
          alt=""
          className="h-full rounded-full lg:rounded-[50px] lg:rounded-tl-[50px] lg:rounded-br-[50px] 
          shadow-lg cursor-pointer brightness-95 hover:brightness-90 transition duration-150"
        />
      </div>
    </section>
  );
};

export default Hero;
