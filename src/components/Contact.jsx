/*import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen p-5 text-black mt-4"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full mt-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-zinc-200 mt-4">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/07a2485c-fbda-41e2-bc4e-54b24ef44140"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-violet-300 to-violet-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
*/

import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen p-5 text-black mt-4 flex flex-col justify-center items-center bg-white"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <p className="text-4xl font-bold inline border-b-4 border-zinc-200 mt-4">
          Contact
        </p>
        <p className="py-6">Contacter moi via ce formulaire</p>
      </div>
      <form
        action="https://getform.io/f/07a2485c-fbda-41e2-bc4e-54b24ef44140"
        method="POST"
        className="w-full md:w-1/2 max-w-lg p-4"
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none w-full"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none w-full"
          ></textarea>
        </div>

        <button className="text-white bg-gradient-to-r from-violet-300 to-violet-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
          Let's Talk
        </button>
      </form>
    </div>
  );
};

export default Contact;
