export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src="./Image/aboutme.JPG"
          alt="About Me"
          className=" w-72 h-72 rounded-full object-cover shadow-lg"
        />
        <div>
          <p className="text-lg leading-relaxed mb-6">
            I'm a passionate front-end developer specializing in creating
            modern, responsive, and user-friendly web interfaces. I love turning
            ideas into real projects with clean code and creative design.
          </p>
          <a
            href="/Murtaza Yaqobi CV.pdf"
            download
            className="inline-block bg-blue-600 text-white md:px-3 p-2 md:py-3 py-2 rounded-[2px] font-medium md:text-lg text-sm hover:bg-blue-700 transition-all"
          >
            Download CV
          </a>
        </div>
      </div>
      <div>
        <h1>Hello, wrold!</h1>
        <h1>Hello, wrold!</h1>
        <h1>Hello, wrold!</h1>
      </div>
    </section>
  );
}
