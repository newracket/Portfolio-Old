import React from "react";

export default function Socials() {
  const socials = [
    { name: "Github", link: "https://github.com/newracket" },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/aniket-gupta-50733a24b/",
    },
    { name: "Instagram", link: "https://www.instagram.com/aniket.gupta01/" },
    { name: "Email", link: "mailto:aniket.9upt@gmail.com" },
  ];
  // Resume

  return (
    <div className="flex flex-col items-center mt-4">
      <div>
        <h2 className="text-5xl font-semibold">Socials</h2>
      </div>

      <div className="flex flex-row flex-wrap w-2/3 justify-center gap-6 p-3 rounded-md">
        {socials.map((icon, i) => {
          return (
            <a href={icon.link} target="_blank" key={i}>
              <img
                src={`assets/socials/${icon.name.toLowerCase()}.png`}
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
