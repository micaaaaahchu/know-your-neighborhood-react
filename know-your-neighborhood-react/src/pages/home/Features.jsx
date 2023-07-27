import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPeopleGroup, faCalendar } from "@fortawesome/free-solid-svg-icons";


const Features = () => {
  return (
    <section className="grid md:grid-cols-3 mt-8 md:mt-14 mb-6 gap-5 md:gap-10">
      <div className="flex flex-col text-center p-5 border rounded bg-gray-100 shadow-sm space-y-4">
        <h2 className="font-bold text-red-400 text-lg">
        Neighborhood Resources
        </h2>
        <FontAwesomeIcon icon={faHome} className="text-5xl" />
        <p className="text-gray-700 text-[15px]">
        Explore a variety of resources designed to enhance your experience in our neighborhood. 
        Whether you're looking for parks and recreational areas, schools and educational institutions, 
        or transportation options, our website provides comprehensive information to help you navigate 
        and enjoy our community to the fullest.
        </p>
      </div>

      <div className="flex flex-col text-center p-5 border rounded bg-gray-100 shadow-sm space-y-4">
        <h2 className="font-bold text-red-400 text-lg">
        Community Services
        </h2>
        <FontAwesomeIcon icon={faPeopleGroup} className="text-5xl" />
        <p className="text-gray-700 text-[15px]">
        Access a wealth of information about essential community services. We provide contact details 
        and locations for services such as police stations, fire departments, hospitals, libraries, and post offices. 
        This ensures you can easily find the resources you need, right within our neighborhood.
        </p>
      </div>

      <div className="flex flex-col text-center p-5 border rounded bg-gray-100 shadow-sm space-y-4">
        <h2 className="font-bold text-red-400 text-lg">
        Events and Activities
        </h2>
        <FontAwesomeIcon icon={faCalendar} className="text-5xl" />
        <p className="text-gray-700 text-[15px]">
        Stay up to date with the latest happenings in our neighborhood. Our website features a calendar 
        of exciting events, including festivals, concerts, art exhibits, and other community gatherings. 
        Join in the fun and connect with fellow residents while enjoying the diverse range of activities available.
        </p>
      </div>
    </section>
  );
};

export default Features;
