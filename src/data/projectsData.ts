import {ProjectType} from "../Types";

export default [
  {
    title: "Chess Website",
    description:
      "Chess website made using react and typescript. User can either play against the computer, or play against another player locally.",
    link: "https://github.com/newracket/Chess-Website",
    skills: ["Typescript", "HTML/CSS", "React"],
  },
  {
    title: "Discord Bot",
    description:
      "Discord bot made using typescript and discord.js. Discord bot contains a remind system, several games, and commands for common discord actions (creating roles, giving roles, archiving channels, etc)",
    link: "https://github.com/newracket/Discord-Server-Utilities",
    skills: ["NodeJS", "Discord.JS", "API"],
  },
  {
    title: "Countryside Mapper",
    description:
      "Agritourism website made using Typescript and React to display agricultural events. Made in 48 hour hackathon-Garuda Hacks. Won runner-up with this project.",
    link: "https://github.com/newracket/Garuda-Hacks",
    skills: ["Typescript", "React", "Firebase"],
  },
  {
    title: "PDF Merger",
    description:
      "PDF merger made using JavaScript and React to merge PDFs. Allows any number of PDFs, and allows for rearranging PDF pages.",
    link: "https://github.com/newracket/pdf-editor",
    skills: ["NodeJS", "React", "PDFLib"],
  }, {
    title: "Wordle",
    description:
      "Replica of NYTimes Wordle. Uses flask to run the webserver, along with a database to store the valid words.",
    link: "https://github.com/newracket/Wordle",
    skills: ["HTML/CSS", "Javascript", "Flask", "Sqlite3"],
  }
] as ProjectType[];