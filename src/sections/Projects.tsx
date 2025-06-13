import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="h-screen w-full" id="projects">
      <div className="flex flex-col text-white px-2 lg:px-52 lg:pt-48">
        <h2 className="text-5xl mb-8">Projects</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <ProjectCard
            title="Project"
            description="This is a brief description of Project."
            imageUrl="https://pramitshende.com/thumbnails/hab.jpg"
            link="https://example.com/project-one"
          />
          <ProjectCard
            title="Project"
            description="This is a brief description of Project."
            imageUrl="https://pramitshende.com/thumbnails/hab.jpg"
            link="https://example.com/project-one"
          />
          <ProjectCard
            title="Project"
            description="This is a brief description of Project."
            imageUrl="https://pramitshende.com/thumbnails/hab.jpg"
            link="https://example.com/project-one"
          />
          <ProjectCard
            title="Project"
            description="This is a brief description of Project."
            imageUrl="https://pramitshende.com/thumbnails/hab.jpg"
            link="https://example.com/project-one"
          />
        </div>
      </div>
    </section>
  );
}
