import React from "react";


const Experience = () => {

  const items = [
    {
      title : "SpyD Technologies",
      role: "Associate Developer",
      date : "Jun-2023 - Present",
      des : "I leverage my skills in ReactJs, JavaScript and TailwindCSS desinging and developing the User Interfaces, "
    }
  ]
  return (
    <div
      name="experience"
      className=" h-screen bg-gradient-to-b from-black to-gray-800 pt-20"
    >
      <div className="text-white p-4">
        <h1 className="text-4xl inline font-bold border-b-4 border-gray-500 p-2">
          Experience
        </h1>

      
        
      </div>
    </div>
  );
};

export default Experience;
