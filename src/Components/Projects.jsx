import { useEffect } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Kider Project",
      desc: "A responsive kider web site page built with Tailwind CSS and Javascript",
      img: "./Image/pro1.png",
      build1: "HTML5",
      build2: "Tailwindcss",
      build3: "Javascript",
    },
    {
      title: "School Project",
      desc: "A good and a fully responsive project with Tailwind CSS and Javascript.",
      img: "./Image/pro2.png",
      build1: "HTML5",
      build2: "Tailwindcss",
      build3: "Typescript",
    },
    {
      title: "Restrunt Project",
      desc: "A fully responsive resturnt web site with dark mode and light mode.",
      img: "./Image/pro3.png",
      build1: "HTML5",
      build2: "Tailwindcss",
      build3: "Javascript",
    },
    {
      title: "Digital Clock",
      desc: "A digital clock make with Javascript and Tailwindcss with dark mode and light mode.",
      img: "./Image/clock.png",
      build1: "HTML5",
      build2: "Javascript",
    },
    {
      title: "Fasila Yab",
      desc: "Fasila Yab of Afghanistan high way you can find your distance of your location.",
      img: "./Image/meter.png",
      build1: "HTML5",
      build2: "Tailwindcss",
      build3: "Javascript",
    },
    {
      title: "Calculator",
      desc: "A good calculator can easy calculate your amount build with Tailwindcss and Javascript",
      img: "./Image/calc.png",
      build1: "React",
      build2: "Tailwindcss",
      build3: "Typescript",
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {projects.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow group rounded-lg overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full group-hover:scale-[115%] transition-all duration-500"
            />
            <div className="pt-2 pl-4 flex gap-2">
              <span className=" p-0.5 rounded-[4px] text-gray-600">
                {item.build1}
              </span>
              <span className="p-0.5 rounded-[4px] text-gray-600">
                {item.build2}
              </span>
              <span className="p-0.5 rounded-[4px] text-gray-600">
                {item.build3}
              </span>
            </div>
            <div className="p-4 pt-0">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm mb-4">{item.desc}</p>
              <div className="flex flex-row gap-3">
                <i className="text-[19px] hover:cursor-pointer hover:text-blue-700 transition-all duration-500 fas fa-sign-in-alt -rotate-45"></i>
                <i className="text-xl fab hover:cursor-pointer hover:text-blue-700 transition-all duration-500 fa-github text-black"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <a className="bg-blue-600 text-white px-6 py-3 rounded-[2px] font-medium text-lg hover:bg-blue-700 hover:cursor-pointer">
          Check Github →
        </a>
      </div>
    </section>
  );
}
