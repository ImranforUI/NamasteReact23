import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl m-2">Contact Us</h1>
      <form className="">
        <input
        type="text"
        placeholder="name"
        className="border border-black rounded-lg p-3 m-3"
        />
        <input
        type="text"
        placeholder="message"
        className="border border-black rounded-lg p-3 m-3"
        />

        <button className="text-white bg-black p-2 m-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
