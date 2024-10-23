import React from "react";

const Experience = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "This is a brief description of project one.",
      src: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      title: "Project Two",
      description: "This is a brief description of project two.",
      src: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      title: "Project Three",
      description: "This is a brief description of project three.",
      src: "https://picsum.photos/200/300",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 px-4 md:px-8 lg:px-20 xl:px-40 pt-20">
      <div className="text-white">
        <h1 className="text-4xl inline font-bold border-b-4 border-gray-500 p-2">
          Projects
        </h1>
        <p className="py-6 text-lg">
          A showcase of some of the projects I have worked on.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-5">
        {projects.map(({ id, title, description, src }) => (
          <div
            key={id}
            className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img src={src} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-400">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
