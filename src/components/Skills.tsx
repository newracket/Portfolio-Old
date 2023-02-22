import { languages, libraries } from "../data/skillsData";

export default function Skills() {
  return (
    <div className="flex flex-col items-center text-center pt-6 pb-6">
      <h2 className="text-5xl mb-3 font-semibold">Skills</h2>
      <div className="flex flex-row flex-wrap w-2/3 justify-center gap-6 bg-slate-200 p-6 rounded-md mb-6">
        {languages.map((icon, i) => {
          return (
            <a href={icon.link} target="_blank" key={i}>
              <img
                src={`assets/languages/${icon.name.toLowerCase()}.png`}
                alt={`${icon} Icon`}
                className="max-h-20 rounded-lg"
              />
            </a>
          );
        })}
      </div>

      <div className="flex flex-row flex-wrap w-2/3 justify-center gap-6 bg-slate-200 p-6 rounded-md">
        {libraries.map((icon, i) => {
          return (
            <a href={icon.link} target="_blank" key={i}>
              <img
                src={`assets/libraries/${icon.name.toLowerCase()}.png`}
                alt={`${icon} Icon`}
                className="max-h-20 rounded-lg"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
