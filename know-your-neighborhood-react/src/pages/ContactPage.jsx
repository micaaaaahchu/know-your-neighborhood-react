import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { contact } from "../assets";
import LayoutFull from "../components/layout/LayoutFull";

const ContactPage = () => {
  return (
    <LayoutFull>
      <section
        className="min-h-[30vh] w-full bg-cover bg-center relative flex justify-center px-6
        after:absolute after:content-[''] after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-t
        after:from-[#0000004d] after:to-[#00000033]"
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="max-w-[1280px] text-white w-full relative z-10">
          <div className="flex justify-center items-center pt-20">
            <div className="text-center">
              <h2 className="font-bold text-5xl text-white drop-shadow-lg">
                Contact Us
              </h2>
              <p className="text-white mt-4">
                We value your feedback, inquiries, and suggestions. Please feel free to reach out to us using the contact information provided below. Our dedicated team is here to assist you and ensure that your experience with us is exceptional.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center text-primary px-6 mt-8">
        <div className="max-w-[1280px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            <form className="flex flex-col space-y-5 p-5 rounded border shadow bg-black">
              <h2 className="text-white text-center text-xl ml-1">Send us a feedback</h2>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="px-3 py-2 rounded"
              />
              <input
                type="text"
                name="email"
                placeholder="Your email"
                className="px-3 py-2 rounded"
              />
              <textarea
                name="message"
                placeholder="Your Feedback"
                className="px-3 py-2 rounded"
              />
              <button type="submit" className="mt-3 rounded bg-red-400 py-3">
                Submit
              </button>
            </form>
            <div className="flex flex-col space-y-5 p-5 border rounded shadow bg-black text-lg">
              <div className="text-center text-white space-y-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-4xl text-red-400" />
                <p>Manila, Philippines</p>
              </div>
              <div className="text-center text-white space-y-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-red-400" />
                <p>knowyourneighborhood@gmail.com</p>
              </div>
              <div className="text-center text-white space-y-2">
                <FontAwesomeIcon icon={faPhone} className="text-4xl text-red-400" />
                <p>9826-9983-22, 09826364521</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5 mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.9033018310283!2d-114.07434862349386!3d51.03640667170996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fe1524fffff%3A0x31a7647facbacdda!2sKnow%20Your%20Neighbourhood!5e0!3m2!1sen!2sph!4v1685871678407!5m2!1sen!2sph"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </LayoutFull>
  );
};

export default ContactPage;
