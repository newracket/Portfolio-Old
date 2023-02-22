import projectsData from "../data/projectsData";
import Project from "./Project";

export default function ProjectsList() {
  return (
    <div className="flex flex-col items-center text-center pt-20 pb-6">
      <h2 className="text-5xl mb-3 font-semibold">Projects</h2>
      <div className="flex flex-row flex-wrap justify-center w-4/5">
        {projectsData.map((projectData, i) => (
          <Project
            title={projectData.title}
            description={projectData.description}
            link={projectData.link}
            skills={projectData.skills}
            image={projectData.image}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
