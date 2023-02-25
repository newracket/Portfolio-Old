import { ProjectType } from "../Types";

export default [
  {
    title: "Chess Website",
    description:
      "Chess website made using react and typescript. User can either play against the computer, or play against another player locally.",
    link: "https://github.com/newracket/Chess-Website",
    skills: ["Typescript", "HTML/CSS", "React"],
    image: "chess.png",
  },
  {
    title: "Discord Bot",
    description:
      "Discord bot made using typescript and discord.js. Discord bot contains a remind system, several games, and commands for common discord actions (creating roles, giving roles, archiving channels, etc)",
    link: "https://github.com/newracket/Discord-Server-Utilities",
    skills: ["NodeJS", "Discord.JS", "API"],
    image: "discord_server_utilities.png",
  },
  {
    title: "Countryside Mapper",
    description:
      "Agritourism website made using Typescript and React to display agricultural events. Made in 48 hour hackathon-Garuda Hacks. Won runner-up with this project.",
    link: "https://github.com/newracket/Garuda-Hacks",
    skills: ["Typescript", "React", "Firebase"],
    image: "countryside_mapper.png",
  },
  {
    title: "Portfolio",
    description:
      "Portfolio made using Typescript, React, and Tailwind to display my projects and skills.",
    link: "https://github.com/newracket/Portfolio",
    skills: ["Typescript", "React", "Tailwind"],
    image: "portfolio.png",
  },
  {
    title: "PDF Merger",
    description:
      "PDF merger made using JavaScript and React to merge PDFs. Allows any number of PDFs, and allows for rearranging PDF pages.",
    link: "https://github.com/newracket/pdf-editor",
    skills: ["NodeJS", "React", "PDFLib"],
    image: "pdf_merger.png",
  },
  {
    title: "Wordle",
    description:
      "Replica of NYTimes Wordle. Uses flask to run the webserver, along with a database to store the valid words.",
    link: "https://github.com/newracket/Wordle",
    skills: ["HTML/CSS", "Javascript", "Flask", "Sqlite3"],
    image: "wordle.png",
  },
  {
    title: "UCSD Courses Scraper",
    description:
      "Used python and selenium to scrape a list of all the courses from UCSD, along with the data for all the courses.",
    link: "https://github.com/newracket/Classes_Scraper",
    skills: ["Python", "Selenium"],
    image: "classes_scraper.png",
  },
  {
    title: "Google Classroom Reminders App",
    description:
      "Used NodeJS and ElectronJS to create a desktop app with an interface to create reminders for Google Classroom assignments.",
    link: "https://github.com/newracket/Google-Classroom-Reminders-App",
    skills: ["NodeJS", "ElectronJS", "HTML/CSS"],
    image: "gc_reminders.png",
  },
] as ProjectType[];
