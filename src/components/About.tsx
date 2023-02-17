export default function About() {
  return (
    <div className="text-center pt-20 pb-6">
      <h1 className="text-7xl mb-3 font-bold">Aniket Gupta</h1>
      <p className="text-2xl mb-10">Fullstack Software Developer</p>

      <div className="flex items-center justify-center flex-row text-center">
        <img
          src="public/assets/UCSD-ID-Picture.jpg"
          className="border-2 border-stone-500 max-w-lg"
        />
        {/*<div*/}
        {/*  className="border-2 border-stone-500 bg-white"*/}
        {/*  style={{ width: "32rem", height: "24rem" }}*/}
        {/*></div>*/}
        <div className="flex flex-col ml-12">
          <p className="text-base font-semibold max-w-md">
            Hello! I'm currently a student at the University of California-San
            Diego, and am working on a Bachelors in Computer Science. After
            obtaining my degree, I hope to pursue the field of software
            development. My three main languages are Python, JavaScript, and
            Java.
          </p>
        </div>
      </div>
    </div>
  );
}
