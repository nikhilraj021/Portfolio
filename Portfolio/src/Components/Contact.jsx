import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" bg-gradient-to-b from-black to-gray-800 px-4 md:px-24 text-white pt-20"
    >
      <div>
        <h1 className="text-4xl inline font-bold border-b-4 border-gray-500 p-2">
          Contact
        </h1>
        <p className="py-6 font-bio text-lg">
          Submit the form below to get in touch with me
        </p>
      </div>

      <div className="md:flex justify-center">
        <form
          action="https://getform.io/f/avrrewxa"
          method="POST"
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 md:w-96 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows={10}
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
          ></textarea>

          <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-5 mx-auto rounded-md hover:scale-110 duration-300">
            Let's talk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
