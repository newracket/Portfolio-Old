import { ProjectType } from "../Types";

export default function Project(projectData: ProjectType) {
  return (
    <div className="flex flex-col justify-between max-w-sm m-4 pb-4 border-2 border-stone-700 rounded-md overflow-hidden">
      <a href={projectData.link} target="_blank">
        <img
          src={`assets/projects/${projectData.image}`}
          alt={projectData.image}
        />
      </a>

      <div className="mt-3">
        <a href={projectData.link} target="_blank" className="max-w-fit">
          <h3 className="inline bg-slate-100 p-0.5 rounded-sm hover:bg-slate-200 font-semibold">
            {projectData.title}
          </h3>
        </a>
      </div>

      <p>{projectData.description}</p>

      <div className="flex justify-center mt-auto">
        {projectData.skills.map((skill, i) => {
          return (
            <p
              className="inline border-2 border-stone-700 rounded-md p-1.5 m-1"
              key={i}
            >
              {skill}
            </p>
          );
        })}
      </div>
    </div>
  );
}
