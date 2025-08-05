import { useEffect, useState } from "react";

export default function About() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);
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
            className="inline-block bg-blue-600 text-white font-medium text-lg px-6 py-3 rounded-[2px] hover:bg-blue-700 transition"
          >
            Download CV
          </a>
        </div>
        <p>Seconds: {seconds}</p>
      </div>
    </section>
  );
}
