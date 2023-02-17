export default function Skills() {
  const languages = [
    { name: "Javascript", link: "https://www.javascript.com/" },
    { name: "Typescript", link: "https://www.typescriptlang.org/" },
    { name: "NodeJS", link: "https://nodejs.org/" },
    { name: "Java", link: "https://www.java.com/" },
    {
      name: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    { name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Go", link: "https://go.dev/" },
    {
      name: "CSharp",
      link: "https://dotnet.microsoft.com/en-us/languages/csharp",
    },
    { name: "SQL", link: "https://en.wikipedia.org/wiki/SQL" },
    { name: "Bash", link: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)" },
    {
      name: "Powershell",
      link: "https://learn.microsoft.com/en-us/powershell/",
    },
  ];
  const libraries = [
    { name: "React", link: "https://reactjs.org/" },
    { name: "Express", link: "https://expressjs.com/" },
    { name: "Electron", link: "https://www.electronjs.org/" },
    { name: "Flask", link: "https://flask.palletsprojects.com/" },
    { name: "Numpy", link: "https://numpy.org/" },
    { name: "Pandas", link: "https://pandas.pydata.org/" },
    { name: "Selenium", link: "https://www.selenium.dev/" },
    { name: "Tailwind", link: "https://tailwindcss.com/" },
    { name: "JQuery", link: "https://jquery.com/" },
    { name: "Vue", link: "https://vuejs.org/" },
    { name: "Firebase", link: "https://firebase.google.com/" },
    { name: "Sqlite3", link: "https://www.sqlite.org/" },
    { name: "AWS", link: "https://aws.amazon.com/" },
    { name: "Azure", link: "https://azure.microsoft.com/" },
  ];

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
                className="max-h-28 rounded-lg"
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
                className="max-h-28 rounded-lg"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
