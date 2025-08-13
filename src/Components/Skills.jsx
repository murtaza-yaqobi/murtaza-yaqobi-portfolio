export default function Skills() {
  const skills = [
    { name: "HTML5", img: "./Image/html.png" },
    { name: "CSS3", img: "./Image/css.png" },
    { name: "JavaScript", img: "./Image/js.png" },
    { name: "React", img: "./Image/react.png" },
    { name: "Tailwind CSS", img: "/Image/tailwind.png" },
    { name: "Git & GitHub", img: "/Image/git.png" },
    { name: "Redux", img: "/Image/redux.png" },
    { name: "TypeScript", img: "/Image/ts.png" },

    // "Responsive Design",
    // "Responsive Design",
    // "Responsive Design",
    // "Responsive Design",
    // "Responsive Design",


  ];
  return (
    <section id="skills" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {skills.map((item) => (
            <div
              key={item.name}
              className="p-4 hover:scale-[105%] transition-all duration-500 bg-white shadow rounded-lg"
            >
              <img
                src={item.img}
                className="w-20 mx-auto text-center mb-2"
                alt={item.name}
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
