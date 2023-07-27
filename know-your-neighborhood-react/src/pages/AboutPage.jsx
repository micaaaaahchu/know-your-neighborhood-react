import React from "react";
import { hero2, house1 } from "../assets";
import LayoutFull from "../components/layout/LayoutFull";

const AboutPage = () => {
  return (
    <LayoutFull>
      <section
        className="min-h-[35vh] w-full bg-cover bg-center relative flex justify-center px-6
        after:absolute after:content-[''] after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-t
        after:from-[#0000004d] after:to-[#00000033]"
        style={{ backgroundImage: `url(${hero2})` }}
      >
        <div className="max-w-[1280px] text-white w-full relative z-10">
          <div className="flex justify-center items-center pt-20">
            <h2 className="font-bold text-5xl text-color2 drop-shadow-lg text-center">
              About Us
            </h2>
          </div>
        </div>
      </section>
      <section className="flex justify-center text-primary px-6 mt-8">
        <div className="max-w-[1280px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div className="text-gray-600">
              <h3 className="mb-5 text-3xl font-bold text-center text-red-400 drop-shadow mb-2">
                Navigate Your Community with Confidence
              </h3>
              <p className="mb-4 text-center">
                At Know Your Neighborhood, we believe that understanding your community is essential 
                for a fulfilling and enriching lifestyle. Our website is dedicated to providing you 
                with comprehensive information about neighborhoods, cities, and towns across the country. 
                Whether you're planning a move, looking for local services, or simply curious about your 
                surroundings, we've got you covered.
              </p>
              <p className="mb-4 text-center">
                Our platform allows you to explore various neighborhoods, giving you valuable insights 
                into their demographics, amenities, safety ratings, school districts, and more. You can 
                search for specific locations or browse through different cities to discover the unique 
                characteristics of each neighborhood. We understand that a vibrant community is built on 
                its residents' active involvement. Know Your Neighborhood provides a platform for community 
                members to share their experiences, recommendations, and upcoming events. Connect with your 
                neighbors, join local groups, and contribute to building a strong and cohesive community.
              </p>
              <p className="mb-4 text-center">
                Start exploring and get to know your neighborhood like never before! Visit our website today 
                and embark on a journey of discovery and community engagement. Thank you for choosing Know Your Neighborhood.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={house1}
                alt="about_us"
                className="rounded-md shadow-lg mb-6"
              />
            </div>
          </div>
        </div>
      </section>
    </LayoutFull>
  );
};

export default AboutPage;
