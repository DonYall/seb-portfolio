export default function About() {
  const skills = [
    "Computational Physics",
    "Analytical Thinking",
    "3D Modeling",
    "Simulation Software",
    "Space Systems",
    "Python",
    "SOLIDWORKS",
    "Autodesk Fusion 360",
    "Ansys STK",
    "Orbital Mechanics",
    "Graphic Design",
    "Team Leadership",
    "Public Speaking",
    "Creative Writing",
    "Storytelling",
    "Art Direction",
    "Creative Problem Solving",
  ];
  return (
    <section className="h-screen lg:pl-52 lg:pt-48" id="about">
      <h2 className="text-5xl mb-8">About Me</h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <p className="text-xl mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-xl mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex flex-wrap px-2 lg:pr-52 h-fit">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-600/30 rounded-lg px-2 py-1 m-1 transition-colors duration-300 hover:bg-gray-600/50">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
