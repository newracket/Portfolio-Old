export default function About() {
  return (
    <div className="text-center pt-20 pb-6">
      <h1 className="text-7xl mb-3 font-bold">Aniket Gupta</h1>
      <p className="text-2xl mb-10">Fullstack Software Developer</p>

      <div className="flex items-center justify-center flex-row text-center">
        <img
          src="assets/UCSD-ID-Picture.jpg"
          alt="Portrait Picture"
          className="border-2 border-stone-500 max-w-lg"
        />
        {/*<div*/}
        {/*  className="border-2 border-stone-500 bg-white"*/}
        {/*  style={{ width: "32rem", height: "24rem" }}*/}
        {/*></div>*/}
        <div className="flex flex-col ml-12">
          <p className="text-base font-semibold max-w-md">
            Hello! I'm currently a student at the University of California-San
            Diego, working on a Bachelors in Computer Science. My interests
            revolve around the field of software engineering, with my area of
            expertise being web development. I've recently started to get into
            the field of AI, utilizing the programming language python.
          </p>
          <br />
          <p className="text-base font-semibold max-w-md">
            You can view my projects and skills down below. My socials are
            linked at the bottom of the page. Feel free to contact me if you
            have any employment opportunities, want to work together on a
            project, or just want to chat!
          </p>
        </div>
      </div>
    </div>
  );
}
